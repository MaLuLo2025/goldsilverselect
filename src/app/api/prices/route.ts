import { NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

// Always run on request (never prerender/freeze at build). The upstream snapshot
// fetch below is still cached ~60s, so this stays cheap while staying live.
export const dynamic = "force-dynamic";

// Live spot prices for the SGI ticker.
//
// Primary source: The Gold Window's public dashboard snapshot API (real-time,
// server-side cached). We consume it read-only — no coupling to TGW internals.
// Backup: the last-good result cached in GSS Redis (kept warm on every success),
// so a snapshot-API hiccup still serves recent prices for up to 20 min.
// If neither yields valid numbers, we return 503 so the ticker hides rather than
// ever showing stale/incorrect values.

const GSS_CACHE_KEY = "gss:metals:spot";
const GSS_CACHE_TTL_SECONDS = 20 * 60;
const SNAPSHOT_URL = "https://thegoldwindow.ai/api/dashboard/snapshot";

interface MetalResult {
  price: number;
  change: number;
  pct: number;
}

// snapshot `pm` symbol → our key
const METAL_MAP: Record<string, string> = {
  GOLD: "gold",
  SILVER: "silver",
  PLATINUM: "platinum",
  PALLADIUM: "palladium",
};

function num(v: unknown): number | null {
  return typeof v === "number" && Number.isFinite(v) ? v : null;
}

function validMetal(m: unknown): m is MetalResult {
  const p = num((m as MetalResult)?.price);
  return p !== null && p > 0;
}

let gssRedis: Redis | null = null;
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

// Pull + validate live prices from the TGW snapshot API. Returns null on any
// failure, stale flag, or missing gold/silver — callers treat null as "no data".
async function fromSnapshot(): Promise<Record<string, MetalResult> | null> {
  try {
    const res = await fetch(SNAPSHOT_URL, {
      headers: { "User-Agent": "silvergoldinsights-ticker" },
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    const snap = (await res.json()) as {
      pm?: Array<{ symbol?: string; price?: unknown; changeAmount?: unknown; changePercent?: unknown }>;
      pmStale?: boolean;
    };
    if (!snap || snap.pmStale === true || !Array.isArray(snap.pm)) return null;

    const results: Record<string, MetalResult> = {};
    for (const it of snap.pm) {
      const key = METAL_MAP[String(it?.symbol ?? "").toUpperCase()];
      const price = num(it?.price);
      if (!key || price === null || price <= 0) continue;
      results[key] = {
        price,
        change: num(it?.changeAmount) ?? 0,
        pct: num(it?.changePercent) ?? 0,
      };
    }
    // Require the two headline metals, else treat as no data.
    if (!validMetal(results.gold) || !validMetal(results.silver)) return null;
    return results;
  } catch (err) {
    console.error("[prices] snapshot fetch error:", err);
    return null;
  }
}

export async function GET() {
  const ts = new Date().toISOString();

  // ── 1. Primary: live TGW snapshot API ────────────────────────────────────
  const snap = await fromSnapshot();
  if (snap) {
    console.log(`[metals-call] key=tgw-snapshot ts=${ts}`);
    // Keep the backup cache warm with the last-good result.
    const gss = getGssRedis();
    if (gss) {
      gss
        .set(GSS_CACHE_KEY, snap, { ex: GSS_CACHE_TTL_SECONDS })
        .catch((err) => console.error("[prices] GSS warm-write error:", err));
    }
    return NextResponse.json({ ...snap, _source: "tgw-snapshot" });
  }

  // ── 2. Backup: last-good GSS Redis cache ─────────────────────────────────
  const gss = getGssRedis();
  if (gss) {
    try {
      const cached = await gss.get<Record<string, MetalResult>>(GSS_CACHE_KEY);
      if (cached && validMetal(cached.gold) && validMetal(cached.silver)) {
        console.log(`[metals-call] key=gss-redis-fallback ts=${ts}`);
        return NextResponse.json({ ...cached, _source: "redis" });
      }
    } catch (err) {
      console.error("[prices] GSS Redis read error:", err);
    }
  }

  // ── 3. Nothing valid → hide the ticker ───────────────────────────────────
  console.log(`[metals-call] key=error ts=${ts}`);
  return NextResponse.json(
    { error: "Prices temporarily unavailable", _source: "error" },
    { status: 503 }
  );
}
