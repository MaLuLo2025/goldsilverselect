import { Metadata } from "next";
import Link from "next/link";
import TickerBanner from "@/components/TickerBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getIRAProviders } from "@/lib/dealers";
import DealerList from "@/components/DealerList";
import TrackedListingMount from "@/components/TrackedListingMount";

export const metadata: Metadata = {
  title: "Gold & Silver IRA Providers",
  description:
    "Independent directory of precious metals IRA custodians. Know the fees, understand the rules, and choose with confidence. No paid placements.",
};

export default function IRAPage() {
  const providers = getIRAProviders();

  return (
    <>
      <TrackedListingMount category="gold-silver-ira" resultCount={providers.length} />
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
            Gold &amp; Silver IRA Providers
          </h1>
          <p className="font-sans text-[16px] leading-relaxed max-w-[560px] mx-auto" style={{ color: "#666" }}>
            Self-directed precious metals retirement accounts. This is the vertical with the most scams — read our warnings before you sign anything.
          </p>
        </div>
      </section>

      <section className="max-w-[900px] mx-auto" style={{ padding: "0 24px 16px" }}>
        <div
          className="rounded-md"
          style={{ background: "rgba(197,164,78,0.06)", border: "1px solid rgba(197,164,78,0.15)", padding: "20px 24px" }}
        >
          <p className="font-sans text-[14px] leading-relaxed" style={{ color: "#666" }}>
            Self-directed precious metals IRAs are a legitimate product &mdash; but the industry that sells them is one of the most aggressively marketed corners of the financial world. We list IRA providers with factual descriptions only. We do not receive referral fees, we do not endorse any provider, and we strongly recommend reading our warnings below before contacting any company. Know the fees before you sign anything.
          </p>
        </div>
      </section>

      {/* Warning box */}
      <section className="max-w-[900px] mx-auto" style={{ padding: "0 24px" }}>
        <div className="rounded-md" style={{ background: "#1B3D2F", padding: "28px 32px" }}>
          <h3 className="font-serif text-[20px] font-bold text-white mb-2">
            ⚠️ Read This Before Contacting Any IRA Company
          </h3>
          <div className="font-sans text-[13.5px] leading-relaxed" style={{ color: "rgba(250,250,245,0.75)" }}>
            <p className="mb-3">
              The gold IRA industry is rife with high-pressure phone sales, misleading fee structures, and bait-and-switch tactics. Common red flags include:
            </p>
            <p className="mb-2">
              <span className="text-gold font-semibold">Undisclosed fees</span> — Setup fees, annual storage fees, insurance fees, and transaction fees that aren&apos;t clearly stated upfront.
            </p>
            <p className="mb-2">
              <span className="text-gold font-semibold">Numismatic coin upsells</span> — Steering you toward &ldquo;collectible&rdquo; coins with 50–200% markups instead of standard bullion.
            </p>
            <p className="mb-2">
              <span className="text-gold font-semibold">Celebrity endorsements</span> — A famous spokesperson does not make a company trustworthy.
            </p>
            <p>
              <span className="text-gold font-semibold">Urgency tactics</span> — &ldquo;Gold is about to spike&rdquo; or &ldquo;This offer expires today&rdquo; are sales tactics, not market analysis.
            </p>
          </div>
        </div>
      </section>

      {/* Providers */}
      <section className="max-w-[900px] mx-auto" style={{ padding: "40px 24px 64px" }}>
        <h2 className="font-serif text-[24px] font-bold text-gray-900 mb-4">
          IRA Providers Directory
        </h2>
        <DealerList dealers={providers} showLink={false} />

        {/* Authority links */}
        <div className="mt-10">
          <h3 className="font-serif text-[18px] font-bold text-gray-900 mb-3">
            Research &amp; Regulatory Resources
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "IRS: Retirement Topics — IRA Contribution Limits", url: "https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-ira-contribution-limits" },
              { label: "SEC: Investor Alert — Self-Directed IRAs", url: "https://www.sec.gov/investor/alerts/sdira.html" },
              { label: "CFTC: Precious Metals Fraud Advisory", url: "https://www.cftc.gov/LearnAndProtect/AdvisoriesAndArticles/fraudadv_preciousmetals.html" },
              { label: "FTC: Bullion and Bullion Coins", url: "https://consumer.ftc.gov/articles/bullion-and-bullion-coins" },
            ].map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="blog-card no-underline block"
              >
                <span className="font-sans text-[13px] font-medium text-gold">
                  {link.label} ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
