import { Metadata } from "next";
import TickerBanner from "@/components/TickerBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IntelligenceSection from "@/components/IntelligenceSection";

export const metadata: Metadata = {
  title: "Market Intelligence — Curated Precious Metals Research & Insights",
  description:
    "Curated insights from the sharpest minds in macro investing and precious metals. Druckenmiller, Dalio, Gundlach, and institutional research — summarized, not spun.",
};

export default function IntelligencePage() {
  return (
    <>
      <TickerBanner />
      <Header />

      {/* Hero */}
      <section
        className="text-center"
        style={{
          padding: "56px 24px 0",
          background: "linear-gradient(180deg, #FAFAF5 0%, #F5F2EB 100%)",
        }}
      >
        <div className="max-w-[720px] mx-auto">
          <h1 className="font-serif text-[38px] font-bold text-gray-900 mb-3">
            Market Intelligence
          </h1>
          <p
            className="font-sans text-[16px] leading-relaxed max-w-[580px] mx-auto mb-4"
            style={{ color: "#666" }}
          >
            We curate the most valuable thinking on gold, silver, and precious
            metals markets — from macro legends and institutional research
            desks. We summarize and synthesize.{" "}
            <span className="text-gold font-semibold">
              We never advocate, never opine.
            </span>
          </p>
        </div>
      </section>

      {/* Reuse the Intelligence section component */}
      <IntelligenceSection />

      {/* How we curate */}
      <section className="max-w-[900px] mx-auto" style={{ padding: "48px 24px 64px" }}>
        <div className="gs-divider" />
        <h2 className="font-serif text-[26px] font-bold text-gray-900 mb-4 text-center">
          How We Curate
        </h2>
        <div className="grid grid-cols-3 gap-8">
          {[
            {
              title: "Authoritative voices only",
              text: "We feature institutional strategists, proven macro investors, and respected precious metals analysts. No promoters, no salespeople, no sponsored content.",
            },
            {
              title: "Timestamps, not re-uploads",
              text: "We embed original YouTube videos and link to specific timestamps where the gold or silver commentary lives. We never re-cut or re-upload anyone's content.",
            },
            {
              title: "Summary + source",
              text: "Every entry gets our editorial summary — bullet points, key takeaways — plus a direct link to the original. You decide what to watch or read in full.",
            },
          ].map((item) => (
            <div key={item.title}>
              <h4 className="font-serif text-[17px] font-semibold text-gold mb-2">
                {item.title}
              </h4>
              <p
                className="font-sans text-[13px] leading-relaxed"
                style={{ color: "#777" }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
