import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import TickerBanner from "@/components/TickerBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { intelligenceItems, getIntelligenceBySlug } from "@/lib/intelligence";
import { intelligenceSummaries } from "@/lib/intelligence-summaries";
import { PlayIcon, DocIcon } from "@/components/Icons";

export function generateStaticParams() {
  return intelligenceItems.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const item = getIntelligenceBySlug(params.slug);
  if (!item) return {};
  return {
    title: `${item.title} — ${item.speaker}`,
    description: item.description,
  };
}

const tagColors: Record<string, { text: string; bg: string }> = {
  Macro: { text: "#C5A44E", bg: "rgba(197,164,78,0.1)" },
  Institutional: { text: "#1B3D2F", bg: "rgba(27,61,47,0.08)" },
  Specialist: { text: "#8B6914", bg: "rgba(139,105,20,0.08)" },
};

export default function IntelligenceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const item = getIntelligenceBySlug(params.slug);
  if (!item) notFound();

  const summary = intelligenceSummaries[item.slug];
  const colors = tagColors[item.tag] || tagColors.Macro;

  // Parse markdown-style bold into JSX
  const renderSummary = (text: string) => {
    return text.split("\n\n").map((block, i) => {
      // Replace **text** with <strong>text</strong>
      const parts = block.split(/\*\*([^*]+)\*\*/g);
      const rendered = parts.map((part, j) =>
        j % 2 === 1 ? (
          <strong key={j} className="text-gray-900">
            {part}
          </strong>
        ) : (
          <span key={j}>{part}</span>
        )
      );

      // Bullet points
      if (block.startsWith("\u2022 ")) {
        return (
          <div key={i} className="ml-4 mb-2">
            {rendered}
          </div>
        );
      }

      return (
        <p key={i} className="mb-4">
          {rendered}
        </p>
      );
    });
  };

  return (
    <>
      <TickerBanner />
      <Header />

      {/* Breadcrumb */}
      <div className="max-w-[800px] mx-auto" style={{ padding: "16px 24px 0" }}>
        <nav className="font-sans text-[12px]" style={{ color: "#999" }}>
          <Link
            href="/intelligence"
            className="no-underline hover:text-gold"
            style={{ color: "#999" }}
          >
            Market Intelligence
          </Link>
          <span className="mx-1.5">&rsaquo;</span>
          <span style={{ color: "#555" }}>{item.speaker}</span>
        </nav>
      </div>

      <article className="max-w-[800px] mx-auto" style={{ padding: "32px 24px 64px" }}>
        {/* Meta */}
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <div
            className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center"
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
          <span
            className="font-sans text-[11px] uppercase font-semibold"
            style={{ color: "#aaa", letterSpacing: "0.04em" }}
          >
            {item.type}
          </span>
          <span className="font-sans text-[12px]" style={{ color: "#aaa" }}>
            {item.date}
          </span>
        </div>

        {/* Speaker */}
        <p className="font-serif text-[15px] font-semibold text-gold mb-1">
          {item.speaker}
        </p>

        {/* Title */}
        <h1 className="font-serif text-[32px] font-bold text-gray-900 leading-tight mb-2">
          {item.title}
        </h1>

        {/* Source */}
        <p className="font-sans text-[13px] mb-6" style={{ color: "#888" }}>
          Source: {item.source}
        </p>

        {/* Description */}
        <div
          className="rounded-md mb-8"
          style={{
            background: "rgba(197,164,78,0.06)",
            border: "1px solid rgba(197,164,78,0.15)",
            padding: "20px 24px",
          }}
        >
          <p
            className="font-sans text-[14px] leading-relaxed"
            style={{ color: "#666" }}
          >
            {item.description}
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-3 mb-10 flex-wrap">
          {item.url && (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-block no-underline"
              style={{ padding: "11px 24px", fontSize: 13 }}
            >
              {item.type === "video" ? "Watch Original" : "Read Original"} &rarr;
            </a>
          )}
          {item.youtubeUrl && (
            <a
              href={item.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-block no-underline"
              style={{ padding: "10px 22px", fontSize: 13 }}
            >
              Watch on YouTube &rarr;
            </a>
          )}
        </div>

        {/* Editorial Summary */}
        {summary && (
          <>
            <div className="gs-divider" style={{ margin: "0 0 24px" }} />
            <h2 className="font-serif text-[22px] font-bold text-forest mb-5">
              Editorial Summary
            </h2>
            <div
              className="font-sans text-[14.5px] leading-[1.75] prose-style"
              style={{ color: "#555" }}
            >
              {renderSummary(summary)}
            </div>
          </>
        )}

        {/* Disclaimer */}
        <div
          className="rounded-md mt-10"
          style={{
            background: "rgba(197,164,78,0.06)",
            border: "1px solid rgba(197,164,78,0.15)",
            padding: "16px 20px",
          }}
        >
          <p
            className="font-sans text-[12px] leading-relaxed"
            style={{ color: "#999" }}
          >
            This summary is editorial and educational. GoldSilverSelect does not
            provide financial advice or endorse any investment strategy. Always do
            your own research and consult a qualified financial advisor.
          </p>
        </div>

        {/* Back link */}
        <div className="mt-8">
          <Link
            href="/intelligence"
            className="font-sans text-[13px] text-gold font-semibold no-underline hover:underline"
          >
            &larr; Back to Market Intelligence
          </Link>
        </div>
      </article>

      <Footer />
    </>
  );
}
