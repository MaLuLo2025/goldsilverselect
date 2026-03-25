import { NextResponse } from "next/server";

interface MetalResult {
  price: number;
  change?: number;
  pct?: number;
}

interface CachedResponse {
  data: Record<string, MetalResult>;
  timestamp: number;
}

let cache: CachedResponse | null = null;
// 20-minute cache — single /v1/latest call uses ~2,160 calls/month on Copper plan
const CACHE_TTL = 20 * 60_000;

const FALLBACK: Record<string, MetalResult> = {
  gold: { price: 3025.0 },
  silver: { price: 33.5 },
  platinum: { price: 985.0 },
  palladium: { price: 960.0 },
};

export async function GET() {
  const now = Date.now();
  const apiKey = process.env.METALS_API_KEY;

  if (!apiKey) {
    console.error("[prices] METALS_API_KEY not set");
    return NextResponse.json(FALLBACK);
  }

  if (cache && now - cache.timestamp < CACHE_TTL) {
    return NextResponse.json(cache.data);
  }

  try {
    const url = `https://api.metals.dev/v1/latest?api_key=${apiKey}&currency=USD&unit=toz`;
    const res = await fetch(url, { cache: "no-store" });
    const body = await res.text();

    const maskedKey = apiKey.slice(0, 4) + "..." + apiKey.slice(-4);
    console.log(`[prices] /v1/latest key=${maskedKey} status=${res.status} body=${body.slice(0, 200)}`);

    if (!res.ok) throw new Error(`API ${res.status}`);

    const data = JSON.parse(body);
    if (data.status !== "success" || !data.metals) throw new Error("Bad response");

    const results: Record<string, MetalResult> = {
      gold: { price: data.metals.gold },
      silver: { price: data.metals.silver },
      platinum: { price: data.metals.platinum },
      palladium: { price: data.metals.palladium },
    };

    cache = { data: results, timestamp: now };
    return NextResponse.json(results);
  } catch (err) {
    console.error("[prices] error:", err);
    if (cache) return NextResponse.json(cache.data);
    return NextResponse.json(FALLBACK);
  }
}
