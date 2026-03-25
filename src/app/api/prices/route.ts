import { NextResponse } from "next/server";

// Budget calculation (per CLAUDE.md):
// 4 calls × 3/hour (20-min cache) × 24 × 30 = 8,640 calls/month
// Fits Silver plan (10,000/month). If downgrading to Copper, switch back to /v1/latest.

interface MetalResult {
  price: number;
  change: number;
  pct: number;
}

interface CachedResponse {
  data: Record<string, MetalResult>;
  timestamp: number;
}

let cache: CachedResponse | null = null;
const CACHE_TTL = 20 * 60_000; // 20 minutes

const METALS = ["gold", "silver", "platinum", "palladium"] as const;

const FALLBACK: Record<string, MetalResult> = {
  gold: { price: 3025.0, change: 0, pct: 0 },
  silver: { price: 33.5, change: 0, pct: 0 },
  platinum: { price: 985.0, change: 0, pct: 0 },
  palladium: { price: 960.0, change: 0, pct: 0 },
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

  const maskedKey = apiKey.slice(0, 4) + "..." + apiKey.slice(-4);
  const results: Record<string, MetalResult> = {};

  for (const metal of METALS) {
    try {
      const url = `https://api.metals.dev/v1/metal/spot?api_key=${apiKey}&metal=${metal}&currency=USD`;
      const res = await fetch(url, { cache: "no-store" });
      const body = await res.text();

      if (!res.ok) {
        console.error(`[prices] ${metal} ${res.status}: ${body.slice(0, 200)}`);
        results[metal] = cache?.data[metal] || FALLBACK[metal];
        continue;
      }

      const parsed = JSON.parse(body);
      if (parsed.status !== "success" || !parsed.rate) {
        console.error(`[prices] ${metal} bad response: ${body.slice(0, 200)}`);
        results[metal] = cache?.data[metal] || FALLBACK[metal];
        continue;
      }

      results[metal] = {
        price: parsed.rate.price,
        change: parsed.rate.change ?? 0,
        pct: parsed.rate.change_percent ?? 0,
      };
    } catch (err) {
      console.error(`[prices] ${metal} exception:`, err);
      results[metal] = cache?.data[metal] || FALLBACK[metal];
    }
  }

  if (Object.values(results).some((r) => r.price > 0)) {
    cache = { data: results, timestamp: now };
    console.log(`[prices] cached: gold=$${results.gold.price} (${results.gold.pct}%), silver=$${results.silver.price}`);
  }

  return NextResponse.json(results);
}
