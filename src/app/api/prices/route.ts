import { NextResponse } from "next/server";
import { cacheGet, cacheSet } from "@/lib/cache/runtime-cache";

// Always run on request (never prerender/freeze at build). The upstream snapshot
// fetch below is still cached ~60s, so this stays cheap while staying live.
export const dynamic = "force-dynamic";

// Live spot prices for the SGI ticker.
//
// Primary source: The Gold Window's public dashboard snapshot API (real-time,
// server-side cached). We consume it read-only — no coupling to TGW internals.
// Backup: the last-good result kept in the Vercel Runtime Cache (warmed on
// every success, including closed-market last-close data and not just live),
// so a snapshot-API hiccup still serves recent prices for up to 20 min.
// If neither yields any valid gold/silver numbers, we return 503 — that's a
// genuine failure (TGW unreachable, malformed response, no data at all), not
// a closed market. A closed market still returns 200 with the last-close
// prices TGW provides, tagged `marketOpen: false` so the client can render
// its existing closed-market state instead of treating it as an error.

const GSS_CACHE_KEY = "gss:metals:spot";
const GSS_CACHE_TTL_SECONDS = 20 * 60;
const SNAPSHOT_URL = "https://thegoldwindow.ai/api/dashboard/snapshot";

interface MetalResult {
  price: number;
  change: number;
  pct: number;
}

interface SnapshotResult {
  results: Record<string, MetalResult>;
  /** true = live/fresh TGW data, false = closed-market last-close data. */
  marketOpen: boolean;
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

// Pull + validate prices from the TGW snapshot API — live or last-close.
// Returns null only on a genuine failure: fetch error, non-OK response,
// malformed body, or no usable gold/silver data at all (whether pmStale is
// true or false — an empty pm[] is "no data" regardless of the stale flag).
// pmStale alone no longer disqualifies a response; it's carried through as
// `marketOpen` instead, so the caller can distinguish "closed, here's the
// last close" from "nothing to show".
async function fromSnapshot(): Promise<SnapshotResult | null> {
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
    if (!snap || !Array.isArray(snap.pm)) return null;

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
    // Require the two headline metals — live or last-close, we need at
    // least gold+silver for a usable ticker. This is the only "no data"
    // gate now.
    if (!validMetal(results.gold) || !validMetal(results.silver)) return null;
    return { results, marketOpen: snap.pmStale !== true };
  } catch (err) {
    console.error("[prices] snapshot fetch error:", err);
    return null;
  }
}

export async function GET() {
  const ts = new Date().toISOString();

  // ── 1. Primary: live TGW snapshot API (live or last-close, both OK) ──────
  const snap = await fromSnapshot();
  if (snap) {
    console.log(`[metals-call] key=tgw-snapshot ts=${ts} marketOpen=${snap.marketOpen}`);
    // Keep the backup cache warm with the last-good result — including
    // closed-market data now, not just live, so the 20-min fallback window
    // doesn't go stale during an extended TGW outage that happens to
    // coincide with a closed market.
    void cacheSet(
      GSS_CACHE_KEY,
      { ...snap.results, marketOpen: snap.marketOpen },
      GSS_CACHE_TTL_SECONDS,
      ["prices"]
    );
    return NextResponse.json({ ...snap.results, marketOpen: snap.marketOpen, _source: "tgw-snapshot" });
  }

  // ── 2. Backup: last-good Runtime Cache entry ─────────────────────────────
  const cached = await cacheGet<Record<string, MetalResult> & { marketOpen?: boolean }>(
    GSS_CACHE_KEY
  );
  if (cached && validMetal(cached.gold) && validMetal(cached.silver)) {
    console.log(`[metals-call] key=runtime-cache-fallback ts=${ts}`);
    const { marketOpen, ...prices } = cached;
    return NextResponse.json({
      ...prices,
      ...(marketOpen !== undefined ? { marketOpen } : {}),
      _source: "runtime-cache",
    });
  }

  // ── 3. Nothing valid → hide the ticker ───────────────────────────────────
  console.log(`[metals-call] key=error ts=${ts}`);
  return NextResponse.json(
    { error: "Prices temporarily unavailable", _source: "error" },
    { status: 503 }
  );
}
