"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  DEFAULT_PREFS,
  OPEN_PREFERENCES_EVENT,
  getStoredConsent,
  getStoredPrefs,
  saveConsent,
  type CookiePreferences,
} from "@/lib/cookieConsent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);
  const [prefs, setPrefs] = useState<CookiePreferences>(DEFAULT_PREFS);

  useEffect(() => {
    const consent = getStoredConsent();
    if (!consent) {
      setVisible(true);
    } else {
      setPrefs(getStoredPrefs());
    }
  }, []);

  // Re-entry point: the footer "Cookie Preferences" link dispatches this to
  // reopen the panel directly (skipping the initial Accept/Reject banner),
  // pre-populated with whatever is currently saved — not defaults.
  useEffect(() => {
    function handleOpenPreferences() {
      setPrefs(getStoredPrefs());
      setShowPrefs(true);
      setVisible(true);
    }
    window.addEventListener(OPEN_PREFERENCES_EVENT, handleOpenPreferences);
    return () =>
      window.removeEventListener(OPEN_PREFERENCES_EVENT, handleOpenPreferences);
  }, []);

  function handleAccept() {
    const allPrefs = { essential: true, analytics: true };
    setPrefs(allPrefs);
    saveConsent("accepted", allPrefs);
    setVisible(false);
  }

  function handleReject() {
    const minPrefs = { essential: true, analytics: false };
    setPrefs(minPrefs);
    saveConsent("rejected", minPrefs);
    setVisible(false);
  }

  function handleSavePrefs() {
    saveConsent("custom", prefs);
    setVisible(false);
    setShowPrefs(false);
  }

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50"
      style={{ background: "#1E1E1E", borderTop: "1px solid #333" }}
    >
      <div className="max-w-[1100px] mx-auto px-6 py-4">
        {!showPrefs ? (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-sans text-[13px] leading-relaxed" style={{ color: "#aaa" }}>
              We use cookies to improve your experience and analyze site traffic. See our{" "}
              <Link href="/cookies" className="underline hover:text-white" style={{ color: "#C5A44E" }}>
                Cookie Policy
              </Link>{" "}
              for details.
            </p>
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => setShowPrefs(true)}
                className="font-sans text-[12px] font-semibold uppercase tracking-wide hover:text-white transition-colors duration-200"
                style={{ color: "#888", letterSpacing: "0.05em", background: "none", border: "none", cursor: "pointer" }}
              >
                Manage
              </button>
              <button
                onClick={handleReject}
                className="font-sans font-semibold rounded cursor-pointer transition-all duration-200 uppercase"
                style={{
                  background: "transparent",
                  color: "#FAFAF5",
                  border: "1.5px solid #FAFAF5",
                  padding: "8px 20px",
                  fontSize: 12,
                  letterSpacing: "0.05em",
                }}
              >
                Reject
              </button>
              <button
                onClick={handleAccept}
                className="font-sans font-semibold rounded cursor-pointer transition-all duration-200 uppercase"
                style={{
                  background: "#C5A44E",
                  color: "#fff",
                  border: "none",
                  padding: "9px 22px",
                  fontSize: 12,
                  letterSpacing: "0.05em",
                }}
              >
                Accept
              </button>
            </div>
          </div>
        ) : (
          <div>
            <p className="font-serif text-[16px] font-semibold mb-4" style={{ color: "#FAFAF5" }}>
              Cookie preferences
            </p>

            <div className="mb-3">
              <label className="flex items-start gap-2.5 cursor-default">
                <input type="checkbox" checked disabled className="mt-1" />
                <div>
                  <span className="font-sans text-[13px] font-medium" style={{ color: "#FAFAF5" }}>
                    Essential cookies
                  </span>
                  <span
                    className="font-sans uppercase"
                    style={{ fontSize: 10, color: "#888", marginLeft: 6, letterSpacing: "0.05em" }}
                  >
                    Always active
                  </span>
                  <p className="font-sans text-[12px] mt-0.5" style={{ color: "#888" }}>
                    Required for the website to function. Cannot be disabled.
                  </p>
                </div>
              </label>
            </div>

            <div className="mb-4">
              <label className="flex items-start gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={prefs.analytics}
                  onChange={(e) => setPrefs({ ...prefs, analytics: e.target.checked })}
                  className="mt-1"
                />
                <div>
                  <span className="font-sans text-[13px] font-medium" style={{ color: "#FAFAF5" }}>
                    Analytics cookies
                  </span>
                  <p className="font-sans text-[12px] mt-0.5" style={{ color: "#888" }}>
                    Help us understand how visitors use the site so we can improve it.
                    Data is collected anonymously.
                  </p>
                </div>
              </label>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowPrefs(false)}
                className="font-sans font-semibold rounded cursor-pointer transition-all duration-200 uppercase"
                style={{
                  background: "transparent",
                  color: "#FAFAF5",
                  border: "1.5px solid #FAFAF5",
                  padding: "8px 20px",
                  fontSize: 12,
                  letterSpacing: "0.05em",
                }}
              >
                Back
              </button>
              <button
                onClick={handleSavePrefs}
                className="font-sans font-semibold rounded cursor-pointer transition-all duration-200 uppercase"
                style={{
                  background: "#C5A44E",
                  color: "#fff",
                  border: "none",
                  padding: "9px 22px",
                  fontSize: 12,
                  letterSpacing: "0.05em",
                }}
              >
                Save Preferences
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
