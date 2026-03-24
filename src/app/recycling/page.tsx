import { Metadata } from "next";
import Link from "next/link";
import TickerBanner from "@/components/TickerBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDealersByVertical } from "@/lib/dealers";
import { states } from "@/lib/states";
import DealerRatings from "@/components/DealerRatings";

export const metadata: Metadata = {
  title: "Precious Metals Recycling — Sell Gold, Silver & Scrap",
  description:
    "Find precious metals recyclers, refiners, and scrap buyers. Sell inherited jewelry, dental gold, or industrial scrap at fair market value.",
};

export default function RecyclingPage() {
  const recyclers = getDealersByVertical("recycling");

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
            Precious Metals Recycling
          </h1>
          <p className="font-sans text-[16px] leading-relaxed max-w-[560px] mx-auto" style={{ color: "#666" }}>
            Selling inherited jewelry, dental gold, or industrial scrap? Find recyclers and refiners who pay based on current spot prices — not 30 cents on the dollar.
          </p>
        </div>
      </section>

      {/* Warning */}
      <section className="max-w-[900px] mx-auto" style={{ padding: "0 24px" }}>
        <div className="rounded-md" style={{ background: "#1B3D2F", padding: "24px 28px" }}>
          <h3 className="font-serif text-[18px] font-bold text-white mb-2">
            Don&apos;t Sell Your Gold Without Reading This
          </h3>
          <p className="font-sans text-[13.5px] leading-relaxed" style={{ color: "rgba(250,250,245,0.75)" }}>
            Cash-for-gold shops, mall kiosks, and &ldquo;gold parties&rdquo; routinely pay 30–50% of melt value. Before you sell, know the weight and purity of what you have, check the current spot price, and get quotes from at least two buyers. A reputable recycler will test and weigh your metals in front of you and show you how they calculate the offer.
          </p>
        </div>
      </section>

      {/* Recyclers */}
      <section className="max-w-[900px] mx-auto" style={{ padding: "40px 24px 64px" }}>
        <h2 className="font-serif text-[24px] font-bold text-gray-900 mb-4">
          Recyclers &amp; Refiners
        </h2>
        <div className="grid gap-4">
          {recyclers.map((dealer) => (
            <div key={dealer.slug} className="intel-card">
              <div className="flex-1 min-w-0">
                <h3 className="font-serif text-[19px] font-semibold text-gray-900 mb-1">
                  {dealer.name}
                </h3>
                <p className="font-sans text-[13.5px] leading-relaxed mb-2" style={{ color: "#777" }}>
                  {dealer.description}
                </p>
                <DealerRatings dealer={dealer} />
                <span className="font-sans text-[12px]" style={{ color: "#aaa" }}>
                  {dealer.city}, {dealer.state}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Browsing by state */}
        <div className="mt-10">
          <h3 className="font-serif text-[18px] font-bold text-gray-900 mb-3">
            Find Recyclers by State
          </h3>
          <p className="font-sans text-[14px] mb-4" style={{ color: "#888" }}>
            Browse our full dealer directory to find recyclers and scrap buyers near you.
          </p>
          <Link href="/dealers" className="btn-outline no-underline inline-block">
            Browse All States
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
