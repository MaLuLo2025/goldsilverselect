import { NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

// Budget calculation (per CLAUDE.md):
// Redis cache survives cold starts — TTL holds across all function instances.
// 4 calls × 3/hour (20-min TTL) × 24 × 30 = 8,640 calls/month — theoretical ceiling.
// In practice, cache warm = 0 calls per visitor. Only true cache misses hit metals.dev.

const CACHE_KEY = "gss:metals:spot";
const CACHE_TTL_SECONDS = 20 * 60; // 20 minutes

interface MetalResult {
  price: number;
  change: number;
  pct: number;
}

const FALLBACK: Record<string, MetalResult> = {
  gold: { price: 3025.0, change: 0, pct: 0 },
  silver: { price: 33.5, change: 0, pct: 0 },
  platinum: { price: 985.0, change: 0, pct: 0 },
  palladium: { price: 960.0, change: 0, pct: 0 },
};

const METALS = ["gold", "silver", "platinum", "palladium"] as const;

let redis: Redis | null = null;

function getRedis(): Redis | null {
  if (redis) return redis;
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;
  redis = new Redis({ url, token });
  return redis;
}

export async function GET() {
  const apiKey = process.env.METALS_API_KEY;
  const client = getRedis();

  if (!apiKey) {
    console.error("[prices] METALS_API_KEY not set");
    return NextResponse.json(FALLBACK);
  }

  // Try Redis cache first
  if (client) {
    try {
      const cached = await client.get<Record<string, MetalResult>>(CACHE_KEY);
      if (cached) {
        return NextResponse.json(cached);
      }
    } catch (err) {
      console.error("[prices] Redis get error:", err);
      // Fall through to live fetch
    }
  }

  // Cache miss — fetch from metals.dev
  const results: Record<string, MetalResult> = {};
  let liveCount = 0;

  for (const metal of METALS) {
    try {
      const url = `https://api.metals.dev/v1/metal/spot?api_key=${apiKey}&metal=${metal}&currency=USD`;
      const res = await fetch(url, { cache: "no-store" });
      const body = await res.text();

      if (!res.ok) {
        console.error(`[prices] ${metal} ${res.status}: ${body.slice(0, 200)}`);
        results[metal] = FALLBACK[metal];
        continue;
      }

      const parsed = JSON.parse(body);
      if (parsed.status !== "success" || !parsed.rate) {
        console.error(`[prices] ${metal} bad response: ${body.slice(0, 200)}`);
        results[metal] = FALLBACK[metal];
        continue;
      }

      results[metal] = {
        price: parsed.rate.price,
        change: parsed.rate.change ?? 0,
        pct: parsed.rate.change_percent ?? 0,
      };
      liveCount++;
    } catch (err) {
      console.error(`[prices] ${metal} exception:`, err);
      results[metal] = FALLBACK[metal];
    }
  }

  // Only cache in Redis if we got real live data (not just fallback values)
  if (client && liveCount === METALS.length) {
    try {
      await client.set(CACHE_KEY, results, { ex: CACHE_TTL_SECONDS });
      console.log(`[prices] cached in Redis: gold=$${results.gold?.price} (${results.gold?.pct}%)`);
    } catch (err) {
      console.error("[prices] Redis set error:", err);
    }
  }

  return NextResponse.json(results);
}
