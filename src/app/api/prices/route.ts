import { NextResponse } from "next/server";

interface SpotResponse {
  status: string;
  metal: string;
  currency: string;
  rate: {
    price: number;
    ask: number;
    bid: number;
    high: number;
    low: number;
    change: number;
    change_percent: number;
  };
}

interface MetalData {
  price: number;
  change: number;
  pct: number;
}

interface CachedData {
  metals: Record<string, MetalData>;
  timestamp: number;
}

let cache: CachedData | null = null;
const CACHE_TTL = 60_000; // 60 seconds

const METAL_KEYS = ["gold", "silver", "platinum", "palladium"] as const;

export async function GET() {
  const now = Date.now();
  const apiKey = process.env.METALS_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "API key not configured" },
      { status: 500 }
    );
  }

  // Return cached data if fresh
  if (cache && now - cache.timestamp < CACHE_TTL) {
    return NextResponse.json(cache.metals);
  }

  const maskedKey = apiKey.slice(0, 4) + "..." + apiKey.slice(-4);
  const metals: Record<string, MetalData> = {};

  // Fetch each metal's spot data (includes change vs previous day)
  for (const metal of METAL_KEYS) {
    try {
      const url = `https://api.metals.dev/v1/metal/spot?api_key=${apiKey}&metal=${metal}&currency=USD`;
      console.log(`Fetching spot for ${metal}: /v1/metal/spot?api_key=${maskedKey}&metal=${metal}&currency=USD`);

      const res = await fetch(url, { cache: "no-store" });

      if (!res.ok) {
        const body = await res.text();
        console.error(`Spot API ${res.status} for ${metal}: ${body.slice(0, 300)}`);
        // Use stale cache for this metal if available
        if (cache?.metals[metal]) {
          metals[metal] = cache.metals[metal];
        } else {
          metals[metal] = { price: 0, change: 0, pct: 0 };
        }
        continue;
      }

      const data: SpotResponse = await res.json();
      console.log(`Spot ${metal}: price=${data.rate.price}, change=${data.rate.change}, pct=${data.rate.change_percent}`);

      metals[metal] = {
        price: data.rate.price,
        change: data.rate.change,
        pct: data.rate.change_percent,
      };
    } catch (err) {
      console.error(`Spot fetch error for ${metal}:`, err);
      if (cache?.metals[metal]) {
        metals[metal] = cache.metals[metal];
      } else {
        metals[metal] = { price: 0, change: 0, pct: 0 };
      }
    }
  }

  // Only cache if we got at least one real price
  const hasRealData = Object.values(metals).some((m) => m.price > 0);
  if (hasRealData) {
    cache = { metals, timestamp: now };
  }

  return NextResponse.json(metals);
}
