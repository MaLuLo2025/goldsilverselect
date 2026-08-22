"use client";

import { useState, useEffect } from "react";
import { markets } from "@/lib/markets";
import { Metal } from "@/lib/types";
import {
  isMarketOpen,
  getNextMarketOpen,
  formatNextOpen,
} from "@/lib/marketHours";

interface TickerPrice {
  metal: Metal;
  label: string;
  price: number;
  pct?: number;
}

type FetchStatus = "loading" | "ok" | "error";

function StatusDot({ color }: { color: string }) {
  return (
    <span
      className="inline-block rounded-full flex-shrink-0"
      style={{ width: 6, height: 6, background: color, marginRight: 8 }}
    />
  );
}

export default function TickerBanner() {
  const [showMarkets, setShowMarkets] = useState(false);
  const [prices, setPrices] = useState<TickerPrice[]>([]);
  const [ratio, setRatio] = useState<string | null>(null);
  const [fetchStatus, setFetchStatus] = useState<FetchStatus>("loading");
  const [now] = useState(() => new Date());
  // The API's own market-state signal (marketOpen field), once a fetch
  // resolves with one. undefined until then, or if the API never included
  // it (a genuine error response has no opinion on market state).
  const [apiMarketOpen, setApiMarketOpen] = useState<boolean | undefined>(
    undefined
  );

  const activeMarket = markets.find((m) => m.status === "open");

  const clientMarketOpen = isMarketOpen(now);
  // Prefer the API's own determination of whether the market is open —
  // TGW is the actual source of truth for whether the underlying price is
  // live or last-close. Our own hardcoded hours table is a fallback guess
  // for before the fetch resolves, or if the API gave no signal at all
  // (the genuine-error / TGW-unreachable case). The two can legitimately
  // disagree — this reconciles that instead of trusting the local clock
  // unconditionally, which was the root cause of the ticker showing the
  // error state during nominally-open hours when TGW itself reported stale.
  const marketOpen = apiMarketOpen ?? clientMarketOpen;
  const nextOpenLabel = marketOpen
    ? null
    : formatNextOpen(getNextMarketOpen(now), now);

  // STATE 3 (the only genuine problem state) is a live market with no usable
  // price data. A closed market always renders STATE 2 regardless of fetch
  // outcome — there's nothing wrong, prices just aren't expected right now.
  const isHardError = marketOpen && fetchStatus === "error";

  // Closed market but we still have a last-known price set (from the API's
  // last-close data) — show it, flat, instead of blanking the ticker. No
  // captured-at timestamp: "markets closed" is the only honest disclosure
  // we can make about how current these numbers are.
  const hasPrices = prices.some((p) => p.price > 0);
  const showClosedTicker = !marketOpen && hasPrices;

  useEffect(() => {
    fetch("/api/prices")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!data || data.error) {
          setFetchStatus("error");
          return;
        }

        if (data._source === "fallback") {
          setFetchStatus("error");
          return;
        }

        if (typeof data.marketOpen === "boolean") {
          setApiMarketOpen(data.marketOpen);
        }

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

        if (newPrices.some((p) => p.price > 0)) {
          setFetchStatus("ok");
          setPrices(newPrices);
          const g = data.gold?.price;
          const s = data.silver?.price;
          if (g && s) setRatio((g / s).toFixed(1));
        } else {
          setFetchStatus("error");
        }
      })
      .catch(() => {
        setFetchStatus("error");
      });
  }, []);

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
          {!marketOpen && !hasPrices ? (
            <div
              className="flex items-center justify-center h-full"
              style={{ color: "#999", fontSize: 10.5, letterSpacing: "0.04em" }}
            >
              <StatusDot color="#E8B84A" />
              Markets closed until {nextOpenLabel} ET
            </div>
          ) : isHardError ? (
            <div
              className="flex items-center justify-center h-full"
              style={{ color: "#999", fontSize: 10.5, letterSpacing: "0.04em" }}
            >
              <StatusDot color="#E28B7A" />
              Live prices temporarily unavailable — refresh to retry
            </div>
          ) : fetchStatus === "loading" ? (
            <div className="h-full" />
          ) : (
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
                        marginRight:
                          !showClosedTicker && m.pct != null && m.pct !== 0
                            ? 6
                            : 0,
                      }}
                    >
                      $
                      {m.price.toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                      })}
                    </span>
                    {!showClosedTicker && m.pct != null && m.pct !== 0 && (
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
          )}
        </div>

        {/* Fixed right: Au:Ag ratio + delay note — hidden only in the hard-error state */}
        {!isHardError && (
          <div
            className="flex items-center gap-3 flex-shrink-0 z-10"
            style={{
              background: "#0a0a0a",
              borderLeft: "1px solid #222",
              padding: "0 14px",
              height: "100%",
            }}
          >
            {ratio !== null && (
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
            )}
            <span style={{ color: "#999", fontSize: 9, letterSpacing: "0.03em" }}>
              {showClosedTicker
                ? `Markets closed · reopen ${nextOpenLabel} ET`
                : "Delayed 20 min"}
            </span>
          </div>
        )}
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
