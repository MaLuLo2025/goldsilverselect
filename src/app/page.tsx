import { Suspense } from "react";
import TickerBanner from "@/components/TickerBanner";
import Header from "@/components/Header";
import HeroSearch from "@/components/HeroSearch";
import IntelligenceSection from "@/components/IntelligenceSection";
import Footer from "@/components/Footer";
import Logo from "@/components/Logo";
import { blogPosts } from "@/lib/blog";

export default function Home() {
  return (
    <>
      <TickerBanner />
      <Header />

      {/* ===== HERO ===== */}
      <section
        className="text-center relative overflow-hidden"
        style={{
          padding: "72px 24px 64px",
          background: "linear-gradient(180deg, #FAFAF5 0%, #F5F2EB 100%)",
        }}
      >
        {/* Decorative rings */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: -120,
            right: -80,
            width: 400,
            height: 400,
            borderRadius: "50%",
            border: "1px solid rgba(197,164,78,0.08)",
          }}
        />
        <div className="max-w-[720px] mx-auto relative animate-fade-up">
          <h1 className="font-serif text-[44px] font-bold text-gray-900 leading-[1.15] mb-4">
            Know the market.
            <br />
            Find trusted dealers.
            <br />
            <span className="text-gold">Own with confidence.</span>
          </h1>
          <p
            className="font-sans text-[17px] leading-relaxed max-w-[560px] mx-auto mb-9"
            style={{ color: "#666" }}
          >
            Whether you&apos;re buying your first gold or silver coin or your
            thousandth, trading bullion, starting an IRA, or selling inherited
            jewelry or &ldquo;junk&rdquo; — you deserve transparent pricing,
            honest dealers, and zero pressure. We help you find them.
          </p>
          <Suspense fallback={null}>
            <HeroSearch />
          </Suspense>
        </div>
      </section>

      {/* ===== MARKET INTELLIGENCE ===== */}
      <IntelligenceSection />

      {/* ===== DON'T GET RIPPED OFF ===== */}
      <section style={{ background: "#1B3D2F", padding: "56px 24px" }}>
        <div className="max-w-[900px] mx-auto text-center">
          <div
            className="mx-auto mb-5"
            style={{ width: 60, height: 2, background: "#C5A44E" }}
          />
          <h2 className="font-serif text-[30px] font-bold text-white mb-3">
            Don&apos;t Get Ripped Off
          </h2>
          <p
            className="font-sans text-[15px] leading-relaxed max-w-[640px] mx-auto mb-9"
            style={{ color: "rgba(250,250,245,0.7)" }}
          >
            The precious metals industry has more than its share of predators —
            gold IRA phone scammers, cash-for-gold shops paying 30 cents on the
            dollar, and &ldquo;collectible&rdquo; coin dealers with 100%
            markups. Our content exists to protect you.
          </p>
          <div className="grid grid-cols-3 gap-6 text-left">
            {[
              {
                num: "01",
                title: "We expose the scams",
                text: "Blog content that names the tactics — high-pressure IRA sales, bait-and-switch premiums, fake scarcity, misleading celebrity endorsements.",
              },
              {
                num: "02",
                title: "We list real dealers",
                text: "Direct links to dealer websites. No lead generation forms. No phone calls from salespeople you didn't ask for.",
              },
              {
                num: "03",
                title: "We never take sides",
                text: 'No paid placements. No "recommended" dealers. Factual descriptions only — certifications, services, location.',
              },
            ].map((item) => (
              <div key={item.num}>
                <span className="font-serif text-[28px] font-bold text-gold block mb-2">
                  {item.num}
                </span>
                <h4 className="font-serif text-[17px] font-semibold text-white mb-2">
                  {item.title}
                </h4>
                <p
                  className="font-sans text-[13px] leading-relaxed"
                  style={{ color: "rgba(250,250,245,0.6)" }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BLOG PREVIEW ===== */}
      <section className="max-w-[1100px] mx-auto" style={{ padding: "56px 24px" }}>
        <div className="text-center mb-9">
          <div className="gs-divider" />
          <h2 className="font-serif text-[28px] font-bold text-gray-900 mb-2">
            Latest Research &amp; Warnings
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {blogPosts.map((post) => (
            <div key={post.slug} className="blog-card">
              <span
                className="inline-block font-sans font-bold uppercase mb-2.5"
                style={{
                  fontSize: 10,
                  letterSpacing: "0.08em",
                  color: post.tagColor === "gold" ? "#C5A44E" : "#1B3D2F",
                  background:
                    post.tagColor === "gold"
                      ? "rgba(197,164,78,0.1)"
                      : "rgba(27,61,47,0.08)",
                  padding: "3px 10px",
                  borderRadius: 3,
                }}
              >
                {post.tag}
              </span>
              <h4 className="font-serif text-[17px] font-semibold text-gray-900 leading-snug">
                {post.title}
              </h4>
            </div>
          ))}
        </div>
        <div className="text-center mt-7">
          <button className="btn-outline">Read All Articles</button>
        </div>
      </section>

      {/* ===== UNIFIED SIGNUP ===== */}
      <section
        className="text-center"
        style={{
          background: "linear-gradient(135deg, #1E1E1E, #2a2a2a)",
          padding: "52px 24px",
        }}
      >
        <div className="max-w-[600px] mx-auto">
          <Logo size={48} />
          <h3 className="font-serif text-[26px] font-bold text-white mt-4 mb-2.5">
            Stay Informed. Set Your Triggers.
          </h3>
          <p
            className="font-sans text-sm leading-relaxed mb-6"
            style={{ color: "rgba(250,250,245,0.6)" }}
          >
            One signup — choose what matters to you. Free. No spam. No sales
            calls.
          </p>

          {/* Checkboxes */}
          <div className="flex flex-col gap-3 max-w-[420px] mx-auto mb-7 text-left">
            {[
              {
                id: "price",
                label: "Spot price target alerts",
                desc: "Get notified when gold, silver, platinum, or palladium hits your number",
                defaultChecked: true,
              },
              {
                id: "pct",
                label: "Daily percent change alerts",
                desc: "Know immediately when a metal moves more than your threshold",
                defaultChecked: false,
              },
              {
                id: "ratio",
                label: "Gold\u2011to\u2011silver ratio alerts",
                desc: "Track the ratio and get notified when it hits your target",
                defaultChecked: false,
              },
              {
                id: "intel",
                label: "Market intelligence summaries",
                desc: "New interview or research drop — we send you the key takeaways",
                defaultChecked: true,
              },
            ].map((opt) => (
              <label key={opt.id} className="signup-check-card">
                <input
                  type="checkbox"
                  defaultChecked={opt.defaultChecked}
                  className="mt-0.5 flex-shrink-0 cursor-pointer"
                  style={{
                    width: 16,
                    height: 16,
                    accentColor: "#C5A44E",
                  }}
                />
                <div>
                  <span className="font-sans text-[13.5px] font-semibold text-white block leading-tight">
                    {opt.label}
                  </span>
                  <span
                    className="font-sans text-[11.5px] leading-snug"
                    style={{ color: "#777" }}
                  >
                    {opt.desc}
                  </span>
                </div>
              </label>
            ))}
          </div>

          {/* Email + submit */}
          <div className="flex gap-2.5 justify-center flex-wrap">
            <input
              type="email"
              placeholder="Your email address"
              className="font-sans text-sm outline-none"
              style={{
                padding: "13px 18px",
                border: "1.5px solid #444",
                borderRadius: 4,
                background: "rgba(255,255,255,0.05)",
                color: "#FAFAF5",
                minWidth: 260,
              }}
            />
            <button className="btn-gold">Sign Me Up</button>
          </div>
          <p className="font-sans text-[11px] mt-3" style={{ color: "#555" }}>
            Your data is never sold. See our privacy policy.
          </p>
        </div>
      </section>

      {/* ===== AUTHORITATIVE SOURCES ===== */}
      <section
        className="border-t border-b border-border"
        style={{ background: "#F5F2EB", padding: "32px 24px" }}
      >
        <div className="max-w-[900px] mx-auto text-center">
          <p
            className="font-sans uppercase mb-3"
            style={{
              fontSize: 11,
              color: "#999",
              letterSpacing: "0.08em",
            }}
          >
            Our content references authoritative sources
          </p>
          <div className="flex justify-center flex-wrap gap-8">
            {[
              "U.S. Mint (usmint.gov)",
              "CFTC (cftc.gov)",
              "SEC (sec.gov)",
              "FTC Consumer Protection",
              "LBMA",
              "COMEX / CME Group",
            ].map((src) => (
              <span
                key={src}
                className="font-sans text-xs font-medium"
                style={{ color: "#888" }}
              >
                {src}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
