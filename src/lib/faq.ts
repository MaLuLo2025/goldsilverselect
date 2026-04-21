export interface FAQLink {
  label: string;
  href: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  learnMoreLabel?: string;
  learnMoreHref?: string;
  links?: FAQLink[];
}

export interface FAQCategory {
  id: string;
  title: string;
  items: FAQItem[];
}

export const faqCategories: FAQCategory[] = [
  {
    id: "buying",
    title: "Buying Gold & Silver",
    items: [
      {
        question: "What is the spot price of gold and silver?",
        answer: "The spot price is the current wholesale benchmark for raw metal on global commodity exchanges like COMEX and the London Bullion Market. It changes throughout the trading day based on futures contracts, currency movements, and global supply and demand. The spot price is your starting point for evaluating any purchase \u2014 but it\u2019s not the price you\u2019ll pay. Every dealer charges a premium above spot. Understanding that premium is the key to knowing whether you\u2019re getting a fair deal.",
        learnMoreLabel: "Spot Price vs. What You Actually Pay at the Counter",
        learnMoreHref: "/blog/spot-price-vs-what-you-actually-pay",
      },
      {
        question: "What is a premium, and how much should I expect to pay?",
        answer: "The premium is the amount a dealer charges above the spot price. It covers manufacturing, refining, minting, shipping, insurance, and the dealer\u2019s margin. Fair premiums vary by product type. Generic bullion bars and rounds typically carry premiums of 3\u20136% over spot for gold. Government-minted coins like American Eagles run higher \u2014 roughly 5\u20138% in normal market conditions. Silver premiums run higher as a percentage than gold because the per-ounce price is lower and fixed costs make up a larger share. These ranges shift with market conditions, and knowing the typical range for what you\u2019re buying is the single best protection against overpaying.",
        learnMoreLabel: "What Should I Truly Pay for Gold and Silver?",
        learnMoreHref: "/blog/what-should-i-truly-pay-for-gold-and-silver",
      },
      {
        question: "What\u2019s the difference between bullion and numismatic coins?",
        answer: "Bullion is valued primarily by its metal content and weight \u2014 a 1 oz gold bar is worth roughly 1 oz of gold plus a modest premium. Numismatic coins are valued for rarity, condition, historical significance, and collector demand, often well above their metal value. A rare date Morgan Silver Dollar might sell for hundreds of times the value of its silver content. If your goal is to own metal, buy bullion. If you\u2019re a collector who understands grading and mintage numbers, numismatic premiums can be justified \u2014 but understand that you\u2019re paying for the coin, not just the metal inside it.",
        learnMoreLabel: "Gold Coin Premiums Compared",
        learnMoreHref: "/blog/gold-coin-premiums-compared",
      },
      {
        question: "Should I buy gold online or from a local coin shop?",
        answer: "Either can work well. Local coin shops offer hands-on inspection \u2014 especially important for numismatic coins \u2014 plus immediate possession with no shipping risk. Online dealers typically offer wider selection and posted premiums that are easy to compare across multiple sites. The channel matters less than the premium you\u2019re paying. A local dealer at 3% over spot is a better deal than an online dealer at 5% over spot, and vice versa. Compare at least three dealers regardless of channel.",
        learnMoreLabel: "Online vs. Local Coin Dealer \u2014 Does It Actually Matter?",
        learnMoreHref: "/blog/online-vs-local-coin-dealer",
      },
      {
        question: "What\u2019s the difference between gold bars and gold coins?",
        answer: "Gold bars \u2014 especially generic or private-mint bars \u2014 typically carry lower premiums than coins because they\u2019re cheaper to produce. Government-minted coins like Eagles, Maple Leafs, and Krugerrands carry higher premiums but are more universally recognized and generally easier to sell. There\u2019s also a size tradeoff: larger bars have lower per-ounce premiums, but they\u2019re less divisible. You can\u2019t sell half a 10 oz bar. Many buyers hold a mix of coins and bars to balance cost efficiency with flexibility.",
        learnMoreLabel: "Gold Coin Premiums Compared",
        learnMoreHref: "/blog/gold-coin-premiums-compared",
      },
      {
        question: "Is it better to buy gold or silver?",
        learnMoreLabel: "The Gold-to-Silver Ratio: What It Is and How Traders Use It",
        learnMoreHref: "/blog/gold-silver-ratio-explained",
        answer: "They serve different purposes. Gold stores more value in less space and weight \u2014 an ounce of gold is worth roughly 90\u2013100 ounces of silver, making it far easier to store, transport, and liquidate in large amounts. Silver is more affordable per ounce, making it accessible for smaller budgets, but it requires significantly more storage space for equivalent value. Many buyers hold both. The gold-to-silver ratio \u2014 which tells you how many ounces of silver it takes to buy one ounce of gold at current prices \u2014 is one metric some buyers use to decide which metal is relatively cheaper at any given time. You can see the live ratio on our homepage ticker.",
        links: [
          { label: "Gold and Wars: 125 Years as a Geopolitical Risk Hedge", href: "/blog/gold-and-wars-geopolitical-risk-hedge" },
          { label: "Central Bank Gold Buying: The Biggest Shift in 50 Years", href: "/blog/central-bank-gold-buying-reshaping-the-market" },
          { label: "Why Silver Crossed $100: Industrial Demand Explained", href: "/blog/silver-industrial-demand-2026" },
        ],
      },
      {
        question: "How do I know if a coin dealer is legitimate?",
        answer: "Look for a verifiable physical address \u2014 not a P.O. box. Check their Better Business Bureau rating and Google reviews, paying attention to the actual content of the reviews, not just the star count. See how long they\u2019ve been in business. Transparent posted pricing is a good sign \u2014 if everything is \u201Ccall for a quote,\u201D that\u2019s a negotiation setup. Avoid dealers who cold-call you, use extreme urgency tactics, or try to steer you away from the product you asked about into higher-margin items.",
        learnMoreLabel: "What Should I Truly Pay for Gold and Silver?",
        learnMoreHref: "/blog/what-should-i-truly-pay-for-gold-and-silver",
      },
      {
        question: "What should I buy first if I\u2019m just starting out?",
        answer: "Most experienced buyers suggest starting with widely recognized government-minted bullion \u2014 American Gold Eagles, Silver Eagles, or Canadian Maple Leafs. These carry moderate premiums, are universally recognized by dealers worldwide, and are easy to sell anywhere. They\u2019re a straightforward entry point while you learn how the market works. Avoid numismatic or collectible coins until you have a solid understanding of premiums, grading, and how the secondary market for rare coins operates.",
        learnMoreLabel: "What Should I Truly Pay for Gold and Silver?",
        learnMoreHref: "/blog/what-should-i-truly-pay-for-gold-and-silver",
      },
      {
        question: "Should I buy silver bars or silver coins?",
        answer: "It depends on your priorities. Silver coins from government mints (American Eagles, Canadian Maple Leafs) are universally recognized and easy to sell, but carry premiums of 12\u201325% over spot. Silver bars \u2014 especially 10 oz and 100 oz bars \u2014 carry much lower premiums per ounce (3\u20138% for 10 oz, 1.5\u20135% for 100 oz), giving you more silver for the same dollars. The tradeoff is liquidity and divisibility: you can sell one coin at a time, but you can\u2019t sell half a bar. Most experienced buyers hold a mix \u2014 coins for flexibility, bars for cost efficiency.",
        learnMoreLabel: "Silver Premiums and How Bar Size Affects What You Pay",
        learnMoreHref: "/blog/silver-premiums-and-bar-size",
      },
      {
        question: "Why are silver premiums higher than gold premiums?",
        answer: "It costs roughly the same amount to mint, package, ship, and sell a 1 oz silver coin as a 1 oz gold coin. But the gold coin is worth ~$3,200 and the silver coin is worth ~$32. Those fixed handling costs represent 3\u20135% of the gold coin\u2019s value but 15\u201325% of the silver coin\u2019s value. This is arithmetic, not dealer greed. The most effective way to reduce the percentage premium on silver is to buy larger formats \u2014 10 oz bars, 100 oz bars, or monster boxes \u2014 where the fixed cost is spread across more ounces.",
        learnMoreLabel: "Silver Premiums and How Bar Size Affects What You Pay",
        learnMoreHref: "/blog/silver-premiums-and-bar-size",
      },
      {
        question: 'What is "junk silver"?',
        answer: "\u201CJunk silver\u201D refers to pre-1965 U.S. coins \u2014 dimes, quarters, and half dollars \u2014 that contain 90% silver. The term \u201Cjunk\u201D doesn\u2019t mean they\u2019re worthless. It means they have no significant numismatic or collectible value \u2014 they\u2019re bought and sold purely for their silver content. A $1 face value bag of pre-1965 quarters contains approximately 0.715 troy ounces of pure silver. Junk silver is popular because it comes in small, divisible denominations, is widely recognized, and has a fixed supply that makes it genuinely scarce during high-demand periods.",
        learnMoreLabel: "Junk Silver Premiums Explained: The Constitutional Silver Guide",
        learnMoreHref: "/blog/junk-silver-premiums-explained",
      },
      {
        question: "Should I pay with credit card or bank transfer?",
        answer: "Most online dealers charge a 2\u20134% surcharge for credit card purchases versus wire transfer or ACH payment. On a $3,000 purchase, that\u2019s $60\u2013120 in additional cost. Bank transfers save money but take longer to process and don\u2019t offer the purchase protection that comes with a credit card. Some buyers accept the surcharge for the convenience and rewards points. There\u2019s no wrong answer, but you should factor the payment method into your total cost comparison.",
        learnMoreLabel: "What Should I Truly Pay for Gold and Silver?",
        learnMoreHref: "/blog/what-should-i-truly-pay-for-gold-and-silver",
      },
    ],
  },
  {
    id: "selling",
    title: "Selling Gold & Silver",
    items: [
      {
        question: "How do I sell gold or silver I already own?",
        answer: "You have two main options. Sell to a local dealer for immediate cash \u2014 walk in, get a quote, walk out with payment. Or sell to an online dealer \u2014 ship your metals, receive payment after they verify the product. Local is faster and simpler. Online may offer slightly better prices on larger quantities because high-volume online buyers operate on thinner margins. In either case, check the spot price before you go, and get quotes from at least two or three buyers before committing.",
        learnMoreLabel: "What Should I Truly Pay for Gold and Silver?",
        learnMoreHref: "/blog/what-should-i-truly-pay-for-gold-and-silver",
      },
      {
        question: "What will a dealer pay me for my gold or silver?",
        answer: "Dealers typically buy at or slightly below the current spot price for commodity bullion, and at a small premium below spot for highly recognizable products like American Gold Eagles and Maple Leafs. The gap between what you paid when you bought (premium above spot) and what you receive when you sell (at or near spot) is the round-trip cost of ownership. This spread varies by product and by dealer. Always ask about buyback pricing before you make a purchase.",
        learnMoreLabel: "What Should I Truly Pay for Gold and Silver?",
        learnMoreHref: "/blog/what-should-i-truly-pay-for-gold-and-silver",
      },
      {
        question: "Where can I sell gold and silver coins I inherited?",
        answer: "Start by identifying what you have. Government-minted bullion coins \u2014 Eagles, Maple Leafs, Krugerrands \u2014 are straightforward. Their value is primarily their metal content, and any reputable dealer can quote you a price. Numismatic or collectible coins are more complex. Their value may be significantly above metal content based on rarity, condition, and collector demand. For bullion, get quotes from multiple local and online dealers. For potentially valuable collectible coins, consider a professional appraisal from a PCGS or NGC authorized dealer before selling.",
        learnMoreLabel: "Numismatic vs. Bullion \u2014 Understanding the Markup",
        learnMoreHref: "/blog/gold-coin-premiums-compared",
      },
      {
        question: "Should I sell my gold when the price goes up?",
        learnMoreLabel: "What Should I Truly Pay for Gold and Silver?",
        learnMoreHref: "/blog/what-should-i-truly-pay-for-gold-and-silver",
        answer: "That\u2019s a personal financial decision that depends on your goals, and we can\u2019t advise on it. What we can tell you is that if you do decide to sell, the same principles apply as when buying: know the spot price, compare offers from at least two or three dealers, and understand that premiums and buyback spreads vary. Selling in a panic \u2014 whether driven by fear the price will drop or excitement that it\u2019s risen \u2014 is rarely optimal. A calm, informed seller who compares offers will almost always get a better result than one who accepts the first quote.",
      },
      {
        question: "Do I owe taxes when I sell gold or silver?",
        answer: "Yes. The IRS classifies physical gold and silver bullion as collectibles under IRC Section 408(m). Long-term gains (metal held more than one year) are taxed at a maximum federal rate of 28% \u2014 higher than the 0/15/20% rates that apply to stocks. Short-term gains (held one year or less) are taxed at your ordinary income rate. Your gain is the sale price minus your cost basis, which includes what you originally paid the dealer plus any premium, sales tax, shipping, and insurance. Keep every purchase receipt \u2014 without documentation, the IRS can treat the entire sale proceeds as gain.",
        learnMoreLabel: "Capital Gains Tax on Gold and Silver",
        learnMoreHref: "/blog/capital-gains-tax-gold-silver-2026",
      },
      {
        question: "Will the dealer report my sale to the IRS?",
        answer: "Sometimes \u2014 it depends on what and how much you sell. Dealers are required to file Form 1099-B for sales that meet specific IRS thresholds: 25 or more 1 oz gold Maple Leafs, Krugerrands, or Mexican Onzas; 1 kilogram or more of gold bars; 1,000 troy ounces or more of silver bars or rounds; and 90% silver U.S. coins with face value of $1,000 or more. Notably absent from this list are American Gold Eagles, American Silver Eagles, and American Buffalos in any quantity \u2014 these typically do not trigger 1099-B reporting. But the absence of a 1099-B does NOT mean the gain is tax-free. You are still legally required to report and pay tax on every taxable gain.",
        learnMoreLabel: "Capital Gains Tax on Gold and Silver",
        learnMoreHref: "/blog/capital-gains-tax-gold-silver-2026",
      },
      {
        question: "How are inherited gold and silver coins taxed?",
        answer: "Inherited precious metals receive a stepped-up basis under current federal law. Your cost basis becomes the fair market value on the date of the original owner\u2019s death \u2014 not the price they originally paid decades ago. This means heirs who sell soon after inheriting often owe little or no capital gains tax, even on metal held in the family for years. If you inherit gold or silver, get a written appraisal from a reputable dealer documenting the date-of-death value and keep it permanently \u2014 it establishes your basis for any future sale.",
        learnMoreLabel: "Capital Gains Tax on Gold and Silver",
        learnMoreHref: "/blog/capital-gains-tax-gold-silver-2026",
      },
      {
        question: "Where should I actually sell my gold jewelry to get the best price?",
        learnMoreLabel: "What Do Cash-for-Gold Shops Actually Pay?",
        learnMoreHref: "/blog/what-do-cash-for-gold-shops-actually-pay",
        answer: "For standard non-collectible pieces: an online bullion dealer buyback program or a local coin/precious metals dealer will typically pay 75\u201395% of melt value. Cash-for-gold shops and pawn shops typically pay 40\u201360% of melt.",
      },
      {
        question: "What does \u2018we pay 90% of spot\u2019 actually mean?",
        learnMoreLabel: "What Do Cash-for-Gold Shops Actually Pay?",
        learnMoreHref: "/blog/what-do-cash-for-gold-shops-actually-pay",
        answer: "It generally means 90% of the melt value of the pure gold content in your item \u2014 not 90% of the total weight at spot. Multiply gram weight by karat purity, divide by 31.103 to convert to troy ounces, then multiply by current spot.",
      },
    ],
  },
  {
    id: "premiums",
    title: "Understanding Premiums & Pricing",
    items: [
      {
        question: "Why does gold and silver cost more than the spot price?",
        answer: "The spot price is a wholesale benchmark for raw, unformed metal on commodity exchanges. Turning that raw metal into a finished coin or bar requires mining, refining, minting, quality assurance, packaging, shipping, insuring, and retailing. Every step in that supply chain adds cost. The premium above spot covers those production and distribution costs plus the dealer\u2019s operating margin. Premiums are a normal and unavoidable part of buying physical precious metals \u2014 the question isn\u2019t whether you\u2019ll pay one, but whether you\u2019re paying a fair one.",
        learnMoreLabel: "Spot Price vs. What You Actually Pay",
        learnMoreHref: "/blog/spot-price-vs-what-you-actually-pay",
      },
      {
        question: "What is a fair premium for gold coins?",
        answer: "It depends on the product. Generic gold rounds from private mints typically carry premiums of 3\u20136% over spot. American Gold Eagles usually run 5\u20138% in normal market conditions. Canadian Maple Leafs tend to fall in the 4\u20137% range. Specialty, proof, or limited-mintage coins carry premiums that vary widely based on collector demand and available supply. These ranges are not fixed \u2014 they shift with market conditions. Premiums tend to rise during periods of high public demand and compress during quieter markets.",
        learnMoreLabel: "Gold Coin Premiums Compared",
        learnMoreHref: "/blog/gold-coin-premiums-compared",
      },
      {
        question: "What is a fair premium for silver?",
        answer: "Silver premiums run higher as a percentage than gold premiums. This is because the per-ounce price of silver is much lower, so fixed costs \u2014 minting, shipping, handling \u2014 represent a larger share of the total price. Generic silver rounds typically carry premiums of 8\u201315% over spot. American Silver Eagles can run 15\u201330% or more depending on market conditions and U.S. Mint supply constraints. Larger silver bars \u2014 10 oz, 100 oz \u2014 carry lower percentage premiums and are the most cost-effective way to accumulate silver by weight.",
        learnMoreLabel: "Silver Premiums and How Bar Size Affects What You Pay",
        learnMoreHref: "/blog/silver-premiums-and-bar-size",
      },
      {
        question: "How is junk silver priced differently from bullion?",
        answer: "Junk silver (pre-1965 U.S. coins with 90% silver) is priced per dollar of face value, not per coin. The silver content per dollar of face value is approximately 0.715 troy ounces. To calculate melt value: multiply face value \u00d7 0.715 \u00d7 the current spot price of silver. Premiums on junk silver fluctuate more than standard bullion because supply is finite and shrinking \u2014 no new coins are being minted. During quiet markets, junk silver can trade near or even below melt value. During demand surges, premiums can spike dramatically.",
        learnMoreLabel: "Junk Silver Premiums Explained",
        learnMoreHref: "/blog/junk-silver-premiums-explained",
      },
      {
        question: "What is the round-trip cost of buying and selling precious metals?",
        answer: "The round-trip cost is the total premium you pay when buying plus the discount you receive when selling. If you buy a gold coin at 5% over spot and sell it back at 2% below spot, your round-trip cost is roughly 7%. This is the true cost of ownership \u2014 not just the premium you paid going in. Product choice affects the round trip: government-minted coins like Eagles generally command better buyback prices than generic rounds, partially offsetting their higher purchase premium. Always ask about buyback pricing before you buy.",
        learnMoreLabel: "Spot Price vs. What You Actually Pay",
        learnMoreHref: "/blog/spot-price-vs-what-you-actually-pay",
      },
      {
        question: "Why do premiums spike sometimes?",
        answer: "Premiums spike when physical demand outpaces the available supply of finished products. This typically happens during financial crises, geopolitical shocks, or sudden surges in retail buying. The spot price \u2014 which reflects futures contracts \u2014 may not move much, but the cost of an actual coin or bar can jump significantly because mints, refiners, and dealers simply can\u2019t produce and ship fast enough to meet demand. Premiums generally compress back to normal ranges once demand stabilizes, but that can take weeks or months.",
        learnMoreLabel: "Spot Price vs. What You Actually Pay at the Counter",
        learnMoreHref: "/blog/spot-price-vs-what-you-actually-pay",
        links: [
          { label: "Why Silver Crossed $100: Industrial Demand and the Supply Deficit", href: "/blog/silver-industrial-demand-2026" },
        ],
      },
      {
        question: "What is the gold-to-silver ratio?",
        learnMoreLabel: "The Gold-to-Silver Ratio Explained",
        learnMoreHref: "/blog/gold-silver-ratio-explained",
        answer: "The gold-to-silver ratio tells you how many ounces of silver it takes to buy one ounce of gold at current prices. If gold is $3,000/oz and silver is $30/oz, the ratio is 100:1. The historical average over the past several decades has generally ranged between 50:1 and 80:1, though it has spiked above 100:1 during periods of financial stress. Some buyers use this ratio as a signal \u2014 a historically high ratio (meaning silver is cheap relative to gold) might favor silver purchases, and vice versa. The ratio is not a prediction tool, but it provides context. You can see the live gold-to-silver ratio on our homepage ticker.",
      },
      {
        question: "What\u2019s a fair premium over spot for a 1-oz American Gold Eagle in 2026?",
        learnMoreLabel: "How Much Over Spot Should I Pay for Gold?",
        learnMoreHref: "/blog/how-much-over-spot-should-i-pay-for-gold-2026",
        answer: "In normal market conditions, 3\u20136% over the live spot price. At gold near $5,100 an ounce, that\u2019s roughly a $150\u2013$310 premium per coin. Premiums above 10% on standard Eagles generally reflect either a temporary supply disruption or a dealer pricing well above the market. For a full breakdown of fair premium ranges across gold and silver bullion, see our guide on how much over spot to pay for gold.",
      },
      {
        question: "How do I spot a padded spot price?",
        learnMoreLabel: "How Much Over Spot Should I Pay for Gold?",
        learnMoreHref: "/blog/how-much-over-spot-should-i-pay-for-gold-2026",
        answer: "Compare the spot price shown on a dealer\u2019s website to an independent source \u2014 Kitco, the LBMA reference price, or a major financial news site \u2014 at the same moment. A discrepancy of more than a few dollars per ounce means the dealer is pricing against an inflated reference, and any \u2018X% over spot\u2019 claim is misleading. Reputable dealers update their spot displays in near real-time from live market feeds.",
      },
    ],
  },
  {
    id: "jewelry",
    title: "Selling Jewelry & Scrap",
    items: [
      {
        question: "How much is my gold jewelry worth?",
        learnMoreLabel: "Cash for Gold: Why Most Buyers Pay You Half",
        learnMoreHref: "/blog/cash-for-gold-ripoff",
        answer: "Gold jewelry value for resale is based on its metal content \u2014 weight multiplied by purity \u2014 not what you paid at a jewelry store. Check the karat stamp on the piece: 10K is 41.7% pure gold, 14K is 58.3%, 18K is 75%, and 24K is 99.9% pure. Weigh the piece in grams, multiply by the purity percentage, then multiply by the current gold price per gram. That calculation gives you the melt value. Most buyers will offer 70\u201390% of melt value, with the discount covering their assay and refining costs.",
      },
      {
        question: 'Should I sell gold jewelry to a "cash for gold" shop?',
        answer: "Approach with caution. Some cash-for-gold operations offer fair prices. Others offer 50% or less of the actual melt value, relying on the seller not knowing what their gold is worth. Protect yourself: calculate the melt value yourself before walking in (weight \u00d7 purity \u00d7 current gold price per gram). Get quotes from at least three buyers, including local coin dealers \u2014 many of them buy gold jewelry for melt and may offer better prices than dedicated cash-for-gold shops. Never accept the first offer without comparing.",
      },
      {
        question: "Is sterling silver flatware or jewelry worth selling?",
        learnMoreLabel: "Cash for Gold: Why Most Buyers Pay You Half",
        learnMoreHref: "/blog/cash-for-gold-ripoff",
        answer: "Sterling silver is 92.5% pure silver. Its melt value depends on weight and the current silver spot price. Because silver is much less valuable per ounce than gold, silver jewelry and flatware have lower melt value than most people expect. A sterling silver fork might contain $15\u201330 worth of silver at current spot prices. Whether selling is worthwhile depends on the total quantity you have and whether any of the pieces have collectible or antique value beyond their metal content.",
      },
      {
        question: "What about gold-plated or gold-filled items?",
        answer: "Gold-plated items have a microscopically thin layer of gold over a base metal. The actual gold content is negligible, and most dealers won\u2019t buy them for melt. Gold-filled items \u2014 often stamped \u201CGF\u201D or marked with a fraction like \u201C1/20 12K GF\u201D \u2014 contain more gold than plated items but still far less than solid gold. Some refiners accept gold-filled items in bulk, but individual pieces aren\u2019t typically worth selling for their gold content. If you\u2019re unsure whether a piece is solid gold, plated, or filled, a reputable local jeweler or coin dealer can help you identify it.",
      },
    ],
  },
  {
    id: "storage",
    title: "Storage & Security",
    items: [
      {
        question: "How should I store gold and silver at home?",
        answer: "If you store precious metals at home, use a quality safe that is both fireproof and securely anchored \u2014 bolted to the floor or wall. Keep your holdings private. Discussing what you own, how much you have, or where you store it creates unnecessary risk. Consider splitting your holdings across multiple locations to reduce the impact of any single loss. And check your homeowner\u2019s or renter\u2019s insurance policy carefully \u2014 standard policies often have surprisingly low coverage limits for precious metals, sometimes as little as $200. You may need a scheduled rider or separate policy.",
        learnMoreLabel: "Home, Vault, or Safe Deposit Box? Full Storage Guide",
        learnMoreHref: "/blog/storing-gold-silver-safely",
      },
      {
        question: "What about bank safe deposit boxes?",
        answer: "Safe deposit boxes offer strong physical security, but they have limitations worth understanding. Their contents are not FDIC insured \u2014 if items are lost, damaged, or stolen, the bank\u2019s liability is typically very limited. Access is restricted to bank hours, which means you can\u2019t reach your metals on weekends, holidays, or outside business hours. During banking crises, legal disputes, or certain government actions, access can be frozen. Some buyers use safe deposit boxes for a portion of their holdings while keeping some accessible at home.",
        learnMoreLabel: "Home, Vault, or Safe Deposit Box? Full Storage Guide",
        learnMoreHref: "/blog/storing-gold-silver-safely",
      },
      {
        question: "Should I buy gold through an IRA?",
        answer: "Gold IRAs exist and are legal, but the industry around them is one of the most aggressively marketed and fee-heavy corners of the precious metals world. Setup fees, annual custodian fees, storage fees, and transaction fees can significantly erode returns over time. Many gold IRA companies spend heavily on advertising \u2014 celebrity endorsements, free gold promotions, fear-based marketing \u2014 and those costs are ultimately passed on to the customer through higher premiums and fees. If you\u2019re considering a gold IRA, research the full fee structure thoroughly and compare the total cost to simply buying physical gold yourself and storing it independently. Consult a fee-only financial advisor who doesn\u2019t earn a commission from the sale.",
        links: [
          { label: "Gold IRA Scams \u2014 What You Need to Know", href: "/blog/gold-ira-scams" },
          { label: "The Home Storage Gold IRA Scam", href: "/blog/home-storage-gold-ira-scam" },
          { label: "Gold IRA Scams: Red Flags from Federal Enforcement Actions", href: "/blog/gold-ira-scams-red-flags-federal" },
        ],
      },
      {
        question: "Is a gold IRA legitimate, or is the whole concept a scam?",
        learnMoreLabel: "Gold IRA Scams: Red Flags from Federal Enforcement Actions",
        learnMoreHref: "/blog/gold-ira-scams-red-flags-federal",
        answer: "The concept is legitimate. A self-directed IRA can legally hold IRS-approved gold, silver, platinum, and palladium, and the structure is recognized by the IRS. What gets retirees in trouble is not the concept \u2014 it\u2019s the sales tactics and pricing of specific dealers, which the SEC, CFTC, and FTC have repeatedly pursued in enforcement actions.",
      },
      {
        question: "Can I store my gold IRA at home?",
        learnMoreLabel: "Gold IRA Scams: Red Flags from Federal Enforcement Actions",
        learnMoreHref: "/blog/gold-ira-scams-red-flags-federal",
        answer: "No. The IRS requires precious metals held in an IRA to be stored by an approved depository. The U.S. Tax Court confirmed this in McNulty v. Commissioner (2021), ruling that home storage constituted a taxable distribution \u2014 triggering income tax on the full value plus a 10% early withdrawal penalty for taxpayers under age 59\u00bd.",
      },
      {
        question: "What types of gold are IRS-approved for an IRA?",
        learnMoreLabel: "Gold IRA Scams: Red Flags from Federal Enforcement Actions",
        learnMoreHref: "/blog/gold-ira-scams-red-flags-federal",
        answer: "Gold held in an IRA must be at least 99.5% pure (with the American Gold Eagle as a statutory exception). Approved products include American Gold Eagles, American Gold Buffalos, Canadian Gold Maple Leafs, Austrian Gold Philharmonics, and gold bars from refiners on accredited lists.",
      },
      {
        question: "What is allocated vs. segregated vs. unallocated storage?",
        answer: "These terms describe how a depository holds your metals. Segregated storage means your items are physically separated from all other clients\u2019 holdings in a dedicated space \u2014 you get back the exact bars or coins you deposited. Allocated storage means your metals are identified and assigned to your account but may share vault space with others\u2019 holdings. Unallocated storage means you own a claim to a quantity of metal, but no specific items are assigned to you \u2014 the depository holds a pool and owes you your share. Unallocated is cheapest but carries the most counterparty risk: in a bankruptcy, unallocated metal may be treated as a general asset of the company, not as your property. For most individual buyers, allocated or segregated is the appropriate choice.",
        learnMoreLabel: "Full Storage Guide: Home, Vault, or Safe Deposit Box",
        learnMoreHref: "/blog/storing-gold-silver-safely",
      },
      {
        question: "Does homeowner\u2019s insurance cover gold and silver?",
        answer: "Barely. Standard homeowner\u2019s insurance policies typically cover only $200 to $500 in precious metals \u2014 a sublimit buried in the policy that most people don\u2019t discover until after a loss. If you store any meaningful quantity at home, you almost certainly need a scheduled personal property rider (also called a floater). Rider costs typically run $1 to $2 per $100 of insured value per year. For $20,000 in metals, expect $200\u2013$400 annually. The rider usually requires documentation of what you own \u2014 purchase receipts, photographs, or an appraisal.",
        learnMoreLabel: "Full Storage Guide: Home, Vault, or Safe Deposit Box",
        learnMoreHref: "/blog/storing-gold-silver-safely",
      },
    ],
  },
  {
    id: "scams",
    title: "Scams & Red Flags",
    items: [
      {
        question: "How do I spot a gold or silver scam?",
        answer: "The most common red flags: unsolicited phone calls pushing precious metals, extreme urgency or \u201Climited time\u201D pricing, steering from the bullion you asked about into high-premium numismatic coins, promises of guaranteed returns, refusal to post prices publicly (everything is \u201Ccall for a quote\u201D), and businesses with no verifiable physical address. Legitimate precious metals transactions are not high-pressure events. If something feels like a hard sell, it probably is. Trust that instinct. The FTC\u2019s consumer guidance on investment scams (consumer.ftc.gov) and the CFTC\u2019s precious metals advisory (cftc.gov) are both worth reading before making any purchase.",
        links: [
          { label: "FTC: Investment Scams", href: "https://consumer.ftc.gov/articles/investment-scams" },
          { label: "CFTC: Gold Is No Safe Investment", href: "https://www.cftc.gov/LearnAndProtect/AdvisoriesAndArticles/gold_is_no_safe_investment.htm" },
          { label: "What Should I Truly Pay for Gold and Silver?", href: "/blog/what-should-i-truly-pay-for-gold-and-silver" },
          { label: "The Home Storage Gold IRA Scam", href: "/blog/home-storage-gold-ira-scam" },
          { label: "How to Spot Counterfeit Gold and Silver Coins", href: "/blog/how-to-spot-counterfeit-gold-silver-coins" },
        ],
      },
      {
        question: "What is the home storage gold IRA scam?",
        answer: "Promoters market \u201Chome storage\u201D or \u201Ccheckbook LLC\u201D gold IRAs as a way to hold IRA-owned coins in your own safe, supposedly avoiding depository fees. The IRS treats this as a prohibited transaction or a full distribution of the entire account. The 2021 U.S. Tax Court decision McNulty v. Commissioner ruled directly against this structure \u2014 the McNultys owed income tax on the full distributed amount plus penalties. IRA-owned bullion must be held by an IRS-approved trustee or non-bank custodian at an approved depository. There is no legitimate way to store IRA-owned metal at home.",
        learnMoreLabel: "The Home Storage Gold IRA Scam",
        learnMoreHref: "/blog/home-storage-gold-ira-scam",
      },
      {
        question: "How do I avoid buying counterfeit gold or silver coins?",
        answer: "Counterfeit American Eagles, Maple Leafs, and Krugerrands circulate in larger numbers than most buyers realize. The most reliable defense is buying from reputable dealers with verifiable track records and asking for verification on the spot. For self-verification, run multiple tests: a magnet test (real precious metals are non-magnetic), a precise weight and dimension check against published mint specs, a ping test (real silver and gold ring with a long sustained tone), and for serious buyers, a Sigma Metalytics verifier. Any single test can be fooled, so always run several. For high-premium numismatic coins, only buy slabs authenticated by PCGS, NGC, ANACS, or ICG.",
        learnMoreLabel: "How to Spot Counterfeit Gold and Silver Coins",
        learnMoreHref: "/blog/how-to-spot-counterfeit-gold-silver-coins",
      },
      {
        question: "Are gold IRA companies legitimate?",
        answer: "Some are. Many operate in a gray area where aggressive marketing and high fees border on predatory, even if they\u2019re technically legal. The gold IRA space has attracted companies that spend enormous sums on advertising \u2014 television commercials, celebrity spokespeople, \u201Cfree gold\u201D promotions \u2014 which should raise the question of where that marketing budget comes from. Watch for opaque or layered fee structures, pressure to roll over retirement accounts quickly, and claims about gold being \u201Cconfiscation-proof\u201D or \u201CIRA-approved\u201D that are either misleading or meaningless. Research independently, and consult a fee-only financial advisor. The CFTC warns that gold is not a guaranteed safe investment at cftc.gov/LearnAndProtect.",
        learnMoreLabel: "Gold IRA Scams \u2014 What You Need to Know",
        learnMoreHref: "/blog/gold-ira-scams",
      },
      {
        question: 'Is "cash for gold" a ripoff?',
        answer: "Not always, but the business model is built on information asymmetry \u2014 the buyer knows the melt value of your gold, and most sellers don\u2019t. That imbalance creates opportunities for lowball offers. Protect yourself by calculating the melt value before you walk in (weight \u00d7 purity \u00d7 current gold price per gram). Get quotes from at least three buyers. Be willing to leave if the offer isn\u2019t close to what your calculation says the metal is worth. The best defense is simply knowing what your gold is worth before anyone makes you an offer.",
      },
      {
        question: 'What does "confiscation-proof" mean? Should I worry about the government taking my gold?',
        answer: "\u201CConfiscation-proof\u201D is a marketing term frequently used by gold IRA companies and high-premium coin dealers to justify steering buyers toward expensive numismatic coins. The claim is usually that collectible coins were exempt from Executive Order 6102 in 1933, when the U.S. government required citizens to turn in gold holdings. While there was a narrow exemption for coins with recognized collector value in 1933, the circumstances of that era \u2014 the gold standard, fixed gold prices, a specific economic emergency \u2014 bear no resemblance to today\u2019s monetary system. No modern U.S. law or executive order has suggested gold confiscation, and no serious analysis treats it as a realistic near-term scenario. When a dealer uses confiscation fears to sell you a high-premium product, they\u2019re selling fear, not protection.",
      },
    ],
  },
  {
    id: "geopolitics",
    title: "Gold, Geopolitics & Central Banks",
    items: [
      {
        question: "Why do central banks buy gold?",
        answer: "Central banks hold gold as a reserve asset for several reasons: it has no counterparty risk (unlike bonds or foreign currency deposits, gold cannot default), it cannot be frozen by sanctions or seized by another government, it maintains purchasing power over long periods, and it provides diversification away from dollar-denominated reserves. Since 2022, central bank gold buying has surged to over 1,000 tonnes per year \u2014 roughly triple the decade prior\u2019s average \u2014 driven largely by the freezing of Russia\u2019s $300 billion in Western-held reserves, which demonstrated that dollar reserves can be weaponized.",
        learnMoreLabel: "Central Bank Gold Buying: The Biggest Shift in 50 Years",
        learnMoreHref: "/blog/central-bank-gold-buying-reshaping-the-market",
      },
      {
        question: "Which central banks are buying the most gold?",
        answer: "China has been the largest buyer, growing official reserves from roughly 1,054 tonnes in 2015 to over 2,260 tonnes by late 2025 (with actual holdings likely higher). Poland has added over 130 tonnes since 2018 and publicly targets 20% of reserves in gold. India added over 70 tonnes in 2024 alone. Turkey, Singapore, Czech Republic, Qatar, Iraq, and Uzbekistan have also been consistent buyers. The trend is concentrated among emerging market and non-aligned nations diversifying away from dollar reserves.",
        learnMoreLabel: "Central Bank Gold Buying: The Biggest Shift in 50 Years",
        learnMoreHref: "/blog/central-bank-gold-buying-reshaping-the-market",
      },
      {
        question: "How does central bank buying affect the gold price?",
        answer: "Central banks now absorb nearly a third of all newly mined gold each year. This gold goes into sovereign vaults and typically stays there for decades, effectively removing it from the market. This creates persistent upward pressure on prices by reducing available supply for all other buyers \u2014 retail investors, jewelers, ETFs, and institutions. Central banks also tend to buy on dips rather than chase momentum, which establishes a structural price floor. When the most conservative, longest-horizon financial institutions in the world are aggressively accumulating an asset, it also sends a signal to other market participants.",
        learnMoreLabel: "Central Bank Gold Buying: The Biggest Shift in 50 Years",
        learnMoreHref: "/blog/central-bank-gold-buying-reshaping-the-market",
      },
      {
        question: "Does gold go up during wars?",
        answer: "The historical pattern is more nuanced than \u201Cgold goes up during wars.\u201D Gold sometimes spikes at the onset of a conflict, but the larger and more persistent price moves come from the monetary consequences of war \u2014 deficit spending, money printing, currency debasement, and inflation. Vietnam-era spending led to the end of the gold standard and a 2,300% gold rally over the following decade. The War on Terror and the 2008 financial crisis drove gold from $271 to $1,895. The 2022 Ukraine conflict triggered the sanctions-driven central bank buying surge that has pushed gold above $3,000. The mechanism is consistent: wars are expensive, governments finance them by debasing currencies, and gold benefits as the alternative.",
        learnMoreLabel: "Gold and Wars: 125 Years as a Geopolitical Risk Hedge",
        learnMoreHref: "/blog/gold-and-wars-geopolitical-risk-hedge",
      },
      {
        question: "What is de-dollarization and how does it affect gold?",
        answer: "De-dollarization refers to the gradual shift by nations away from holding U.S. dollars as their primary reserve currency. The dollar\u2019s share of global foreign exchange reserves has declined from roughly 72% in 2000 to approximately 58% by 2025, according to IMF data. As central banks diversify out of dollars, gold is the primary beneficiary because it is the only reserve asset that carries no counterparty risk and no political alignment. The trend has accelerated since 2022, when Western sanctions demonstrated that dollar reserves can be frozen. This structural shift is one of the key drivers of sustained gold demand at the sovereign level.",
        learnMoreLabel: "Central Bank Gold Buying: The Biggest Shift in 50 Years",
        learnMoreHref: "/blog/central-bank-gold-buying-reshaping-the-market",
      },
      {
        question: "How much of my portfolio should be in gold?",
        answer: "This is a personal financial decision that depends on your goals, risk tolerance, and overall portfolio. We don\u2019t provide investment advice. What we can share is that most financial advisors who recommend gold suggest a 5\u201315% allocation as portfolio insurance \u2014 not a speculative position. The goal is typically to own an asset that holds its value during periods when stocks, bonds, and currencies decline simultaneously. Gold does not pay dividends or generate earnings, so it functions as insurance rather than a growth investment. Consult a fee-only financial advisor for guidance specific to your situation.",
        learnMoreLabel: "Gold and Wars: 125 Years as a Geopolitical Risk Hedge",
        learnMoreHref: "/blog/gold-and-wars-geopolitical-risk-hedge",
        links: [
          { label: "Gold vs. Bitcoin: Which Actually Protects Your Money?", href: "/blog/gold-vs-bitcoin-2026" },
        ],
      },
      {
        question: "Why has silver\u2019s price risen so sharply in 2026?",
        answer: "Silver crossed $100/oz in 2026 driven by structural industrial demand outpacing supply. Solar panel manufacturing now consumes over 230 million ounces annually (up from 140 million in 2020). AI data centers, electric vehicles, and 5G infrastructure are all growing sources of silver demand. Meanwhile, 72% of silver is mined as a byproduct of copper, zinc, lead, and gold \u2014 meaning silver supply cannot respond quickly to price increases. 2026 marks the sixth consecutive year where global demand has exceeded supply. The price reflects real scarcity, not speculation.",
        learnMoreLabel: "Why Silver Crossed $100: Solar, AI, and the Supply Deficit",
        learnMoreHref: "/blog/silver-industrial-demand-2026",
      },
      {
        question: "Is bitcoin \u201Cdigital gold\u201D \u2014 does it work as a safe haven?",
        answer: "The data so far does not support that label during crises. In every major stress event since bitcoin\u2019s creation \u2014 the 2020 COVID crash (down 35% in one day), the 2022 crypto crash (down 77%), and the 2026 market stress (down 47% from its all-time high) \u2014 bitcoin has fallen alongside equities, often more sharply. During those same periods, gold held value or rose. Bitcoin has performed as a risk-on asset correlated with tech stocks, not as a safe haven. This could change as the asset matures and its holder base shifts, but the current evidence points to bitcoin as a growth asset, not a crisis hedge. Both assets can have a place in a portfolio \u2014 they just solve different problems.",
        learnMoreLabel: "Gold vs. Bitcoin in 2026: Full Comparison",
        learnMoreHref: "/blog/gold-vs-bitcoin-2026",
      },
    ],
  },
];
