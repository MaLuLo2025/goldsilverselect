// Editorial blurbs for state pages with no local dealer listings.
// Each blurb is unique — covers local market context, buying/selling behavior,
// and relevant geographic notes to differentiate pages from one another.

export type StateSection =
  | "intro"
  | "buyingTips"
  | "salesTax"
  | "commonScams"
  | "whatToVerify";

export interface StateSource {
  label: string;
  url: string;
}

export interface StateContent {
  intro: string;
  buyingTips: string;
  // TODO: these become required once the expanded content merge lands —
  // existing 28 entries only have intro/buyingTips today.
  salesTax?: string;
  commonScams?: string;
  whatToVerify?: string;
  displayOrder?: StateSection[];
  sources?: StateSource[];
}

export const stateContent: Record<string, StateContent> = {
  alabama: {
    intro:
      "Alabama's precious metals market centers on Birmingham, with meaningful activity in Huntsville, Mobile, and Montgomery and a distinct pocket in the Muscle Shoals/Florence area of the Shoals region. Birmingham's history as the industrial center of the Deep South produced generations of household wealth that has cycled through the state's coin and jewelry trade for over a century, and the current market reflects that inheritance: estate silver, hallmarked jewelry, and pre-1933 US gold appear regularly in Alabama shops. The steady flow of estate material means Alabama has more supply than its population would predict, and that in turn means a seller comparing offers across two or three Birmingham-area dealers typically finds a real spread.",
    buyingTips:
      "Birmingham, Huntsville, Mobile, and Montgomery each support established dealers, and the four-metro spread means most Alabama buyers have a real in-person option within an hour or two. For estate liquidations — common in Alabama given the demographics and multigenerational property holdings — get quotes from at least two dealers before selling. Online dealers shipping to Alabama are competitive on standard bullion and give a useful third reference point against local premiums. If you are handling an estate that includes both coins and scrap jewelry, be aware that dealers vary in how aggressively they price each category, and separating the lots often produces a better total.",
    salesTax:
      "Alabama exempts qualifying bullion from state sales tax under Ala. Code § 40-23-4(a)(51). The exemption applies to gold, silver, platinum, and palladium bullion refined to at least .900 fine that is sold based on its precious metal content rather than its rarity, condition, or form. Coins meeting the same content and pricing test also qualify. Jewelry, decorative items, and numismatic coins priced above metal content are generally taxable. The exemption was originally enacted with a sunset date but has been extended by subsequent legislation. Local sales taxes may still apply in some Alabama jurisdictions even where state tax does not. Confirm the current treatment of a specific purchase with the dealer before transacting.",
    commonScams:
      "Alabama's Chapter 34 tells you exactly which behaviors the state considers the risk, and each one maps to a scam pattern worth watching for. Section 8-34-3 requires dealers to record the seller's name, address, date of birth, signature, physical description, and government ID number for every purchase — and to file a report with the local law enforcement agency at least weekly. A dealer who processes an estate lot without asking for ID or filling out paperwork is skipping a statutory obligation, not saving you time. Section 8-34-4 requires purchased items to be held in the same shape and form for fifteen business days, and separately prohibits purchases from anyone under eighteen — knowledge of age is not a defense. That fifteen-day rule is the practical reason a legitimate Alabama dealer will not melt or resize a piece the day you sell it, and a shop that moves inventory faster than the statute allows is operating outside the framework. Traveling 'cash for gold' operations that appear at hotel conference rooms for a weekend are the highest-risk pattern in Alabama, because the transaction and the operator both disappear before the fifteen-day window closes.",
    whatToVerify:
      "Alabama regulates dealers in gold or precious items under Ala. Code Title 8, Chapter 34, enacted by Act 2010-732. Section 8-34-2 requires each dealer to be licensed, and section 8-34-5 requires each dealer to prominently display a copy of the chapter on the business premises — a public-facing compliance signal you can look for the moment you walk in. Section 8-34-7 exempts retail merchants, manufacturers, wholesalers, and pawnbrokers licensed by the Alabama State Banking Department, which means the shop across the street from a Chapter 34 dealer may be operating under an entirely different regulatory regime. Ask which framework a specific operator falls under, and — for pawnbrokers — verify the state banking license separately. Violations of Chapter 34 are a Class B misdemeanor under section 8-34-6, so records, holding periods, and identification requirements are enforceable obligations rather than best practices. For numismatic purchases, confirm grading comes from PCGS or NGC; for bullion, get written pricing stated relative to current spot.",
    displayOrder: [
      "intro",
      "buyingTips",
      "salesTax",
      "whatToVerify",
      "commonScams",
    ],
    sources: [
      {
        label: "Ala. Code Title 8, Chapter 34 — Dealers in Gold or Precious Items",
        url: "https://law.justia.com/codes/alabama/title-8/chapter-34/",
      },
      {
        label: "Ala. Code § 8-34-3 — Documentation and weekly law enforcement report",
        url: "https://law.justia.com/codes/alabama/title-8/chapter-34/section-8-34-3/",
      },
    ],
  },
  alaska: {
    intro:
      "Alaska has a direct historical connection to precious metals — the Klondike Gold Rush of 1896–99 and the broader Alaska mining history are central to the state's identity, and active gold mining continues today. The market reflects that heritage: Anchorage and Fairbanks support established dealers, and the state has an unusually engaged retail investor base relative to its population. Alaska's geographic isolation creates distinct dynamics — higher shipping and insurance costs on online purchases, limited in-state competition, and a buyer base that mixes long-term residents with rotating military and oil-industry workers.",
    buyingTips:
      "Anchorage and Fairbanks offer the primary in-person options, including dealers specializing in locally sourced Alaska gold. For investment-grade bullion, mainland online dealers provide a wider product range, though shipping and insurance must be factored into any total-cost comparison. Because in-state competition is thin, comparing a local quote against a delivered mainland price is the most reliable way to know whether an Alaska premium is reasonable or simply unchallenged.",
    salesTax:
      "Alaska imposes no state-level sales tax. Some local jurisdictions levy their own sales tax, so the applicable rate depends on the borough or municipality where the transaction occurs, but most Alaska precious metals purchases carry no state-level tax. For in-state purchases the dealer's price is typically the buyer's total cost.",
    commonScams:
      "Alaska's distance from mainland dealer competition is the state's structural risk: a premium that would not survive comparison in a dense market can persist here simply because buyers have fewer reference points. Verify spot independently and price at least one delivered mainland quote before accepting a local offer on a significant purchase. The state's mining heritage also supports a trade in locally sourced placer gold, where purity and weight representations matter more than with minted bullion — raw or nugget gold is not assayed to a mint standard, and its value depends on fineness a buyer generally cannot confirm by inspection. Anchorage residents have a verification tool most states don't offer: the Anchorage Police Department's Pawn Unit monitors licensed pawn shops, scrap yards, and crafted precious metal dealers operating in the municipality, and licensed shops report their incoming transactions to APD weekly.",
    whatToVerify:
      "Alaska regulates pawnbrokers and secondhand dealers at the state level under AS 08.76, administered by the Division of Corporations, Business and Professional Licensing. A permanent state pawnbroker license is required for anyone whose business needs one under AS 08.76.100 and who does not already hold a conforming municipal license; the state license runs up to two years and expires December 31 of odd-numbered years. Licensees must also hold an Alaska Business License. Anchorage buyers can go further — APD publishes the current list of licensed pawn shops operating in the municipality, so a shop's licensed status is directly checkable rather than taken on the dealer's word. For any numismatic purchase, confirm grading comes from PCGS or NGC. For bullion, get written pricing stated relative to current spot.",
    displayOrder: [
      "intro",
      "buyingTips",
      "whatToVerify",
      "commonScams",
      "salesTax",
    ],
    sources: [
      {
        label: "Alaska Division of Corporations, Business and Professional Licensing — Pawnbrokers",
        url: "https://www.commerce.alaska.gov/web/cbpl/ProfessionalLicensing/Pawnbrokers.aspx",
      },
      {
        label: "Anchorage Police Department — Licensed pawn shops",
        url: "https://www.anchoragepolice.com/pawn-shops",
      },
    ],
  },
  arkansas: {
    intro:
      "Arkansas is home to Crater of Diamonds State Park — the only diamond mine in the world open to the public — which contributes to broader public interest in minerals and precious stones. The state's precious metals market is concentrated in Little Rock and Fort Smith, where established coin shops serve both collectors and bullion buyers. Arkansas imposes sales tax on gold and silver coin purchases under $1,000, which factors into local transaction costs.",
    buyingTips:
      "Collectors in Arkansas frequently find silver at estate sales and flea markets in smaller communities throughout the Ozarks. For tax-efficient bullion purchases, online dealers can ship to Arkansas addresses with no state sales tax on qualifying investment-grade bullion.",
  },
  delaware: {
    intro:
      "Delaware's precious metals market is concentrated in Wilmington, with smaller dealer presence in Dover and the coastal beach communities. The state's compact geography and proximity to Philadelphia and the broader Mid-Atlantic mean many Delaware buyers find wider selection a short drive away. Delaware's role as a corporate domicile doesn't translate into precious metals market depth, but its substantial retiree population generates a steady supply of estate gold and inherited collections.",
    buyingTips:
      "Wilmington offers the primary in-person dealer options. Because Delaware levies no sales tax, online dealers compete directly with local shops on total delivered cost — the comparison is unusually clean here, with no tax calculation to complicate it. Buyers willing to travel to Philadelphia or Baltimore gain access to considerably deeper inventory, though crossing state lines can change the sales tax treatment of the transaction.",
    salesTax:
      "Delaware imposes no state-level sales tax. The dealer's price is the buyer's total cost, which makes Delaware a destination for buyers from neighboring Pennsylvania, New Jersey, and Maryland on larger purchases where sales tax differences become material.",
    commonScams:
      "Delaware's licensing regime is built around criminal-history screening, which tells you what the state considers the primary risk: buyers who acquire metal they should not be acquiring. Chapter 23 bars a license where the applicant has a felony conviction within five years, a theft or fraud misdemeanor within five years, or a drug misdemeanor within three — and a pending charge in any of those categories blocks issuance outright. Licensees must notify Delaware State Police within five days of any arrest. The operators to watch are the ones outside that system: a Delaware license designates a specific building, and a dealer may not carry on the business at any address other than the one on the license. That makes hotel-ballroom and other pop-up buying events structurally incompatible with the licensing scheme, and they are the most common vector for below-market offers on estate collections.",
    whatToVerify:
      "Delaware licenses pawnbrokers, secondhand dealers, and scrap metal processors under Title 24, Chapter 23 of the Delaware Code — and the licensing authority is the Delaware State Police, not a business-registration office. Licenses expire annually on December 31 and are tied to a specific business address. Licensees must hold a current Delaware business license from the Division of Revenue, and under § 2313 they must record every transaction on a designated electronic tracking system. Where payment is based on weight for precious metal, the statute requires the weight and metal type to be recorded along with any precious stones in the item — so a Delaware dealer buying by weight should be documenting exactly what they are paying you for. Ask to see the license, and confirm the address on it matches where you are standing.",
    displayOrder: [
      "salesTax",
      "intro",
      "whatToVerify",
      "buyingTips",
      "commonScams",
    ],
    sources: [
      {
        label: "Delaware State Police — Pawnbrokers, Secondhand Dealers & Scrap Metal Processors",
        url: "https://dsp.delaware.gov/pawnbrokers-secondhand-dealers-scrap-metal-processors/",
      },
      {
        label: "24 Del. C. Ch. 23, Subchapter II — Licensing",
        url: "https://delcode.delaware.gov/title24/c023/sc02/index.html",
      },
    ],
  },
  hawaii: {
    intro:
      "Hawaii's precious metals market reflects its island geography — shipping costs and logistics make local dealer pricing less competitive than on the mainland, and the physical dealer network is limited. Honolulu has the most established market, with a mix of coin shops and jewelry dealers who buy and sell gold and silver. Silver coins, particularly pre-1965 U.S. 90% silver, are popular with collectors across the islands.",
    buyingTips:
      "For investment bullion, Hawaii residents typically purchase through national online dealers who ship to the islands with insured, tracked delivery. Local dealers in Honolulu are better suited for coin collecting, estate jewelry, and small transactions.",
  },
  indiana: {
    intro:
      "Indiana's precious metals market anchors in the Indianapolis metro, with meaningful dealer activity in Fort Wayne, Evansville, South Bend, and the Bloomington-Columbus corridor. Indiana sits at the intersection of several regional coin show circuits, and the annual Central States Numismatic Society convention — one of the largest shows in the country — draws Indiana dealers and collectors into a market that behaves like it belongs to a larger state. The manufacturing base across the state produced multigenerational family wealth that regularly surfaces as estate gold and silver, and Indianapolis in particular supports a professional dealer community with enough depth that a seller can meaningfully compare offers.",
    buyingTips:
      "Indianapolis supports the deepest in-person market in Indiana, with Fort Wayne, Evansville, and South Bend all sustaining credible dealers. For a significant purchase or sale, comparing two or three quotes is practical and worthwhile. The Central States show is an unusually good price-discovery venue even if you ultimately transact with a local storefront afterward. Online dealers shipping to Indiana are competitive on standard investment bullion, and the sales tax exemption on IRA-qualifying products means the delivered online cost is often close to the local counter price on the same items.",
    salesTax:
      "Indiana exempts qualifying coins and bullion from state sales tax under Ind. Code § 6-2.5-5-47. The exemption is defined by reference to what qualifies as a permitted investment for an individual retirement account under 26 U.S.C. § 408(m) — a narrower and more precise standard than most states use. Coins and bullion that meet the IRA-permitted-investment test are exempt; items outside that definition, along with jewelry, decorative items, and numismatic coins priced above their metal-content-based IRA-permitted equivalent, generally remain taxable. Storage services for qualifying coins and bullion are also exempt under the same section. Confirm with the dealer whether a specific product meets the IRA-permitted-investment standard before transacting.",
    commonScams:
      "Indiana regulates 'valuable metal dealers' under Ind. Code 25-37.5, and the definition is broad enough to catch scrap and junk operators alongside anyone else purchasing valuable metal for resale — but the operational profile in the statute is scrap-oriented, not coin-oriented. Section 25-37.5-1-2 requires the dealer to record the seller's name, address, age, driver's license or Social Security number, verified against a government photo ID, plus a photograph of both the seller and the item, plus the license plate of the vehicle delivering the material. Section 25-37.5-1-4 then requires the dealer to hold each purchase separate and apart, without changing its form, for at least five working days so that a law enforcement officer can inspect it. That combination — photograph plus five-day inspection window — is designed to make stolen scrap difficult to move quickly. The pattern to watch for is a dealer offering to take an estate lot in cash without ID or photograph and to process it immediately; that is a statutory violation, and it is also the setup for the buyer to underpay a seller who does not have another opinion in hand. Section 25-37.5-1-7 makes the failure to comply enforceable against the seller as well as the dealer.",
    whatToVerify:
      "Indiana's regulatory framework distinguishes between commercial and retail transactions in ways worth understanding before you sell. Section 25-37.5-1-5 excludes purchases from persons or entities regularly engaged in the business of manufacturing valuable metals or selling valuable metals at retail from the recordkeeping regime, and section 25-37.5-1-10 further excludes commercial transactions between certain licensed automotive salvage and scrap-processing entities. That means an established coin and bullion dealer buying inventory from another established dealer is inside a different compliance conversation than an individual walking in with an inherited collection. When you sell as an individual, the recordkeeping obligations apply and the dealer will need your ID, photograph, and signature on the state form; a dealer who waives any of that is skipping a statutory duty. Municipal licensing adds another layer — many Indiana cities (including Indianapolis and Bloomington) impose local licensing requirements on top of state law, so ask which municipal license the dealer holds and whether the address you are standing at is the licensed premises. For numismatic purchases, confirm grading comes from PCGS or NGC; for bullion, get written pricing relative to current spot.",
    displayOrder: [
      "intro",
      "commonScams",
      "salesTax",
      "buyingTips",
      "whatToVerify",
    ],
    sources: [
      {
        label: "Ind. Code § 25-37.5-1-1 — Valuable metal dealer definitions",
        url: "https://law.justia.com/codes/indiana/2022/title-25/article-37-5/chapter-1/section-25-37-5-1-1/",
      },
      {
        label: "Ind. Code § 25-37.5-1-2 — Record of purchases; forms; identification",
        url: "https://law.justia.com/codes/indiana/2017/title-25/article-37.5/chapter-1/section-25-37.5-1-2/",
      },
    ],
  },
  iowa: {
    intro:
      "Iowa's precious metals market is modest but steady, with coin shops operating in Des Moines, Cedar Rapids, and Davenport serving a mix of collectors and bullion buyers. The state's agricultural heritage has historically driven savings in tangible assets, and pre-1933 U.S. gold coins remain a popular holding among older Iowa collectors. Iowa does not exempt precious metals from state sales tax for most buyers, which affects local transaction economics.",
    buyingTips:
      "Des Moines has the most active coin market in the state. Estate sales across rural Iowa regularly surface silver dollars, gold pocket watch cases, and pre-1965 U.S. silver coins. Online dealers provide access to a broader range of bullion products at competitive premiums.",
  },
  kansas: {
    intro:
      "Kansas sits in the heart of the Great Plains, and its precious metals market reflects a practical, value-oriented buying culture. Wichita and Overland Park are the primary markets, with coin shops serving both collector and investment demand. Kansas exempts monetary gold and silver coins from sales tax, which is a meaningful benefit for coin buyers in the state. Kansas City, Missouri — just across the border — provides additional access to a larger dealer network.",
    buyingTips:
      "The Kansas City metro (including Overland Park and Leawood) offers the broadest range of local options for Kansas buyers. For bullion, online dealers shipping to Kansas offer full selection with the benefit of the state's sales tax exemption on monetary coins.",
  },
  kentucky: {
    intro:
      "Kentucky's precious metals market runs along the Louisville–Lexington corridor, with meaningful activity in Northern Kentucky (across the river from Cincinnati), Bowling Green, and the Owensboro area on the Ohio River. Louisville supports the state's deepest dealer market, with Lexington a close second and a professional numismatic community that has advocated for state precious metals policy in ways that show up in Kentucky law. The state has an unusually clear recent legislative story around bullion taxation, and understanding that story matters both because it changes the total cost of a Kentucky purchase and because it demonstrates how contested — and consequential — sales tax treatment of precious metals can be.",
    salesTax:
      "Kentucky's sales tax treatment of bullion and currency has been the subject of one of the more dramatic recent legislative fights in this area, and buyers should understand where things stand and what to ask. HB 8 (2024) enacted a broad sales and use tax exemption for bullion and currency under KRS 139.480, effective August 1, 2024. Governor Beshear attempted a line-item veto of the exemption; the Attorney General opined the veto was invalid because the Kentucky Constitution restricts line-item vetoes to appropriations measures. The Department of Revenue nonetheless continued collecting sales tax on those transactions. In 2025, the General Assembly passed HB 2 to reinforce the exemption, the Governor vetoed the full bill, and the legislature overrode the veto on March 27, 2025. HB 2 confirmed the exemption retroactive to August 1, 2024 and — importantly for Kentucky buyers who transacted during the disputed period — created a refund pathway. Under KRS 134.580, individual consumers seeking refunds of sales tax paid on qualifying bullion or collectible currency purchases on or after August 1, 2024 must request the refund directly from the retailer that made the sale. If you paid Kentucky sales tax on a bullion purchase during that window, you have a claim; ask the retailer.",
    commonScams:
      "Kentucky does not have a comprehensive state-level coin and bullion dealer licensing regime comparable to Ohio's Chapter 4728 or South Carolina's Title 40 Chapter 54, which means the compliance signals a Kentucky buyer can look for are different. The closest state framework is KRS 433.890, which governs recyclers, dealers in junk or metals, dealers in secondhand articles, and similar operators — a scrap-oriented statute that reaches nonferrous metals and catalytic converters directly but sits at some distance from a typical coin and bullion transaction. Registration as a secondary metals recycler under KRS 433.902 does not translate into a coin dealer credential. The practical result is that Kentucky places more weight on municipal licensing and on the dealer's independently demonstrable track record, so a Kentucky buyer or seller has to do more of the verification work personally. Ask directly about the dealer's business history, whether they are BBB-accredited, and whether they hold any professional numismatic association memberships that carry independent standards.",
    buyingTips:
      "Louisville and Lexington support the deepest in-person markets, with credible additional options in Northern Kentucky (Covington, Florence) and Bowling Green. Northern Kentucky buyers should also be aware of the Cincinnati metro's dealer market across the river, where different tax and licensing frameworks apply. For online purchases shipping to Kentucky, the confirmed bullion and currency exemption means the delivered cost is competitive with in-state pricing on standard products. If you are considering a significant estate liquidation, comparing two or three quotes is worth the time — the absence of a comprehensive state coin dealer regime means dealer pricing discipline varies more in Kentucky than in some neighboring states, and the spread between offers can be meaningful.",
    whatToVerify:
      "Because Kentucky lacks a dedicated state coin and bullion dealer licensing chapter, verification is more of a bottom-up exercise than in states with a Chapter 4728-style regime. Verify business registration with the Kentucky Secretary of State, check the local BBB profile, and ask directly about municipal licensing at the address where you are standing. For dealers who also handle scrap jewelry or nonferrous metals, ask whether they are registered as a secondary metals recycler under KRS 433.902 — that registration comes with its own recordkeeping and reporting obligations and is a compliance signal. For numismatic purchases, confirm any grading certifications come from PCGS or NGC. For bullion, get written pricing stated relative to current spot. And when documenting a Kentucky bullion or currency purchase, retain the invoice: it is your proof of exempt treatment under HB 8, and it is what you would present to the retailer if you needed to claim a refund under the transitional refund pathway.",
    displayOrder: [
      "salesTax",
      "intro",
      "commonScams",
      "whatToVerify",
      "buyingTips",
    ],
    sources: [
      {
        label: "Kentucky Sales Tax Facts (June 2025) — Currency and bullion exemption guidance",
        url: "https://revenue.ky.gov/News/Publications/Sales%20Tax%20Newsletters/Sales%20Tax%20Facts%202025%20-%20Jun.pdf",
      },
      {
        label: "KRS 433.890 — Duties of purchasers of metal and objects containing metal",
        url: "https://apps.legislature.ky.gov/law/statutes/statute.aspx?id=52802",
      },
    ],
  },
  louisiana: {
    intro:
      "Louisiana's precious metals market concentrates in New Orleans, Baton Rouge, Shreveport, and Lafayette. New Orleans in particular supports a distinctive trade shaped by the city's age and its antiques district — estate silver, French and Spanish colonial pieces, and inherited jewelry circulate in volume that a market this size would not otherwise produce. Louisiana's civil law tradition and multigenerational family property holdings mean estate transactions here often involve items that have not been appraised in decades, which raises both the opportunity and the risk on any single sale.",
    buyingTips:
      "New Orleans and Baton Rouge support the deepest in-person markets, with established dealers in Shreveport and Lafayette. The New Orleans antiques trade is a genuine advantage when selling older silver or period jewelry, where a piece may be worth considerably more intact than melted — get an antiques opinion before accepting any melt-based offer on marked or period work. For standard investment bullion, online dealers shipping to Louisiana are competitive on premium, and a delivered quote is a useful benchmark against local pricing.",
    salesTax:
      "Louisiana's treatment of precious metals has changed more than once in recent years, and the state's combination of state and local sales taxes makes the total rate on any taxable item highly parish-dependent. Qualifying numismatic coins and bullion have been exempted from state sales tax, but both the criteria and the local treatment matter. Confirm the current state and parish treatment of a specific purchase with the dealer before transacting rather than relying on older guidance.",
    commonScams:
      "Louisiana imposes strict liability on one specific transaction, and knowing it explains a great deal about how a legitimate shop behaves. No secondhand dealer may purchase gold, silver, or other precious metals, jewelry, or precious stones from anyone under eighteen, and lack of knowledge of the seller's age is expressly not a defense. That is why a Louisiana dealer cards everyone: the risk sits with them regardless of what they were told. The rule does not extend to manufactured registered bullion bars, coins, or numismatic items, which is why a bullion counter may handle the same customer differently than the jewelry counter does. Louisiana's licensing Part also limits where a secondhand dealer may be located and requires any location change to be noted on the license, so an operation working out of a temporary space is outside the structure entirely. Record retention is mandatory with law enforcement inspection rights and penalties attached, which means a dealer who does not want to write anything down is avoiding a legal obligation, not saving you paperwork.",
    whatToVerify:
      "Louisiana defines a secondhand dealer under R.S. 37:1861 to include anyone buying, selling, or trading used or secondhand jewelry, silverware, diamonds, and precious metals, and the definition reaches coinage directly. An object, including currency or coinage regardless of the issuing government, falls inside the definition if at least twenty-five percent of its weight is precious metal, or if its market value lies primarily in the precious metal component. At the same time, the licensing Part does not apply to dealers in coins and currency, dealers in antiques, or gun, knife, and other trade and hobby shows, subject to a statutory cross-reference that keeps that exemption from being absolute. The upshot for a seller is that a shop handling both estate jewelry and coins may straddle the line, so ask directly whether they are licensed and bonded as a secondhand dealer under the Part and which category your items fall into.",
    displayOrder: [
      "intro",
      "whatToVerify",
      "salesTax",
      "buyingTips",
      "commonScams",
    ],
  },
  maine: {
    intro:
      "Maine's precious metals market is small and concentrated in Portland, Bangor, and the coastal communities. The state's outdoor and self-reliant culture supports interest in physical gold and silver as stores of value among a segment of the population. Maine does not exempt precious metals from state sales tax in most cases, which is a factor in local pricing. Regional coin shows in New England are accessible to Maine buyers.",
    buyingTips:
      "Portland has the most active coin and jewelry market in Maine. Boston-area dealers are a reasonable option for Maine residents seeking access to a wider physical market. Online dealers shipping to Maine provide the broadest bullion selection.",
  },
  mississippi: {
    intro:
      "Mississippi's precious metals market is modest, with coin dealers operating primarily in Jackson, Gulfport, and Hattiesburg. The state's Gulf Coast region sees tourism-related jewelry trade, and estate gold from the antebellum era occasionally surfaces in the northern Mississippi hill country. Mississippi charges sales tax on precious metals transactions, which affects local dealer economics. The Memphis, Tennessee market — easily accessible from northern Mississippi — provides a broader range of options.",
    buyingTips:
      "Memphis-area dealers are the closest major market for northern Mississippi residents. For bullion, online dealers shipping to Mississippi addresses offer competitive pricing without the friction of local sales tax in most investment-grade transactions.",
  },
  montana: {
    intro:
      "Montana's connection to precious metals runs through its mining history — copper, silver, and gold shaped the state, and the Butte legacy still resonates. Today the market is concentrated in Billings and Missoula, with smaller dealers in Bozeman, Helena, Great Falls, and Kalispell. Montana's modest population is offset by a culturally engaged investor base with unusually strong interest in physical metals as stores of value, and by a steady supply of estate gold from ranching and mining families.",
    buyingTips:
      "Billings and Missoula offer the primary in-person dealer options, with credible smaller shops in Bozeman, Helena, and Great Falls. Online dealers shipping to Montana provide wider selection at competitive premiums. Buyers near the Wyoming, Idaho, or North Dakota lines may find additional options across the border — worth checking, since Montana's dealer base is thin enough that in-state price comparison alone can be misleading.",
    salesTax:
      "Montana imposes no state-level sales tax, which makes in-state precious metals purchases unusually straightforward: the negotiated price is the total cost, with no exemption criteria to satisfy and no qualifying-product analysis required.",
    commonScams:
      "Montana's regulatory gap is the thing buyers and sellers should understand. Where states like Vermont and Delaware run certification regimes that screen dealers before they open, Montana has no equivalent state-level check — which means a Montana dealer's legitimacy is established by reputation and record, not by a license anyone verified. That raises the stakes on the standard patterns: traveling buyers running short-term events in hotel conference rooms, and telephone or mail solicitations pushing 'rare' coins at premiums well above the numismatic market. Neither faces a state licensing barrier here. Get a written offer, verify spot independently, and decline same-day pressure. The Montana Department of Justice Office of Consumer Protection handles complaints from buyers who believe they've been targeted.",
    whatToVerify:
      "Montana has no state-level precious metals dealer certification. Regulation happens municipally, and it varies by city — Missoula licenses pawnbrokers and secondhand dealers through the city treasurer under Title 5 of its municipal code, requiring separate transaction registers for each category of business a shop operates. Other Montana municipalities license through the city clerk. So the meaningful question is not 'is this dealer state-licensed' — none are — but whether they hold the applicable municipal license for the city they operate in, and how long they have operated there. Verify business registration with the Montana Secretary of State, check how long the business has held its location, and review independent feedback. For numismatic purchases, confirm grading comes from PCGS or NGC. For bullion, get written pricing relative to current spot.",
    displayOrder: [
      "intro",
      "whatToVerify",
      "commonScams",
      "salesTax",
      "buyingTips",
    ],
    sources: [
      {
        label: "Montana Department of Justice — Office of Consumer Protection",
        url: "https://dojmt.gov/consumer/",
      },
    ],
  },
  nebraska: {
    intro:
      "Nebraska's precious metals market is centered in Omaha and Lincoln, where coin shops serve a mix of collectors and conservative investors drawn to gold and silver as inflation hedges. The Omaha area, home to Berkshire Hathaway, has a disproportionately investment-minded population that includes significant precious metals interest. Nebraska charges sales tax on precious metals, though some municipalities have lower rates that apply to local transactions.",
    buyingTips:
      "Omaha has the most active coin dealer market in Nebraska. For investment-grade bullion, online dealers shipping to Nebraska offer full product selection. The Omaha and Lincoln areas host regular coin shows worth attending for collectors.",
  },
  nevada: {
    intro:
      "Nevada has deep mining roots — the Comstock Lode silver discovery in 1859 shaped the state's early economy and still defines its identity around mineral wealth. Las Vegas and Reno both have active precious metals markets, with coin shops, pawn dealers, and refiners serving a high-volume transient population and a core of local investors. Nevada charges no state income tax and no sales tax on most precious metals transactions, making it one of the most favorable states for bullion buying and selling.",
    buyingTips:
      "Las Vegas has by far the largest and most competitive precious metals market in Nevada. The local competition among dealers often produces favorable buy/sell spreads. Reno offers a strong secondary market. National online dealers also ship to Nevada with no state sales tax on qualifying bullion.",
  },
  "new-hampshire": {
    intro:
      "New Hampshire's \"Live Free or Die\" ethos extends to financial privacy — the state has no income tax on wages and no sales tax of any kind, making it one of the cleanest states for precious metals transactions. The Nashua and Manchester areas have the most active local coin markets, and the state participates in the broader New England coin show circuit. Granite State residents have historically favored tangible assets, and physical gold and silver ownership is common.",
    buyingTips:
      "Manchester and Nashua have the most established coin and bullion dealers in New Hampshire. The state's complete sales tax exemption makes purchasing locally or through online dealers equally favorable from a tax standpoint.",
  },
  "new-mexico": {
    intro:
      "New Mexico's precious metals market reflects the state's mining heritage and proximity to Mexico. Silver City — named for the silver veins discovered in the 1870s — is part of a broader regional mining legacy. Albuquerque and Santa Fe have active coin and jewelry markets, with particular strength in silver jewelry, Navajo and Pueblo artisan silverwork, and vintage turquoise-and-silver pieces that cross into precious metals collecting. New Mexico does not charge sales tax on most investment-grade bullion.",
    buyingTips:
      "Albuquerque has the largest precious metals market in New Mexico, with coin shops and estate jewelers serving both collector and investment demand. Santa Fe's gallery and antique districts offer unique estate silver. Online dealers provide standard bullion products at competitive premiums.",
  },
  ohio: {
    intro:
      "Ohio supports one of the deepest precious metals markets in the Midwest. Cleveland, Columbus, Cincinnati, Dayton, and Toledo all sustain established dealers, and the state hosts an active coin show circuit that draws collectors from across the region. Ohio's manufacturing history left behind a substantial base of industrial and scrap precious metals activity alongside the retail trade, and its large population of long-settled families generates steady estate flow. The practical effect for a buyer is real competition — Ohio is one of the states where comparing two or three local quotes is genuinely worth the afternoon, and where a lowball offer is easier to identify because an alternative is usually a short drive away.",
    buyingTips:
      "The major metros each support multiple competing dealers, which is unusual enough to be worth using deliberately. Get quotes from more than one shop before committing on a significant purchase, and treat Ohio's coin show circuit as a price-discovery tool even if you ultimately buy from a storefront. Online dealers shipping to Ohio remain competitive on standard bullion products, so a delivered online quote makes a useful third reference point against local premiums.",
    salesTax:
      "Ohio exempts qualifying investment metal bullion and investment coins from state sales tax, with the exemption turning on whether an item qualifies as investment metal rather than on its form or the size of the transaction. Jewelry, processed items, and accessories generally remain taxable, and county permissive taxes affect the rate on anything taxable. Confirm with the dealer whether a specific item qualifies before transacting.",
    commonScams:
      "Ohio's statute names the behaviors the state considers the risk, which makes them easy to check for. Licensed dealers must report items received to the local police department daily under section 4728.07 — not weekly, not on request — so a legitimate Ohio scrap or jewelry buyer is documenting transactions to law enforcement within a day. Section 4728.08 separately bars purchasing from an intoxicated person, and section 4728.09 imposes a retention period on property that may be stolen. The operators to watch are the ones outside that system: Ohio requires a separate temporary exhibition permit under section 4728.04 for buying at shows and events, so a buyer working an Ohio hotel event or show floor should hold one. Administrative rules make licenses nontransferable and bar a licensee from transacting or soliciting under any name or at any address other than what appears on the license, so a dealer operating under a different name than the paperwork is a documented violation rather than a technicality.",
    whatToVerify:
      "Ohio licenses precious metals dealers through the Division of Financial Institutions in the Department of Commerce under Revised Code Chapter 4728 — a financial regulator, not a business-registration office. An applicant must show experience and a net worth of at least ten thousand dollars, or post a ten thousand dollar surety bond instead, which the public or the Division can claim against if a dealer knowingly buys stolen property. That bond is a real remedy, so ask which basis the dealer qualified on. License fees are capped at three hundred dollars and licenses expire the last day of June. Crucially, Chapter 4728 does not reach everything: section 4728.11 exempts coins, hallmark bars, registered ingots, and other collectible currency, so an Ohio bullion counter may be lawfully unlicensed while a scrap gold buyer must be licensed. Ask which side of that line your transaction falls on. In Liberty Coins, LLC v. Goodman, a jeweler and a coin dealer successfully challenged the chapter's warrantless search provision, though the Sixth Circuit upheld the recordkeeping and daily reporting requirements.",
    displayOrder: [
      "intro",
      "whatToVerify",
      "commonScams",
      "salesTax",
      "buyingTips",
    ],
    sources: [
      {
        label: "Ohio Revised Code Chapter 4728 — Precious Metals Dealers",
        url: "https://codes.ohio.gov/ohio-revised-code/chapter-4728",
      },
      {
        label: "ORC 4728.01 — Precious metals dealer definitions",
        url: "https://codes.ohio.gov/ohio-revised-code/section-4728.01",
      },
    ],
  },
  oregon: {
    intro:
      "Oregon's precious metals market centers on Portland, with meaningful dealer activity in Salem, Eugene, Medford, and Bend. Portland supports the deepest in-person market in the Pacific Northwest outside Seattle, with an established coin and bullion trade that predates the modern online market and a numismatic community with real depth in early US gold and Pacific Northwest regional material. Oregon's investor culture skews toward physical metals held for the long term rather than short-term trading, and the state's regulatory posture toward coin and bullion transactions is notably different from most states in a way that changes how Oregon buyers should think about verification.",
    salesTax:
      "Oregon imposes no state sales tax of any kind — it is one of five US states with no general retail sales tax — which means precious metals purchases in Oregon carry no sales tax component regardless of product type, transaction size, or dealer. The dealer's quoted price is the buyer's total cost. That treatment applies uniformly to bullion, numismatic coins, jewelry, and every other category, unlike states where the applicable rate turns on whether an item qualifies as investment bullion. The absence of a sales tax makes Oregon an unusually clean market for total-cost comparison against online dealers shipping in, and it removes one of the recurring practical complications — the question of whether a specific product qualifies for a bullion exemption — that Oregon buyers in most other states have to work through.",
    commonScams:
      "Oregon's precious metal secondhand dealer statute at ORS 646A.064 to 646A.067 contains a definitional carve-out that Oregon buyers and sellers should understand, because it changes what state-level regulation actually applies to a coin or bullion transaction. ORS 646A.064 defines 'item of precious metal' to include gold in eight karat or greater purity, silver, platinum, and palladium — but it expressly excludes 'gold or silver coins or bullion in any form.' The practical effect is that Oregon's state-level precious metals secondhand dealer regime does not reach a coin or bullion sale at all. A coin and bullion dealer in Oregon is not required to comply with ORS 646A.065's recordkeeping and retention requirements for coin or bullion transactions, which means the state-law compliance signals that exist in South Carolina, Ohio, or Virginia are simply not present here. That is neither a scandal nor a gap — it is a deliberate legislative choice — but it means Oregon buyers cannot rely on state regulation to sort legitimate operators from opportunistic ones. Municipal ordinances fill some of the gap; ORS 646A.066 explicitly preserves local ordinances with substantially equivalent or more stringent requirements, and Portland, Gresham, and other Oregon cities have their own secondhand dealer regimes with permitting and background check requirements that do reach coin operators in some circumstances.",
    buyingTips:
      "Portland supports the strongest in-person market in Oregon, with established dealers in Salem, Eugene, Medford, and Bend. The absence of state sales tax makes head-to-head comparison against online delivered pricing straightforward, and online dealers shipping to Oregon are usually competitive on standard investment bullion. For estate liquidations or larger transactions, comparing two or three quotes remains worthwhile — the state's regulatory light touch on coin and bullion means dealer pricing discipline is more variable than in more heavily regulated markets. If you are near the Washington border, be aware that Washington's precious metals sales tax treatment differs from Oregon's and can affect cross-border purchase decisions.",
    whatToVerify:
      "Because Oregon's state precious metals secondhand dealer statute expressly excludes coin and bullion transactions, verification of a Portland or Salem coin dealer has to rely more heavily on municipal licensing, business registration, and independent reputation checks than in states with a comprehensive state dealer regime. Verify business registration with the Oregon Secretary of State, check the local BBB profile, and — importantly — ask which municipal ordinances apply at the dealer's specific address. Portland, Gresham, and other Oregon cities have their own secondhand dealer permitting regimes, and the compliance conversation happens at the municipal level. Ask whether the dealer holds the applicable municipal permit and whether background checks have been completed on the personnel handling transactions. For numismatic purchases, confirm grading certifications come from PCGS or NGC. For bullion, get written pricing stated relative to current spot. And for any purchase, retain the invoice: without a state sales tax to document, the invoice serves primarily as the record of what you paid and the basis for calculating gain or loss when you eventually sell.",
    displayOrder: [
      "salesTax",
      "intro",
      "whatToVerify",
      "buyingTips",
      "commonScams",
    ],
    sources: [
      {
        label: "ORS 646A.064 — Definitions for precious metal secondhand dealer statute",
        url: "https://oregon.public.law/statutes/ors_646a.064",
      },
      {
        label: "ORS 646A.065 — Records required for precious metal transactions",
        url: "https://oregon.public.law/statutes/ors_646a.065",
      },
    ],
  },
  "rhode-island": {
    intro:
      "Rhode Island's precious metals market is concentrated in Providence, with smaller presence in Warwick and Newport. The state's compact size means most Rhode Island buyers also reach dealers in nearby Massachusetts and Connecticut. Providence's historic jewelry manufacturing industry built a specialized precious metals trade going back generations, and the city retains a more developed numismatic community than the state's population alone would suggest.",
    buyingTips:
      "Providence offers the strongest in-person options in Rhode Island. For larger purchases or specialized products, online dealers provide wider selection at competitive premiums. The Boston and Worcester markets are within easy reach for buyers willing to travel, which is worth doing on significant transactions — Rhode Island's dealer base is small enough that meaningful price comparison often means leaving the state.",
    salesTax:
      "Rhode Island exempts precious metal bullion from sales tax under R.I. Gen. Laws § 44-18-30, on the reasoning that such a purchase is substantially equivalent to a securities or commodities transaction, and separately exempts coins having numismatic or investment value. Bullion is defined by content rather than form, so refined bars sold for metal content qualify. Processed items, jewelry, medals, tokens, and accessories generally remain taxable at the state's 7 percent rate. Confirm with the dealer whether a specific item qualifies.",
    commonScams:
      "Rhode Island's licensing statute defines the state's central risk with unusual precision. State regulations provide that a dealer buying coins for numismatic value is exempt from licensing, but that purchasing coins for metal content is a violation — and such buyers are subject to prosecution as unlicensed precious metals dealers. The practical scam follows directly: a shop uses collector-sounding language while paying melt, capturing numismatic value it never priced into the offer, from a seller who does not know the two bases are legally distinct. Insist that a written offer state which basis it is on. Traveling buying events present the same problem from another direction — a permanent registered Rhode Island place of business is a licensing prerequisite, so an operation without one is not licensable.",
    whatToVerify:
      "Rhode Island runs one of the country's few dedicated precious metals licensing regimes, and it is administered by the Attorney General rather than a business-registration office. Under R.I. Gen. Laws § 6-11.1-1, no person — including pawnbrokers, consignment shops, salvage operators, and secondhand dealers — may buy gold, silver, platinum-group metals, or precious stones from the public for resale without an AG-issued license, and the AG will not license anyone who has not registered a permanent place of business in the state. Before selling an inherited collection, ask two questions: is the buyer AG-licensed, and is this offer based on numismatic value or metal content. The Attorney General's Precious Metals Unit administers licensing and investigates consumer complaints on precious metals sales.",
    displayOrder: [
      "whatToVerify",
      "intro",
      "commonScams",
      "buyingTips",
      "salesTax",
    ],
    sources: [
      {
        label: "R.I. Gen. Laws § 6-11.1-1 — Precious metals dealer licensing",
        url: "https://webserver.rilegislature.gov/Statutes/TITLE6/6-11.1/6-11.1-1.htm",
      },
      {
        label: "RI Precious Metals Regulatory Enforcement Unit — Rules and Regulations",
        url: "https://rules.sos.ri.gov/regulations/part/110-20-00-1",
      },
    ],
  },
  "south-carolina": {
    intro:
      "South Carolina's precious metals market runs along the Charleston–Columbia–Greenville corridor, with additional activity in Myrtle Beach and the coastal resort communities. The state's substantial retiree population and long-settled Lowcountry families generate a steady supply of estate silver, inherited jewelry, and coin collections, and the tourist economy along the coast brings seasonal buying activity that inland markets do not see. Charleston in particular supports a specialized trade in antique silver that reflects the city's age, which means older pieces there are more likely to be valued as objects rather than as metal.",
    buyingTips:
      "Charleston, Columbia, and Greenville each support established dealers, and the geographic spread means most South Carolina buyers have a real in-person option within an hour. For investment bullion, online dealers shipping to South Carolina compete well on premium, and a delivered quote is a useful check on any local offer. If you are selling estate silver or antique pieces, the Charleston market's familiarity with older American and English silver can matter more than the metal price alone — get a second opinion before selling anything with maker's marks at melt value, because hallmarked work frequently carries a premium that a scrap buyer will not volunteer.",
    salesTax:
      "South Carolina exempts qualifying gold, silver, and platinum bullion and certain coins from state sales tax, with the exemption defined by metal content and product type rather than by transaction value. Jewelry, decorative items, and accessories generally remain taxable, and local option taxes affect the rate on taxable items. Confirm with the dealer whether a specific purchase qualifies before transacting.",
    commonScams:
      "South Carolina has the most direct statutory answer to the traveling-buyer problem of any state in the country. A permitted dealer may not operate on public property, or from a vehicle, flea market, hotel room, residential dwelling, similar temporary location, or space subleased for a term shorter than one year. The hotel-ballroom gold-buying event that appears in most states as a practical warning is, in South Carolina, simply outside the permit scheme. If someone is buying gold out of a conference room, a booth, or a van in this state, that alone tells you what you need to know before handing over an estate collection — you do not need to evaluate their offer, because the setting has already answered the question. The permit structure has consequences on the back end as well: a conviction for a second offense disqualifies a dealer from holding a permit at all. Sellers approached at or shortly after coastal antique and collectible events are the most exposed, because the offer arrives without a comparison point and disappears when the event does.",
    whatToVerify:
      "South Carolina regulates dealers in precious metals under Title 40, Chapter 54 of the state code. Permits are prescribed by the State Law Enforcement Division and filed with local law enforcement in the jurisdiction where the dealer operates, so verification is a two-part question: does the dealer hold a SLED-prescribed permit, and is it on file locally where you are standing. Because the statute ties permitted operation to a fixed, non-temporary location with a lease of at least a year, the dealer's physical premises are themselves part of the compliance picture — a permanent storefront is a statutory requirement rather than a convenience. Ask how long they have held the location and whether the permit names that address. For numismatic purchases, confirm grading comes from PCGS or NGC; for bullion, get written pricing stated relative to current spot.",
    displayOrder: [
      "commonScams",
      "intro",
      "whatToVerify",
      "buyingTips",
      "salesTax",
    ],
    sources: [
      {
        label: "S.C. Code Title 40, Chapter 54 — Dealers in Precious Metals",
        url: "https://www.scstatehouse.gov/code/t40c054.php",
      },
      {
        label: "South Carolina Law Enforcement Division",
        url: "https://www.sled.sc.gov/",
      },
    ],
  },
  "south-dakota": {
    intro:
      "South Dakota's precious metals market centers on Sioux Falls and Rapid City. The state's small population is offset by a financially engaged investor base — Sioux Falls' role as a banking and credit-card industry hub supports a more sophisticated retail investor community than population alone would predict. Rapid City serves the western half of the state and sits at the edge of the Black Hills tourist economy, which brings seasonal buying and selling activity that the rest of the state doesn't see.",
    buyingTips:
      "Sioux Falls and Rapid City offer the primary in-person dealer options. Online dealers shipping to South Dakota provide wider selection. With only two meaningful in-state markets, local price comparison is limited — checking a delivered online quote is the practical way to establish whether a local premium is competitive before committing to a larger purchase.",
    salesTax:
      "South Dakota exempts qualifying bullion sales from state sales tax under specific criteria. Coins meeting bullion definitions and bars from recognized refiners typically qualify, while processed and collectible items may be treated differently. Municipal sales tax applies in many South Dakota jurisdictions, so confirm the full tax treatment — state and local — with the dealer before transacting.",
    commonScams:
      "The Black Hills tourist economy makes South Dakota unusual: seasonal visitor traffic through Rapid City supports temporary and event-based buying operations that a market this size would not otherwise sustain. Rapid City's ordinance addresses this directly, defining a trade show as an organized gathering for trading gems and precious metals over a designated period, on either an isolated or recurring basis, and distinguishing it from any business with a fixed location inside city limits where such trading happens regularly. That distinction is the useful one for a seller: a fixed-location licensed dealer is accountable at an address next month, and an event operator is not. Estate sellers approached at or shortly after a show are the most exposed, because the offer arrives without a comparison point and expires when the event does.",
    whatToVerify:
      "South Dakota regulates pawnbrokers and precious metals dealers through municipal authority rather than a statewide licensing agency, so requirements depend on the city. Sioux Falls maintains a dedicated ordinance chapter covering pawnbrokers, secondhand goods dealers, and dealers in precious metals and precious gems. Rapid City licenses gems and precious metals dealers through the city and separately regulates trade shows. Requirements can be substantial at the municipal level — Watertown, for example, requires a South Dakota Division of Criminal Investigation background check, fingerprinting through the police department, and a surety bond before issuing a license. Ask which city license the dealer holds and confirm it covers precious metals specifically, not just general secondhand goods. For numismatic purchases, confirm grading comes from PCGS or NGC; for bullion, get written pricing relative to spot.",
    displayOrder: [
      "intro",
      "commonScams",
      "whatToVerify",
      "buyingTips",
      "salesTax",
    ],
  },
  tennessee: {
    intro:
      "Tennessee's precious metals market centers on Nashville, Memphis, Knoxville, and Chattanooga, with Nashville's growth over the past decade adding meaningful depth to the state's dealer base. Tennessee's position at the intersection of several regional markets and its lack of a state income tax have drawn both residents and capital, and the state supports an active trade in estate silver and inherited collections from long-settled families across the Cumberland Plateau and West Tennessee. The four-metro structure means competition exists, but it is regional rather than statewide.",
    buyingTips:
      "Nashville and Memphis support the deepest in-person markets, with credible dealers in Knoxville and Chattanooga. The metro spread means most Tennessee buyers have a real local option, and comparing two quotes is practical in a way it is not in thinner states. Online dealers shipping to Tennessee are competitive on standard bullion products. If you are selling a mixed estate lot of coins and scrap jewelry, be aware that the two categories are treated differently under state law and are frequently better sold separately, to different buyers.",
    salesTax:
      "Tennessee exempts qualifying gold, silver, platinum, and palladium bullion and coins from state sales tax, with the exemption turning on the item qualifying as bullion or coin rather than on transaction size. Jewelry, processed items, and accessories generally remain taxable, and Tennessee's local option sales taxes affect the rate on taxable items. Confirm with the dealer whether a specific purchase qualifies before transacting.",
    commonScams:
      "Tennessee draws a line that directly affects how you should sell a mixed collection. The registration requirement applies to dealers purchasing antique, used, or scrap jewelry and precious metals for resale, but it expressly does not apply to anyone dealing solely in coins, or to transactions between dealers where the selling dealer has already complied. So a pure coin dealer sits outside the registration scheme entirely, while the moment a shop starts buying scrap gold jewelry it must register. The practical risk is a shop that takes your coins and your jewelry as one undifferentiated lot at a scrap price, capturing collector value on the coins that was never priced into the offer. Ask for the two categories to be quoted separately, in writing. Tennessee Attorney General opinions have also confirmed that a dealer registered as a scrap metal dealer with the Department of Commerce and Insurance under a different chapter is not thereby covered for scrap jewelry and precious metals, so a dealer waving the wrong registration is not registered for what they are doing.",
    whatToVerify:
      "Tennessee requires dealers in antique, used, or scrap jewelry and precious metals to register with both the chief of police and the sheriff of each city and county where the business is carried on. That dual, per-jurisdiction registration is the specific thing to ask about — there is no statewide license for this trade, so a dealer claiming to be state-licensed is describing something that does not exist. Pawnbrokers are licensed separately by the county clerk under the Pawnbrokers Act, and Attorney General opinions have confirmed that a pawnbroker handling scrap jewelry and precious metals must still comply with the longer holding period in the dealers statute, because the specific provision controls over the general one. Section 38-1-202 separately bars taking an item under a buy-sell agreement when it is known to be stolen. For numismatic purchases, confirm grading comes from PCGS or NGC; for bullion, get written pricing relative to spot.",
    displayOrder: [
      "intro",
      "salesTax",
      "commonScams",
      "whatToVerify",
      "buyingTips",
    ],
  },
  utah: {
    intro:
      "Utah has some of the most progressive precious metals laws in the country — the state formally recognizes gold and silver coins as legal tender and exempts them from state capital gains tax. Salt Lake City has a strong coin and bullion dealer community, and the state's LDS culture, which historically emphasizes self-reliance and food storage, extends to physical precious metals as a component of financial preparedness. The U.S. Mint's West Point facility has historical ties to Utah silver mining.",
    buyingTips:
      "Salt Lake City has multiple established coin and bullion dealers competing for business, which typically produces favorable pricing. Provo and Ogden have smaller markets. Utah's legal tender recognition of gold and silver coins is unique among states and benefits long-term holders.",
  },
  vermont: {
    intro:
      "Vermont's precious metals market is concentrated in Burlington and Montpelier, with smaller presence in Rutland and Brattleboro. The state's small population supports a limited in-state dealer base, but Vermont's New England heritage and multi-generational family wealth in dairy, maple, and other traditional industries produce a steady supply of estate gold and silver. Many Vermont buyers also cross into New Hampshire, which levies no sales tax of any kind.",
    buyingTips:
      "Burlington offers the primary in-person dealer options in Vermont. The state's thin dealer base means many buyers cross into New Hampshire for additional choice, and online dealers shipping to Vermont provide wider selection at competitive premiums. If you do cross the border, verify how the receiving dealer handles out-of-state transactions before assuming the trip changes your tax position.",
    salesTax:
      "Vermont exempts qualifying bullion sales from state sales tax under specific criteria. Coins meeting bullion definitions and bars from recognized refiners typically qualify, while jewelry and processed items generally do not. Confirm with the dealer whether a specific purchase qualifies before transacting.",
    commonScams:
      "Vermont's statute is built around slowing down the resale of stolen metal, which tells you which operators are structurally incompatible with it. Chapter 97A requires a certified dealer to hold purchased precious metal for at least ten days before offering it for sale or scrap, and bars removing it from the state during that period. Certified dealers are also enrolled in a statewide stolen property notification system that pushes theft reports to dealers and law enforcement. The operations that cannot function under those rules are the ones to avoid: pop-up buying events with no fixed Vermont location, and buyers who take possession and move metal out of state immediately. The New Hampshire border adds a second pressure — some operations market to Vermont sellers crossing for the tax difference while sitting outside Vermont's certification regime entirely.",
    whatToVerify:
      "Vermont certifies precious metal dealers through the Department of Public Safety under Title 9, Chapter 97A, a requirement effective January 1, 2015 — so certification runs through DPS, not the Secretary of State, and a Secretary of State business registration tells you nothing about whether a dealer is certified to buy precious metals. Certification carries a $200 application fee, and certified dealers are enrolled in the state's stolen property notification system. The chapter's ten-day retention requirement and its treatment of collectible coins as antiques both affect how a given transaction is handled. Ask any Vermont buyer whether they hold current DPS certification before handing over an estate collection. For numismatic purchases, confirm grading comes from PCGS or NGC; for bullion, get written pricing relative to current spot.",
    displayOrder: [
      "intro",
      "salesTax",
      "whatToVerify",
      "commonScams",
      "buyingTips",
    ],
    sources: [
      {
        label: "Vermont Department of Public Safety — Precious Metal Dealer Licensing",
        url: "https://dps.vermont.gov/licensing/preciousmetals",
      },
      {
        label: "9 V.S.A. Chapter 97A — Precious Metal Dealers",
        url: "https://legislature.vermont.gov/statutes/fullchapter/09/097A",
      },
    ],
  },
  virginia: {
    intro:
      "Virginia's precious metals market spans several distinct regions: the Northern Virginia suburbs of Washington, the Richmond metro, Hampton Roads, and the Shenandoah Valley. Northern Virginia's affluence and federal workforce support a substantial investment-oriented buyer base, while the state's older communities and military heritage generate steady estate flow. Virginia also has an unusually engaged market in pre-1933 United States gold, reflecting a collector culture that predates the modern bullion trade and that still supports numismatic premiums well above metal content on the right material.",
    buyingTips:
      "Northern Virginia, Richmond, and Hampton Roads each support competing dealers, and Northern Virginia buyers also reach the Washington and Maryland markets easily. That regional density is worth using — compare at least two local quotes on a significant purchase. Online dealers shipping to Virginia are competitive on standard bullion. If you hold pre-1933 US gold or graded collector coins, the Virginia market's depth in that category means a numismatic offer may substantially exceed melt, so do not sell to a metal-content buyer without getting a collector opinion first.",
    salesTax:
      "Virginia exempts qualifying gold, silver, and platinum bullion from state sales tax, with the exemption defined by metal content and product form. Jewelry, processed items, and accessories generally remain taxable, and local taxes affect the rate on taxable items. Exemption criteria in Virginia have been revised more than once in recent years, so confirm the current treatment of a specific purchase with the dealer before transacting rather than relying on older guidance.",
    commonScams:
      "Virginia law puts the documentation burden on the transaction itself, which changes what a legitimate sale looks like here. Dealers must obtain seller credentials and a statement of ownership, so a Virginia buyer who does not ask for identification and an ownership representation is not following the statute — and a seller who is not asked should treat that as a warning rather than a convenience. Some Virginia localities go further. Loudoun County requires pawnbrokers, precious metals and gem dealers, secondhand dealers, and scrap metal dealers to deliver a report to the Sheriff's Office every day except Sunday, within twenty-four hours of the transaction, including the seller's full name, address, date of birth, and a copy of government identification. Loudoun also requires precious metals and gem dealers to record the true weight or carat of items purchased. That last requirement is the useful one for a seller: a Loudoun dealer is obligated to document what they are actually paying you for, by weight or carat, not by a vague description. The operators to avoid are the ones who skip the paperwork and pay cash without a record.",
    whatToVerify:
      "Virginia regulates dealers in precious metals under Code of Virginia section 54.1-4100 and following, and the chapter authorizes examination of dealer records and property by law enforcement — oversight that only functions if the dealer is actually inside the system. Permits are administered locally, so the practical questions are which locality issued the permit, whether it is current, and whether it names the address where you are standing. In counties with additional reporting obligations, ask whether the dealer files the required daily report, since that single question separates a compliant operation from one working around the rules. Confirm that any weight-based offer is documented with true weight or carat. For numismatic purchases, confirm grading comes from PCGS or NGC; for bullion, get written pricing relative to current spot.",
    displayOrder: [
      "intro",
      "buyingTips",
      "commonScams",
      "whatToVerify",
      "salesTax",
    ],
    sources: [
      {
        label: "Code of Virginia § 54.1-4100 et seq. — Dealers in Precious Metals",
        url: "https://law.lis.virginia.gov/vacode/title54.1/chapter41/",
      },
    ],
  },
  "west-virginia": {
    intro:
      "West Virginia's precious metals market is modest, with coin shops operating in Charleston and Huntington. The state's coal and natural resources history has driven wealth that occasionally surfaces in estate gold and silver collections. West Virginia charges sales tax on precious metals transactions, which affects local pricing. The state's proximity to Ohio — which has a much larger dealer community — means many West Virginia buyers cross the border for larger purchases.",
    buyingTips:
      "Charleston has the most established coin market in West Virginia. For larger bullion purchases, the Columbus and Cincinnati Ohio markets are accessible. Online dealers shipping to West Virginia provide the broadest selection.",
  },
  wisconsin: {
    intro:
      "Wisconsin's precious metals market anchors in Milwaukee and Madison, with meaningful dealer activity in Green Bay, Appleton, Eau Claire, and the Kenosha-Racine corridor near the Illinois line. Milwaukee's industrial and brewing heritage produced generations of household wealth that regularly surfaces as estate gold and silver, while Madison's professional and academic communities support a distinct dealer market with above-average interest in numismatic material. Wisconsin's recent legislative shift on bullion taxation has meaningfully changed the total cost picture for in-state purchases, and the state's approach to dealer regulation happens almost entirely at the municipal level — both of which affect how Wisconsin buyers should approach a transaction.",
    salesTax:
      "Wisconsin enacted a comprehensive sales and use tax exemption for precious metal bullion under 2023 Wis. Act 149, effective March 23, 2024, codified at Wis. Stat. § 77.54(71). The statute defines precious metal bullion as coins, bars, rounds, or sheets containing at least 35% gold, silver, copper, platinum, or palladium that are marked with weight, purity, and content or that a government authority has minted on the basis of weight, purity, and content. Notably, that 35% threshold and the inclusion of copper make Wisconsin's definition broader than most states' bullion exemptions. Jewelry, works of art, scrap metal, electronics, and other tangible personal property that contains precious metal bullion but is processed into something else remain taxable. Under 2025 Wis. Act 124, effective March 27, 2026, purchasers no longer need to present a Wisconsin sales and use tax exemption certificate to claim the bullion exemption — a meaningful administrative simplification. The state base rate is 5%, with counties adding up to 0.5% and Milwaukee imposing an additional 2% city rate; qualifying bullion is exempt from all of these.",
    buyingTips:
      "Milwaukee and Madison support the deepest in-person markets in Wisconsin, with Green Bay, Appleton, and Eau Claire offering credible additional options. Since the Act 149 bullion exemption took effect, in-state pricing on qualifying products has become directly comparable to online delivered pricing without needing to factor in state or local tax. For estate liquidations — common in Wisconsin given the state's demographics and long-settled family holdings — get at least two quotes before selling, and separate coin and jewelry lots since they are frequently priced under different competitive dynamics. Wisconsin's coin show circuit is active in Milwaukee and Madison and serves as a useful price-discovery venue.",
    whatToVerify:
      "Wisconsin regulates pawnbrokers, secondhand article dealers, and secondhand jewelry dealers at the municipal level under Wis. Stat. § 134.71 — there is no comprehensive state license for precious metals dealers. A person operating as a pawnbroker, secondhand article dealer, or secondhand jewelry dealer applies for a license to the clerk of the municipality where the principal place of business is located. Section 134.71(6) requires the local law enforcement agency to investigate each applicant for felony convictions within the preceding ten years and for certain misdemeanor and ordinance violations. Each license runs from January 1 through December 31 of the year issued and is not transferable. The practical verification question in Wisconsin is therefore two-part: is the operator holding the applicable municipal license, and is the license current for the current calendar year. Ask the dealer directly which municipal license they hold and, for a significant transaction, verify with the municipal clerk. Section 134.71(8) also imposes holding periods: purchased items must be held for not less than thirty days by a pawnbroker, ten days by a secondhand article dealer, and fifteen days by a secondhand jewelry dealer, which is why a legitimate Wisconsin operator will not immediately melt or resize a piece you have just sold. For numismatic purchases, confirm grading comes from PCGS or NGC; for bullion, get written pricing relative to current spot.",
    commonScams:
      "Wisconsin's municipal licensing structure and Chapter 134.71's holding periods together give a Wisconsin seller several concrete things to check for that separate compliant operators from opportunistic ones. Section 134.71(8)(b) expressly prohibits pawnbrokers, secondhand article dealers, and secondhand jewelry dealers from engaging in the purchase, receipt, or exchange of any secondhand article or secondhand jewelry from a minor, subject to narrow exceptions. Section 134.71(5)(c) tracks felony and specified misdemeanor history in licensing applications, so a licensed Wisconsin dealer has been through law enforcement review. The scam patterns to watch for are the ones that exist outside this structure: temporary buyers operating from hotel conference rooms or itinerant events who are not holding a municipal secondhand jewelry dealer license for that location; operators who take an estate lot at melt without asking for identification, offering a written quote, or documenting the transaction; and mail-in gold-buying operations that mail a check well below any reasonable market value and rely on the seller not knowing what the material was actually worth. The Wisconsin Department of Agriculture, Trade and Consumer Protection maintains resources for buyers and sellers who suspect they have been targeted by any of these.",
    displayOrder: [
      "intro",
      "salesTax",
      "whatToVerify",
      "buyingTips",
      "commonScams",
    ],
    sources: [
      {
        label: "Wis. Stat. § 134.71(5) — Pawnbroker and secondhand dealer license applications",
        url: "https://docs.legis.wisconsin.gov/document/statutes/134.71(5)",
      },
      {
        label: "Wis. Stat. § 134.71(8) — Holding periods and minor-purchase prohibition",
        url: "https://docs.legis.wisconsin.gov/document/statutes/134.71(8)",
      },
    ],
  },
};

const REQUIRED_SECTIONS: StateSection[] = [
  "intro",
  "buyingTips",
  "salesTax",
  "commonScams",
  "whatToVerify",
];

export function isStateContentIndexable(slug: string): boolean {
  const entry = stateContent[slug];
  if (!entry) return false;

  let wordCount = 0;
  for (const section of REQUIRED_SECTIONS) {
    const value = entry[section];
    if (!value || !value.trim()) return false;
    wordCount += value.trim().split(/\s+/).length;
  }

  return wordCount >= 400;
}
