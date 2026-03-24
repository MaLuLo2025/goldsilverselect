export interface FAQItem {
  question: string;
  answer: string;
  learnMoreLabel?: string;
  learnMoreHref?: string;
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
        learnMoreLabel: "Spot Price vs. What You Actually Pay",
        learnMoreHref: "/blog/spot-price-vs-what-you-pay",
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
        learnMoreLabel: "Numismatic vs. Bullion \u2014 Understanding the Markup",
        learnMoreHref: "/blog/numismatic-vs-bullion-markup",
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
        answer: "They serve different purposes. Gold stores more value in less space and weight \u2014 an ounce of gold is worth roughly 90\u2013100 ounces of silver, making it far easier to store, transport, and liquidate in large amounts. Silver is more affordable per ounce, making it accessible for smaller budgets, but it requires significantly more storage space for equivalent value. Many buyers hold both. The gold-to-silver ratio \u2014 which tells you how many ounces of silver it takes to buy one ounce of gold at current prices \u2014 is one metric some buyers use to decide which metal is relatively cheaper at any given time. You can see the live ratio on our homepage ticker.",
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
        question: 'What is "junk silver"?',
        answer: "\u201CJunk silver\u201D refers to pre-1965 U.S. coins \u2014 dimes, quarters, and half dollars \u2014 that contain 90% silver. The term \u201Cjunk\u201D doesn\u2019t mean they\u2019re worthless. It means they have no significant numismatic or collectible value \u2014 they\u2019re bought and sold purely for their silver content. A $1 face value bag of pre-1965 quarters contains approximately 0.715 troy ounces of pure silver. Junk silver is popular because it comes in small, divisible denominations, is widely recognized, and has a fixed supply that makes it genuinely scarce during high-demand periods.",
        learnMoreLabel: "Junk Silver Premiums Explained",
        learnMoreHref: "/blog/junk-silver-premiums",
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
        learnMoreLabel: "Understanding Sell-Back Spreads",
        learnMoreHref: "/blog/sell-back-spreads",
      },
      {
        question: "What will a dealer pay me for my gold or silver?",
        answer: "Dealers typically buy at or slightly below the current spot price for commodity bullion, and at a small premium below spot for highly recognizable products like American Gold Eagles and Maple Leafs. The gap between what you paid when you bought (premium above spot) and what you receive when you sell (at or near spot) is the round-trip cost of ownership. This spread varies by product and by dealer. Always ask about buyback pricing before you make a purchase.",
        learnMoreLabel: "Understanding Sell-Back Spreads",
        learnMoreHref: "/blog/sell-back-spreads",
      },
      {
        question: "Where can I sell gold and silver coins I inherited?",
        answer: "Start by identifying what you have. Government-minted bullion coins \u2014 Eagles, Maple Leafs, Krugerrands \u2014 are straightforward. Their value is primarily their metal content, and any reputable dealer can quote you a price. Numismatic or collectible coins are more complex. Their value may be significantly above metal content based on rarity, condition, and collector demand. For bullion, get quotes from multiple local and online dealers. For potentially valuable collectible coins, consider a professional appraisal from a PCGS or NGC authorized dealer before selling.",
        learnMoreLabel: "Numismatic vs. Bullion \u2014 Understanding the Markup",
        learnMoreHref: "/blog/numismatic-vs-bullion-markup",
      },
      {
        question: "Should I sell my gold when the price goes up?",
        answer: "That\u2019s a personal financial decision that depends on your goals, and we can\u2019t advise on it. What we can tell you is that if you do decide to sell, the same principles apply as when buying: know the spot price, compare offers from at least two or three dealers, and understand that premiums and buyback spreads vary. Selling in a panic \u2014 whether driven by fear the price will drop or excitement that it\u2019s risen \u2014 is rarely optimal. A calm, informed seller who compares offers will almost always get a better result than one who accepts the first quote.",
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
        learnMoreHref: "/blog/spot-price-vs-what-you-pay",
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
        learnMoreLabel: "Silver Premiums and Bar Size Scaling",
        learnMoreHref: "/blog/silver-premiums-bar-scaling",
      },
      {
        question: "Why do premiums spike sometimes?",
        answer: "Premiums spike when physical demand outpaces the available supply of finished products. This typically happens during financial crises, geopolitical shocks, or sudden surges in retail buying. The spot price \u2014 which reflects futures contracts \u2014 may not move much, but the cost of an actual coin or bar can jump significantly because mints, refiners, and dealers simply can\u2019t produce and ship fast enough to meet demand. Premiums generally compress back to normal ranges once demand stabilizes, but that can take weeks or months.",
        learnMoreLabel: "Why Premiums Spike During Crises",
        learnMoreHref: "/blog/premium-spikes-in-crises",
      },
      {
        question: "What is the gold-to-silver ratio?",
        answer: "The gold-to-silver ratio tells you how many ounces of silver it takes to buy one ounce of gold at current prices. If gold is $3,000/oz and silver is $30/oz, the ratio is 100:1. The historical average over the past several decades has generally ranged between 50:1 and 80:1, though it has spiked above 100:1 during periods of financial stress. Some buyers use this ratio as a signal \u2014 a historically high ratio (meaning silver is cheap relative to gold) might favor silver purchases, and vice versa. The ratio is not a prediction tool, but it provides context. You can see the live gold-to-silver ratio on our homepage ticker.",
      },
    ],
  },
  {
    id: "jewelry",
    title: "Selling Jewelry & Scrap",
    items: [
      {
        question: "How much is my gold jewelry worth?",
        answer: "Gold jewelry value for resale is based on its metal content \u2014 weight multiplied by purity \u2014 not what you paid at a jewelry store. Check the karat stamp on the piece: 10K is 41.7% pure gold, 14K is 58.3%, 18K is 75%, and 24K is 99.9% pure. Weigh the piece in grams, multiply by the purity percentage, then multiply by the current gold price per gram. That calculation gives you the melt value. Most buyers will offer 70\u201390% of melt value, with the discount covering their assay and refining costs.",
      },
      {
        question: 'Should I sell gold jewelry to a "cash for gold" shop?',
        answer: "Approach with caution. Some cash-for-gold operations offer fair prices. Others offer 50% or less of the actual melt value, relying on the seller not knowing what their gold is worth. Protect yourself: calculate the melt value yourself before walking in (weight \u00d7 purity \u00d7 current gold price per gram). Get quotes from at least three buyers, including local coin dealers \u2014 many of them buy gold jewelry for melt and may offer better prices than dedicated cash-for-gold shops. Never accept the first offer without comparing.",
      },
      {
        question: "Is sterling silver flatware or jewelry worth selling?",
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
      },
      {
        question: "What about bank safe deposit boxes?",
        answer: "Safe deposit boxes offer strong physical security, but they have limitations worth understanding. Their contents are not FDIC insured \u2014 if items are lost, damaged, or stolen, the bank\u2019s liability is typically very limited. Access is restricted to bank hours, which means you can\u2019t reach your metals on weekends, holidays, or outside business hours. During banking crises, legal disputes, or certain government actions, access can be frozen. Some buyers use safe deposit boxes for a portion of their holdings while keeping some accessible at home.",
      },
      {
        question: "Should I buy gold through an IRA?",
        answer: "Gold IRAs exist and are legal, but the industry around them is one of the most aggressively marketed and fee-heavy corners of the precious metals world. Setup fees, annual custodian fees, storage fees, and transaction fees can significantly erode returns over time. Many gold IRA companies spend heavily on advertising \u2014 celebrity endorsements, free gold promotions, fear-based marketing \u2014 and those costs are ultimately passed on to the customer through higher premiums and fees. If you\u2019re considering a gold IRA, research the full fee structure thoroughly and compare the total cost to simply buying physical gold yourself and storing it independently. Consult a fee-only financial advisor who doesn\u2019t earn a commission from the sale.",
        learnMoreLabel: "Gold IRA Scams \u2014 What You Need to Know",
        learnMoreHref: "/blog/gold-ira-scams",
      },
    ],
  },
  {
    id: "scams",
    title: "Scams & Red Flags",
    items: [
      {
        question: "How do I spot a gold or silver scam?",
        answer: "The most common red flags: unsolicited phone calls pushing precious metals, extreme urgency or \u201Climited time\u201D pricing, steering from the bullion you asked about into high-premium numismatic coins, promises of guaranteed returns, refusal to post prices publicly (everything is \u201Ccall for a quote\u201D), and businesses with no verifiable physical address. Legitimate precious metals transactions are not high-pressure events. If something feels like a hard sell, it probably is. Trust that instinct.",
        learnMoreLabel: "What Should I Truly Pay for Gold and Silver?",
        learnMoreHref: "/blog/what-should-i-truly-pay-for-gold-and-silver",
      },
      {
        question: "Are gold IRA companies legitimate?",
        answer: "Some are. Many operate in a gray area where aggressive marketing and high fees border on predatory, even if they\u2019re technically legal. The gold IRA space has attracted companies that spend enormous sums on advertising \u2014 television commercials, celebrity spokespeople, \u201Cfree gold\u201D promotions \u2014 which should raise the question of where that marketing budget comes from. Watch for opaque or layered fee structures, pressure to roll over retirement accounts quickly, and claims about gold being \u201Cconfiscation-proof\u201D or \u201CIRA-approved\u201D that are either misleading or meaningless. Research independently, and consult a fee-only financial advisor.",
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
];
