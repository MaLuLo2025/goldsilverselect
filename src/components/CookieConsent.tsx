"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const STORAGE_KEY = "gs_cookie_consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) setVisible(true);
  }, []);

  function handleAccept() {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  }

  function handleReject() {
    localStorage.setItem(STORAGE_KEY, "rejected");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50"
      style={{ background: "#1E1E1E", borderTop: "1px solid #333" }}
    >
      <div className="max-w-[1100px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4">
        <p className="font-sans text-[13px] leading-relaxed" style={{ color: "#aaa" }}>
          We use cookies to improve your experience and analyze site traffic. See our{" "}
          <Link href="/cookies" className="underline hover:text-white" style={{ color: "#C5A44E" }}>
            Cookie Policy
          </Link>{" "}
          for details.
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/cookies"
            className="font-sans text-[12px] font-semibold uppercase tracking-wide hover:text-white transition-colors duration-200"
            style={{ color: "#888", letterSpacing: "0.05em" }}
          >
            Manage
          </Link>
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
    </div>
  );
}
