import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import TickerBanner from "@/components/TickerBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts } from "@/lib/blog";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

// Blog content keyed by slug
const blogContent: Record<string, React.ReactNode> = {
  "spot-price-vs-what-you-pay": (
    <>
      <p>
        If you&apos;ve ever checked the gold price on your phone and then walked
        into a coin shop, you&apos;ve noticed the gap. The ticker says $5,127.
        The dealer wants $5,390 for a one-ounce American Eagle. What happened to
        the other $263?
      </p>
      <p>
        That gap has a name — the <strong>premium</strong> — and understanding
        it is the single most important thing a new precious metals buyer can
        learn. It&apos;s also the thing most dealer websites don&apos;t explain
        clearly, because the less you understand premiums, the easier it is to
        overcharge you.
      </p>

      <h2>What Is the Spot Price?</h2>
      <p>
        The spot price is the current market price for immediate delivery of one
        troy ounce of a precious metal. It&apos;s set by futures trading on
        commodities exchanges — primarily{" "}
        <a href="https://www.cmegroup.com/markets/metals/precious/gold.html" target="_blank" rel="noopener noreferrer">
          COMEX (part of CME Group)
        </a>{" "}
        in Chicago and the{" "}
        <a href="https://www.lbma.org.uk/" target="_blank" rel="noopener noreferrer">
          London Bullion Market Association (LBMA)
        </a>
        .
      </p>
      <p>
        Spot prices change constantly during market hours. When you see &ldquo;gold
        is at $5,127,&rdquo; that&apos;s the spot price — the midpoint between
        the bid (what buyers are offering) and the ask (what sellers are
        requesting) on the futures exchange.
      </p>
      <p>
        But here&apos;s the key: <strong>you cannot buy physical gold at the
        spot price.</strong> The spot price is a wholesale benchmark for
        contracts representing 100 troy ounces or more. Retail buyers — anyone
        buying coins, bars, or rounds — always pay a premium above spot.
      </p>

      <h2>What Makes Up the Premium?</h2>
      <p>The premium over spot is built from several layers:</p>
      <p>
        <strong>Minting and fabrication costs.</strong> Turning raw gold into a
        coin or bar costs money. The{" "}
        <a href="https://www.usmint.gov/" target="_blank" rel="noopener noreferrer">
          U.S. Mint
        </a>{" "}
        charges a markup to authorized purchasers. Private mints have their own
        fabrication costs. A 1oz American Eagle starts with a higher base cost
        than a generic round because of the Mint&apos;s pricing structure.
      </p>
      <p>
        <strong>Dealer markup.</strong> The dealer buys from a wholesaler or
        authorized purchaser and adds their margin. This is how they stay in
        business. Typical dealer markups on bullion range from 2–8% over spot,
        depending on the product, quantity, and current supply conditions.
      </p>
      <p>
        <strong>Supply and demand.</strong> When demand spikes — during a
        financial crisis, a geopolitical event, or a social media-driven buying
        frenzy — premiums can expand dramatically. In March 2020, silver
        premiums hit 50–100% above spot. The spot price was dropping, but the
        price you actually paid was rising because physical supply couldn&apos;t
        keep up with retail demand.
      </p>
      <p>
        <strong>Product type.</strong> Sovereign mint coins (American Eagles,
        Canadian Maples, South African Krugerrands) carry higher premiums than
        generic rounds or bars because they&apos;re more recognizable, more
        liquid, and easier to sell back.
      </p>

      <h2>Why It Matters</h2>
      <p>
        The premium is your entry cost. If you buy a gold coin at 5% over spot,
        gold needs to rise at least 5% before you break even — and that&apos;s
        before you account for the dealer&apos;s buyback spread (the difference
        between what they sell for and what they buy for).
      </p>
      <p>
        This is why comparison shopping matters. A $20 difference in premium
        per ounce on a 10-ounce purchase is $200 out of your pocket. Over a
        lifetime of accumulating precious metals, premium awareness saves
        thousands of dollars.
      </p>

      <h2>How to Minimize What You Pay Over Spot</h2>
      <p>
        <strong>Buy bars instead of coins</strong> when you don&apos;t need the
        liquidity premium of sovereign coinage. A 10oz silver bar typically
        carries a lower per-ounce premium than ten individual 1oz rounds.
      </p>
      <p>
        <strong>Buy larger sizes</strong> when your budget allows. The premium
        per ounce on a 100oz silver bar is significantly less than on 1oz
        rounds.
      </p>
      <p>
        <strong>Pay by wire transfer</strong> — most online dealers offer a
        2–4% discount for bank wire versus credit card.
      </p>
      <p>
        <strong>Compare dealers</strong> — check three or four dealers for the
        same product before buying. Our{" "}
        <Link href="/online-dealers" className="text-gold font-semibold">
          online dealer directory
        </Link>{" "}
        links directly to each dealer&apos;s pricing page.
      </p>
      <p>
        <strong>Watch premium trends</strong> — premiums expand during crises
        and contract during calm markets. If you&apos;re not in a hurry,
        waiting for premiums to normalize can save 5–15%.
      </p>

      <h2>The Bottom Line</h2>
      <p>
        The spot price is a reference point, not a price tag. Every physical
        precious metals purchase includes a premium, and understanding what
        drives that premium is the difference between buying smart and
        overpaying. The next article in this series breaks down specific coin
        premiums — Eagles versus Maples versus Krugerrands versus Buffaloes —
        so you can see exactly where your money goes.
      </p>
    </>
  ),
};

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const content = blogContent[params.slug];

  return (
    <>
      <TickerBanner />
      <Header />

      {/* Breadcrumb */}
      <div className="max-w-[760px] mx-auto" style={{ padding: "16px 24px 0" }}>
        <nav className="font-sans text-[12px]" style={{ color: "#999" }}>
          <Link href="/blog" className="no-underline hover:text-gold" style={{ color: "#999" }}>
            Blog
          </Link>
          {post.series && (
            <>
              <span className="mx-1.5">›</span>
              <span style={{ color: "#999" }}>{post.series}</span>
            </>
          )}
          <span className="mx-1.5">›</span>
          <span style={{ color: "#555" }}>Article</span>
        </nav>
      </div>

      {/* Article */}
      <article className="max-w-[760px] mx-auto" style={{ padding: "32px 24px 64px" }}>
        {/* Tag */}
        <span
          className="font-sans text-[10px] font-bold uppercase inline-block mb-4"
          style={{
            letterSpacing: "0.08em",
            color: post.tagColor === "gold" ? "#C5A44E" : "#1B3D2F",
            background:
              post.tagColor === "gold"
                ? "rgba(197,164,78,0.1)"
                : "rgba(27,61,47,0.08)",
            padding: "3px 10px",
            borderRadius: 3,
          }}
        >
          {post.tag}
        </span>

        {post.series && (
          <p className="font-sans text-[12px] font-semibold text-gold mb-2">
            Series: {post.series}
          </p>
        )}

        <h1 className="font-serif text-[34px] font-bold text-gray-900 leading-tight mb-4">
          {post.title}
        </h1>

        <p className="font-sans text-[13px] mb-8" style={{ color: "#aaa" }}>
          Published {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        {/* Article body */}
        <div
          className="font-sans text-[15.5px] leading-[1.75]"
          style={{ color: "#444" }}
        >
          <style>{`
            article p { margin-bottom: 1.25em; }
            article h2 {
              font-family: Georgia, serif;
              font-size: 24px;
              font-weight: 700;
              color: #1a1a1a;
              margin-top: 2em;
              margin-bottom: 0.75em;
            }
            article a { color: #C5A44E; font-weight: 600; }
            article a:hover { text-decoration: underline; }
            article strong { color: #1a1a1a; }
          `}</style>
          {content || (
            <p style={{ color: "#999" }}>
              Full article content coming soon.
            </p>
          )}
        </div>

        {/* Disclaimer */}
        <div
          className="mt-12 rounded-md"
          style={{
            background: "rgba(197,164,78,0.06)",
            border: "1px solid rgba(197,164,78,0.15)",
            padding: "16px 20px",
          }}
        >
          <p className="font-sans text-[12px] leading-relaxed" style={{ color: "#999" }}>
            This article is for educational purposes only and does not
            constitute investment advice. Precious metals prices fluctuate and
            past performance does not guarantee future results. Consult a
            qualified financial advisor before making investment decisions.
          </p>
        </div>
      </article>

      <Footer />
    </>
  );
}
