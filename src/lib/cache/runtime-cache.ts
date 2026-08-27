// Vercel Runtime Cache — the backup store for /api/prices.
//
// Replaces the Upstash Redis instance this site used to share with The Gold
// Window. The Runtime Cache is part of the platform: no account, no
// credential, no bill, and one fewer external dependency. Same approach the
// swap tool took when it was extracted (see docs/sgi-move-plan.md).
//
// Semantics that matter for the one caller:
//   - Regional. Each Vercel region keeps its own copy, so a cold region falls
//     through to the upstream fetch rather than serving another region's
//     value. That is acceptable here: the cache is a *backup* for when the
//     upstream is down, not the primary read path.
//   - Ephemeral, LRU-evicted. Never treat a hit as guaranteed.
//   - Off-platform (local `next dev`, CI) it degrades to a no-op, exactly as
//     the Redis client did when its env vars were absent.
//
// Only get/set are needed here. Anything requiring an atomic read-modify-write
// (a rate-limit counter, say) must NOT be built on this — see the swap tool's
// notes, where that exact mistake was caught and moved to Postgres.

import { getCache } from "@vercel/functions";

type Cache = ReturnType<typeof getCache>;

let cache: Cache | null | undefined;

function client(): Cache | null {
  if (cache !== undefined) return cache;
  try {
    cache = getCache();
  } catch (err) {
    // Off-platform, or the runtime cache is unavailable. Degrade to no-op.
    console.warn("[cache] Runtime Cache unavailable — caching disabled:", err);
    cache = null;
  }
  return cache;
}

export async function cacheGet<T>(key: string): Promise<T | null> {
  const c = client();
  if (!c) return null;
  try {
    const v = await c.get(key);
    return (v as T | undefined) ?? null;
  } catch (err) {
    console.error("[cache] read error:", err);
    return null;
  }
}

export async function cacheSet(
  key: string,
  value: unknown,
  ttlSeconds: number,
  tags: string[] = []
): Promise<void> {
  const c = client();
  if (!c) return;
  try {
    await c.set(key, value, { ttl: ttlSeconds, tags });
  } catch (err) {
    console.error("[cache] write error:", err);
  }
}
