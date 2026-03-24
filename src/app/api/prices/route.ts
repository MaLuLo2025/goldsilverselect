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
  date: string; // YYYY-MM-DD
  timestamp: number;
}

let currentCache: CachedCurrent | null = null;
let openCache: CachedOpen | null = null;

const CURRENT_TTL = 60_000; // 60 seconds
const OPEN_TTL = 24 * 60 * 60_000; // 24 hours

function getTodayUTC(): string {
  return new Date().toISOString().slice(0, 10);
}

function getYesterdayUTC(): string {
  const d = new Date();
  d.setUTCDate(d.getUTCDate() - 1);
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
      if (!res.ok) throw new Error(`Latest API returned ${res.status}`);
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

  // --- Fetch opening prices (24h cache, refreshes daily) ---
  const today = getTodayUTC();
  let open: MetalPrices | null = null;

  if (openCache && openCache.date === today && now - openCache.timestamp < OPEN_TTL) {
    open = openCache.prices;
  } else {
    try {
      // Fetch yesterday's closing price as today's open reference
      const yesterday = getYesterdayUTC();
      const res = await fetch(
        `https://api.metals.dev/v1/timeseries?api_key=${apiKey}&start_date=${yesterday}&end_date=${yesterday}&currency=USD&unit=toz`,
        { cache: "no-store" }
      );
      if (!res.ok) throw new Error(`Timeseries API returned ${res.status}`);
      const data: MetalsDevTimeseries = await res.json();

      const dayData = data.rates[yesterday];
      if (dayData) {
        open = {
          gold: dayData.metals.gold,
          silver: dayData.metals.silver,
          platinum: dayData.metals.platinum,
          palladium: dayData.metals.palladium,
        };
        openCache = { prices: open, date: today, timestamp: now };
      }
    } catch (err) {
      console.error("Metals API timeseries error:", err);
      if (openCache) open = openCache.prices;
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
