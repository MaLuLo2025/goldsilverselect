"use client";

import { openPreferences } from "@/lib/cookieConsent";

// Small isolated client component so Footer itself can stay a server
// component — this button is the only interactive piece it needs.
export default function CookiePreferencesLink() {
  return (
    <button
      type="button"
      onClick={openPreferences}
      className="block text-[13px] no-underline mb-2 transition-colors duration-200 hover:text-white"
      style={{ color: "#888", background: "none", border: "none", cursor: "pointer", textAlign: "left", padding: 0 }}
    >
      Cookie Preferences
    </button>
  );
}
