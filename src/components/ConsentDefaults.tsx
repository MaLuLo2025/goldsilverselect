import Script from "next/script";

// Consent Mode v2 defaults. Must render — and therefore execute — before
// the gtag.js loader script. strategy="beforeInteractive" guarantees Next.js
// injects this into the initial HTML ahead of any afterInteractive script,
// so gtag.js never observes an "ungated" moment: by the time it loads,
// storage is already denied by default, and (for a returning visitor who
// previously granted consent) already re-granted based on their saved
// choice — both read synchronously from localStorage before gtag.js is
// even requested.
//
// The localStorage key/shape here ("cookie_prefs") must stay in sync with
// src/lib/cookieConsent.ts — this has to be a plain inline script (it runs
// before any module code), so it can't import that module directly.
export default function ConsentDefaults() {
  return (
    <Script id="consent-defaults" strategy="beforeInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){ window.dataLayer.push(arguments); }
        window.gtag = gtag;

        gtag('consent', 'default', {
          'analytics_storage': 'denied',
          'ad_storage': 'denied',
          'ad_user_data': 'denied',
          'ad_personalization': 'denied',
          'functionality_storage': 'granted',
          'security_storage': 'granted',
          'wait_for_update': 500
        });

        try {
          var stored = localStorage.getItem('cookie_prefs');
          var analyticsGranted = null;
          if (stored) {
            var prefs = JSON.parse(stored);
            analyticsGranted = prefs.analytics === true;
          } else {
            // MIGRATION: GSS's pre-port implementation only ever wrote a
            // legacy "gs_cookie_consent" key as a bare string
            // ("accepted" | "rejected") — no "cookie_prefs" object at all.
            // Check it directly here so a returning legacy visitor's very
            // first post-migration pageview is granted/denied immediately,
            // rather than waiting for React to mount and run the full
            // migration in src/lib/cookieConsent.ts.
            var legacy = localStorage.getItem('gs_cookie_consent');
            if (legacy === 'accepted' || legacy === 'rejected') {
              analyticsGranted = legacy === 'accepted';
            }
          }
          if (analyticsGranted !== null) {
            gtag('consent', 'update', {
              'analytics_storage': analyticsGranted ? 'granted' : 'denied'
            });
          }
        } catch (e) {}
      `}
    </Script>
  );
}
