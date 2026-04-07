// GA4 custom event helpers.
//
// All functions no-op gracefully if gtag is not yet loaded (e.g., before
// cookie consent on consent-gated sites). Never sends user PII — only
// business identifiers (vendor names, geography, categories).

type GtagFn = (...args: unknown[]) => void;

function getGtag(): GtagFn | null {
  if (typeof window === "undefined") return null;
  const fn = (window as unknown as { gtag?: GtagFn }).gtag;
  return typeof fn === "function" ? fn : null;
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
}

export function trackCategorySelected(params: {
  category: string;
  state?: string | null;
  city?: string | null;
}): void {
  getGtag()?.("event", "category_selected", {
    category: params.category,
    state: params.state ?? null,
    city: params.city ?? null,
  });
}
