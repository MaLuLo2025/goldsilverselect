// See src/instrumentation.ts (Node.js CVE-2026-111497): outbound fetch never asks for Brotli, and a Brotli response is refused.

const MARK = Symbol.for("fetchNoBrotli");

/** Accept-Encoding without `br` (an explicit value is kept, minus br and any `*` wildcard, which would allow br; none → gzip, deflate). */
export function withoutBrotli(init: RequestInit | undefined, input: RequestInfo | URL): RequestInit {
  const headers = new Headers(init?.headers ?? (input instanceof Request ? input.headers : undefined));
  const asked = headers.get("accept-encoding");
  const parts = (asked ?? "gzip, deflate").split(",").map((s) => s.trim());
  const kept = parts.filter((s) => s && !/^br(\s*;|$)/i.test(s) && !/^\*(\s*;|$)/.test(s));
  const wildcard = parts.some((s) => /^\*(\s*;|$)/.test(s));
  headers.set("accept-encoding", kept.length ? kept.join(", ") : wildcard ? "gzip, deflate" : "identity");
  return { ...init, headers };
}

/** True when a response's body is Brotli — fetch would decode it as it is read. */
export function isBrotliEncoded(res: Response): boolean {
  return (res.headers.get("content-encoding") ?? "")
    .split(",")
    .some((s) => s.trim().toLowerCase() === "br");
}

export function guardFetchAgainstBrotli(): void {
  const g = globalThis as typeof globalThis & { [MARK]?: true };
  if (g[MARK]) return;
  const original = g.fetch.bind(g);
  g.fetch = (async (input: RequestInfo | URL, init?: RequestInit) => {
    const res = await original(input, withoutBrotli(init, input));
    if (isBrotliEncoded(res)) {
      // refuse the response. This is a backstop only: undici starts decoding as body bytes arrive, so a hostile server that
      // ignores Accept-Encoding is not stopped here; the protection is that no request offers br.
      await res.body?.cancel().catch(() => {});
      const url = typeof input === "string" ? input : input instanceof URL ? input.href : input.url;
      throw new Error(`refused a Brotli-encoded response from ${new URL(url).host} (Node.js CVE-2026-111497 guard)`);
    }
    return res;
  }) as typeof fetch;
  g[MARK] = true;
}
