import { Metadata } from "next";
import Link from "next/link";
import TickerBanner from "@/components/TickerBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDealersByVertical } from "@/lib/dealers";
import DealerList from "@/components/DealerList";

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
            Specialized Jewelry Stores &amp; Custom Jewelers
          </h1>
          <p className="font-sans text-[16px] leading-relaxed max-w-[560px] mx-auto" style={{ color: "#666" }}>
            Independent shops in your area that buy, sell, and craft gold and silver jewelry. These are local goldsmiths, silversmiths, estate jewelers, and precious metals specialists &mdash; not chain stores or pawn shops. Whether you&apos;re looking to sell inherited jewelry, commission a custom piece, or find estate gold and silver at fair prices, these shops work directly with precious metals every day.
          </p>
        </div>
      </section>

      <section className="max-w-[900px] mx-auto" style={{ padding: "40px 24px 64px" }}>
        <div
          className="rounded-md mb-10"
          style={{ background: "rgba(197,164,78,0.06)", border: "1px solid rgba(197,164,78,0.15)", padding: "20px 24px" }}
        >
          <p className="font-sans text-[14px] leading-relaxed" style={{ color: "#666" }}>
            Independent shops in your area that buy, sell, and craft gold and silver jewelry. These are local goldsmiths, silversmiths, estate jewelers, and precious metals specialists &mdash; not chain stores or pawn shops. Whether you&apos;re looking to sell inherited jewelry, commission a custom piece, or find estate gold and silver at fair prices, these shops work directly with precious metals every day.
          </p>
        </div>
        <DealerList dealers={jewelers} showLink={false} />

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
