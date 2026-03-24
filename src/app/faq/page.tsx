import { Metadata } from "next";
import TickerBanner from "@/components/TickerBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQContent from "@/components/FAQContent";
import { faqCategories } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Gold & Silver FAQ \u2014 Your Questions Answered",
  description:
    "Answers to the most common questions about buying, selling, and pricing gold and silver. Understand premiums, spot prices, dealer selection, and how to avoid overpaying.",
};

export default function FAQPage() {
  // Build FAQPage schema
  const schemaQuestions = faqCategories.flatMap((cat) =>
    cat.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    }))
  );

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: schemaQuestions,
  };

  return (
    <>
      <TickerBanner />
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section
        className="text-center"
        style={{
          padding: "56px 24px 0",
          background: "linear-gradient(180deg, #FAFAF5 0%, #F5F2EB 100%)",
        }}
      >
        <div className="max-w-[720px] mx-auto">
          <div className="gs-divider" />
          <h1 className="font-serif text-[38px] font-bold text-gray-900 mb-3">
            Gold &amp; Silver FAQ
          </h1>
          <p
            className="font-sans text-[16px] leading-relaxed max-w-[580px] mx-auto"
            style={{ color: "#666" }}
          >
            <strong>Straight answers to the questions that matter most.</strong>{" "}
            Whether you&apos;re buying your first ounce or selling an inherited
            collection, we&apos;ve compiled the questions we hear most — and
            answered them without the sales pitch.
          </p>
        </div>
      </section>

      <FAQContent />

      {/* Footer note */}
      <section className="max-w-[800px] mx-auto" style={{ padding: "0 24px 64px" }}>
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
            style={{ color: "#999", fontStyle: "italic" }}
          >
            GoldSilverSelect.com is an independent directory of local and online
            precious metals dealers. We do not sell gold or silver, and we do not
            receive compensation from any dealer listed on this site. Our goal is
            to provide the information you need to make informed decisions.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
