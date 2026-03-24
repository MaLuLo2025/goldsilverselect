import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import TickerBanner from "@/components/TickerBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { states } from "@/lib/states";
import { getCityBySlug } from "@/lib/cities";
import { getDealersByCity } from "@/lib/dealers";

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
        {Object.entries(byVertical).map(([vertical, vDealers]) => (
          <div key={vertical} className="mb-10">
            <h2 className="font-serif text-[22px] font-bold text-gold mb-4">
              {verticalLabels[vertical] || vertical}
            </h2>
            <div className="grid gap-4">
              {vDealers.map((dealer) => (
                <Link
                  key={dealer.slug}
                  href={`/dealers/${params.state}/${params.city}/${dealer.slug}`}
                  className="intel-card no-underline"
                >
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-[19px] font-semibold text-gray-900 mb-1">
                      {dealer.name}
                    </h3>
                    <p
                      className="font-sans text-[13.5px] leading-relaxed mb-2"
                      style={{ color: "#777" }}
                    >
                      {dealer.description}
                    </p>
                    <div className="flex gap-4 flex-wrap">
                      {dealer.address && (
                        <span
                          className="font-sans text-[12px]"
                          style={{ color: "#aaa" }}
                        >
                          📍 {dealer.address}
                        </span>
                      )}
                      {dealer.phone && (
                        <span
                          className="font-sans text-[12px]"
                          style={{ color: "#aaa" }}
                        >
                          📞 {dealer.phone}
                        </span>
                      )}
                    </div>
                  </div>
                  <div
                    className="flex-shrink-0 self-center text-lg"
                    style={{ color: "#ccc" }}
                  >
                    →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>

      <Footer />
    </>
  );
}
