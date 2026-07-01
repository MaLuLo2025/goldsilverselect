import { NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

// GSS Redis: fallback cache + warm-write destination
const GSS_CACHE_KEY = "gss:metals:spot";
const GSS_CACHE_TTL_SECONDS = 20 * 60;

// TGW Redis: primary source (sgi:metals:spot:all written by TGW's metals-dev.ts)
const TGW_CACHE_KEY = "sgi:metals:spot:all";

// SpotPrice shape as written by TGW's metals-dev.ts
interface SpotPrice {
  metal: string;
  price: number;
  change: number;
  changePercent: number;
  currency: string;
}

interface MetalResult {
  price: number;
  change: number;
  pct: number;
}


let tgwRedis: Redis | null = null;
let gssRedis: Redis | null = null;

function getTgwRedis(): Redis | null {
  if (tgwRedis) return tgwRedis;
  const url = process.env.UPSTASH_REDIS_REST_URL_TGW;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN_TGW;
  if (!url || !token) return null;
  try {
    tgwRedis = new Redis({ url, token });
    return tgwRedis;
  } catch (err) {
    console.error("[prices] Failed to init TGW Redis client:", err);
    return null;
  }
}

function getGssRedis(): Redis | null {
  if (gssRedis) return gssRedis;
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;
  try {
    gssRedis = new Redis({ url, token });
    return gssRedis;
  } catch (err) {
    console.error("[prices] Failed to init GSS Redis client:", err);
    return null;
  }
}

export async function GET() {
  const ts = new Date().toISOString();

  // ── 1. Primary: TGW Redis ────────────────────────────────────────────────
  const tgw = getTgwRedis();
  if (tgw) {
    try {
      const cached = await tgw.get<Record<string, SpotPrice>>(TGW_CACHE_KEY);
      if (cached) {
        // Transform TGW SpotPrice → GSS MetalResult shape
        const results: Record<string, MetalResult> = {};
        for (const [metal, sp] of Object.entries(cached)) {
          results[metal] = { price: sp.price, change: sp.change, pct: sp.changePercent };
        }

        console.log(`[metals-call] key=tgw-redis ts=${ts}`);

        // Keep GSS Redis warm so the secondary fallback has fresh data
        const gss = getGssRedis();
        if (gss) {
          gss.set(GSS_CACHE_KEY, results, { ex: GSS_CACHE_TTL_SECONDS }).catch((err) =>
            console.error("[prices] GSS warm-write error:", err)
          );
        }

        return NextResponse.json({ ...results, _source: "tgw-redis" });
      }
    } catch (err) {
      console.error("[prices] TGW Redis read error:", err);
    }
  }

  // ── 2. Secondary: GSS Redis ──────────────────────────────────────────────
  const gss = getGssRedis();
  if (gss) {
    try {
      const cached = await gss.get<Record<string, MetalResult>>(GSS_CACHE_KEY);
      if (cached) {
        console.log(`[metals-call] key=gss-redis-fallback ts=${ts}`);
        return NextResponse.json({ ...cached, _source: "redis" });
      }
    } catch (err) {
      console.error("[prices] GSS Redis read error:", err);
    }
  }

  // ── 3. Both sources unavailable ──────────────────────────────────────────
  console.log(`[metals-call] key=error ts=${ts}`);
  return NextResponse.json(
    { error: "Prices temporarily unavailable", _source: "error" },
    { status: 503 }
  );
}
