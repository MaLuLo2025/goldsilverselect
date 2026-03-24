"use client";

import { useState } from "react";
import Link from "next/link";
import { intelligenceItems } from "@/lib/intelligence";
import { PlayIcon, DocIcon } from "./Icons";

const tagColors: Record<string, { text: string; bg: string }> = {
  Macro: { text: "#C5A44E", bg: "rgba(197,164,78,0.1)" },
  Institutional: { text: "#1B3D2F", bg: "rgba(27,61,47,0.08)" },
  Specialist: { text: "#8B6914", bg: "rgba(139,105,20,0.08)" },
};

export default function IntelligenceSection() {
  const [filter, setFilter] = useState<"all" | "video" | "research">("all");

  const filtered =
    filter === "all"
      ? intelligenceItems
      : intelligenceItems.filter((i) => i.type === filter);

  return (
    <section
      className="border-t border-b border-border"
      style={{ background: "#F5F2EB", padding: "56px 24px" }}
    >
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="text-center mb-9">
          <div className="gs-divider" />
          <h2 className="font-serif text-[30px] font-bold text-gray-900 mb-2">
            Market Intelligence
          </h2>
          <p
            className="font-sans text-sm max-w-[560px] mx-auto mb-5"
            style={{ color: "#888" }}
          >
            Curated insights from the sharpest minds in macro investing and
            precious metals. No hype. No sales pitches. Just the thinkers worth
            listening to.
          </p>
          <div className="flex gap-2 justify-center">
            {(
              [
                { key: "all", label: "All" },
                { key: "video", label: "Videos" },
                { key: "research", label: "Research" },
              ] as const
            ).map((f) => (
              <button
                key={f.key}
                className={`filter-btn ${filter === f.key ? "active" : ""}`}
                onClick={() => setFilter(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-3">
          {filtered.map((item) => {
            const colors = tagColors[item.tag] || tagColors.Macro;
            return (
              <Link
                key={item.slug}
                href={`/intelligence/${item.slug}`}
                className="intel-card no-underline"
              >
                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-full flex-shrink-0 flex items-center justify-center"
                  style={{
                    background:
                      item.type === "video"
                        ? "rgba(197,164,78,0.1)"
                        : "rgba(27,61,47,0.08)",
                    color: item.type === "video" ? "#C5A44E" : "#1B3D2F",
                  }}
                >
                  {item.type === "video" ? <PlayIcon /> : <DocIcon />}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span
                      className="font-sans font-bold uppercase"
                      style={{
                        fontSize: 10,
                        letterSpacing: "0.08em",
                        color: colors.text,
                        background: colors.bg,
                        padding: "2px 8px",
                        borderRadius: 3,
                      }}
                    >
                      {item.tag}
                    </span>
                    <span className="font-sans text-[11px]" style={{ color: "#aaa" }}>
                      {item.date}
                    </span>
                    <span style={{ color: "#ccc" }}>&middot;</span>
                    <span className="font-sans text-[11px]" style={{ color: "#aaa" }}>
                      {item.source}
                    </span>
                  </div>
                  <span className="font-serif text-[13px] font-semibold text-gold">
                    {item.speaker}
                  </span>
                  <h4 className="font-serif text-[17px] font-semibold text-gray-900 leading-snug my-1">
                    {item.title}
                  </h4>
                  <p
                    className="font-sans text-[13px] leading-relaxed"
                    style={{ color: "#888" }}
                  >
                    {item.description}
                  </p>
                </div>

                {/* Arrow */}
                <div
                  className="flex-shrink-0 self-center text-lg"
                  style={{ color: "#ccc" }}
                >
                  &rarr;
                </div>
              </Link>
            );
          })}
        </div>

        {/* View Full Library */}
        <div className="text-center mt-7">
          <Link href="/intelligence" className="btn-outline no-underline inline-block">
            View Full Library
          </Link>
        </div>

        {/* Editorial voice nudge */}
        <div
          className="mt-8 text-center rounded-md"
          style={{
            padding: "20px 24px",
            background: "rgba(197,164,78,0.06)",
            border: "1px solid rgba(197,164,78,0.15)",
          }}
        >
          <p className="font-sans text-[13.5px] leading-relaxed" style={{ color: "#888" }}>
            We summarize and synthesize so you don&apos;t have to watch a
            90&#8209;minute interview for 4 minutes of insight. Bullet points, key
            takeaways, and a direct link.{" "}
            <span className="text-gold font-semibold">
              We never advocate, never opine
            </span>{" "}
            &mdash; just the substance, clearly presented. Sign up below to get
            notified.
          </p>
        </div>
      </div>
    </section>
  );
}
