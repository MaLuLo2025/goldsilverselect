// GA4 custom event helpers + select-admin relay.
//
// Each track* function fires GA4 (gtag) AND a fire-and-forget POST to the
// centralized select-admin endpoint, which writes to a private Supabase table
// for marketing intelligence. Both relays no-op gracefully if their transport
// is unavailable (gtag not loaded yet, network offline, etc.) — the page UX
// is never blocked.
//
// Never sends user PII — only business identifiers (vendor names, geography,
// categories). Server-side enrichment (country, region, device class) happens
// at the admin endpoint from request headers, never from this client payload.

type GtagFn = (...args: unknown[]) => void;

function getGtag(): GtagFn | null {
  if (typeof window === "undefined") return null;
  const fn = (window as unknown as { gtag?: GtagFn }).gtag;
  return typeof fn === "function" ? fn : null;
}

const ADMIN_URL = "https://select-admin-teal.vercel.app/api/track";
const SITE = "goldsilverselect" as const;

type AdminEventType =
  | "location_selected"
  | "category_selected"
  | "vendor_website_click"
  | "vendor_phone_click"
  | "generate_lead"
  | "blog_read_complete";

type AdminPayload = {
  site: typeof SITE;
  event_type: AdminEventType;
  state?: string | null;
  city?: string | null;
  category?: string | null;
  vendor_name?: string | null;
  vendor_id?: string | null;
  link_location?: "card" | "detail" | "online_dealers" | null;
  result_count?: number | null;
};

function relayToAdmin(payload: AdminPayload): void {
  if (typeof window === "undefined") return;
  try {
    const body = JSON.stringify(payload);
    // sendBeacon survives page navigation (e.g., outbound link clicks).
    if (typeof navigator !== "undefined" && typeof navigator.sendBeacon === "function") {
      const blob = new Blob([body], { type: "application/json" });
      const ok = navigator.sendBeacon(ADMIN_URL, blob);
      if (ok) return;
    }
    // Fallback: keepalive fetch.
    void fetch(ADMIN_URL, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body,
      keepalive: true,
      credentials: "omit",
      mode: "cors",
    }).catch(() => {});
  } catch {
    // Never let analytics break the page.
  }
}

export type LinkLocation = "card" | "detail" | "online_dealers";

export function trackVendorWebsiteClick(params: {
  vendorName: string;
  vendorId?: string;
  linkLocation: LinkLocation;
}): void {
  getGtag()?.("event", "vendor_website_click", {
    vendor_name: params.vendorName,
    vendor_id: params.vendorId,
    link_location: params.linkLocation,
  });
  relayToAdmin({
    site: SITE,
    event_type: "vendor_website_click",
    vendor_name: params.vendorName,
    vendor_id: params.vendorId ?? null,
    link_location: params.linkLocation,
  });
}

export function trackVendorPhoneClick(params: {
  vendorName: string;
  vendorId?: string;
  linkLocation: LinkLocation;
}): void {
  getGtag()?.("event", "vendor_phone_click", {
    vendor_name: params.vendorName,
    vendor_id: params.vendorId,
    link_location: params.linkLocation,
  });
  relayToAdmin({
    site: SITE,
    event_type: "vendor_phone_click",
    vendor_name: params.vendorName,
    vendor_id: params.vendorId ?? null,
    link_location: params.linkLocation,
  });
}

export type GeographyLevel = "city" | "state_and_city";

export function trackLocationSelected(params: {
  state: string | null;
  city: string;
  geographyLevel: GeographyLevel;
}): void {
  getGtag()?.("event", "location_selected", {
    state: params.state,
    city: params.city,
    geography_level: params.geographyLevel,
  });
  relayToAdmin({
    site: SITE,
    event_type: "location_selected",
    state: params.state,
    city: params.city,
  });
}

export function trackCategorySelected(params: {
  category: string;
  state?: string | null;
  city?: string | null;
  resultCount?: number | null;
}): void {
  getGtag()?.("event", "category_selected", {
    category: params.category,
    state: params.state ?? null,
    city: params.city ?? null,
    result_count: params.resultCount ?? null,
  });
  relayToAdmin({
    site: SITE,
    event_type: "category_selected",
    category: params.category,
    state: params.state ?? null,
    city: params.city ?? null,
    result_count: params.resultCount ?? null,
  });
}
