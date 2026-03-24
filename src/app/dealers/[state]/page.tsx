import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import TickerBanner from "@/components/TickerBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { states } from "@/lib/states";
import { getCitiesByState } from "@/lib/cities";
import { getDealersByState } from "@/lib/dealers";
import DealerRatings from "@/components/DealerRatings";

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
  return {
    title: `Coin & Bullion Dealers in ${state.name}`,
    description: `Find trusted precious metals dealers, coin shops, and bullion buyers in ${state.name}. Direct links to dealer websites — no middlemen.`,
  };
}

export default function StateDealersPage({
  params,
}: {
  params: { state: string };
}) {
  const state = states.find((s) => s.slug === params.state);
  if (!state) notFound();

  const citiesInState = getCitiesByState(params.state);
  const dealersInState = getDealersByState(params.state);

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
                      {cityDealers.slice(0, 4).map((dealer) => (
                        <Link
                          key={dealer.slug}
                          href={`/dealers/${params.state}/${city.slug}/${dealer.slug}`}
                          className="blog-card no-underline block"
                        >
                          <span
                            className="font-sans text-[10px] font-bold uppercase mb-1.5 inline-block"
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
                          <h4 className="font-serif text-[17px] font-semibold text-gray-900 leading-snug mb-1">
                            {dealer.name}
                          </h4>
                          <p
                            className="font-sans text-[12.5px] leading-relaxed"
                            style={{ color: "#888" }}
                          >
                            {dealer.description.slice(0, 120)}
                            {dealer.description.length > 120 ? "..." : ""}
                          </p>
                          <DealerRatings dealer={dealer} />
                        </Link>
                      ))}
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
          <div className="text-center py-12">
            <p className="font-sans text-[16px]" style={{ color: "#999" }}>
              We&apos;re building out dealer listings for {state.name}. Check
              back soon.
            </p>
          </div>
        )}
      </section>

      <Footer />
    </>
  );
}
