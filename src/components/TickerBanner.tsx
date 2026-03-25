"use client";

import { useState, useEffect, useCallback } from "react";
import { markets } from "@/lib/markets";
import { Metal } from "@/lib/types";

interface TickerPrice {
  metal: Metal;
  label: string;
  price: number;
  pct?: number;
}

const FALLBACK: TickerPrice[] = [
  { metal: "gold", label: "GOLD", price: 3025.0 },
  { metal: "silver", label: "SILVER", price: 33.5 },
  { metal: "platinum", label: "PLATINUM", price: 985.0 },
  { metal: "palladium", label: "PALLADIUM", price: 960.0 },
];

export default function TickerBanner() {
  const [showMarkets, setShowMarkets] = useState(false);
  const [prices, setPrices] = useState<TickerPrice[]>(FALLBACK);
  const [ratio, setRatio] = useState(() => {
    const g = FALLBACK.find((m) => m.metal === "gold");
    const s = FALLBACK.find((m) => m.metal === "silver");
    return g && s ? (g.price / s.price).toFixed(1) : "\u2014";
  });

  const activeMarket = markets.find((m) => m.status === "open");

  const fetchPrices = useCallback(async () => {
    try {
      const res = await fetch("/api/prices");
      if (!res.ok) return;
      const data = await res.json();
      if (data.error) return;

      const metals: { key: Metal; label: string }[] = [
        { key: "gold", label: "GOLD" },
        { key: "silver", label: "SILVER" },
        { key: "platinum", label: "PLATINUM" },
        { key: "palladium", label: "PALLADIUM" },
      ];

      const newPrices: TickerPrice[] = metals.map(({ key, label }) => ({
        metal: key,
        label,
        price: data[key]?.price || 0,
        pct: data[key]?.pct,
      }));

      // Only update if we got real data
      if (newPrices.some((p) => p.price > 0)) {
        setPrices(newPrices);
        const g = data.gold?.price;
        const s = data.silver?.price;
        if (g && s) setRatio((g / s).toFixed(1));
      }
    } catch {
      // Keep existing prices on failure
    }
  }, []);

  useEffect(() => {
    fetchPrices();
    const interval = setInterval(fetchPrices, 60_000);
    return () => clearInterval(interval);
  }, [fetchPrices]);

  return (
    <div className="font-sans" style={{ background: "#111110" }}>
      <div className="flex items-center" style={{ height: 36 }}>
        {/* Fixed left: market status */}
        <div
          onClick={() => setShowMarkets(!showMarkets)}
          className="flex items-center gap-1.5 cursor-pointer flex-shrink-0 z-10"
          style={{
            background: "#0a0a0a",
            borderRight: "1px solid #222",
            padding: "0 12px",
            height: "100%",
          }}
        >
          <span
            className="inline-block rounded-full"
            style={{
              width: 6,
              height: 6,
              background: activeMarket ? "#4CAF50" : "#555",
              boxShadow: activeMarket ? "0 0 5px #4CAF50" : "none",
            }}
          />
          <span
            className="uppercase font-bold whitespace-nowrap"
            style={{
              color: "#999",
              fontSize: 9,
              letterSpacing: "0.08em",
            }}
          >
            {activeMarket ? activeMarket.shortName : "CLOSED"}
          </span>
          <span style={{ color: "#444", fontSize: 8 }}>
            {showMarkets ? "\u25B2" : "\u25BC"}
          </span>
        </div>

        {/* Scrolling ticker */}
        <div className="overflow-hidden flex-1">
          <div className="ticker-track">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex items-center">
                {prices.map((m, i) => (
                  <div
                    key={`${copy}-${i}`}
                    className="flex items-center whitespace-nowrap"
                    style={{ padding: "0 24px" }}
                  >
                    <span
                      className="font-bold"
                      style={{
                        color: m.metal === "gold" ? "#C5A44E" : "#C0C0C0",
                        fontSize: 10,
                        letterSpacing: "0.1em",
                        marginRight: 8,
                      }}
                    >
                      {m.label}
                    </span>
                    <span
                      className="font-serif font-semibold"
                      style={{
                        color: "#FAFAF5",
                        fontSize: 14,
                        marginRight: m.pct != null && m.pct !== 0 ? 6 : 0,
                      }}
                    >
                      $
                      {m.price.toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                      })}
                    </span>
                    {m.pct != null && m.pct !== 0 && (
                      <span
                        className="font-medium"
                        style={{
                          color: m.pct >= 0 ? "#4CAF50" : "#EF5350",
                          fontSize: 10.5,
                        }}
                      >
                        {m.pct >= 0 ? "\u25B2" : "\u25BC"}{" "}
                        {m.pct >= 0 ? "+" : ""}
                        {m.pct.toFixed(2)}%
                      </span>
                    )}
                    {i < prices.length - 1 && (
                      <span
                        style={{
                          color: "#2a2a2a",
                          margin: "0 16px",
                          fontSize: 10,
                        }}
                      >
                        |
                      </span>
                    )}
                  </div>
                ))}
                <span
                  style={{ color: "#2a2a2a", margin: "0 16px", fontSize: 10 }}
                >
                  |
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Fixed right: Au:Ag ratio + delay note */}
        <div
          className="flex items-center gap-3 flex-shrink-0 z-10"
          style={{
            background: "#0a0a0a",
            borderLeft: "1px solid #222",
            padding: "0 14px",
            height: "100%",
          }}
        >
          <div className="flex items-center gap-1.5">
            <span
              className="font-bold"
              style={{ color: "#666", fontSize: 9, letterSpacing: "0.06em" }}
            >
              Au:Ag
            </span>
            <span
              className="font-serif font-semibold"
              style={{ color: "#C5A44E", fontSize: 13 }}
            >
              {ratio}
            </span>
          </div>
          <span style={{ color: "#999", fontSize: 9, letterSpacing: "0.03em" }}>
            Delayed 20 min
          </span>
        </div>
      </div>

      {/* Expandable market hours */}
      {showMarkets && (
        <div
          className="flex items-center justify-center flex-wrap"
          style={{
            borderTop: "1px solid #1a1a1a",
            padding: "10px 24px",
            gap: 28,
            background: "#0d0d0d",
          }}
        >
          <span
            className="uppercase font-bold"
            style={{
              color: "#555",
              fontSize: 9,
              letterSpacing: "0.08em",
            }}
          >
            All times Eastern
          </span>
          {markets.map((m) => (
            <div key={m.name} className="flex items-center gap-1.5">
              <span
                className="inline-block rounded-full"
                style={{
                  width: 6,
                  height: 6,
                  background: m.status === "open" ? "#4CAF50" : "#333",
                  boxShadow:
                    m.status === "open" ? "0 0 5px #4CAF50" : "none",
                }}
              />
              <span
                className="font-medium"
                style={{
                  color: m.status === "open" ? "#FAFAF5" : "#666",
                  fontSize: 11,
                }}
              >
                {m.name}
              </span>
              <span style={{ color: "#444", fontSize: 10 }}>
                {m.opens}–{m.closes}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
