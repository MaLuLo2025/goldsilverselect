import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import TickerBanner from "@/components/TickerBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { states } from "@/lib/states";
import { getCityBySlug } from "@/lib/cities";
import { getDealerBySlug } from "@/lib/dealers";

export function generateMetadata({
  params,
}: {
  params: { state: string; city: string; dealer: string };
}): Metadata {
  const dealer = getDealerBySlug(params.state, params.city, params.dealer);
  if (!dealer) return {};
  return {
    title: `${dealer.name} — ${dealer.city}, ${dealer.state}`,
    description: dealer.description,
  };
}

const verticalLabels: Record<string, string> = {
  "local-coin-bullion": "Coin & Bullion Dealer",
  "online-coin-bullion": "Online Dealer",
  "gold-silver-ira": "Gold & Silver IRA",
  recycling: "Precious Metals Recycler",
  jewelry: "Jeweler",
};

export default function DealerDetailPage({
  params,
}: {
  params: { state: string; city: string; dealer: string };
}) {
  const state = states.find((s) => s.slug === params.state);
  const city = getCityBySlug(params.state, params.city);
  const dealer = getDealerBySlug(params.state, params.city, params.dealer);
  if (!state || !city || !dealer) notFound();

  // Schema.org LocalBusiness
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: dealer.name,
    description: dealer.description,
    ...(dealer.address && {
      address: {
        "@type": "PostalAddress",
        streetAddress: dealer.address.split(",")[0]?.trim(),
        addressLocality: dealer.city,
        addressRegion: dealer.state,
      },
    }),
    ...(dealer.phone && { telephone: dealer.phone }),
    ...(dealer.website && { url: dealer.website }),
  };

  return (
    <>
      <TickerBanner />
      <Header />

      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Breadcrumb */}
      <div className="max-w-[900px] mx-auto" style={{ padding: "16px 24px 0" }}>
        <nav className="font-sans text-[12px]" style={{ color: "#999" }}>
          <Link href="/dealers" className="no-underline hover:text-gold" style={{ color: "#999" }}>
            Dealers
          </Link>
          <span className="mx-1.5">›</span>
          <Link href={`/dealers/${params.state}`} className="no-underline hover:text-gold" style={{ color: "#999" }}>
            {state.name}
          </Link>
          <span className="mx-1.5">›</span>
          <Link href={`/dealers/${params.state}/${params.city}`} className="no-underline hover:text-gold" style={{ color: "#999" }}>
            {city.name}
          </Link>
          <span className="mx-1.5">›</span>
          <span style={{ color: "#555" }}>{dealer.name}</span>
        </nav>
      </div>

      {/* Dealer detail */}
      <section className="max-w-[900px] mx-auto" style={{ padding: "32px 24px 64px" }}>
        {/* Vertical tag */}
        <span
          className="font-sans text-[10px] font-bold uppercase inline-block mb-4"
          style={{
            letterSpacing: "0.08em",
            color: "#C5A44E",
            background: "rgba(197,164,78,0.1)",
            padding: "3px 10px",
            borderRadius: 3,
          }}
        >
          {verticalLabels[dealer.vertical] || dealer.vertical}
        </span>

        <h1 className="font-serif text-[36px] font-bold text-gray-900 mb-2">
          {dealer.name}
        </h1>
        <p className="font-sans text-[15px] mb-6" style={{ color: "#888" }}>
          {dealer.city}, {dealer.state}
        </p>

        {/* Info card */}
        <div
          className="rounded-md mb-8"
          style={{
            background: "#fff",
            border: "1px solid #e8e5dd",
            padding: "28px 32px",
          }}
        >
          <p
            className="font-sans text-[15px] leading-relaxed mb-6"
            style={{ color: "#555" }}
          >
            {dealer.description}
          </p>

          <div className="grid grid-cols-2 gap-4">
            {dealer.address && (
              <div>
                <h4
                  className="font-sans text-[11px] font-bold uppercase mb-1"
                  style={{ color: "#C5A44E", letterSpacing: "0.08em" }}
                >
                  Address
                </h4>
                <p className="font-sans text-[14px]" style={{ color: "#555" }}>
                  {dealer.address}
                </p>
              </div>
            )}
            {dealer.phone && (
              <div>
                <h4
                  className="font-sans text-[11px] font-bold uppercase mb-1"
                  style={{ color: "#C5A44E", letterSpacing: "0.08em" }}
                >
                  Phone
                </h4>
                <p className="font-sans text-[14px]" style={{ color: "#555" }}>
                  {dealer.phone}
                </p>
              </div>
            )}
          </div>

          {dealer.website && (
            <div className="mt-6">
              <a
                href={dealer.website}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-block no-underline"
                style={{ padding: "12px 28px", fontSize: 13 }}
              >
                Visit Dealer Website →
              </a>
            </div>
          )}
        </div>

        {/* Disclaimer */}
        <div
          className="rounded-md"
          style={{
            background: "rgba(197,164,78,0.06)",
            border: "1px solid rgba(197,164,78,0.15)",
            padding: "16px 20px",
          }}
        >
          <p
            className="font-sans text-[12px] leading-relaxed"
            style={{ color: "#999" }}
          >
            GoldSilverSelect is an independent directory. This listing is based
            on publicly available information. We do not endorse, recommend, or
            guarantee the services of any dealer. Verify all information
            directly with the dealer before transacting.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
