"use client";

import { useState } from "react";
import { metalPrices, markets, getGoldSilverRatio } from "@/lib/markets";

export default function TickerBanner() {
  const [showMarkets, setShowMarkets] = useState(false);
  const activeMarket = markets.find((m) => m.status === "open");
  const ratio = getGoldSilverRatio();

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
            {showMarkets ? "▲" : "▼"}
          </span>
        </div>

        {/* Scrolling ticker */}
        <div className="overflow-hidden flex-1">
          <div className="ticker-track">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex items-center">
                {metalPrices.map((m, i) => (
                  <div
                    key={`${copy}-${i}`}
                    className="flex items-center whitespace-nowrap"
                    style={{ padding: "0 24px" }}
                  >
                    <span
                      className="font-bold"
                      style={{
                        color: "#C5A44E",
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
                        marginRight: 6,
                      }}
                    >
                      $
                      {m.price.toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                      })}
                    </span>
                    <span
                      className="font-medium"
                      style={{
                        color: m.change >= 0 ? "#4CAF50" : "#EF5350",
                        fontSize: 10.5,
                      }}
                    >
                      {m.change >= 0 ? "▲" : "▼"}{" "}
                      {Math.abs(m.change).toFixed(2)} (
                      {m.change >= 0 ? "+" : ""}
                      {m.pct.toFixed(2)}%)
                    </span>
                    {i < metalPrices.length - 1 && (
                      <span
                        style={{
                          color: "#2a2a2a",
                          margin: "0 16px",
                          fontSize: 10,
                        }}
                      >
                        │
                      </span>
                    )}
                  </div>
                ))}
                <span
                  style={{ color: "#2a2a2a", margin: "0 16px", fontSize: 10 }}
                >
                  │
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Fixed right: Au:Ag ratio */}
        <div
          className="flex items-center gap-1.5 flex-shrink-0 z-10"
          style={{
            background: "#0a0a0a",
            borderLeft: "1px solid #222",
            padding: "0 14px",
            height: "100%",
          }}
        >
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
