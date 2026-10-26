// Node.js CVE-2026-111497 ("Node2Shell", 2026-10-21): an out-of-bounds write in Node's Brotli decoder, reachable when a
// server process decompresses Brotli it did not produce. Vercel runs and patches this app's Node runtime (fixed in
// 24.22.1) and its firewall screens incoming requests — but not the responses this app fetches from other servers,
// which fetch() decompresses on its own. Until the runtime is patched, no outbound fetch asks for Brotli: every request
// offers gzip/deflate only, and a response that arrives Brotli-encoded anyway is turned into an error (a backstop, not
// a hard stop: decoding starts as bytes arrive). Remove once the runtime reports ≥ 24.22.1.
export async function register() {
  if (process.env.NEXT_RUNTIME !== "nodejs") return;
  const { guardFetchAgainstBrotli } = await import("./lib/fetch-no-brotli");
  guardFetchAgainstBrotli();
}
