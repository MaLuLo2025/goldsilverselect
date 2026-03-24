import { NextResponse } from "next/server";

interface MetalPrices {
  gold: number;
  silver: number;
  platinum: number;
  palladium: number;
}

interface MetalsDevLatest {
  status: string;
  metals: MetalPrices & { [key: string]: number };
}

interface MetalsDevTimeseries {
  status: string;
  rates: Record<string, { metals: MetalPrices & { [key: string]: number } }>;
}

interface CachedCurrent {
  prices: MetalPrices;
  timestamp: number;
}

interface CachedOpen {
  prices: MetalPrices;
  date: string;
  timestamp: number;
}

let currentCache: CachedCurrent | null = null;
let openCache: CachedOpen | null = null;

const CURRENT_TTL = 60_000; // 60 seconds
const OPEN_TTL = 12 * 60 * 60_000; // 12 hours (refresh twice daily for safety)

function getDateUTC(daysAgo: number): string {
  const d = new Date();
  d.setUTCDate(d.getUTCDate() - daysAgo);
  return d.toISOString().slice(0, 10);
}

export async function GET() {
  const now = Date.now();
  const apiKey = process.env.METALS_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "API key not configured" },
      { status: 500 }
    );
  }

  // --- Fetch current prices (60s cache) ---
  let current: MetalPrices | null = null;

  if (currentCache && now - currentCache.timestamp < CURRENT_TTL) {
    current = currentCache.prices;
  } else {
    try {
      const res = await fetch(
        `https://api.metals.dev/v1/latest?api_key=${apiKey}&currency=USD&unit=toz`,
        { cache: "no-store" }
      );
      if (!res.ok) {
        const body = await res.text();
        throw new Error(`Latest API ${res.status}: ${body.slice(0, 200)}`);
      }
      const data: MetalsDevLatest = await res.json();

      current = {
        gold: data.metals.gold,
        silver: data.metals.silver,
        platinum: data.metals.platinum,
        palladium: data.metals.palladium,
      };
      currentCache = { prices: current, timestamp: now };
    } catch (err) {
      console.error("Metals API latest error:", err);
      if (currentCache) current = currentCache.prices;
    }
  }

  // --- Fetch opening prices (12h cache) ---
  const today = getDateUTC(0);
  let open: MetalPrices | null = null;

  // Use cached open if still fresh (same day or within TTL)
  if (openCache && now - openCache.timestamp < OPEN_TTL) {
    open = openCache.prices;
  } else {
    // Try yesterday first, then 2 days ago (covers weekends/holidays)
    for (const daysAgo of [1, 2, 3]) {
      try {
        const date = getDateUTC(daysAgo);
        console.log(`Fetching timeseries for ${date}...`);
        const res = await fetch(
          `https://api.metals.dev/v1/timeseries?api_key=${apiKey}&start_date=${date}&end_date=${date}&currency=USD&unit=toz`,
          { cache: "no-store" }
        );
        if (!res.ok) {
          const body = await res.text();
          console.error(`Timeseries API ${res.status} for ${date}: ${body.slice(0, 200)}`);
          continue;
        }
        const data: MetalsDevTimeseries = await res.json();
        console.log(`Timeseries response dates: ${Object.keys(data.rates || {}).join(", ")}`);

        const dayData = data.rates[date];
        if (dayData && dayData.metals) {
          open = {
            gold: dayData.metals.gold,
            silver: dayData.metals.silver,
            platinum: dayData.metals.platinum,
            palladium: dayData.metals.palladium,
          };
          openCache = { prices: open, date: today, timestamp: now };
          console.log(`Open prices set from ${date}: gold=${open.gold}, silver=${open.silver}`);
          break;
        }
      } catch (err) {
        console.error(`Timeseries error for ${daysAgo} days ago:`, err);
      }
    }

    // Fall back to stale cache if all attempts failed
    if (!open && openCache) {
      console.log("Using stale open cache from", openCache.date);
      open = openCache.prices;
    }
  }

  if (!current) {
    return NextResponse.json(
      { error: "Failed to fetch prices" },
      { status: 502 }
    );
  }

  // Build response with change data
  const response: Record<string, { price: number; change?: number; pct?: number }> = {};
  const metals: (keyof MetalPrices)[] = ["gold", "silver", "platinum", "palladium"];

  for (const metal of metals) {
    const price = current[metal];
    if (open) {
      const openPrice = open[metal];
      const change = price - openPrice;
      const pct = (change / openPrice) * 100;
      response[metal] = { price, change, pct };
    } else {
      response[metal] = { price };
    }
  }

  return NextResponse.json(response);
}
