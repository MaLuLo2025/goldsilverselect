import { Metadata } from "next";
import TickerBanner from "@/components/TickerBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getOnlineDealers } from "@/lib/dealers";
import DealerRatings from "@/components/DealerRatings";
import { isFeatured, truncateAtSentence } from "@/components/DealerCard";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Online Coin & Bullion Dealers",
  description:
    "Reputable online precious metals dealers with transparent pricing, buyback programs, and secure shipping. Compare dealers side by side.",
};

export default function OnlineDealersPage() {
  const dealers = getOnlineDealers();
  const featuredDealers = dealers.filter(isFeatured);
  const standardDealers = dealers.filter((d) => !isFeatured(d));

  const renderCard = (dealer: typeof dealers[number], featured: boolean) => (
    <div
      key={dealer.slug}
      className="intel-card"
      style={featured ? { borderLeft: "3px solid #C5A44E" } : undefined}
    >
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="font-serif text-[20px] font-semibold text-gray-900">
            {dealer.name}
          </h3>
          {featured && (
            <span
              className="font-sans text-[9px] font-bold uppercase"
              style={{
                color: "#C5A44E",
                background: "rgba(197,164,78,0.1)",
                padding: "2px 7px",
                borderRadius: 3,
                letterSpacing: "0.06em",
                flexShrink: 0,
              }}
            >
              Featured
            </span>
          )}
        </div>
        <p className="font-sans text-[13px] leading-relaxed mb-1.5" style={{ color: "#777" }}>
          {truncateAtSentence(dealer.description, 300)}
        </p>
        <DealerRatings dealer={dealer} />
        {dealer.website && (
          <Link
            href={dealer.website}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-[12px] text-gold font-semibold no-underline hover:underline mt-1.5 inline-block"
          >
            {dealer.website.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")} &rarr;
          </Link>
        )}
      </div>
    </div>
  );

  return (
    <>
      <TickerBanner />
      <Header />

      <section
        className="text-center"
        style={{
          padding: "56px 24px 48px",
          background: "linear-gradient(180deg, #FAFAF5 0%, #F5F2EB 100%)",
        }}
      >
        <div className="max-w-[720px] mx-auto">
          <div className="gs-divider" />
          <h1 className="font-serif text-[38px] font-bold text-gray-900 mb-3">
            Online Coin &amp; Bullion Dealers
          </h1>
          <p className="font-sans text-[16px] leading-relaxed max-w-[560px] mx-auto" style={{ color: "#666" }}>
            Web-based dealers that ship directly to your door. Compare pricing, shipping policies, and buyback programs. Every link goes to the dealer&apos;s own site.
          </p>
        </div>
      </section>

      <section className="max-w-[900px] mx-auto" style={{ padding: "40px 24px 64px" }}>
        {featuredDealers.length > 0 && (
          <div className="mb-8">
            <h3
              className="font-sans text-[11px] font-bold uppercase mb-3"
              style={{ color: "#C5A44E", letterSpacing: "0.08em" }}
            >
              Featured Dealers
            </h3>
            <div className="grid gap-3">
              {featuredDealers.map((d) => renderCard(d, true))}
            </div>
          </div>
        )}

        {standardDealers.length > 0 && (
          <div>
            {featuredDealers.length > 0 && (
              <h3
                className="font-sans text-[11px] font-bold uppercase mb-3"
                style={{ color: "#888", letterSpacing: "0.08em" }}
              >
                All Dealers
              </h3>
            )}
            <div className="grid gap-3">
              {standardDealers.map((d) => renderCard(d, false))}
            </div>
          </div>
        )}

        <div className="mt-10 rounded-md" style={{ background: "rgba(197,164,78,0.06)", border: "1px solid rgba(197,164,78,0.15)", padding: "20px 24px" }}>
          <p className="font-sans text-[13px] leading-relaxed" style={{ color: "#888" }}>
            <span className="font-semibold text-gold">Before you buy online:</span> Compare the all-in cost — price per ounce plus shipping plus insurance. Wire transfer discounts can save 2&ndash;4% versus credit card pricing. Check the dealer&apos;s buyback policy before purchasing — the spread between buy and sell matters more than the initial premium.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
