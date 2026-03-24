import { NextResponse } from "next/server";

interface MetalsDevResponse {
  status: string;
  currency: string;
  unit: string;
  metals: {
    gold: number;
    silver: number;
    platinum: number;
    palladium: number;
    [key: string]: number;
  };
}

interface CachedData {
  prices: {
    gold: number;
    silver: number;
    platinum: number;
    palladium: number;
  };
  timestamp: number;
}

let cache: CachedData | null = null;
const CACHE_TTL = 60_000; // 60 seconds

export async function GET() {
  const now = Date.now();

  // Return cached data if fresh
  if (cache && now - cache.timestamp < CACHE_TTL) {
    return NextResponse.json(cache.prices);
  }

  const apiKey = process.env.METALS_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "API key not configured" },
      { status: 500 }
    );
  }

  try {
    const res = await fetch(
      `https://api.metals.dev/v1/latest?api_key=${apiKey}&currency=USD&unit=toz`,
      { next: { revalidate: 0 } }
    );

    if (!res.ok) {
      throw new Error(`Metals API returned ${res.status}`);
    }

    const data: MetalsDevResponse = await res.json();

    const prices = {
      gold: data.metals.gold,
      silver: data.metals.silver,
      platinum: data.metals.platinum,
      palladium: data.metals.palladium,
    };

    cache = { prices, timestamp: now };

    return NextResponse.json(prices);
  } catch (err) {
    console.error('Metals API error:', err);
    // Return stale cache if available
    if (cache) {
      return NextResponse.json(cache.prices);
    }
    return NextResponse.json(
      { error: "Failed to fetch prices" },
      { status: 502 }
    );
  }
}
