import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import TickerBanner from "@/components/TickerBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { states } from "@/lib/states";
import { getCityBySlug } from "@/lib/cities";
import { getDealersByCity, getOnlineDealers, getIRAProviders } from "@/lib/dealers";
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
}: {
  params: { state: string; city: string };
}) {
  const state = states.find((s) => s.slug === params.state);
  const city = getCityBySlug(params.state, params.city);
  if (!state || !city) notFound();

  const cityDealers = getDealersByCity(params.state, params.city);
  const onlineDealers = getOnlineDealers();
  const iraProviders = getIRAProviders();

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
            Precious Metals Dealers in{" "}
            <span className="text-gold">
              {city.name}, {state.name}
            </span>
          </h1>
          <p
            className="font-sans text-[15px] leading-relaxed max-w-[520px] mx-auto"
            style={{ color: "#666" }}
          >
            {cityDealers.length} dealer
            {cityDealers.length !== 1 ? "s" : ""} in {city.name}. Coin shops,
            bullion dealers, jewelers, and recyclers — all with direct links.
          </p>
        </div>
      </section>

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
              No local dealer listings in {city.name} yet.
            </p>
            <p className="font-sans text-[16px] mb-0" style={{ color: "#555" }}>
              Browse the online dealers below or check nearby cities in{" "}
              <Link
                href={`/dealers/${params.state}`}
                className="text-gold font-semibold no-underline hover:underline"
              >
                {state.name}
              </Link>
              .
            </p>
          </div>
        )}

        {/* Online Dealers section */}
        {onlineDealers.length > 0 && (
          <div className="mb-10">
            <div
              style={{ borderTop: "1px solid #e8e5dd", paddingTop: 32, marginTop: Object.keys(byVertical).length > 0 ? 16 : 0 }}
            >
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

        {/* IRA Providers section */}
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
      </section>

      <Footer />
    </>
  );
}
