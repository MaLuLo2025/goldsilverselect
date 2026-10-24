import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About GoldSilverSelect",
  description:
    "GoldSilverSelect is a directory of precious metals dealers and a consumer education site. How listings are compiled, how ratings and Featured work, and who owns the site.",
  alternates: { canonical: "/about" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.goldsilverselect.com" },
    { "@type": "ListItem", position: 2, name: "About", item: "https://www.goldsilverselect.com/about" },
  ],
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-8">
      <h2 className="font-serif text-xl font-semibold text-forest mb-3">{title}</h2>
      <div className="font-sans text-[14.5px] leading-relaxed text-gray-700 space-y-3">{children}</div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main className="max-w-[800px] mx-auto px-6 py-16">
        <h1 className="font-serif text-3xl font-bold text-forest mb-8">About GoldSilverSelect</h1>

        <p className="font-sans text-[15px] leading-relaxed text-gray-800 mb-3">
          <strong>GoldSilverSelect is a directory of precious metals dealers and a consumer education site.</strong>
        </p>
        <p className="font-sans text-[14.5px] leading-relaxed text-gray-700 mb-3">
          We list local coin and bullion dealers, online dealers, IRA custodians, recyclers, and jewelers,
          organized by location and type. We also publish articles that explain how premiums, buyback spreads,
          reporting rules, storage, and common scams work, so buyers and sellers can ask better questions before
          they spend money.
        </p>
        <p className="font-sans text-[14.5px] leading-relaxed text-gray-700 mb-8">
          We do not sell precious metals, and we do not take orders, hold funds, or store metal for anyone.
        </p>

        <Section title="How listings are compiled">
          <p>
            Listings are compiled from publicly available information, such as a business&apos;s own website, its
            public business profiles, and its Better Business Bureau page. We write each description ourselves from
            that information.
          </p>
          <p>
            <strong>We do not verify, vet, or endorse any business listed on this site.</strong> A listing means only
            that the business appears in our directory. It is not a recommendation, and it says nothing about a
            business&apos;s pricing, inventory, financial condition, or how it will treat you. Before you buy or sell,
            confirm the details with the business directly and do your own checking.
          </p>
          <p>
            Every listing links to the business&apos;s own website. We do not collect your contact information on a
            business&apos;s behalf.
          </p>
        </Section>

        <Section title="Ratings">
          <p>
            Where a listing shows a Google star rating and review count, those figures are Google&apos;s, not ours.
            Each one is labeled with the month we gathered it (for example, &quot;October 2026&quot;). Ratings change
            over time, so check the current figure on Google before relying on it.
          </p>
          <p>
            Where a listing shows a Better Business Bureau rating, it is the BBB&apos;s rating as shown on the
            BBB&apos;s site when we gathered it.
          </p>
        </Section>

        <Section title="How “Featured” works">
          <p>
            A listing is marked <strong>Featured</strong> when the business has a Better Business Bureau rating and a
            Google rating of 4.5 or higher at the time we gathered the data. Featured is a label based on those two
            public data points. It is not a review, an endorsement, or a statement that the business is better than
            any other.
          </p>
          <p>No dealer pays for its listing, its placement, or Featured status.</p>
        </Section>

        <Section title="Our articles">
          <p>
            Our articles are general education. They are not investment, tax, or legal advice, and they do not
            recommend buying, selling, or holding any metal or product. Where we describe a law, a court case, or an
            agency action, we aim to link to the primary source so you can read it yourself.
          </p>
        </Section>

        <Section title="Ownership">
          <p>
            GoldSilverSelect is under common ownership with The Gold Window (
            <a href="https://thegoldwindow.ai" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
              thegoldwindow.ai
            </a>
            ).
          </p>
        </Section>
      </main>
      <Footer />
    </>
  );
}
