import { Metadata } from "next";
import Link from "next/link";
import TickerBanner from "@/components/TickerBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDealersByVertical } from "@/lib/dealers";

export const metadata: Metadata = {
  title: "Jewelry Stores & Custom Jewelers",
  description:
    "Find local jewelers, estate jewelry specialists, and custom designers working in gold, silver, and platinum. Independent directory — no paid placements.",
};

export default function JewelryPage() {
  const jewelers = getDealersByVertical("jewelry");

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
            Jewelry Stores &amp; Custom Jewelers
          </h1>
          <p className="font-sans text-[16px] leading-relaxed max-w-[560px] mx-auto" style={{ color: "#666" }}>
            Local jewelers, estate jewelry specialists, and custom designers working in gold, silver, and platinum. From engagement rings to heirloom restoration.
          </p>
        </div>
      </section>

      <section className="max-w-[900px] mx-auto" style={{ padding: "40px 24px 64px" }}>
        <div className="grid gap-4">
          {jewelers.map((dealer) => (
            <div key={dealer.slug} className="intel-card">
              <div className="flex-1 min-w-0">
                <h3 className="font-serif text-[19px] font-semibold text-gray-900 mb-1">
                  {dealer.name}
                </h3>
                <p className="font-sans text-[13.5px] leading-relaxed mb-2" style={{ color: "#777" }}>
                  {dealer.description}
                </p>
                <div className="flex gap-4 flex-wrap">
                  {dealer.address && (
                    <span className="font-sans text-[12px]" style={{ color: "#aaa" }}>
                      📍 {dealer.address}
                    </span>
                  )}
                  {dealer.phone && (
                    <span className="font-sans text-[12px]" style={{ color: "#aaa" }}>
                      📞 {dealer.phone}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <h3 className="font-serif text-[18px] font-bold text-gray-900 mb-3">
            Find Jewelers by State
          </h3>
          <Link href="/dealers" className="btn-outline no-underline inline-block">
            Browse All States
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
