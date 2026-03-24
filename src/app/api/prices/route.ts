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

// Hardcoded fallback prices when API is unavailable
const FALLBACK: Record<string, MetalData> = {
  gold: { price: 3025.0, change: 0, pct: 0 },
  silver: { price: 33.5, change: 0, pct: 0 },
  platinum: { price: 985.0, change: 0, pct: 0 },
  palladium: { price: 960.0, change: 0, pct: 0 },
};

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
      const rawBody = await res.text();

      // Debug: log raw response for troubleshooting
      console.log(`[DEBUG] Spot ${metal} — status=${res.status}, body=${rawBody.slice(0, 500)}`);

      if (!res.ok) {
        console.error(`Spot API ${res.status} for ${metal}: ${rawBody.slice(0, 300)}`);
        metals[metal] = cache?.metals[metal] || FALLBACK[metal];
        continue;
      }

      const data: SpotResponse = JSON.parse(rawBody);

      if (data.status !== "success" || !data.rate) {
        console.error(`Spot API unexpected response for ${metal}:`, rawBody.slice(0, 300));
        metals[metal] = cache?.metals[metal] || FALLBACK[metal];
        continue;
      }

      console.log(`Spot ${metal}: price=${data.rate.price}, change=${data.rate.change}, pct=${data.rate.change_percent}`);

      metals[metal] = {
        price: data.rate.price,
        change: data.rate.change,
        pct: data.rate.change_percent,
      };
    } catch (err) {
      console.error(`Spot fetch error for ${metal}:`, err);
      metals[metal] = cache?.metals[metal] || FALLBACK[metal];
    }
  }

  // Only cache if we got at least one real price
  const hasRealData = Object.values(metals).some((m) => m.price > 0);
  if (hasRealData) {
    cache = { metals, timestamp: now };
  }

  return NextResponse.json(metals);
}
