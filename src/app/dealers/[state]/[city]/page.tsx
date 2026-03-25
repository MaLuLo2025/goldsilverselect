import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import TickerBanner from "@/components/TickerBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { states } from "@/lib/states";
import { getCityBySlug } from "@/lib/cities";
import { getDealersByCity, getOnlineDealers, getIRAProviders, getDealersByVertical } from "@/lib/dealers";
import DealerList from "@/components/DealerList";

export function generateMetadata({
  params,
}: {
  params: { state: string; city: string };
}): Metadata {
  const state = states.find((s) => s.slug === params.state);
  const city = getCityBySlug(params.state, params.city);
  if (!state || !city) return {};
  return {
    title: `Precious Metals Dealers in ${city.name}, ${state.name}`,
    description: `Find coin shops, bullion dealers, jewelers, and gold buyers in ${city.name}, ${state.name}. Direct links to dealer websites.`,
  };
}

const verticalLabels: Record<string, string> = {
  "local-coin-bullion": "Coins & Bullion",
  "online-coin-bullion": "Online Dealers",
  "gold-silver-ira": "Gold & Silver IRAs",
  recycling: "Recycling",
  jewelry: "Jewelry",
};

export default function CityDealersPage({
  params,
  searchParams,
}: {
  params: { state: string; city: string };
  searchParams: { v?: string };
}) {
  const state = states.find((s) => s.slug === params.state);
  const city = getCityBySlug(params.state, params.city);
  if (!state || !city) notFound();

  const verticalFilter = searchParams.v || null;
  const allCityDealers = getDealersByCity(params.state, params.city);
  const cityDealers = verticalFilter
    ? allCityDealers.filter((d) => d.vertical === verticalFilter)
    : allCityDealers;
  const onlineDealers = getOnlineDealers();
  const iraProviders = getIRAProviders();

  // Active vertical label for filtered view
  const filterLabel = verticalFilter ? verticalLabels[verticalFilter] || null : null;

  // Group by vertical
  const byVertical: Record<string, typeof cityDealers> = {};
  cityDealers.forEach((d) => {
    if (!byVertical[d.vertical]) byVertical[d.vertical] = [];
    byVertical[d.vertical].push(d);
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
          <Link
            href={`/dealers/${params.state}`}
            className="no-underline hover:text-gold"
            style={{ color: "#999" }}
          >
            {state.name}
          </Link>
          <span className="mx-1.5">›</span>
          <span style={{ color: "#555" }}>{city.name}</span>
        </nav>
      </div>

      {/* Hero */}
      <section
        className="text-center"
        style={{
          padding: "40px 24px",
          background: "linear-gradient(180deg, #FAFAF5 0%, #F5F2EB 100%)",
        }}
      >
        <div className="max-w-[720px] mx-auto">
          <div className="gs-divider" />
          <h1 className="font-serif text-[34px] font-bold text-gray-900 mb-3">
            {filterLabel || "Precious Metals Dealers"} in{" "}
            <span className="text-gold">
              {city.name}, {state.name}
            </span>
          </h1>
          <p
            className="font-sans text-[15px] leading-relaxed max-w-[520px] mx-auto"
            style={{ color: "#666" }}
          >
            {cityDealers.length} {filterLabel ? filterLabel.toLowerCase() : "dealer"}
            {cityDealers.length !== 1 && !filterLabel ? "s" : ""}{" "}
            {filterLabel ? "listing" : ""}{cityDealers.length !== 1 && filterLabel ? "s" : ""} in {city.name}.
            {!filterLabel && " Coin shops, bullion dealers, jewelers, and recyclers \u2014 all with direct links."}
          </p>
          {verticalFilter && (
            <Link
              href={`/dealers/${params.state}/${params.city}`}
              className="font-sans text-[13px] text-gold font-semibold no-underline hover:underline inline-block mt-2"
            >
              Show all categories in {city.name} &rarr;
            </Link>
          )}
        </div>
      </section>

      {/* Vertical description — shown when a vertical filter is active */}
      {verticalFilter && (
        <section className="max-w-[1100px] mx-auto" style={{ padding: "0 24px" }}>
          <div
            className="rounded-md"
            style={{ background: "rgba(197,164,78,0.06)", border: "1px solid rgba(197,164,78,0.15)", padding: "20px 24px" }}
          >
            <p className="font-sans text-[14px] leading-relaxed" style={{ color: "#666" }}>
              {verticalFilter === "jewelry" && "Independent shops in your area that buy, sell, and craft gold and silver jewelry. These are local goldsmiths, silversmiths, estate jewelers, and precious metals specialists \u2014 not chain stores or pawn shops. Whether you\u2019re looking to sell inherited jewelry, commission a custom piece, or find estate gold and silver at fair prices, these shops work directly with precious metals every day."}
              {verticalFilter === "local-coin-bullion" && "Brick-and-mortar coin shops and bullion dealers you can walk into, inspect inventory, and transact in person. Every shop in our directory is an established, independent dealer \u2014 not a franchise, not a cash-for-gold kiosk. We verify addresses, check BBB profiles, and write every description ourselves."}
              {verticalFilter === "recycling" && "Vetted recyclers, refiners, and precious metals buyers who pay based on current spot prices \u2014 not the 30 cents on the dollar you\u2019ll get at a mall kiosk. These are established operations with transparent testing, published buy rates, and a track record of fair dealing."}
            </p>
          </div>
        </section>
      )}

      {/* Dealers by vertical */}
      <section className="max-w-[1100px] mx-auto" style={{ padding: "40px 24px 64px" }}>
        {Object.keys(byVertical).length > 0 ? (
          Object.entries(byVertical).map(([vertical, vDealers]) => (
            <div key={vertical} className="mb-10">
              <h2 className="font-serif text-[22px] font-bold text-gold mb-4">
                {verticalLabels[vertical] || vertical}
              </h2>
              <DealerList
                dealers={vDealers}
                linkPrefix={`/dealers/${params.state}/${params.city}`}
              />
            </div>
          ))
        ) : (
          <div className="text-center py-8">
            <p className="font-serif text-[22px] font-semibold mb-3" style={{ color: "#333" }}>
              {filterLabel
                ? `We don\u2019t have local ${filterLabel.toLowerCase()} in ${city.name} yet.`
                : `No local dealer listings in ${city.name} yet.`}
            </p>
            <p className="font-sans text-[16px] mb-0" style={{ color: "#555" }}>
              {verticalFilter
                ? "Browse the online options below, or check back as we expand our directory."
                : <>Browse the online dealers below or check nearby cities in{" "}
                    <Link href={`/dealers/${params.state}`} className="text-gold font-semibold no-underline hover:underline">
                      {state.name}
                    </Link>.</>}
            </p>
          </div>
        )}

        {/* Online sections — filtered to match the active vertical */}
        {(() => {
          // When a vertical filter is active, only show online vendors in THAT vertical
          if (verticalFilter) {
            const onlineInVertical = getDealersByVertical(verticalFilter).filter(
              (d) => !d.address && (!d.citySlug || d.citySlug !== params.city)
            );
            if (onlineInVertical.length > 0) {
              return (
                <div className="mb-10">
                  <div style={{ borderTop: "1px solid #e8e5dd", paddingTop: 32, marginTop: Object.keys(byVertical).length > 0 ? 16 : 0 }}>
                    <h2 className="font-serif text-[22px] font-bold text-gold mb-2">
                      Online {filterLabel}
                    </h2>
                    <p className="font-sans text-[13px] mb-4" style={{ color: "#888" }}>
                      National services available in {state.name}.
                    </p>
                    <DealerList dealers={onlineInVertical} showLink={false} />
                  </div>
                </div>
              );
            }
            return null;
          }

          // No filter: show all online sections
          return (
            <>
              {onlineDealers.length > 0 && (
                <div className="mb-10">
                  <div style={{ borderTop: "1px solid #e8e5dd", paddingTop: 32, marginTop: Object.keys(byVertical).length > 0 ? 16 : 0 }}>
                    <h2 className="font-serif text-[22px] font-bold text-gold mb-2">
                      Online Coin &amp; Bullion Dealers
                    </h2>
                    <p className="font-sans text-[13px] mb-4" style={{ color: "#888" }}>
                      Ship to {city.name} and everywhere in {state.name} with insured delivery.
                    </p>
                    <DealerList dealers={onlineDealers} showLink={false} />
                  </div>
                </div>
              )}
              {iraProviders.length > 0 && (
                <div className="mb-10">
                  <h2 className="font-serif text-[22px] font-bold text-gold mb-2">
                    Gold &amp; Silver IRA Providers
                  </h2>
                  <p className="font-sans text-[13px] mb-4" style={{ color: "#888" }}>
                    National providers serving all states.
                  </p>
                  <DealerList dealers={iraProviders} showLink={false} />
                </div>
              )}
            </>
          );
        })()}
      </section>

      <Footer />
    </>
  );
}
