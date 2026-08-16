// Shared cookie-consent storage schema + gtag Consent Mode v2 mapping.
// Ported from AestheticSelect / FirearmSelect (src/lib/cookieConsent.ts) —
// same portfolio-wide schema and enforcement pattern, kept identical across
// Select sites on purpose.

export type ConsentState = "pending" | "accepted" | "rejected" | "custom";

export interface CookiePreferences {
  essential: boolean; // always true
  analytics: boolean;
}

export const DEFAULT_PREFS: CookiePreferences = {
  essential: true,
  analytics: false,
};

const CONSENT_KEY = "cookie_consent";
const PREFS_KEY = "cookie_prefs";

// GSS's pre-port implementation only ever wrote this ONE key, as a bare
// string "accepted" | "rejected" — no JSON, no separate prefs object, and
// no "cookie_consent"/"cookie_prefs" keys at all. Different from both AS's
// and FS's legacy shapes (which were at least JSON objects under
// "cookie_prefs"), so GSS needs its own migration path.
const LEGACY_KEY = "gs_cookie_consent";

// Dispatched by saveConsent() whenever the user's choice changes.
// GoogleAnalytics.tsx listens for this to call gtag('consent', 'update', ...)
// without requiring a page reload.
export const CONSENT_UPDATE_EVENT = "cookie_consent_update";

// Dispatched by the footer "Cookie Preferences" link. CookieConsent.tsx
// listens for this to reopen itself directly into the preferences panel,
// pre-populated with whatever is currently saved.
export const OPEN_PREFERENCES_EVENT = "open_cookie_preferences";

// MIGRATION: derives the new cookie_consent/cookie_prefs shape from GSS's
// legacy gs_cookie_consent string and persists both new keys, so a returning
// pre-port visitor is never treated as unconsented. Idempotent — no-ops once
// "cookie_consent" exists (already migrated, or a fresh post-port choice),
// and no-ops if there's genuinely nothing to migrate (first-time visitor, or
// a legacy value that isn't exactly "accepted"/"rejected").
function migrateLegacyConsent(): void {
  if (typeof window === "undefined") return;
  if (localStorage.getItem(CONSENT_KEY)) return;

  const legacy = localStorage.getItem(LEGACY_KEY);
  if (legacy !== "accepted" && legacy !== "rejected") return;

  const state: ConsentState = legacy === "accepted" ? "accepted" : "rejected";
  const prefs: CookiePreferences = { essential: true, analytics: legacy === "accepted" };

  localStorage.setItem(CONSENT_KEY, state);
  localStorage.setItem(PREFS_KEY, JSON.stringify(prefs));
}

export function getStoredConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  migrateLegacyConsent();
  return localStorage.getItem(CONSENT_KEY) as ConsentState | null;
}

export function getStoredPrefs(): CookiePreferences {
  if (typeof window === "undefined") return DEFAULT_PREFS;
  migrateLegacyConsent();
  try {
    const stored = localStorage.getItem(PREFS_KEY);
    if (stored) return { ...DEFAULT_PREFS, ...JSON.parse(stored) };
  } catch {
    // Malformed stored value — fall back to defaults rather than throw.
  }
  return DEFAULT_PREFS;
}

export function saveConsent(state: ConsentState, prefs: CookiePreferences): void {
  localStorage.setItem(CONSENT_KEY, state);
  localStorage.setItem(PREFS_KEY, JSON.stringify(prefs));
  window.dispatchEvent(
    new CustomEvent(CONSENT_UPDATE_EVENT, { detail: { state, prefs } })
  );
}

export function openPreferences(): void {
  window.dispatchEvent(new CustomEvent(OPEN_PREFERENCES_EVENT));
}

// Consent Mode v2 payload for a given preferences object. functionality_storage
// is not user-gated — it's granted unconditionally in ConsentDefaults and never
// revisited here, since essential site functionality isn't a consent choice.
export function prefsToConsentUpdate(prefs: CookiePreferences) {
  return {
    analytics_storage: prefs.analytics ? "granted" : "denied",
  } as const;
}
