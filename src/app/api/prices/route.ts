import { NextResponse } from "next/server";

interface MetalsDevLatest {
  status: string;
  metals: {
    gold: number;
    silver: number;
    platinum: number;
    palladium: number;
    [key: string]: number;
  };
}

interface CachedData {
  gold: number;
  silver: number;
  platinum: number;
  palladium: number;
  timestamp: number;
}

// Hardcoded fallback when API is unavailable
const FALLBACK = {
  gold: 3025.0,
  silver: 33.5,
  platinum: 985.0,
  palladium: 960.0,
};

let cache: CachedData | null = null;
const CACHE_TTL = 20 * 60_000; // 20 minutes

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
    return NextResponse.json({
      gold: { price: cache.gold },
      silver: { price: cache.silver },
      platinum: { price: cache.platinum },
      palladium: { price: cache.palladium },
    });
  }

  try {
    const url = `https://api.metals.dev/v1/latest?api_key=${apiKey}&currency=USD&unit=toz`;
    const res = await fetch(url, { cache: "no-store" });
    const rawBody = await res.text();

    const maskedKey = apiKey.slice(0, 4) + "..." + apiKey.slice(-4);
    console.log(`[prices] /v1/latest key=${maskedKey} status=${res.status} body=${rawBody.slice(0, 300)}`);

    if (!res.ok) {
      throw new Error(`API returned ${res.status}`);
    }

    const data: MetalsDevLatest = JSON.parse(rawBody);

    if (data.status !== "success" || !data.metals) {
      throw new Error(`Unexpected response: ${rawBody.slice(0, 200)}`);
    }

    cache = {
      gold: data.metals.gold,
      silver: data.metals.silver,
      platinum: data.metals.platinum,
      palladium: data.metals.palladium,
      timestamp: now,
    };

    return NextResponse.json({
      gold: { price: cache.gold },
      silver: { price: cache.silver },
      platinum: { price: cache.platinum },
      palladium: { price: cache.palladium },
    });
  } catch (err) {
    console.error("[prices] Fetch error:", err);

    // Return stale cache or fallback
    const src = cache || { ...FALLBACK, timestamp: 0 };
    return NextResponse.json({
      gold: { price: src.gold },
      silver: { price: src.silver },
      platinum: { price: src.platinum },
      palladium: { price: src.palladium },
    });
  }
}
