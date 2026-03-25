import { Metadata } from "next";
import Link from "next/link";
import TickerBanner from "@/components/TickerBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { states } from "@/lib/states";

export const metadata: Metadata = {
  title: "Find Local Coin & Bullion Dealers by State",
  description:
    "Browse trusted local precious metals dealers across the United States. Find coin shops, bullion dealers, and gold buyers near you.",
};

export default function DealersPage() {
  // Group states by first letter
  const grouped: Record<string, typeof states> = {};
  states.forEach((s) => {
    const letter = s.name[0];
    if (!grouped[letter]) grouped[letter] = [];
    grouped[letter].push(s);
  });

  return (
    <>
      <TickerBanner />
      <Header />

      {/* Hero */}
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
            Local Coin &amp; Bullion Dealers
          </h1>
          <p
            className="font-sans text-[16px] leading-relaxed max-w-[560px] mx-auto"
            style={{ color: "#666" }}
          >
            Find brick-and-mortar precious metals dealers in your state. Every
            listing links directly to the dealer — no middlemen, no lead forms.
          </p>
        </div>
      </section>

      <section className="max-w-[900px] mx-auto" style={{ padding: "0 24px 16px" }}>
        <div
          className="rounded-md"
          style={{ background: "rgba(197,164,78,0.06)", border: "1px solid rgba(197,164,78,0.15)", padding: "20px 24px" }}
        >
          <p className="font-sans text-[14px] leading-relaxed" style={{ color: "#666" }}>
            Brick-and-mortar coin shops and bullion dealers you can walk into, inspect inventory, and transact in person. Every shop in our directory is an established, independent dealer &mdash; not a franchise, not a cash-for-gold kiosk. We verify addresses, check BBB profiles, and write every description ourselves. If you&apos;re buying your first gold coin or selling a collection, these are the local professionals worth talking to.
          </p>
        </div>
      </section>

      {/* State grid */}
      <section className="max-w-[1100px] mx-auto" style={{ padding: "48px 24px 64px" }}>
        <div className="grid grid-cols-4 gap-x-10 gap-y-6">
          {Object.entries(grouped).map(([letter, stateList]) => (
            <div key={letter}>
              <h3
                className="font-serif text-[22px] font-bold text-gold mb-2"
                style={{ borderBottom: "2px solid #e8e5dd", paddingBottom: 6 }}
              >
                {letter}
              </h3>
              {stateList.map((s) => (
                <Link
                  key={s.slug}
                  href={`/dealers/${s.slug}`}
                  className="block text-[14px] font-sans no-underline py-1 transition-colors duration-200 hover:text-gold"
                  style={{ color: "#555" }}
                >
                  {s.name}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Trust note */}
      <section
        className="text-center border-t border-border"
        style={{ background: "#F5F2EB", padding: "36px 24px" }}
      >
        <p
          className="font-sans text-[13px] max-w-[600px] mx-auto leading-relaxed"
          style={{ color: "#888" }}
        >
          All dealer descriptions are factual only — certifications, services,
          and location. We do not accept paid placements or endorse any specific
          dealer. Outbound links go directly to each dealer&apos;s own website.
        </p>
      </section>

      <Footer />
    </>
  );
}
