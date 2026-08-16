"use client";

import { useEffect } from "react";
import Script from "next/script";
import {
  CONSENT_UPDATE_EVENT,
  prefsToConsentUpdate,
  type CookiePreferences,
} from "@/lib/cookieConsent";
import { deleteGaCookies } from "@/lib/gaCookies";

const GA_ID = "G-B6JLJE474B";

// History worth knowing before touching this file: GSS originally shipped
// with a real consent gate (commit 4a25c41) that made the gtag script tags
// themselves conditional on a `useState`/`useEffect` localStorage poll —
// gtag never rendered at all until the visitor explicitly clicked Accept.
// That gate was deliberately removed six days later (commit a5c1a2b, "fix
// GA4: remove cookie consent gate, load gtag.js unconditionally on all
// pages") because it was suppressing most real traffic — most visitors
// never interact with a banner, so gtag rarely loaded, and analytics data
// looked broken. The fix that landed traded away consent compliance instead
// of fixing the actual problem (an all-or-nothing client-side gate that
// only ever counted visitors who took an action).
//
// Consent Mode v2 (this file + ConsentDefaults.tsx) is built specifically
// to not force that same choice again:
//   - gtag.js loads immediately, same as it does today — no more suppressed
//     script tag, no more undercounted traffic.
//   - A visitor who denies (or hasn't yet chosen) still generates Google's
//     own anonymized, cookieless modeling signal — not nothing, just not
//     identified or persistent.
//   - Accepting takes effect at runtime via the CONSENT_UPDATE_EVENT
//     listener below — no reload, no gap, no reason to skip the gate for
//     data-volume reasons the way a5c1a2b did.

type GtagFn = (...args: unknown[]) => void;

function getGtag(): GtagFn | null {
  if (typeof window === "undefined") return null;
  const fn = (window as unknown as { gtag?: GtagFn }).gtag;
  return typeof fn === "function" ? fn : null;
}

export default function GoogleAnalytics() {
  // Runtime consent changes (accept/reject/save from the preferences panel,
  // any time after initial load) — update Consent Mode immediately, no
  // reload required, and clear existing GA cookies the moment analytics
  // goes from granted to denied. ConsentDefaults handles the initial-load
  // case (default deny + immediate re-grant for returning visitors); this
  // effect handles everything that happens after that.
  useEffect(() => {
    function handleConsentUpdate(e: Event) {
      const detail = (e as CustomEvent<{ prefs: CookiePreferences }>).detail;
      if (!detail?.prefs) return;

      const wasAnalyticsGranted = document.cookie.includes("_ga=");
      const update = prefsToConsentUpdate(detail.prefs);

      getGtag()?.("consent", "update", update);

      if (wasAnalyticsGranted && !detail.prefs.analytics) {
        deleteGaCookies();
      }
    }

    window.addEventListener(CONSENT_UPDATE_EVENT, handleConsentUpdate);
    return () =>
      window.removeEventListener(CONSENT_UPDATE_EVENT, handleConsentUpdate);
  }, []);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
