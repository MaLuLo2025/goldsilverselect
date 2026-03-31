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

  "gold-ira-scams": (
    <>
      <p>
        A gold IRA — technically a self-directed individual retirement account that holds physical precious metals — is a legitimate investment vehicle. The IRS permits it. Reputable custodians administer them. Thousands of Americans hold them responsibly.
      </p>
      <p>
        But the gold IRA industry is one of the most predatory corners of the financial world. The gap between the legitimate product and the way it&apos;s sold is enormous. Here&apos;s how the scams work, how to identify them, and how to protect yourself.
      </p>

      <h2>How the Sales Machine Works</h2>
      <p>
        Most gold IRA companies are not custodians. They&apos;re marketing firms. They spend heavily on television advertising, celebrity endorsements, and direct mail to generate phone leads. When you call the 800 number or fill out the web form, you&apos;re connected to a salesperson — not a financial advisor, not a fiduciary, not someone regulated by the SEC or FINRA.
      </p>
      <p>
        That salesperson earns a commission on what you buy. The higher the markup on the product they sell you, the more they make. This creates a structural incentive to steer you toward the highest-margin products — which are almost never the best products for your portfolio.
      </p>

      <h2>Red Flag #1: The Numismatic Coin Upsell</h2>
      <p>
        This is the single most common gold IRA scam. Here&apos;s how it works:
      </p>
      <p>
        You call to roll over $50,000 from your 401(k) into a gold IRA. The salesperson tells you that instead of buying standard bullion (American Gold Eagles, Canadian Maples, or gold bars), you should buy &ldquo;rare&rdquo; or &ldquo;collectible&rdquo; or &ldquo;graded&rdquo; coins because they offer &ldquo;better protection&rdquo; or &ldquo;higher upside.&rdquo;
      </p>
      <p>
        What they don&apos;t tell you is that these numismatic coins carry markups of 30% to 200% over their melt value. A one-ounce gold coin worth $5,100 in metal content might be sold to you for $7,500 or more because of its &ldquo;rarity&rdquo; or its MS-70 grading.
      </p>
      <p>
        The moment you buy it, you&apos;ve lost 30–50% of your investment to markup. The coin would need to appreciate dramatically just for you to break even — and most &ldquo;rare&rdquo; coins sold through IRA companies are not actually rare. They&apos;re common-date coins that have been slabbed and graded to justify a premium.
      </p>
      <p>
        Standard bullion — American Eagles, Canadian Maples, Austrian Philharmonics, and bars from approved refiners — is what the IRS intended for precious metals IRAs. The markup on bullion is typically 3–8% over spot. That&apos;s the product you want.
      </p>

      <h2>Red Flag #2: Undisclosed or Obscured Fees</h2>
      <p>
        A legitimate gold IRA has fees. That&apos;s normal. But you should know exactly what they are before you sign anything:
      </p>
      <p>
        <strong>Setup fee:</strong> Typically $50–$100 for opening the account.
      </p>
      <p>
        <strong>Annual custodian fee:</strong> $75–$300 per year for the custodian who administers the IRA.
      </p>
      <p>
        <strong>Storage fee:</strong> $100–$300 per year for the depository that physically holds your metal. This is usually scaled to the value of your holdings.
      </p>
      <p>
        <strong>Transaction fees:</strong> A per-trade fee when you buy or sell metal inside the IRA.
      </p>
      <p>
        The scam isn&apos;t that these fees exist — it&apos;s that many companies don&apos;t disclose them clearly upfront, or they bundle them into the price of the metal so you can&apos;t see how much you&apos;re actually paying. If a company can&apos;t or won&apos;t give you a clear, written fee schedule before you fund the account, walk away.
      </p>
      <p>
        The CFTC has published guidance on precious metals fraud at{" "}
        <a href="https://www.cftc.gov/LearnAndProtect/AdvisoriesAndArticles/fraudadv_preciousmetals.html" target="_blank" rel="noopener noreferrer">
          cftc.gov
        </a>{" "}
        — it&apos;s worth reading before you talk to any IRA company.
      </p>

      <h2>Red Flag #3: Celebrity Endorsements</h2>
      <p>
        Multiple gold IRA companies pay celebrities, talk radio hosts, and television personalities to endorse their products. The celebrity reads a script. They have no expertise in precious metals, no fiduciary duty to you, and no liability if you lose money.
      </p>
      <p>
        A celebrity endorsement tells you nothing about the quality of the company, the fairness of their pricing, or the suitability of the product for your retirement. Treat it as what it is: paid advertising.
      </p>

      <h2>Red Flag #4: Urgency and Fear Tactics</h2>
      <p>
        &ldquo;Gold is about to spike — you need to act now.&rdquo;
      </p>
      <p>
        &ldquo;The dollar is going to collapse — protect your retirement today.&rdquo;
      </p>
      <p>
        &ldquo;This special pricing expires at the end of the week.&rdquo;
      </p>
      <p>
        These are sales tactics, not market analysis. Gold has been around for 5,000 years. It will be available for purchase next week, next month, and next year. Any company that pressures you to make a retirement decision on the phone in a single call does not have your best interests in mind.
      </p>

      <h2>Red Flag #5: &ldquo;Free Silver&rdquo; or &ldquo;Free Gold&rdquo; Promotions</h2>
      <p>
        Several companies advertise that they&apos;ll give you free silver or match a percentage of your investment with bonus metal. Nothing is free. The cost of that &ldquo;free&rdquo; metal is built into the markup on what you buy. If they&apos;re giving you $5,000 in &ldquo;free&rdquo; silver, they&apos;ve added at least $5,000 (and probably more) to the price of the gold you purchased.
      </p>

      <h2>What a Legitimate Gold IRA Looks Like</h2>
      <p>A legitimate precious metals IRA company will:</p>
      <p>Give you a clear, written fee schedule before you fund the account.</p>
      <p>Sell you standard IRA-eligible bullion (not numismatic coins) unless you specifically request otherwise.</p>
      <p>Explain the difference between bullion and numismatic coins and why bullion is typically more appropriate.</p>
      <p>Not pressure you to act immediately.</p>
      <p>Provide the name of the IRS-approved custodian and depository they use.</p>
      <p>Be willing to let you think about it, compare prices, and call back.</p>
      <p>
        The SEC has published an investor alert specifically about self-directed IRAs at{" "}
        <a href="https://www.sec.gov/investor/alerts/sdira.html" target="_blank" rel="noopener noreferrer">
          sec.gov
        </a>{" "}
        — read it before opening any account.
      </p>
      <p>
        The IRS publishes the rules for what metals qualify for an IRA at{" "}
        <a href="https://www.irs.gov/retirement-plans/investments-in-collectibles-in-individually-directed-qualified-plan-accounts" target="_blank" rel="noopener noreferrer">
          irs.gov
        </a>{" "}
        — any company that tries to put non-qualifying metals into your IRA is breaking the law.
      </p>

      <h2>The Bottom Line</h2>
      <p>
        A gold IRA can be a reasonable part of a diversified retirement portfolio. But the industry that sells them is riddled with conflicts of interest. The product is fine. The sales machine is the problem.
      </p>
      <p>
        Before you talk to any gold IRA company, know the current spot price of gold (check our ticker at the top of this page), understand that bullion markups should be in the single digits, get the fee schedule in writing, and never buy on the first call.
      </p>
      <p>
        Our{" "}
        <Link href="/gold-silver-iras" className="text-gold font-semibold">
          Gold &amp; Silver IRA directory
        </Link>{" "}
        links directly to provider websites with factual descriptions only — no paid placements, no endorsed providers.
      </p>
    </>
  ),

  "gold-silver-ratio-explained": (
    <>
      <p>
        If you&apos;ve spent any time around precious metals, you&apos;ve heard someone mention &ldquo;the ratio.&rdquo; They&apos;re talking about the gold-to-silver ratio — one of the oldest and most widely watched metrics in the metals market. Here&apos;s what it is, how it works, and how traders use it to grow their holdings without spending additional money.
      </p>

      <h2>What the Ratio Is</h2>
      <p>
        The gold-to-silver ratio is simply the price of gold divided by the price of silver. If gold is $5,100 per ounce and silver is $60 per ounce, the ratio is 85:1 — meaning it takes 85 ounces of silver to buy one ounce of gold.
      </p>
      <p>
        That&apos;s it. One number. But that number moves constantly, and the movement tells you something about the relative value of the two metals.
      </p>

      <h2>Historical Context</h2>
      <p>
        The ratio has varied enormously over time. A few reference points:
      </p>
      <p>
        The U.S. government fixed the ratio at 15:1 in 1792 under the Coinage Act. For most of recorded history before the 20th century, the ratio fluctuated between 10:1 and 20:1, reflecting the relative abundance of the two metals in the earth&apos;s crust (roughly 17:1 by geological occurrence).
      </p>
      <p>
        In modern markets, the ratio has ranged from a low of about 15:1 (in January 1980, when the Hunt brothers cornered the silver market) to a high of over 120:1 (in March 2020, during the COVID-19 panic). The long-term average since 1970 is approximately 60:1 to 65:1.
      </p>
      <p>
        As of this writing, you can see the current ratio displayed in the ticker at the top of this page.
      </p>

      <h2>Why the Ratio Moves</h2>
      <p>
        The ratio expands (gets larger) when gold outperforms silver, which typically happens during periods of financial fear and flight to safety. Gold is the primary monetary metal — central banks hold gold, not silver. When investors panic, they buy gold first.
      </p>
      <p>
        The ratio contracts (gets smaller) when silver outperforms gold, which typically happens during periods of industrial expansion, inflation, or speculative enthusiasm. Silver has significant industrial demand (electronics, solar panels, medical devices) that gold does not, so silver tends to outperform when the economy is running hot.
      </p>

      <h2>How Ratio Trading Works</h2>
      <p>
        Ratio trading is the practice of swapping between gold and silver based on where the ratio sits relative to its historical range. The goal is to compound total ounces owned — not to time short-term price movements in either metal.
      </p>
      <p>Here&apos;s the basic framework:</p>
      <p>
        <strong>When the ratio is high (above 80:1):</strong> Silver is cheap relative to gold. Ratio traders swap some of their gold into silver. They&apos;re getting more ounces of silver for each ounce of gold they trade.
      </p>
      <p>
        <strong>When the ratio is low (below 50:1):</strong> Silver is expensive relative to gold. Ratio traders swap some of their silver into gold. They&apos;re locking in gains from silver&apos;s outperformance and moving into the more stable asset.
      </p>
      <p>
        The key insight: you never go to cash. You stay in precious metals the entire time. You&apos;re simply moving between the two based on relative value. Over a full cycle — ratio expands, then contracts — a ratio trader ends up with more total ounces than they started with, without investing a single additional dollar.
      </p>

      <h2>A Worked Example</h2>
      <p>
        Say you start with 100 ounces of silver when the ratio is 80:1. You swap all your silver for gold. You now own 1.25 ounces of gold (100 / 80).
      </p>
      <p>
        Over the next two years, the ratio contracts to 50:1. You swap your gold back into silver. Your 1.25 ounces of gold now buys you 62.5 ounces of silver (1.25 x 50). Wait — that&apos;s only 62.5 ounces, less than you started with.
      </p>
      <p>
        This is where people get confused. The swap works when you go from silver to gold at a LOW ratio, then back to silver at a HIGH ratio. Let&apos;s reverse it:
      </p>
      <p>
        You start with 1 ounce of gold when the ratio is 80:1. You swap into silver. You now own 80 ounces of silver. The ratio contracts to 50:1. You swap back to gold. Your 80 ounces of silver buys you 1.6 ounces of gold (80 / 50). You went from 1 ounce to 1.6 ounces — a 60% increase in gold ounces, without spending a dime.
      </p>
      <p>
        The direction matters: you want to be in silver when the ratio is high and contracting, and in gold when the ratio is low and expanding.
      </p>

      <h2>Practical Considerations</h2>
      <p>
        Ratio trading sounds clean in theory. In practice, there are several things to consider:
      </p>
      <p>
        <strong>You don&apos;t swap 100% of your holdings.</strong> Most practitioners trade 10–25% of their position at a time. This reduces the risk of being wrong on timing.
      </p>
      <p>
        <strong>Transaction costs matter.</strong> Every swap has a bid-ask spread and potentially a dealer premium. If you&apos;re swapping small amounts frequently, the costs eat into your gains. The ratio needs to move significantly (20+ points) for a swap to be clearly worthwhile.
      </p>
      <p>
        <strong>Tax implications.</strong> In a taxable account, each swap is a taxable event. The IRS treats precious metals as collectibles, subject to a maximum 28% long-term capital gains rate. Inside an IRA, swaps are not taxable events — which is one reason precious metals IRAs are popular with ratio traders.
      </p>
      <p>
        <strong>Patience is required.</strong> The ratio can stay elevated or compressed for years. This is not a day-trading strategy. It&apos;s a multi-year approach to accumulating ounces.
      </p>

      <h2>Where to Watch the Ratio</h2>
      <p>
        Our ticker at the top of every GoldSilverSelect page displays the current Au:Ag ratio in real time. You can also track it historically at the{" "}
        <a href="https://www.lbma.org.uk/" target="_blank" rel="noopener noreferrer">
          LBMA
        </a>{" "}
        and on the{" "}
        <a href="https://www.cmegroup.com/markets/metals/precious/gold.html" target="_blank" rel="noopener noreferrer">
          CME Group&apos;s COMEX data
        </a>
        .
      </p>
      <p>
        The McAlvany Weekly Commentary — available in our{" "}
        <Link href="/intelligence" className="text-gold font-semibold">
          Market Intelligence
        </Link>{" "}
        section — covers ratio trading regularly. David McAlvany&apos;s framework for when to swap and in what quantities is one of the most detailed publicly available approaches to the strategy.
      </p>

      <h2>The Bottom Line</h2>
      <p>
        The gold-to-silver ratio is not a crystal ball. It doesn&apos;t tell you what gold or silver will do tomorrow. What it tells you is how the two metals are priced relative to each other, and whether one is historically cheap or expensive compared to the other.
      </p>
      <p>
        For buy-and-hold precious metals investors, watching the ratio can help you decide whether to add gold or silver on your next purchase. For active ratio traders, it&apos;s the core mechanism for growing ounces over time.
      </p>
      <p>
        Either way, understanding the ratio makes you a more informed buyer — and that&apos;s the point.
      </p>
    </>
  ),

  "cash-for-gold-ripoff": (
    <>
      <p>
        If you&apos;ve ever inherited jewelry, gone through a divorce, or just cleaned out a drawer and found old gold chains and rings, you&apos;ve probably thought about selling them. And if you&apos;ve looked around, you&apos;ve seen the &ldquo;We Buy Gold&rdquo; signs everywhere — mall kiosks, pawn shops, strip mall storefronts, even &ldquo;gold parties&rdquo; hosted in someone&apos;s living room.
      </p>
      <p>
        Most of these buyers pay 30–50% of what your gold is actually worth. Some pay even less. Here&apos;s how to avoid getting ripped off.
      </p>

      <h2>What Your Gold Is Actually Worth</h2>
      <p>
        The value of scrap gold is determined by three things: weight, purity, and the current spot price.
      </p>
      <p>
        <strong>Weight</strong> is measured in troy ounces (31.1 grams) or pennyweights (1.555 grams, abbreviated &ldquo;dwt&rdquo;). Be careful here — some buyers weigh in pennyweights and quote you a per-pennyweight price that sounds reasonable but is actually well below melt value.
      </p>
      <p>
        <strong>Purity</strong> is expressed in karats. Pure gold is 24 karat (24K). Common jewelry purities include 10K (41.7% gold), 14K (58.3% gold), and 18K (75% gold). Your gold should be stamped with its karat rating, usually on the inside of a ring band or on the clasp of a chain.
      </p>
      <p>
        <strong>Spot price</strong> is the current market price for one troy ounce of pure gold. You can see it in our ticker at the top of this page, or check the COMEX price at{" "}
        <a href="https://www.cmegroup.com/markets/metals/precious/gold.html" target="_blank" rel="noopener noreferrer">
          CME Group
        </a>
        .
      </p>
      <p>
        The <strong>melt value</strong> of your gold is: (weight in troy ounces) × (purity percentage) × (spot price). For example, if you have 10 grams of 14K gold and spot is $5,100:
      </p>
      <p>
        10 grams = 0.3215 troy ounces<br />
        14K = 58.3% pure<br />
        0.3215 × 0.583 × $5,100 = <strong>$956</strong>
      </p>
      <p>
        That&apos;s the melt value — what your gold is worth as raw material. A fair buyer should pay you somewhere between 70% and 90% of melt value. The difference is their margin for assaying, refining, and running their business.
      </p>
      <p>
        If someone offers you $400 for that same gold, they&apos;re paying you 42% of melt value. That&apos;s a ripoff.
      </p>

      <h2>Why Most Buyers Underpay</h2>
      <p>
        The business model of most &ldquo;cash for gold&rdquo; operations depends on seller ignorance. They&apos;re betting that you don&apos;t know the weight, purity, or spot price of what you&apos;re selling. If you walk in without that information, you have no way to evaluate their offer.
      </p>
      <p>
        Several specific tactics to watch for:
      </p>
      <p>
        <strong>Weighing in pennyweights without telling you.</strong> A pennyweight is about 1/20th of a troy ounce. If a buyer tells you &ldquo;your gold weighs 6&rdquo; without specifying the unit, and then offers you $180 per pennyweight, that sounds like a lot. But 6 pennyweights of 14K gold at $5,100 spot is worth about $287 at melt. If they&apos;re paying $180 for 6 pennyweights — that&apos;s $1,080 total, which is actually decent. But if they say &ldquo;6 grams&rdquo; and offer $180 total, you&apos;re being robbed.
      </p>
      <p>
        <strong>Lowballing the karat.</strong> Some buyers will claim your 14K gold is actually 10K, reducing the purity they use in their calculation. A legitimate buyer will test your gold in front of you using an acid test, electronic tester, or XRF analyzer.
      </p>
      <p>
        <strong>&ldquo;We only pay for the gold, not the stones.&rdquo;</strong> This is sometimes true — diamonds and gemstones in estate jewelry may or may not have value, and a gold recycler isn&apos;t necessarily equipped to evaluate them. But it can also be a tactic to lowball the total offer. If your jewelry has significant stones, get them appraised separately by a GIA-certified gemologist before selling.
      </p>

      <h2>How to Sell Smart</h2>
      <p>Before you sell anything:</p>
      <p>
        <strong>Know the spot price.</strong> Check our ticker or any financial site before you leave the house.
      </p>
      <p>
        <strong>Know the weight and purity.</strong> Weigh your gold on a kitchen scale (in grams is fine — you can convert). Check the karat stamps on every piece.
      </p>
      <p>
        <strong>Calculate the melt value yourself.</strong> Use the formula above or any online melt value calculator. Write down the number before you walk into any buyer&apos;s shop.
      </p>
      <p>
        <strong>Get at least three quotes.</strong> Visit three different buyers and compare offers. Don&apos;t tell any of them what the others offered — just listen.
      </p>
      <p>
        <strong>Consider selling to a refiner, not a retail buyer.</strong> Refiners (the companies that actually melt and recycle gold) typically pay 85–95% of melt value. Retail &ldquo;We Buy Gold&rdquo; shops pay less because they&apos;re a middleman — they buy from you and sell to the refiner. Our{" "}
        <Link href="/recycling" className="text-gold font-semibold">
          recycling directory
        </Link>{" "}
        links directly to refiners and recyclers in your area.
      </p>
      <p>
        <strong>Never sell at a &ldquo;gold party.&rdquo;</strong> These events — where a buyer comes to someone&apos;s home and purchases gold from guests — consistently pay the lowest prices in the industry. The social pressure to sell, combined with the host earning a commission on your transaction, creates the worst possible conditions for the seller.
      </p>

      <h2>Authority Resources</h2>
      <p>
        The FTC has published consumer guidance on selling gold at{" "}
        <a href="https://consumer.ftc.gov/articles/bullion-and-bullion-coins" target="_blank" rel="noopener noreferrer">
          consumer.ftc.gov
        </a>{" "}
        — read it before selling anything.
      </p>
      <p>
        If you believe you&apos;ve been defrauded by a gold buyer, you can file a complaint with your state attorney general&apos;s consumer protection division or with the FTC at{" "}
        <a href="https://reportfraud.ftc.gov/" target="_blank" rel="noopener noreferrer">
          reportfraud.ftc.gov
        </a>
        .
      </p>

      <h2>The Bottom Line</h2>
      <p>
        Selling gold isn&apos;t complicated. But it requires that you know three numbers before you walk in the door: the weight, the purity, and the spot price. If you know those, you know what your gold is worth, and no one can underpay you without you noticing.
      </p>
      <p>
        Take 10 minutes to do the math. It could save you hundreds or thousands of dollars.
      </p>
    </>
  ),

  "gold-coin-premiums-compared": (
    <>
      <p>
        Every one-ounce gold coin contains one troy ounce of gold. But the price you pay varies significantly depending on which coin you buy. An American Gold Eagle might cost $200 more per ounce than a South African Krugerrand, even though both contain the same amount of gold.
      </p>
      <p>
        The difference is the premium — the amount you pay above the spot price of gold. This article breaks down the premiums on the four most popular one-ounce gold coins and explains when the extra cost is worth it and when it isn&apos;t.
      </p>

      <h2>The Four Major One-Ounce Gold Coins</h2>
      <p>
        <strong>American Gold Eagle.</strong> Minted by the{" "}
        <a href="https://www.usmint.gov/" target="_blank" rel="noopener noreferrer">
          U.S. Mint
        </a>
        . Contains one troy ounce of gold alloyed with small amounts of silver and copper for durability, making the coin slightly heavier than one troy ounce total (1.0909 oz total weight). The gold content is exactly one troy ounce. Typically carries the highest premium of the four major coins — often 5–8% over spot.
      </p>
      <p>
        <strong>Canadian Gold Maple Leaf.</strong> Minted by the{" "}
        <a href="https://www.mint.ca/" target="_blank" rel="noopener noreferrer">
          Royal Canadian Mint
        </a>
        . Contains one troy ounce of .9999 fine gold (99.99% purity — the purest of the four). Premium is typically 3–6% over spot. The Maple Leaf&apos;s micro-engraved security features make it one of the hardest coins to counterfeit.
      </p>
      <p>
        <strong>South African Krugerrand.</strong> Minted by the South African Mint. The original modern bullion coin, introduced in 1967. Contains one troy ounce of gold alloyed with copper, giving it a distinctive orange hue. Total weight is 1.0909 oz. Premium is typically 3–5% over spot — usually the lowest of the four.
      </p>
      <p>
        <strong>American Gold Buffalo.</strong> Minted by the U.S. Mint. Contains one troy ounce of .9999 fine gold (same purity as the Maple Leaf). Introduced in 2006 as the first .9999 fine gold coin produced by the U.S. Mint. Premium is typically 5–8% over spot, similar to the Eagle.
      </p>

      <h2>Why Premiums Differ</h2>
      <p>Several factors drive the spread in premiums:</p>
      <p>
        <strong>Mint production costs.</strong> The U.S. Mint sells Gold Eagles and Buffaloes to a network of authorized purchasers at a fixed markup above spot. That markup is higher than what the Royal Canadian Mint or South African Mint charges. The authorized purchasers then add their own margin before selling to dealers, who add another margin before selling to you. Each layer adds cost.
      </p>
      <p>
        <strong>Legal tender and IRA eligibility.</strong> All four coins are legal tender in their country of origin and are IRA-eligible under IRS rules. However, American-minted coins (Eagles and Buffaloes) are the most commonly held in U.S. precious metals IRAs, which creates additional demand and supports higher premiums.
      </p>
      <p>
        <strong>Liquidity and recognition.</strong> American Eagles are the most widely recognized and traded gold coin in the U.S. market. Dealers will buy them back at tighter spreads (the difference between their buy and sell price). This liquidity premium is real — when you sell, an Eagle is easier to sell at a fair price than a less common coin.
      </p>
      <p>
        <strong>Purity.</strong> The Maple Leaf and Buffalo are .9999 fine; the Eagle and Krugerrand are .9167 fine (22 karat). Both contain one troy ounce of actual gold — the difference is that the Eagle and Krugerrand have additional base metal to make the coin harder and more scratch-resistant. Some buyers prefer .9999 purity for its simplicity; others prefer 22K for its durability. This is a preference, not an investment difference.
      </p>
      <p>
        <strong>Supply constraints.</strong> When the U.S. Mint rations Silver Eagle production (which happens periodically), premiums on available coins spike. The same can happen with Gold Eagles during periods of extreme demand. The Krugerrand and Maple Leaf are generally more consistently available.
      </p>

      <h2>When the Premium Is Worth It</h2>
      <p>
        <strong>You&apos;re buying for an IRA.</strong> If you&apos;re holding coins inside a precious metals IRA, the liquidity premium on American Eagles matters because you&apos;ll eventually need to sell or take a distribution. The tighter buyback spread on Eagles can save you money on the exit.
      </p>
      <p>
        <strong>You&apos;re buying for maximum resale ease in the U.S.</strong> If you&apos;re buying physical gold that you&apos;ll eventually sell at a local coin shop or to an online dealer, Eagles command the tightest bid-ask spreads in the American market. The extra 1–2% in premium is offset by the better price you&apos;ll get when you sell.
      </p>
      <p>
        <strong>You value the security features.</strong> The Canadian Maple Leaf&apos;s micro-engraved laser mark (a small maple leaf visible under magnification, with the last two digits of the year) is the most advanced anti-counterfeiting feature on any bullion coin.
      </p>

      <h2>When the Premium Is Not Worth It</h2>
      <p>
        <strong>You&apos;re buying purely for metal content.</strong> If you&apos;re accumulating gold by the ounce and don&apos;t care about the design on the coin, a Krugerrand gives you one troy ounce of gold at the lowest premium of the four. Over 10 ounces, that 2–3% premium difference represents $1,000 or more in savings at current gold prices.
      </p>
      <p>
        <strong>You&apos;re buying in quantity.</strong> The premium difference compounds on larger purchases. If you&apos;re buying 10–50 ounces, the savings from choosing lower-premium coins are significant. Consider mixing — Eagles for the core position (liquidity), Krugerrands or Maples for additional accumulation (lower cost).
      </p>
      <p>
        <strong>You&apos;re buying gold bars instead.</strong> One-ounce gold bars from LBMA-approved refiners (PAMP Suisse, Valcambi, Perth Mint, Royal Canadian Mint) typically carry premiums of 2–4% over spot — lower than any of the coins. The tradeoff is that bars are slightly less liquid than sovereign coins and may not be recognized as quickly by less experienced buyers.
      </p>

      <h2>The Buyback Spread Matters More Than the Premium</h2>
      <p>
        This is the part most dealers don&apos;t emphasize. The premium you pay to buy is only half the equation. The other half is what you get when you sell.
      </p>
      <p>
        If you pay 7% over spot for an Eagle and the dealer buys it back at 2% over spot, your round-trip cost is 5%. If you pay 4% over spot for a Krugerrand and the dealer buys it back at 1% below spot, your round-trip cost is also 5%. The initial premium didn&apos;t matter — the spread did.
      </p>
      <p>
        Before buying any coin, ask the dealer what their buyback price is for that specific product. The tighter the spread between their sell price and buy price, the better the deal for you.
      </p>

      <h2>The Bottom Line</h2>
      <p>
        All four coins contain one troy ounce of gold. The premiums reflect minting costs, market recognition, and supply-demand dynamics — not any difference in the underlying metal. The &ldquo;best&rdquo; coin depends on your priorities: maximum liquidity (Eagle), lowest cost per ounce (Krugerrand), highest purity (Maple Leaf or Buffalo), or American origin with .9999 purity (Buffalo).
      </p>
      <p>
        For most buyers accumulating gold over time, a mix of coins and bars — prioritizing the lowest total cost including the buyback spread — is the most efficient approach.
      </p>
      <p>
        Our{" "}
        <Link href="/online-dealers" className="text-gold font-semibold">
          online dealer directory
        </Link>{" "}
        links directly to dealer websites where you can compare pricing on all four coins. Check three dealers before buying. The price difference on the same coin from different dealers can be $30–$80 per ounce.
      </p>
    </>
  ),

  "what-should-i-truly-pay-for-gold-and-silver": (
    <>
      <p>
        <em>It&apos;s more complicated than you think. Here&apos;s a step-by-step framework for making smart buying decisions.</em>
      </p>
      <p>
        You checked the spot price. You found a dealer. You&apos;re ready to buy. But the number on the invoice doesn&apos;t match the number on the ticker — and you&apos;re not sure if that&apos;s normal or if you&apos;re being overcharged.
      </p>
      <p>
        Welcome to the most common frustration in precious metals buying. The answer to &ldquo;what should I pay?&rdquo; is more complicated than a single number, but it&apos;s not mysterious. It follows a logic that, once you understand it, makes every future purchase feel transparent.
      </p>
      <p>Here&apos;s the framework.</p>

      <h2>Spot Price Is the Starting Line, Not the Finish Line</h2>
      <p>
        The spot price is the wholesale benchmark for raw metal traded on global commodity exchanges. It fluctuates throughout the trading day based on futures contracts, currency movements, and global supply and demand.
      </p>
      <p>
        Here&apos;s what the spot price is not: the price you will pay. Nobody — online or local, large or small — sells gold or silver at spot. The real question isn&apos;t &ldquo;what&apos;s the spot price?&rdquo; It&apos;s &ldquo;how much above spot is fair for what I&apos;m buying?&rdquo; That gap between spot and what you actually pay is called the <strong>premium</strong>, and it varies enormously depending on what you buy, where you buy it, and when.
      </p>
      <p>
        Understanding premiums is the single most important skill a precious metals buyer can develop. Everything that follows is built on that foundation. For a deeper dive, see our article on{" "}
        <Link href="/blog/spot-price-vs-what-you-pay" className="text-gold font-semibold">
          Spot Price vs. What You Pay
        </Link>
        .
      </p>

      <h2>Step 1: Know What You&apos;re Buying</h2>
      <p>
        This is where most new buyers make their first mistake. They shop price before they decide product. But the premium you&apos;ll pay depends entirely on what you&apos;re buying — and not all gold and silver products are priced the same way.
      </p>

      <h2>Bullion Bars and Rounds</h2>
      <p>
        If your goal is to own metal by weight at the lowest possible cost, bullion bars and generic rounds are where you start. These products are valued almost entirely on their metal content, with relatively thin premiums layered on top.
      </p>
      <p>
        Generic rounds and bars — produced by private mints rather than government mints — typically carry the lowest premiums. For gold, expect somewhere in the range of 3–6% over spot in normal market conditions. Silver premiums tend to run higher as a percentage because the per-ounce price is lower and fixed costs like minting and shipping make up a larger share of the total.
      </p>
      <p>
        One important pattern: larger bars carry lower per-ounce premiums than smaller ones. A 10 oz gold bar will have a lower percentage premium than a 1 oz round, and a 100 oz silver bar will be cheaper per ounce than a 1 oz silver round. If you&apos;re buying in quantity and storage isn&apos;t a concern, scaling up the bar size is one of the simplest ways to reduce your cost basis.
      </p>

      <h2>Government-Minted Bullion Coins</h2>
      <p>
        American Gold Eagles, Silver Eagles, Canadian Maple Leafs, South African Krugerrands, Austrian Philharmonics — these are government-minted coins produced by sovereign mints with legal tender status. They carry higher premiums than generic bullion, and there&apos;s a reason for that.
      </p>
      <p>
        You&apos;re paying for sovereign mint backing, universal recognizability, and guaranteed purity. An American Gold Eagle is accepted by every dealer in the world without question. That recognition has value — particularly when it comes time to sell. Government-minted coins generally command higher buyback prices than generic products, which partially offsets the higher purchase premium.
      </p>
      <p>
        In normal markets, expect premiums of roughly 5–8% over spot for gold coins like Eagles and Maple Leafs, sometimes higher for Silver Eagles due to periodic supply constraints from the U.S. Mint. For a detailed comparison, see{" "}
        <Link href="/blog/gold-coin-premiums-compared" className="text-gold font-semibold">
          Gold Coin Premiums: Eagles, Maples, Krugerrands, and Buffaloes Compared
        </Link>
        .
      </p>

      <h2>Numismatic and Collectible Coins</h2>
      <p>
        Here&apos;s where premiums get genuinely complicated — and where uninformed buyers are most likely to overpay.
      </p>
      <p>
        Numismatic coins are valued for their rarity, historical significance, condition, and collector demand, often well above their metal content. A proof American Gold Eagle from a limited mintage year can trade at two or three times its melt value. A rare date Morgan Silver Dollar in exceptional condition might sell for hundreds of times the value of its silver content.
      </p>
      <p>
        Those premiums aren&apos;t necessarily a rip-off. They reflect real scarcity and real collector demand. But you need to understand what you&apos;re buying. If your goal is to accumulate metal, a numismatic premium is money you&apos;re spending on something other than metal. If you&apos;re a collector who understands grading, mintage numbers, and the secondary market for rare coins, those premiums are the point.
      </p>
      <p>
        The critical distinction: are you buying the metal, or are you buying the coin? If you don&apos;t have a clear answer to that question, you&apos;re not ready to buy numismatic coins. Stick with bullion until you are. For more on how numismatic upsells work in IRA contexts, see{" "}
        <Link href="/blog/gold-ira-scams" className="text-gold font-semibold">
          Gold IRA Scams: How to Spot Them
        </Link>
        .
      </p>

      <h2>Junk Silver</h2>
      <p>
        &ldquo;Junk silver&rdquo; refers to pre-1965 U.S. coins — dimes, quarters, and half dollars — that contain 90% silver. The term &ldquo;junk&rdquo; means they have no significant numismatic or collectible value. They&apos;re bought and sold purely for their silver content.
      </p>
      <p>
        Junk silver is priced differently from other products. It&apos;s usually quoted either as a multiple of face value or as a premium per ounce of actual silver content. A $1 face value bag of pre-1965 quarters contains approximately 0.715 troy ounces of pure silver.
      </p>
      <p>
        Premiums on junk silver fluctuate more than most products. In calm markets, junk silver trades near generic silver premiums. In high-demand periods, premiums spike — sometimes dramatically — because supply is fixed. Nobody is making more 1964 Washington quarters. For more on junk silver, see our article{" "}
        <Link href="/blog/what-is-junk-silver" className="text-gold font-semibold">
          What Is Junk Silver?
        </Link>
      </p>

      <h2>Step 2: Pick the Right Dealer</h2>
      <p>
        The product you buy determines the premium range. The dealer you buy from determines where you fall within that range — or whether you get pushed outside it entirely. This is perhaps the most important step in the process.
      </p>
      <p>
        The precious metals industry is filled with reputable dealers who have served customers honestly for decades. It is also home to high-pressure operations, bait-and-switch tactics, and outright scams. The difference between a good dealer and a bad one can easily be 10–20% on the same product. On a $3,000 gold coin, that&apos;s $300 to $600 you didn&apos;t need to spend.
      </p>

      <h2>What to Look For</h2>
      <p>
        <strong>Transparent, posted premiums.</strong> A reputable dealer will tell you what their premiums are — often posted right on their website. If everything is &ldquo;call for pricing,&rdquo; that&apos;s a negotiation tactic.
      </p>
      <p>
        <strong>Clear buyback policies.</strong> Before you buy, you should be able to find out what the dealer will pay when you want to sell. A willingness to publish buyback prices is one of the strongest signals of a dealer operating in good faith.
      </p>
      <p>
        <strong>Verifiable track record.</strong> Look for a real physical address, not a P.O. box. Check their Better Business Bureau rating. Read their Google reviews — not just the star rating, but the actual content. How long have they been in business?
      </p>
      <p>
        <strong>Patience.</strong> A good dealer answers your questions without pressure. They explain products, premiums, and tradeoffs. They don&apos;t mind if you need time to think.
      </p>
      <p>
        Browse our{" "}
        <Link href="/dealers" className="text-gold font-semibold">
          dealer directory
        </Link>{" "}
        to find local coin shops and bullion dealers, or compare{" "}
        <Link href="/online-dealers" className="text-gold font-semibold">
          online dealers
        </Link>{" "}
        side by side.
      </p>

      <h2>Red Flags</h2>
      <p>
        <strong>&ldquo;This coin is about to skyrocket.&rdquo;</strong> No one knows that. Anyone who claims to know the future price of a specific coin is either lying or delusional.
      </p>
      <p>
        <strong>Unsolicited phone calls.</strong> Legitimate dealers don&apos;t cold-call strangers to sell gold. If someone calls you out of the blue to pitch precious metals, hang up.
      </p>
      <p>
        <strong>Steering.</strong> You call about bullion and the person on the phone starts redirecting you toward &ldquo;rare&rdquo; or &ldquo;collectible&rdquo; coins with much higher premiums. They may tell you that numismatic coins are &ldquo;exempt from government confiscation&rdquo; or have &ldquo;better upside potential.&rdquo; These claims range from misleading to outright false. What&apos;s really happening is you&apos;re being moved from a low-margin product to a high-margin product.
      </p>
      <p>
        <strong>Extreme urgency.</strong> Spot price is global and public. It doesn&apos;t change because a dealer says they have a &ldquo;limited time offer&rdquo; expiring at midnight. Urgency in precious metals sales is almost always manufactured.
      </p>

      <h2>Step 3: Compare Before You Commit</h2>
      <p>
        You know what product you want. You&apos;ve identified dealers that look reputable. The final step before buying is straightforward price comparison — and it&apos;s the step most people skip.
      </p>
      <p>
        <strong>Compare premium over spot, not sticker price.</strong> If you check Dealer A at 10 a.m. and Dealer B at 2 p.m., the spot price may have moved between those checks. The sticker prices change, but the premiums are what reveal who&apos;s actually cheaper.
      </p>
      <p>
        <strong>Compare the same product, same quantity, same payment method.</strong> An American Gold Eagle versus a generic gold round is not a comparison. A credit card price versus a wire transfer price is not a comparison. Match every variable.
      </p>
      <p>
        <strong>Factor in total cost.</strong> Premium plus shipping plus insurance plus any credit card surcharge equals your real cost. Some dealers advertise low premiums but charge $15–30 for shipping. Others show a slightly higher premium but include free shipping above a certain threshold.
      </p>
      <p>
        <strong>Get at least three quotes.</strong> Two is not enough. Three gives you a range. If all three are similar, you can be reasonably confident you&apos;re seeing the real market. If one is dramatically cheaper or more expensive, investigate why.
      </p>

      <h2>Step 4: Understand the Full Round-Trip Cost</h2>
      <p>
        This is the step almost nobody thinks about until they&apos;re ready to sell — and by then, it&apos;s too late to change the math.
      </p>
      <p>
        Every dealer buys at a discount to spot and sells at a premium to spot. The gap between what you paid going in and what you&apos;ll receive going out is the real cost of the transaction.
      </p>
      <p>
        Here&apos;s a simplified example. You buy a 1 oz American Gold Eagle at 5% over spot. Two years later, you sell it back to a dealer who buys at 1% below spot. Your round-trip cost was approximately 6%. That means gold needed to appreciate at least 6% during the time you held it for you to break even.
      </p>
      <p>
        Product choice affects the round trip. Generic rounds may have lower purchase premiums, but they also tend to command lower buyback premiums. Government-minted coins like Eagles and Maple Leafs generally carry better buyback prices because of their universal recognition.
      </p>

      <h2>Timing Matters</h2>
      <p>
        Premiums are not static. During market panics, geopolitical crises, or sudden surges in retail demand, premiums spike — sometimes dramatically. Buying during a premium spike means you&apos;re paying more going in, and that premium may compress back to normal levels when you eventually sell.
      </p>
      <p>
        The inverse is also true. Buying when premiums are historically low locks in a favorable cost basis. Premiums tend to be lowest during periods of low public interest in precious metals — exactly when buying feels least urgent.
      </p>

      <h2>Step 5: Set Your Own Rules and Stick to Them</h2>
      <p>
        Once you&apos;ve done the work above — understood your product category, identified reputable dealers, learned to compare properly, and internalized the round-trip cost — the final step is to codify what you&apos;ve learned into personal buying rules.
      </p>
      <p>Examples of effective personal buying rules:</p>
      <p>&bull; &ldquo;I don&apos;t pay more than X% over spot for generic silver rounds.&rdquo;</p>
      <p>&bull; &ldquo;I only buy American Gold Eagles when the premium is under a specific dollar amount.&rdquo;</p>
      <p>&bull; &ldquo;I compare at least three dealers on every purchase over a certain dollar threshold.&rdquo;</p>
      <p>&bull; &ldquo;I never buy on the phone from someone who called me.&rdquo;</p>
      <p>&bull; &ldquo;I check the spot price within 30 minutes of every transaction.&rdquo;</p>
      <p>
        The value of rules like these isn&apos;t that they&apos;re perfect. It&apos;s that they create friction between you and an impulsive decision. The informed buyer who follows a repeatable process pays a fair price. The emotional buyer — the one responding to urgency, fear, or a compelling sales pitch — is the one who overpays.
      </p>

      <h2>The Bottom Line</h2>
      <p>
        &ldquo;What should I pay for gold and silver?&rdquo; doesn&apos;t have a single number answer. It has a framework: know your product, pick your dealer carefully, compare before committing, understand the round-trip cost, and set rules you follow every time.
      </p>
      <p>
        Do that, and you&apos;ll pay a fair price — regardless of where the spot price goes.
      </p>
      <p style={{ color: "#999", fontSize: "13px", marginTop: "2em", fontStyle: "italic" }}>
        GoldSilverSelect.com is an independent directory of local and online precious metals dealers. We do not sell gold or silver, and we do not receive compensation from any dealer listed on this site.
      </p>
    </>
  ),

  "spot-price-vs-what-you-actually-pay": (
    <>
      <p>
        <em>The number on the ticker isn&apos;t the number on the receipt. Here&apos;s where the difference comes from — and what&apos;s reasonable.</em>
      </p>
      <p>
        Gold is trading at $3,200 an ounce. You walk into a coin shop, point at a 1 oz American Gold Eagle, and the tag says $3,360. That $160 gap is not a mistake, a scam, or a sign that you&apos;re in the wrong shop. It&apos;s the premium — and understanding it is the single most important thing a precious metals buyer can learn.
      </p>

      <h2>What the Spot Price Actually Is</h2>
      <p>
        The spot price is the current market price for one troy ounce of pure gold or silver on the commodities exchange. It updates throughout the trading day based on futures contracts traded on exchanges like{" "}
        <a href="https://www.cmegroup.com/markets/metals/precious/gold.html" target="_blank" rel="noopener noreferrer">COMEX</a> in New York and the{" "}
        <a href="https://www.lbma.org.uk/" target="_blank" rel="noopener noreferrer">LBMA</a> in London.
      </p>
      <p>
        Think of spot price like the wholesale price of gasoline before it gets to the pump. Nobody pays that price at the station. The station has rent, employees, electricity, delivery trucks, and a margin to keep the lights on. The number on the sign out front is always higher than the wholesale price — and everyone understands why.
      </p>
      <p>
        Precious metals work the same way. Spot is the raw commodity price. By the time that metal gets shaped into a coin, stamped by a mint, shipped to a distributor, inventoried by a dealer, and sold across a counter to you, costs have accumulated at every step. Those costs show up as the premium.
      </p>

      <h2>Where the Premium Comes From</h2>
      <p>
        The premium over spot is not a single markup. It&apos;s a stack of costs layered on top of each other, and each layer exists for a specific reason.
      </p>
      <p>
        <strong>The mint charges the first premium.</strong> When the{" "}
        <a href="https://www.usmint.gov/" target="_blank" rel="noopener noreferrer">U.S. Mint</a>{" "}
        produces an American Gold Eagle, it doesn&apos;t sell that coin at spot price. It charges authorized distributors a fixed markup over the gold content value. This covers the cost of sourcing the gold, refining it to the required purity, striking the coin, quality control, packaging, and shipping.
      </p>
      <p>
        <strong>Distributors add their margin next.</strong> Large wholesale distributors buy from the mint and sell to dealers. Their markup covers warehousing, insurance, security, transportation, and a profit margin. This layer is typically thin — wholesale precious metals distribution is a competitive, volume-driven business — but it&apos;s real.
      </p>
      <p>
        <strong>The dealer adds the final layer.</strong> Whether it&apos;s an online dealer or a local coin shop, the retailer has their own cost structure. Rent, insurance, security systems, employee salaries, website maintenance, credit card processing fees, and a profit margin all get folded into the retail price.
      </p>
      <p>
        <strong>Payment method can add another layer.</strong> Most dealers charge more for credit card purchases than for wire transfers, checks, or cash. This reflects the 2–4% processing fee that credit card companies charge the merchant.
      </p>

      <h2>What a Reasonable Premium Looks Like</h2>
      <p>
        Premiums vary by product, market conditions, and dealer — but there are normal ranges that an informed buyer can use as reference points.
      </p>
      <p>
        For <strong>gold bullion coins</strong> like the American Gold Eagle, the premium typically runs 3–7% over spot in normal market conditions. Government-minted coins from the U.S., Canada, Austria, and South Africa carry slightly higher premiums than generic rounds or bars because they&apos;re recognized worldwide, guaranteed by a sovereign government, and carry legal tender status. For a detailed breakdown, see{" "}
        <Link href="/blog/gold-coin-premiums-compared" className="text-gold font-semibold">Gold Coin Premiums Compared</Link>.
      </p>
      <p>
        <strong>Generic gold rounds and bars</strong> typically carry lower premiums — often 2–4% over spot — because they don&apos;t carry the mintage costs or brand recognition of sovereign coins.
      </p>
      <p>
        <strong>Silver premiums</strong> run higher as a percentage than gold premiums, and this surprises many new buyers. A 1 oz American Silver Eagle might carry a premium of $3–6 over a spot price of $30 — that&apos;s 10–20% over spot. The reason: it costs roughly the same amount to mint, ship, and handle a 1 oz silver coin as a 1 oz gold coin, but the silver coin is worth a fraction of the gold one.
      </p>
      <p>
        <strong>Silver bars</strong> carry progressively lower premiums as size increases. A 1 oz silver bar might be $2–4 over spot, while a 100 oz silver bar might be $0.50–1.50 over spot per ounce.
      </p>

      <h2>When Premiums Are Not Reasonable</h2>
      <p>
        Most dealers operate within a fair range. But some don&apos;t, and knowing the warning signs helps you avoid overpaying.
      </p>
      <p>
        If a dealer&apos;s premium is more than double the typical range for a product without an obvious reason, that&apos;s a flag. A 1 oz Gold Eagle at 15% over spot when other dealers are at 5% deserves a question.
      </p>
      <p>
        High-pressure sales tactics paired with vague pricing should make you cautious. A reputable dealer will tell you the spot price, the premium, and the total — transparently. If a dealer won&apos;t break down the math, or if they discourage you from comparing prices, that&apos;s worth noting.
      </p>
      <p>
        Television and radio advertisers selling gold coins at dramatically high premiums are a known issue in the industry. The coins they sell are real, but the premiums can be two or three times what you&apos;d pay from a competitive dealer. Always compare before buying from any source that reached you through advertising.
      </p>
      <p>
        <strong>Numismatic premiums</strong> are a separate category. A rare coin&apos;s premium over its melt value can be enormous — and legitimately so. But if someone tries to sell you a common, modern bullion coin as a &ldquo;rare&rdquo; piece at a numismatic premium, that&apos;s a red flag. For more on this, see{" "}
        <Link href="/blog/gold-ira-scams" className="text-gold font-semibold">Gold IRA Scams</Link>.
      </p>

      <h2>Premiums When You Sell</h2>
      <p>
        The premium works in reverse when you sell. You won&apos;t get spot price for your gold or silver — you&apos;ll get spot minus a dealer&apos;s buy-back margin. This is the spread, and it&apos;s how dealers make money.
      </p>
      <p>
        A typical buy-back price for common gold bullion is 1–3% below spot. For silver, the buy-back discount is usually wider — sometimes 5–10% below spot.
      </p>
      <p>
        The <strong>round-trip cost</strong> — what you pay going in and what you receive going out — is the true cost of ownership. A dealer who sells at a 5% premium and buys back at 2% below spot costs you about 7% round-trip. A dealer at 3% and 1% below costs about 4%. Over time, that difference compounds. See{" "}
        <Link href="/blog/what-should-i-truly-pay-for-gold-and-silver" className="text-gold font-semibold">What Should I Truly Pay for Gold and Silver?</Link>{" "}
        for the full framework.
      </p>

      <h2>How to Use This Knowledge</h2>
      <p>
        <strong>Before every purchase, check the current spot price.</strong> This takes seconds. You cannot evaluate whether a price is fair without knowing spot.
      </p>
      <p>
        <strong>Calculate the premium</strong> as both a dollar amount and a percentage. If spot gold is $3,200 and the coin costs $3,360, that&apos;s $160 or 5% over spot.
      </p>
      <p>
        <strong>Compare at least three dealers</strong> — online and local — for the same product with the same payment method. Our{" "}
        <Link href="/online-dealers" className="text-gold font-semibold">online dealer directory</Link>{" "}
        and{" "}
        <Link href="/dealers" className="text-gold font-semibold">local dealer directory</Link>{" "}
        link directly to each dealer&apos;s pricing page.
      </p>
      <p>
        <strong>Factor in total cost.</strong> A dealer with a slightly higher premium but free shipping and no credit card surcharge might be cheaper all-in.
      </p>
      <p>
        <strong>Remember that premiums are negotiable on larger purchases.</strong> If you&apos;re buying 10 or more ounces of gold, ask about volume pricing.
      </p>

      <h2>The Bottom Line</h2>
      <p>
        The spot price is the starting point, not the final price. The premium is not a penalty — it&apos;s the cost of transforming raw commodity metal into a product you can hold in your hand. Reasonable premiums are the cost of doing business with legitimate dealers who source, verify, store, insure, and sell real precious metals.
      </p>
      <p>
        Your job as a buyer is simple: know the spot price, understand the typical premium range for what you&apos;re buying, compare a few sources, and make sure the total cost makes sense. Do that consistently, and you&apos;ll never overpay.
      </p>
      <p style={{ color: "#999", fontSize: "13px", marginTop: "2em", fontStyle: "italic" }}>
        GoldSilverSelect.com is an independent directory of local and online precious metals dealers. We do not sell gold or silver, and we do not receive compensation from any dealer listed on this site.
      </p>
    </>
  ),

  "silver-premiums-and-bar-size": (
    <>
      <p><em>Silver premiums run higher than gold as a percentage — and they shift dramatically depending on what form you buy. Here&apos;s the math that most buyers don&apos;t see until after the receipt.</em></p>
      <p>New silver buyers almost always have the same reaction. They check the spot price, walk into a dealer, and discover that the coin or bar they want costs significantly more per ounce than they expected. A 1 oz American Silver Eagle might carry a premium of $4–8 over a spot price of $32 — that&apos;s 12–25% above the metal value. Coming from the gold world, where premiums run 3–7%, that gap feels wrong.</p>
      <p>It&apos;s not wrong. It&apos;s how silver works. And understanding why — and how to minimize it — is one of the most practical things a silver buyer can learn.</p>
      <h2>Why Silver Premiums Are Higher Than Gold</h2>
      <p>The reason is mechanical, not conspiratorial. It costs roughly the same amount to mine, refine, mint, package, ship, insure, inventory, and sell a 1 oz silver coin as a 1 oz gold coin. But the gold coin might be worth $3,200 and the silver coin might be worth $32. Those fixed costs represent about 3–5% of the gold coin&apos;s value but 15–25% of the silver coin&apos;s value.</p>
      <p>Think of it this way: if it costs a mint $8 to produce a 1 oz coin regardless of metal, that $8 is a rounding error on a $3,200 gold coin but a 25% surcharge on a $32 silver coin. This is the fundamental reason silver premiums, expressed as a percentage, will always be higher than gold premiums. It&apos;s not dealer greed — it&apos;s arithmetic. For more on how gold premiums work, see <Link href="/blog/spot-price-vs-what-you-actually-pay" className="text-gold font-semibold">Spot Price vs. What You Actually Pay</Link>.</p>
      <h2>How Form Factor Changes the Premium</h2>
      <p>The form you buy silver in has a bigger impact on your per-ounce cost than almost any other variable.</p>
      <p><strong>Government-minted silver coins</strong> carry the highest premiums. American Silver Eagles typically range from $4–8 over spot. Canadian Silver Maple Leafs run slightly lower at $3–6 over spot. You&apos;re paying for government backing, recognizable design, anti-counterfeiting features, and legal tender status.</p>
      <p><strong>Private mint silver rounds</strong> occupy the middle ground — typically $2–4 over spot. Same silver content, lower premium, but less recognition and potentially wider sell-back spreads.</p>
      <p><strong>Small silver bars (1–10 oz)</strong> fall in a similar range, with the per-ounce premium dropping as size increases. A 10 oz bar might carry $1.50–3 over spot per ounce.</p>
      <p><strong>Mid-size silver bars (100 oz)</strong> represent a significant premium break — $0.50–1.50 per ounce over spot, approaching gold-like premiums of 1.5–5%.</p>
      <p><strong>Monster boxes of Silver Eagles</strong> (500 coins, sealed from the mint) offer volume pricing that can shave $1–2 per coin off the individual premium.</p>
      <p><strong>Junk silver</strong> — pre-1965 U.S. coins with 90% silver content — carries variable premiums that fluctuate with demand. For a deep dive, see <Link href="/blog/junk-silver-premiums-explained" className="text-gold font-semibold">Junk Silver Premiums Explained</Link>.</p>
      <h2>The Scaling Math</h2>
      <p>At a silver spot price of $32 per ounce, using typical mid-market premiums:</p>
      <p>A single 1 oz American Silver Eagle at $7 over spot costs $39 — <strong>21.9% premium</strong>. For 100 ounces: $3,900.</p>
      <p>A 10 oz silver bar at $2.50 over spot per ounce costs $345 — <strong>7.8% premium</strong>. For 100 ounces (ten bars): $3,450.</p>
      <p>A 100 oz silver bar at $1 over spot per ounce costs $3,300 — <strong>3.1% premium</strong>.</p>
      <p>The difference between 100 ounces in Silver Eagles versus a single 100 oz bar is $600 — nearly 20 additional ounces of silver at spot price. Over years of accumulation, the form factor choice compounds into a significant difference in total ounces owned.</p>
      <h2>When Paying Higher Premiums Makes Sense</h2>
      <p><strong>Liquidity and recognition</strong> matter when you sell. American Silver Eagles are recognized by every dealer. A 100 oz bar needs authentication and limits your buyer pool.</p>
      <p><strong>Divisibility</strong> has real value. If you need to sell 5 or 10 ounces, coins give you that flexibility. A 100 oz bar is all-or-nothing.</p>
      <p><strong>The most practical approach</strong> for most silver buyers is a blend: some recognizable sovereign coins for liquidity and divisibility, plus larger bars for cost efficiency. Compare premiums across dealers using our <Link href="/online-dealers" className="text-gold font-semibold">online dealer directory</Link>.</p>
      <h2>Silver Premiums During Market Stress</h2>
      <p>Silver premiums are more volatile than gold premiums. During the 2020 pandemic surge and the 2021 silver squeeze, premiums on Silver Eagles exceeded $10–12 over spot — nearly 40–50% above metal value. Dealers couldn&apos;t get supply fast enough.</p>
      <p>Elevated premiums during demand spikes are a signal, not an opportunity. When premiums are running double or triple their normal levels, you&apos;re paying a panic tax. Experienced buyers watch premiums as carefully as spot price, and buy more aggressively when premiums are at or below historical norms.</p>
      <h2>The Bottom Line</h2>
      <p>Silver premiums are higher than gold premiums as a percentage — and that&apos;s built into the economics of the metal. The form you buy silver in is the primary lever for controlling your per-ounce cost. For maximum efficiency: buy the largest bar size you&apos;re comfortable with. For maximum liquidity: buy recognizable sovereign coins. For the best balance: mix both.</p>
      <p>The spot price tells you what silver is worth. The premium tells you what the market is charging for the privilege of owning it in physical form. Pay attention to both. For the full framework, see <Link href="/blog/what-should-i-truly-pay-for-gold-and-silver" className="text-gold font-semibold">What Should I Truly Pay for Gold and Silver?</Link></p>
      <p style={{ color: "#999", fontSize: "13px", marginTop: "2em", fontStyle: "italic" }}>GoldSilverSelect.com is an independent directory of local and online precious metals dealers. We do not sell gold or silver, and we do not receive compensation from any dealer listed on this site.</p>
    </>
  ),

  "junk-silver-premiums-explained": (
    <>
      <p><em>Pre-1965 U.S. coins contain 90% silver. They&apos;re not junk at all — and understanding how they&apos;re priced is different from everything else in the precious metals market.</em></p>
      <p>The name is terrible. &ldquo;Junk silver&rdquo; sounds like something you&apos;d throw away, which is exactly the opposite of what it is. The term simply means pre-1965 U.S. coins that contain 90% silver — dimes, quarters, half dollars, and dollars that were pulled from circulation decades ago and are now traded for their silver content rather than their face value.</p>
      <h2>What Qualifies as Junk Silver</h2>
      <p>Before 1965, U.S. dimes, quarters, and half dollars were minted with 90% silver and 10% copper. In 1965, the U.S. Mint switched to clad coins with no silver content. The pre-1965 coins — Roosevelt dimes, Washington quarters, Franklin half dollars, Kennedy half dollars (1964 only at 90%), and Walking Liberty half dollars — are what the market calls junk silver or constitutional silver.</p>
      <p>Morgan and Peace silver dollars also contain 90% silver but are typically priced separately because many have numismatic value above their metal content. War nickels (1942–1945) contain 35% silver and trade at lower premiums.</p>
      <h2>How Junk Silver Is Priced</h2>
      <p>Junk silver is priced per dollar of face value, and the unit of trade is typically a bag — either $1 face value (a small lot), $100 face value (a half bag), or $1,000 face value (a full bag, roughly 715 troy ounces of pure silver).</p>
      <p>The silver content per dollar of face value is approximately <strong>0.715 troy ounces</strong>. To calculate melt value: multiply face value × 0.715 × current spot price. At $32 spot, $1 face value of 90% silver has a melt value of about $22.88. A $1,000 bag is about $22,880.</p>
      <p>The premium is quoted as a price per dollar of face value, over or under melt. In normal markets, junk silver trades at modest premiums — sometimes just a few percent over melt.</p>
      <h2>Why Junk Silver Premiums Fluctuate More Than Bullion</h2>
      <p>Junk silver is a finite, shrinking supply. No new coins are being minted. Every year, some coins get lost, damaged, or melted. When physical demand surges, premiums spike faster and harder than on newly minted products. The <a href="https://www.usmint.gov/" target="_blank" rel="noopener noreferrer">U.S. Mint</a> can ramp up Silver Eagle production, but nobody can make more 1964 Washington quarters.</p>
      <p>Conversely, during quiet markets, premiums can compress to near-zero because the coins are less convenient than standard bullion. This asymmetry — high premiums during surges, low premiums during quiet markets — is what makes junk silver interesting to patient, cost-conscious buyers.</p>
      <h2>The Practical Advantages</h2>
      <p><strong>Authentication is essentially free.</strong> These are U.S. government-minted coins that circulated for decades. Counterfeiting is extremely rare because individual coins are worth so little.</p>
      <p><strong>Divisibility is unmatched.</strong> Sell one dime, sell ten quarters, sell a hundred half dollars. No other form of silver offers this flexibility.</p>
      <p><strong>Recognition is universal</strong> within the United States. Any dealer will instantly know what they are and their approximate value.</p>
      <h2>The Practical Disadvantages</h2>
      <p><strong>Counting and verifying takes time.</strong> A $100 face value lot of quarters is 400 coins.</p>
      <p><strong>Storage is less efficient</strong> than bars. A $1,000 face value bag weighs about 55 pounds.</p>
      <p><strong>Sell-back spreads can be wider</strong> than bullion products because dealers need to sort and count before reselling. Ask about buy-back pricing before accumulating a large position.</p>
      <h2>How to Buy Junk Silver Smart</h2>
      <p><strong>Check the premium to melt ratio before buying.</strong> Calculate melt value ($face × 0.715 × spot), then compare to the asking price. Under 5% is reasonable in normal markets. Over 10% means you&apos;re either in a demand surge or should shop elsewhere.</p>
      <p><strong>Buy during quiet markets.</strong> The best deals appear when demand is low and premiums are compressed — the opposite of panic buying.</p>
      <p><strong>Consider half dollars over dimes for efficiency.</strong> Fewer individual coins to count and handle for the same total silver content.</p>
      <p>For more on how premiums work across different silver products, see <Link href="/blog/silver-premiums-and-bar-size" className="text-gold font-semibold">Silver Premiums and Bar Size</Link>. For the broader premium framework, see <Link href="/blog/spot-price-vs-what-you-actually-pay" className="text-gold font-semibold">Spot Price vs. What You Actually Pay</Link>. Compare silver prices across our <Link href="/online-dealers" className="text-gold font-semibold">online dealer directory</Link>.</p>
      <h2>The Bottom Line</h2>
      <p>Junk silver is one of the most practical ways to own physical silver — divisible, recognizable, impossible to counterfeit, and often available at premiums below newly minted bullion. Buy patiently during quiet markets, store securely, and understand what you own: real silver in a form that Americans have trusted for over a century.</p>
      <p style={{ color: "#999", fontSize: "13px", marginTop: "2em", fontStyle: "italic" }}>GoldSilverSelect.com is an independent directory of local and online precious metals dealers. We do not sell gold or silver, and we do not receive compensation from any dealer listed on this site.</p>
    </>
  ),

  "online-vs-local-coin-dealer": (
    <>
      <p>
        <em>The answer might surprise you. Here&apos;s what really determines whether you get a fair deal.</em>
      </p>
      <p>
        You&apos;ve decided to buy gold or silver. Now comes the question that fills forum threads and comment sections with strong opinions in both directions: should you buy online or from a local coin shop?
      </p>
      <p>
        Some people swear by their local dealer. Others haven&apos;t set foot in a physical coin shop in years. Both camps have reasons, and both are partially right. But the honest answer is simpler than either side admits — the channel matters far less than most people think. What matters is whether you understand what you&apos;re paying.
      </p>

      <h2>The Case for Buying Local</h2>
      <p>
        A good local coin shop offers things that no website can replicate.
      </p>
      <p>
        <strong>Hands-on inspection</strong> is the most obvious advantage. If you&apos;re buying numismatic or collectible coins — anything where condition, eye appeal, or toning matters — there is no substitute for holding the coin in your hand under proper lighting. Photos can obscure problems. Slabs can hide subtle details. For bullion buyers who don&apos;t care about aesthetics, this matters less. But for anyone purchasing coins where the premium is partly based on visual characteristics, local shopping has a genuine edge.
      </p>
      <p>
        <strong>Immediate possession</strong> is the second real advantage. You walk in, you buy, you walk out with metal in your pocket. No shipping window. No tracking number anxiety. No package sitting on your porch. For people who buy precious metals precisely because they want tangible assets under their direct control, the immediacy of a local transaction has real value.
      </p>
      <p>
        <strong>Relationship pricing</strong> develops over time in ways that don&apos;t happen online. A dealer who sees you regularly — who knows you buy ten Silver Eagles every month, or that you&apos;re slowly building a type set — will often sharpen their pricing for you. That regular customer relationship can also mean early access to interesting inventory and a level of trust that takes time to build.
      </p>
      <p>
        <strong>Selling is simpler locally.</strong> When it&apos;s time to sell, you walk in with your metals, get a quote based on that day&apos;s spot price, and walk out with cash or a check. No shipping your gold to a buyer and hoping the package arrives safely. No waiting days for verification and payment. For many sellers — especially those liquidating an inherited collection — the simplicity of a local, same-day transaction is worth a slightly less favorable price.
      </p>

      <h2>The Case for Buying Online</h2>
      <p>
        Online dealers have their own structural advantages that are equally real.
      </p>
      <p>
        <strong>Selection</strong> is the most obvious. A local coin shop carries what fits in its cases and its safe. A major online dealer carries hundreds of products from dozens of mints in every size and metal. If you know exactly what you want, the odds of finding it online are substantially higher.
      </p>
      <p>
        <strong>Transparent, posted premiums</strong> change the pricing dynamic. At most online dealers, every product has a clearly posted price that varies by payment method and quantity. You can compare premiums across five dealers in fifteen minutes without leaving your chair. Online pricing flattens the information asymmetry that can exist in local shop negotiations.
      </p>
      <p>
        <strong>Competitive pricing from volume</strong> is a structural reality. The largest online dealers operate on thinner margins than most local shops can sustain. They buy from mints and distributors at scale, and they pass some of that pricing advantage along. This doesn&apos;t mean online is always cheaper — it means the starting point for comparison is often lower, particularly on commodity bullion products.
      </p>
      <p>
        <strong>Convenience</strong> is straightforward. You can research, compare, and buy at midnight from your couch. For people in rural areas or cities without strong local coin shops, online may be the only realistic option for competitive pricing on precious metals.
      </p>

      <h2>The Real Answer: Premiums Are What Matter</h2>
      <p>
        Here&apos;s the part that both sides of the debate tend to gloss over.
      </p>
      <p>
        A local dealer charging 3% over spot is a better deal than an online dealer charging 5% over spot. An online dealer at 4% over spot beats a local dealer at 7% over spot. The channel — online versus local — is just the delivery mechanism. The premium is the actual cost.
      </p>
      <p>
        If you buy a 1 oz American Gold Eagle at $150 over spot from one dealer and $90 over spot from another, that $60 difference matters far more than whether you drove to a shop or clicked a button. On larger orders — ten ounces of gold, a monster box of Silver Eagles — the premium difference between dealers can be hundreds or even thousands of dollars.
      </p>
      <p>
        This is why comparing before you commit is the single most important habit a precious metals buyer can develop. Not comparing online versus local — comparing premiums across both channels simultaneously. Our{" "}
        <Link href="/dealers" className="text-gold font-semibold">
          dealer directory
        </Link>{" "}
        lists local shops by city, and our{" "}
        <Link href="/online-dealers" className="text-gold font-semibold">
          online dealer directory
        </Link>{" "}
        links directly to each dealer&apos;s pricing page — making side-by-side comparison straightforward.
      </p>

      <h2>Total Cost Is the Full Picture</h2>
      <p>
        Premium over spot is the starting point, but total cost is what you actually pay.
      </p>
      <p>
        <strong>Online purchases</strong> come with ancillary costs that can shift the real price. Shipping and insurance typically add $5 to $30 on smaller orders. Most major online dealers offer free shipping above a threshold — usually $199. Credit card surcharges add 2–4% at most online dealers versus wire transfer or ACH. On a $3,000 purchase, that surcharge alone can be $60 to $120.
      </p>
      <p>
        <strong>Local purchases</strong> have their own hidden costs, though they&apos;re less obvious. The drive to and from the shop costs gas and time. If the closest reputable shop is 30 minutes away, you&apos;re spending an hour of your day plus fuel.
      </p>
      <p>
        <strong>Tax treatment</strong> varies by state and can significantly affect the math. Some states exempt precious metals from sales tax entirely. Others exempt purchases above a certain dollar threshold. A few tax everything. If your state taxes bullion and your local dealer charges sales tax while an online dealer in another state doesn&apos;t have to collect it, the tax difference alone could outweigh any premium advantage the local shop offers.
      </p>

      <h2>When Channel Actually Does Matter</h2>
      <p>
        Despite everything above, there are specific situations where the channel itself makes a meaningful difference.
      </p>
      <p>
        <strong>Numismatic and collectible coins</strong> should generally be purchased in person when possible. Condition, eye appeal, toning, and strike quality matter for these coins, and none of those characteristics translate perfectly through photographs. For a deeper look at how premiums work on specific coins, see our{" "}
        <Link href="/blog/gold-coin-premiums-compared" className="text-gold font-semibold">
          Gold Coin Premiums Compared
        </Link>
        .
      </p>
      <p>
        <strong>Bulk bullion purchases</strong> tend to favor online dealers on pure economics. When you&apos;re buying 10 or more ounces of gold or 100 or more ounces of silver, the per-ounce premium from a high-volume online dealer is usually lower than what most local shops can offer.
      </p>
      <p>
        <strong>Junk silver and constitutional silver</strong> can go either way. Local shops often have more varied and interesting junk silver stock — you can pick through bags and cherry-pick dates if that interests you. Online dealers typically sell junk silver in fixed face-value lots. If you just want 90% silver at the lowest premium, compare both. If you enjoy the hunt, shop local. For more on junk silver, see{" "}
        <Link href="/blog/what-is-junk-silver" className="text-gold font-semibold">
          What Is Junk Silver?
        </Link>
      </p>
      <p>
        <strong>Selling almost always favors local</strong> for simplicity. Walking into a shop, getting a quote, and leaving with cash in hand is dramatically simpler than packaging metals, insuring them, shipping them, and waiting for payment. For guidance on what you should receive when selling, see our article on{" "}
        <Link href="/blog/cash-for-gold-ripoff" className="text-gold font-semibold">
          Cash for Gold: Why Most Buyers Pay You Half What Your Jewelry Is Worth
        </Link>
        .
      </p>
      <p>
        <strong>Emergency or market-spike situations</strong> present a tradeoff. During a demand surge, local shops offer immediate availability — if they have stock. But premiums at local shops during high-demand periods often spike faster and higher than online premiums, because local dealers have limited inventory and are pricing to protect themselves against replacement cost. For more on why premiums spike, see{" "}
        <Link href="/blog/spot-price-vs-what-you-pay" className="text-gold font-semibold">
          Spot Price vs. What You Pay
        </Link>
        .
      </p>

      <h2>How to Get the Best Deal Regardless of Channel</h2>
      <p>
        The most effective approach isn&apos;t &ldquo;always buy online&rdquo; or &ldquo;always buy local.&rdquo; It&apos;s a simple set of habits that work in either channel.
      </p>
      <p>
        <strong>Check the spot price before every transaction.</strong> This takes seconds. Know the current price of gold and silver before you walk into a shop or open a dealer&apos;s website. Without this reference point, you cannot evaluate whether any price you&apos;re quoted is fair.
      </p>
      <p>
        <strong>Know the typical premium range</strong> for the product you&apos;re buying. An American Gold Eagle carries a different premium than a generic gold round. Learn the normal range for the specific product you want. For a detailed breakdown, see{" "}
        <Link href="/blog/what-should-i-truly-pay-for-gold-and-silver" className="text-gold font-semibold">
          What Should I Truly Pay for Gold and Silver?
        </Link>
      </p>
      <p>
        <strong>Compare at least three sources.</strong> Two is not enough — two might both be expensive, and you&apos;d never know. Three gives you a pattern. If all three are similar, you&apos;re seeing the real market. If one is dramatically different, investigate why.
      </p>
      <p>
        <strong>Factor in total cost,</strong> not just the posted premium. Add shipping, insurance, credit card surcharges, and sales tax where applicable. The dealer with the lowest posted premium isn&apos;t always the cheapest once you account for everything.
      </p>
      <p>
        <strong>Ask about buyback pricing before you buy.</strong> This applies to both online and local dealers. The spread between what you pay going in and what you&apos;ll receive going out is the real cost of the transaction.
      </p>

      <h2>The Bottom Line</h2>
      <p>
        The question &ldquo;should I buy online or local?&rdquo; is the wrong question. The right question is &ldquo;which dealer — online or local — is offering me the fairest premium on the product I want, with the best total cost, from a reputable source?&rdquo;
      </p>
      <p>
        Sometimes that answer is a local coin shop. Sometimes it&apos;s an online dealer. Often, it&apos;s worth maintaining relationships with both — a local shop for certain types of transactions and an online dealer for others.
      </p>
      <p>
        The informed buyer wins in either channel. The uninformed buyer overpays in both.
      </p>
      <p style={{ color: "#999", fontSize: "13px", marginTop: "2em", fontStyle: "italic" }}>
        GoldSilverSelect.com is an independent directory of local and online precious metals dealers. We do not sell gold or silver, and we do not receive compensation from any dealer listed on this site.
      </p>
    </>
  ),

  "gold-and-wars-geopolitical-risk-hedge": (
    <>
      <p>
        Gold has been called the ultimate crisis asset. When governments go to war, when borders close, when currencies collapse under the weight of military spending, gold tends to hold its value or rise. This is not a theory. It is a pattern that has repeated across every major conflict of the past 125 years.
      </p>
      <p>
        Understanding this history does not predict the future. But it does explain why central banks, sovereign wealth funds, and experienced investors treat gold as portfolio insurance against the kind of risks that don&apos;t show up in earnings reports.
      </p>

      <h2>The Gold Standard Era: 1900&ndash;1933</h2>
      <p>
        At the turn of the 20th century, gold wasn&apos;t an investment &mdash; it <em>was</em> money. Most major economies operated on the gold standard, meaning their currencies were directly convertible to a fixed weight of gold. The U.S. dollar was pegged at $20.67 per ounce, a price that held from 1879 through 1933.
      </p>
      <p>
        World War I shattered this system in practice, even if it persisted on paper. European nations suspended gold convertibility to finance the war, printing money to pay for munitions, troops, and supplies. The result was severe inflation across Europe. Germany&apos;s hyperinflation of 1921&ndash;1923 &mdash; where a loaf of bread eventually cost billions of marks &mdash; became the defining cautionary tale of what happens when governments print money without restraint.
      </p>
      <p>
        Citizens who held physical gold through this period preserved their wealth. Those who held government currency and bonds did not. This lesson embedded itself in the European financial consciousness and has never fully faded.
      </p>
      <p>
        In the United States, the formal gold price remained fixed at $20.67 through World War I. But in 1933, in the depths of the Great Depression, President Roosevelt issued{" "}
        <a href="https://www.archives.gov/milestone-documents/executive-order-6102" target="_blank" rel="noopener noreferrer">Executive Order 6102</a>, making it illegal for U.S. citizens to hold more than $100 in gold coin, bullion, or certificates. Citizens were required to surrender their gold to the Federal Reserve at $20.67 per ounce. Roosevelt then revalued gold to $35 per ounce &mdash; an overnight 69% devaluation of the dollar against gold.
      </p>
      <p>
        The lesson: when governments face financial crisis, they sometimes change the rules. The people who held gold had their property seized. The government that seized it immediately revalued it higher.
      </p>

      <h2>World War II: 1939&ndash;1945</h2>
      <p>
        World War II cemented gold&apos;s role as the ultimate store of value in crisis. Across occupied Europe, gold was the only universally accepted medium of exchange. Families used gold coins and jewelry to buy passage out of occupied territories, to bribe officials, and to survive when local currencies became worthless under occupation.
      </p>
      <p>
        The war&apos;s aftermath created the{" "}
        <a href="https://www.imf.org/external/about/histend.htm" target="_blank" rel="noopener noreferrer">Bretton Woods system</a> in 1944, which pegged the U.S. dollar to gold at $35 per ounce and pegged all other major currencies to the dollar. The United States, holding roughly two-thirds of the world&apos;s monetary gold reserves, became the anchor of the global financial system.
      </p>
      <p>
        This system worked as long as the U.S. maintained fiscal discipline. It did not survive the next major conflict.
      </p>

      <h2>Vietnam and the End of the Gold Standard: 1965&ndash;1975</h2>
      <p>
        The cost of the Vietnam War, combined with President Johnson&apos;s Great Society domestic spending programs, put enormous pressure on U.S. gold reserves. Foreign governments, watching American deficits mount, began converting their dollar holdings into gold at the $35 fixed rate &mdash; exactly as they were entitled to do under Bretton Woods.
      </p>
      <p>
        By 1971, the drain on U.S. gold reserves was unsustainable. On August 15, 1971, President Nixon{" "}
        <a href="https://www.federalreservehistory.org/essays/gold-convertibility-ends" target="_blank" rel="noopener noreferrer">&ldquo;closed the gold window,&rdquo;</a> ending the dollar&apos;s convertibility into gold. The price was no longer fixed.
      </p>
      <p>
        What followed was the most dramatic gold rally in modern history. From $35 in 1971, gold rose to $850 by January 1980 &mdash; a 2,300% increase in under a decade. The combination of war spending, inflation, the 1973 oil embargo, the Iranian hostage crisis, and the Soviet invasion of Afghanistan created a perfect storm of geopolitical fear and monetary instability.
      </p>
      <p>
        The lesson was clear: when the world feels dangerous and governments are spending beyond their means, gold moves.
      </p>

      <h2>The Gulf Wars and the War on Terror: 1990&ndash;2011</h2>
      <p>
        The 1990&ndash;1991 Gulf War produced a brief gold spike from $383 to $417 &mdash; modest by historical standards, partly because the conflict was short and decisive. The market priced in a quick resolution, and it got one.
      </p>
      <p>
        September 11, 2001, was different. Gold was trading at $271 on September 10. Within weeks it crossed $293, and by 2002 it was above $340. But the real move came as the wars in Afghanistan and Iraq dragged on and the U.S. government&apos;s deficit spending accelerated. Between 2001 and 2011, gold rose from $271 to $1,895 &mdash; a 600% gain over a decade.
      </p>
      <p>
        The 2008 financial crisis layered financial system risk on top of geopolitical risk, supercharging the rally. Central banks around the world responded with unprecedented money printing (quantitative easing), and gold became the de facto hedge against both war and monetary debasement simultaneously.
      </p>

      <h2>The Modern Era: Ukraine, Sanctions, and Central Bank Buying (2022&ndash;Present)</h2>
      <p>
        Russia&apos;s invasion of Ukraine in February 2022 triggered the most significant geopolitical repricing of gold since the 1970s &mdash; not because of the war itself, but because of what followed.
      </p>
      <p>
        Western nations froze approximately $300 billion in Russian central bank reserves held in dollars, euros, and other Western currencies. This was unprecedented. For the first time, a G20 nation&apos;s sovereign reserves were weaponized against it.
      </p>
      <p>
        The message received by every non-aligned central bank in the world was immediate and clear: dollar-denominated reserves can be seized. Gold cannot.
      </p>
      <p>
        The result has been the largest sustained central bank gold-buying program in recorded history. According to the{" "}
        <a href="https://www.gold.org/goldhub/research/gold-demand-trends" target="_blank" rel="noopener noreferrer">World Gold Council</a>, central banks purchased over 1,000 tonnes of gold in both 2022 and 2023, roughly double the historical average. China, Poland, India, Turkey, Singapore, and numerous smaller nations have been aggressive buyers.
      </p>
      <p>
        Gold broke through $2,000 in 2023, $2,500 in 2024, and has continued climbing. As of early 2026, it trades above $3,000. The rally is not driven primarily by retail investors or jewelry demand &mdash; it is driven by sovereign nations diversifying away from dollar reserves and into the one asset that cannot be frozen, sanctioned, or debased by another government&apos;s monetary policy.
      </p>

      <h2>The Pattern</h2>
      <p>
        Every major conflict since 1900 has either directly moved the gold price higher or created the monetary conditions (deficit spending, money printing, currency debasement) that moved it higher in the years that followed.
      </p>
      <p>
        The mechanism is straightforward: wars are expensive. Governments finance them by borrowing and printing money. The resulting inflation and fiscal instability erode confidence in paper currencies. Gold, which cannot be printed, debased, or defaulted on, becomes more attractive by comparison.
      </p>
      <p>
        In the modern era, a second mechanism has emerged: the weaponization of the dollar-based financial system through sanctions. When holding dollars becomes a geopolitical risk for sovereign nations, gold becomes the neutral alternative.
      </p>

      <h2>What This Means for Individual Investors</h2>
      <p>
        None of this means gold always goes up during wars, or that you should buy gold because you expect a conflict. Gold dropped sharply at the outbreak of COVID-19 in March 2020 before recovering. It fell after the initial Gulf War spike. Short-term price movements during crises are unpredictable.
      </p>
      <p>
        What the historical record does support is a more modest claim: over time, across multiple conflicts and crises spanning 125 years, gold has preserved purchasing power better than any government-issued currency. It has served as effective insurance against the monetary consequences of war &mdash; inflation, debasement, and the seizure of financial assets.
      </p>
      <p>
        Most financial advisors who recommend gold suggest a 5&ndash;15% allocation as portfolio insurance, not a speculative position. The goal is not to profit from the next crisis. The goal is to own an asset that holds its value when other assets don&apos;t &mdash; the same reason central banks have been buying at record pace since 2022.
      </p>
      <p>
        Gold does not pay dividends. It does not generate earnings. What it does is sit there, unchanged, while everything else around it shifts. For 125 years, that has been enough.
      </p>
      <p style={{ color: "#999", fontSize: "13px", marginTop: "2em", fontStyle: "italic" }}>
        GoldSilverSelect.com is an independent directory of local and online precious metals dealers. We do not sell gold or silver, and we do not receive compensation from any dealer listed on this site. This article is for educational purposes only and does not constitute investment advice.
      </p>
    </>
  ),

  "central-bank-gold-buying-reshaping-the-market": (
    <>
      <p>
        Something fundamental has changed in the gold market. Since 2022, central banks around the world have been buying gold at a pace not seen since the 1960s. This is not a blip. It is a structural shift in how sovereign nations think about reserves, risk, and the role of the U.S. dollar in the global financial system.
      </p>
      <p>
        For individual investors, understanding this shift matters because central bank demand now represents one of the largest and most persistent sources of buying pressure in the gold market &mdash; and it shows no sign of slowing down.
      </p>

      <h2>The Numbers</h2>
      <p>
        According to the{" "}
        <a href="https://www.gold.org/goldhub/research/gold-demand-trends" target="_blank" rel="noopener noreferrer">World Gold Council</a>, central banks purchased:
      </p>
      <ul>
        <li><strong>2010&ndash;2021 average:</strong> approximately 400&ndash;500 tonnes per year</li>
        <li><strong>2022:</strong> 1,082 tonnes &mdash; the highest annual total since 1967</li>
        <li><strong>2023:</strong> 1,037 tonnes &mdash; the second-highest year on record</li>
        <li><strong>2024:</strong> over 1,000 tonnes for the third consecutive year</li>
        <li><strong>2025 (through Q3):</strong> on pace to exceed 900 tonnes</li>
      </ul>
      <p>
        To put this in perspective, total annual gold mine production is roughly 3,600 tonnes. Central banks are now absorbing nearly a third of all newly mined gold every year. That is an enormous shift in the supply-demand balance.
      </p>

      <h2>Who Is Buying</h2>
      <p>
        The buying is concentrated among emerging market and non-aligned central banks &mdash; nations that are diversifying away from dollar-denominated reserves.
      </p>
      <p>
        <strong>China (People&apos;s Bank of China)</strong> has been the most significant buyer. China&apos;s officially reported gold reserves have grown from approximately 1,054 tonnes in 2015 to over 2,260 tonnes by late 2025. Many analysts believe actual holdings are higher, as China has historically accumulated gold for extended periods before updating its official figures. The PBOC added gold to its reserves for 18 consecutive months between late 2022 and mid-2024 before pausing its public reporting.
      </p>
      <p>
        <strong>Poland</strong> has been the largest European buyer, adding over 130 tonnes since 2018 and publicly stating a target of holding 20% of reserves in gold. The National Bank of Poland&apos;s governor has called gold &ldquo;the most reserve of reserve assets.&rdquo;
      </p>
      <p>
        <strong>India (Reserve Bank of India)</strong> has accelerated purchases, adding over 70 tonnes in 2024 alone. India&apos;s gold reserves now exceed 850 tonnes, up from roughly 560 tonnes in 2018.
      </p>
      <p>
        <strong>Turkey</strong> has been a major but volatile buyer, with the Central Bank of the Republic of Turkey adding and occasionally selling gold based on domestic economic pressures. Net purchases have been substantial &mdash; Turkey&apos;s reserves have grown from roughly 400 tonnes to over 580 tonnes since 2018.
      </p>
      <p>
        <strong>Singapore, Czech Republic, Qatar, Iraq, Uzbekistan,</strong> and numerous other nations have also been consistent buyers. The trend is global, not limited to any single region or political bloc.
      </p>

      <h2>Why They Are Buying</h2>

      <h3>1. De-dollarization and Sanctions Risk</h3>
      <p>
        The freezing of approximately $300 billion in Russian central bank reserves in February 2022 was the catalyst that accelerated an existing trend. When Western nations froze Russia&apos;s dollar, euro, and yen-denominated reserves, every non-aligned central bank received the same message: reserves held in another country&apos;s currency can be seized.
      </p>
      <p>
        Gold held in your own vaults cannot. It has no counterparty risk. It cannot be frozen by sanctions, devalued by another nation&apos;s monetary policy, or defaulted on. For central banks managing sovereign risk, this is a fundamental advantage.
      </p>
      <p>
        The{" "}
        <a href="https://www.imf.org/en/Data" target="_blank" rel="noopener noreferrer">IMF&apos;s COFER data</a> shows the U.S. dollar&apos;s share of global foreign exchange reserves has declined from roughly 72% in 2000 to approximately 58% by 2025. Gold&apos;s share has moved in the opposite direction.
      </p>

      <h3>2. Inflation Hedging</h3>
      <p>
        The post-COVID inflation spike &mdash; which saw consumer prices rise 7&ndash;10% across most developed economies in 2022 &mdash; reminded central bankers that the currencies they hold in reserve can lose purchasing power rapidly. Gold has maintained its purchasing power over centuries, making it an attractive reserve asset during periods of elevated inflation and monetary expansion.
      </p>

      <h3>3. Portfolio Diversification</h3>
      <p>
        Many emerging market central banks are historically under-allocated to gold compared to developed nations. The United States holds approximately 8,133 tonnes (roughly 69% of its reserves in gold). Germany holds 3,352 tonnes (68%). France holds 2,437 tonnes (65%).
      </p>
      <p>
        By contrast, China&apos;s gold represents roughly 4&ndash;5% of its total reserves. India&apos;s is around 9%. There is enormous room for these nations to increase their gold allocation toward levels that Western central banks have maintained for decades.
      </p>
      <p>
        The{" "}
        <a href="https://www.gold.org/goldhub/data/gold-reserves-by-country" target="_blank" rel="noopener noreferrer">World Gold Council&apos;s reserve data</a> shows that if China alone were to increase its gold holdings to 10% of reserves, it would need to purchase approximately 3,000 to 4,000 additional tonnes &mdash; roughly equivalent to an entire year of global mine production.
      </p>

      <h3>4. Geopolitical Hedging</h3>
      <p>
        Nations with strained or uncertain relationships with the United States have the strongest incentive to diversify away from dollar assets. This includes not only geopolitical adversaries but also non-aligned nations that want to maintain flexibility in an increasingly multipolar world. Gold provides that flexibility &mdash; it is universally accepted and politically neutral.
      </p>

      <h2>How Central Bank Buying Affects the Gold Price</h2>
      <p>
        Central bank demand affects the gold market through several mechanisms:
      </p>
      <p>
        <strong>Direct price support.</strong> When central banks absorb nearly a third of annual mine supply, that gold is effectively removed from the market. It goes into sovereign vaults and typically stays there for decades. This reduces available supply for all other buyers &mdash; retail investors, jewelers, ETFs, and institutional funds &mdash; putting upward pressure on prices.
      </p>
      <p>
        <strong>Price floor establishment.</strong> Central banks are not momentum traders. They buy on a schedule, often accumulating on price dips. This buying behavior creates a structural floor under the gold price. During the brief gold pullback in late 2022, central bank buying accelerated rather than paused &mdash; the opposite of how retail and institutional investors typically behave.
      </p>
      <p>
        <strong>Signal effect.</strong> When the world&apos;s most sophisticated financial institutions &mdash; central banks &mdash; are aggressively buying an asset, it sends a signal to other market participants. Institutional investors, sovereign wealth funds, and family offices have all increased gold allocations in part because central bank behavior validates the thesis.
      </p>
      <p>
        <strong>Long-duration demand.</strong> Central banks are the most patient buyers in any market. They are not buying gold to sell next quarter. Their purchases represent decades-long strategic positioning. This means the gold they buy is unlikely to return to the market anytime soon, creating a sustained reduction in available supply.
      </p>

      <h2>The Scale in Context</h2>
      <p>
        To understand how significant 1,000+ tonnes of annual central bank buying is, consider the other major sources of gold demand:
      </p>
      <ul>
        <li><strong>Jewelry:</strong> approximately 2,100 tonnes per year (but heavily concentrated in India and China, and price-sensitive &mdash; it drops when prices rise)</li>
        <li><strong>Technology:</strong> approximately 300 tonnes per year (semiconductor, electronics, medical &mdash; relatively stable)</li>
        <li><strong>ETFs and institutional investment:</strong> varies widely, from net negative (selling) to 500+ tonnes in strong years</li>
        <li><strong>Bars and coins (retail):</strong> approximately 1,000&ndash;1,200 tonnes per year</li>
        <li><strong>Central banks:</strong> now 1,000+ tonnes per year, up from 400&ndash;500 a decade ago</li>
      </ul>
      <p>
        Central bank demand has gone from roughly 10% of total gold demand to over 25% in three years. That is a massive structural shift.
      </p>

      <h2>What Happens Next</h2>
      <p>
        No one can predict gold prices with certainty. But the structural factors driving central bank buying are not short-term:
      </p>
      <ul>
        <li>Geopolitical tensions between major powers show no signs of easing</li>
        <li>Sanctions remain a primary tool of Western foreign policy</li>
        <li>Emerging market central banks remain under-allocated to gold relative to developed nations</li>
        <li>U.S. fiscal deficits continue to expand, raising long-term questions about dollar purchasing power</li>
        <li>The trend toward a multipolar financial system favors neutral reserve assets</li>
      </ul>
      <p>
        The{" "}
        <a href="https://www.gold.org/goldhub/research/2024-central-bank-gold-reserves-survey" target="_blank" rel="noopener noreferrer">World Gold Council&apos;s 2024 Central Bank Survey</a> found that 24% of central banks intend to increase their gold reserves in the next 12 months, the highest percentage since the survey began. No central banks surveyed planned to decrease holdings.
      </p>

      <h2>What This Means for Individual Investors</h2>
      <p>
        Central bank buying does not guarantee gold prices will rise. Markets are complex, and gold can decline even amid strong institutional demand if other factors &mdash; rising real interest rates, a strengthening dollar, or broad risk-on sentiment &mdash; exert stronger opposing pressure.
      </p>
      <p>
        What central bank buying does provide is a structural demand floor that did not exist at this scale before 2022. When the most conservative, longest-horizon financial institutions in the world are buying an asset at three times their historical rate, it tells you something about how they view the risks ahead.
      </p>
      <p>
        Individual investors don&apos;t need to match central bank strategy. But understanding that the largest, most sophisticated buyers in the gold market are aggressively accumulating is useful context for anyone considering precious metals as part of a diversified portfolio.
      </p>
      <p style={{ color: "#999", fontSize: "13px", marginTop: "2em", fontStyle: "italic" }}>
        GoldSilverSelect.com is an independent directory of local and online precious metals dealers. We do not sell gold or silver, and we do not receive compensation from any dealer listed on this site. This article is for educational purposes only and does not constitute investment advice.
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

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "GoldSilverSelect",
      url: "https://goldsilverselect.com",
    },
    publisher: {
      "@type": "Organization",
      name: "GoldSilverSelect",
      url: "https://goldsilverselect.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://goldsilverselect.com/blog/${params.slug}`,
    },
  };

  return (
    <>
      <TickerBanner />
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Breadcrumb */}
      <div className="max-w-[760px] mx-auto" style={{ padding: "16px 24px 0" }}>
        <nav className="font-sans text-[12px]" style={{ color: "#999" }}>
          <Link href="/blog" className="no-underline hover:text-gold" style={{ color: "#999" }}>
            Blog
          </Link>
          {post.series && (
            <>
              <span className="mx-1.5">&rsaquo;</span>
              <span style={{ color: "#999" }}>{post.series}</span>
            </>
          )}
          <span className="mx-1.5">&rsaquo;</span>
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
