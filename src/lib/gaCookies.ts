// Actively deletes Google Analytics cookies (_ga, _ga_<container>) on
// consent withdrawal. Consent Mode stops FUTURE writes; this clears
// whatever GA already wrote before the user withdrew consent.
//
// GA cookies are typically set on the registrable root domain with a
// leading dot (e.g. ".example.com") so they work across "www" and the
// apex, but the exact domain attribute used at write time isn't visible
// to us at delete time — so we sweep every plausible variant. Overwriting
// a cookie that was never set on a given domain is a harmless no-op.

function candidateDomains(hostname: string): (string | undefined)[] {
  const domains = new Set<string | undefined>();
  domains.add(undefined); // host-only cookie (no Domain attribute)
  domains.add(hostname);
  domains.add(`.${hostname}`);

  if (hostname.startsWith("www.")) {
    const root = hostname.slice(4);
    domains.add(root);
    domains.add(`.${root}`);
  }

  const parts = hostname.split(".");
  if (parts.length >= 2) {
    const root = parts.slice(-2).join(".");
    domains.add(root);
    domains.add(`.${root}`);
  }

  return Array.from(domains);
}

export function deleteGaCookies(): void {
  if (typeof document === "undefined") return;

  const names = document.cookie
    .split(";")
    .map((c) => c.split("=")[0].trim())
    .filter((name) => name === "_ga" || name.startsWith("_ga_"));

  if (names.length === 0) return;

  const expired = "Thu, 01 Jan 1970 00:00:00 GMT";
  for (const name of names) {
    for (const domain of candidateDomains(window.location.hostname)) {
      const domainAttr = domain ? `; domain=${domain}` : "";
      document.cookie = `${name}=; expires=${expired}; path=/${domainAttr}`;
    }
  }
}
