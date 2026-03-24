import { Metadata } from "next";
import TickerBanner from "@/components/TickerBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getOnlineDealers } from "@/lib/dealers";

export const metadata: Metadata = {
  title: "Online Coin & Bullion Dealers",
  description:
    "Reputable online precious metals dealers with transparent pricing, buyback programs, and secure shipping. Compare dealers side by side.",
};

export default function OnlineDealersPage() {
  const dealers = getOnlineDealers();

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
        <div className="grid gap-4">
          {dealers.map((dealer) => (
            <div key={dealer.slug} className="intel-card">
              <div className="flex-1 min-w-0">
                <h3 className="font-serif text-[20px] font-semibold text-gray-900 mb-1">
                  {dealer.name}
                </h3>
                <p className="font-sans text-[13.5px] leading-relaxed mb-3" style={{ color: "#777" }}>
                  {dealer.description}
                </p>
                {dealer.website && (
                  <a
                    href={dealer.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-[13px] text-gold font-semibold no-underline hover:underline"
                  >
                    Visit Website →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-md" style={{ background: "rgba(197,164,78,0.06)", border: "1px solid rgba(197,164,78,0.15)", padding: "20px 24px" }}>
          <p className="font-sans text-[13px] leading-relaxed" style={{ color: "#888" }}>
            <span className="font-semibold text-gold">Before you buy online:</span> Compare the all-in cost — price per ounce plus shipping plus insurance. Wire transfer discounts can save 2–4% versus credit card pricing. Check the dealer&apos;s buyback policy before purchasing — the spread between buy and sell matters more than the initial premium.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
