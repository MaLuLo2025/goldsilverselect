import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import TickerBanner from "@/components/TickerBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { states } from "@/lib/states";
import { getCitiesByState } from "@/lib/cities";
import { getDealersByState, getOnlineDealers } from "@/lib/dealers";
import { stateContent, isStateContentIndexable } from "@/lib/stateContent";
import type { StateSection } from "@/lib/stateContent";
import DealerList from "@/components/DealerList";
import DealerRatings from "@/components/DealerRatings";
import { isFeatured, truncateAtSentence } from "@/components/DealerCard";

const DEFAULT_SECTION_ORDER: StateSection[] = [
  "intro",
  "buyingTips",
  "salesTax",
  "commonScams",
  "whatToVerify",
];

const SECTION_HEADINGS: Record<StateSection, (stateName: string) => string> = {
  intro: () => "Market Overview",
  buyingTips: (stateName) => `Where to Buy in ${stateName}`,
  salesTax: (stateName) => `${stateName} Sales Tax on Precious Metals`,
  commonScams: (stateName) => `Common Scams Reported in ${stateName}`,
  whatToVerify: (stateName) => `What to Verify Before You Buy in ${stateName}`,
};

export function generateStaticParams() {
  return states.map((s) => ({ state: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { state: string };
}): Metadata {
  const state = states.find((s) => s.slug === params.state);
  if (!state) return {};
  const dealerCount = getDealersByState(params.state).filter(
    (d) => d.vertical !== "online-coin-bullion" && d.vertical !== "gold-silver-ira"
  ).length;
  const thinContent = dealerCount < 3 && !isStateContentIndexable(params.state);
  const description =
    dealerCount === 0 && isStateContentIndexable(params.state)
      ? `${state.name} sales tax on bullion, dealer licensing rules, common scams, and what to verify before you buy or sell precious metals.`
      : `Find trusted precious metals dealers, coin shops, and bullion buyers in ${state.name}. Direct links to dealer websites — no middlemen.`;
  return {
    title: `Coin & Bullion Dealers in ${state.name}`,
    description,
    alternates: { canonical: `/dealers/${params.state}` },
    robots: thinContent
      ? { index: false, follow: true }
      : { index: true, follow: true },
  };
}

export default function StateDealersPage({
  params,
  searchParams,
}: {
  params: { state: string };
  searchParams: { v?: string };
}) {
  const state = states.find((s) => s.slug === params.state);
  if (!state) notFound();

  const verticalFilter = searchParams.v || null;
  const citiesInState = getCitiesByState(params.state);
  const allDealersInState = getDealersByState(params.state);
  const dealersInState = verticalFilter
    ? allDealersInState.filter((d) => d.vertical === verticalFilter)
    : allDealersInState;

  // Group dealers by city
  const dealersByCity: Record<string, typeof dealersInState> = {};
  dealersInState.forEach((d) => {
    if (!dealersByCity[d.citySlug]) dealersByCity[d.citySlug] = [];
    dealersByCity[d.citySlug].push(d);
  });

  return (
    <>
      <TickerBanner />
      <Header />

      {/* Breadcrumb */}
      <div className="max-w-[1100px] mx-auto" style={{ padding: "16px 24px 0" }}>
        <nav className="font-sans text-[12px]" style={{ color: "#999" }}>
          <Link href="/dealers" className="no-underline hover:text-gold" style={{ color: "#999" }}>
            Dealers
          </Link>
          <span className="mx-1.5">›</span>
          <span style={{ color: "#555" }}>{state.name}</span>
        </nav>
      </div>

      {/* Hero */}
      <section
        className="text-center"
        style={{
          padding: "40px 24px 40px",
          background: "linear-gradient(180deg, #FAFAF5 0%, #F5F2EB 100%)",
        }}
      >
        <div className="max-w-[720px] mx-auto">
          <div className="gs-divider" />
          <h1 className="font-serif text-[36px] font-bold text-gray-900 mb-3">
            Precious Metals Dealers in{" "}
            <span className="text-gold">{state.name}</span>
          </h1>
          <p
            className="font-sans text-[15px] leading-relaxed max-w-[520px] mx-auto"
            style={{ color: "#666" }}
          >
            {dealersInState.length} dealer
            {dealersInState.length !== 1 ? "s" : ""} across{" "}
            {citiesInState.length} cit
            {citiesInState.length !== 1 ? "ies" : "y"} in {state.name}. Every
            listing links directly to the dealer&apos;s website.
          </p>
        </div>
      </section>

      {/* Cities + Dealers */}
      <section className="max-w-[1100px] mx-auto" style={{ padding: "40px 24px 64px" }}>
        {citiesInState.length > 0 ? (
          <div className="grid gap-8">
            {citiesInState.map((city) => {
              const cityDealers = dealersByCity[city.slug] || [];
              return (
                <div key={city.slug}>
                  <div className="flex items-baseline justify-between mb-3">
                    <h2 className="font-serif text-[24px] font-bold text-gray-900">
                      {city.name}
                    </h2>
                    <Link
                      href={`/dealers/${params.state}/${city.slug}`}
                      className="font-sans text-[13px] no-underline text-gold font-semibold hover:underline"
                    >
                      View all {city.name} dealers →
                    </Link>
                  </div>
                  {cityDealers.length > 0 ? (
                    <div className="grid grid-cols-2 gap-4">
                      {cityDealers.slice(0, 4).map((dealer) => {
                        const feat = isFeatured(dealer);
                        return (
                          <Link
                            key={dealer.slug}
                            href={`/dealers/${params.state}/${city.slug}/${dealer.slug}`}
                            className="blog-card no-underline block"
                            style={feat ? { borderLeft: "3px solid #C5A44E" } : undefined}
                          >
                            <div className="flex items-center gap-2 mb-1">
                              <span
                                className="font-sans text-[10px] font-bold uppercase inline-block"
                                style={{
                                  letterSpacing: "0.08em",
                                  color: "#1B3D2F",
                                  background: "rgba(27,61,47,0.08)",
                                  padding: "2px 8px",
                                  borderRadius: 3,
                                }}
                              >
                                {dealer.vertical === "local-coin-bullion"
                                  ? "Coins & Bullion"
                                  : dealer.vertical === "jewelry"
                                  ? "Jewelry"
                                  : dealer.vertical === "recycling"
                                  ? "Recycling"
                                  : dealer.vertical}
                              </span>
                              {feat && (
                                <span
                                  className="font-sans text-[9px] font-bold uppercase"
                                  style={{
                                    color: "#C5A44E",
                                    background: "rgba(197,164,78,0.1)",
                                    padding: "2px 7px",
                                    borderRadius: 3,
                                    letterSpacing: "0.06em",
                                  }}
                                >
                                  Featured
                                </span>
                              )}
                            </div>
                            <h4 className="font-serif text-[17px] font-semibold text-gray-900 leading-snug mb-1">
                              {dealer.name}
                            </h4>
                            <p
                              className="font-sans text-[12.5px] leading-relaxed"
                              style={{ color: "#888" }}
                            >
                              {truncateAtSentence(dealer.description, 300)}
                            </p>
                            <DealerRatings dealer={dealer} />
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    <p className="font-sans text-[14px]" style={{ color: "#aaa" }}>
                      Dealers coming soon.
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            {stateContent[params.state] ? (
              <div className="max-w-[760px]">
                {(stateContent[params.state].displayOrder ?? DEFAULT_SECTION_ORDER).map(
                  (section) => {
                    const content = stateContent[params.state][section];
                    if (!content) return null;
                    return (
                      <div key={section} className="mb-6 last:mb-0">
                        <h2
                          className="font-serif text-[20px] font-bold mb-2"
                          style={{ color: "#333" }}
                        >
                          {SECTION_HEADINGS[section](state.name)}
                        </h2>
                        <p
                          className={
                            section === "intro"
                              ? "font-sans text-[16px] leading-relaxed"
                              : "font-sans text-[15px] leading-relaxed"
                          }
                          style={{ color: section === "intro" ? "#444" : "#666" }}
                        >
                          {content}
                        </p>
                      </div>
                    );
                  }
                )}
                {stateContent[params.state].sources &&
                  stateContent[params.state].sources!.length > 0 && (
                    <div
                      className="mt-2 pt-6"
                      style={{ borderTop: "1px solid #e8e5dd" }}
                    >
                      <h3
                        className="font-serif text-[16px] font-bold mb-2"
                        style={{ color: "#333" }}
                      >
                        Sources
                      </h3>
                      <ul className="font-sans text-[13px] leading-relaxed">
                        {stateContent[params.state].sources!.map((source) => (
                          <li key={source.url} className="mb-1">
                            <a
                              href={source.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gold hover:underline"
                            >
                              {source.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="font-serif text-[22px] font-semibold mb-3" style={{ color: "#333" }}>
                  We&apos;re expanding our local directory in {state.name}.
                </p>
                <p className="font-sans text-[16px]" style={{ color: "#555" }}>
                  Browse the online dealers below &mdash; they ship to {state.name} with insured delivery.
                </p>
              </div>
            )}
          </div>
        )}
      </section>

      {/* Online Dealers — always shown */}
      <section className="max-w-[1100px] mx-auto" style={{ padding: "0 24px 64px" }}>
        <div style={{ borderTop: "1px solid #e8e5dd", paddingTop: 32 }}>
          <h2 className="font-serif text-[24px] font-bold text-gold mb-2">
            Online Coin &amp; Bullion Dealers
          </h2>
          <p className="font-sans text-[13px] mb-4" style={{ color: "#888" }}>
            Ship to every address in {state.name} with insured delivery.
          </p>
          <DealerList dealers={getOnlineDealers()} showLink={false} />
        </div>
      </section>

      <Footer />
    </>
  );
}
