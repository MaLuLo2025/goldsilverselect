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
      "Alabama's precious metals market is anchored in the Birmingham metro, where a handful of established coin and jewelry shops serve collectors and investors in the Tennessee Valley region. The state has no income tax on gold and silver sales, making it relatively favorable for bullion transactions. Estate gold and silver coins are common — decades of agricultural wealth in rural Alabama translated into family coin collections that still surface at estate sales today.",
    buyingTips:
      "Buyers in Alabama typically transact at local jewelers or pawn shops in larger cities like Huntsville and Mobile. For investment-grade bullion, online dealers shipping to Alabama offer the widest selection with insured delivery.",
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
      "Indiana has a significant coin collecting community centered in Indianapolis, with strong participation in regional coin shows throughout the state. The city of Fort Wayne hosts one of the better-attended annual coin shows in the Midwest. Indiana exempts investment-grade gold and silver bullion from state sales tax, which aligns with broader Midwestern precious metals buying norms. Older farmstead estates in central and southern Indiana regularly yield pre-1933 gold coins and Morgan silver dollars.",
    buyingTips:
      "Indianapolis and Fort Wayne both have established coin dealer communities. For large bullion purchases, national online dealers shipping to Indiana offer competitive premiums over spot with the benefit of no state sales tax on qualifying items.",
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
      "Kentucky's precious metals market is distributed across Louisville, Lexington, and the Bowling Green area. The state has a strong coin show circuit, and the Louisville Numismatic Club is one of the more active in the region. Kentucky charges sales tax on most precious metals transactions, which affects local retail pricing. The state's horse farm and bourbon industry wealth has historically translated into interest in gold as an alternative store of value.",
    buyingTips:
      "Louisville has the most active local coin and bullion market in Kentucky. For larger bullion purchases, online dealers shipping to Kentucky provide access to full inventory with competitive spot premiums.",
  },
  louisiana: {
    intro:
      "Louisiana has a distinctive precious metals culture shaped by New Orleans' history as a major port city and financial center in the 19th century. Antique gold jewelry, French colonial coins, and Civil War-era silver are common in Louisiana estate sales. New Orleans hosts a small but active network of coin dealers and estate jewelers, and the state exempts investment-grade precious metals from sales tax under Louisiana Revised Statutes.",
    buyingTips:
      "New Orleans' French Quarter and Magazine Street antique districts are worth exploring for estate gold and silver. For standard bullion products, national online dealers shipping to Louisiana offer consistent pricing and full selection.",
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
      "Ohio has one of the largest and most active precious metals markets in the Midwest, anchored by major cities including Columbus, Cleveland, and Cincinnati. The state is home to several national coin show events and a dense network of coin shops, bullion dealers, and estate jewelers. Ohio exempts investment-grade gold, silver, platinum, and palladium bullion from sales tax — a significant benefit for buyers. The American Numismatic Association's World's Fair of Money has been held in Cincinnati.",
    buyingTips:
      "Columbus, Cleveland, and Cincinnati all have strong local dealer communities. Ohio's sales tax exemption on qualifying bullion makes local and online purchases equally tax-advantaged. For collectors, Ohio's coin show calendar is one of the most active in the country.",
  },
  oregon: {
    intro:
      "Oregon exempts gold and silver bullion from state sales tax, and the state has a strong community of physical precious metals buyers in Portland, Eugene, and Bend. Portland's coin and bullion market is well-developed, with dealers serving both numismatic collectors and investment-oriented buyers. Oregon's proximity to major California refiners and dealers also means competitive sourcing options. The state's self-reliant outdoor culture includes meaningful precious metals interest as an alternative store of value.",
    buyingTips:
      "Portland has the most active precious metals market in Oregon, with multiple established coin shops and bullion dealers. Eugene and Bend have smaller but active markets. Online dealers shipping to Oregon offer competitive bullion pricing with no state sales tax on qualifying products.",
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
      "South Carolina's precious metals market is distributed across Columbia, Charleston, and Greenville, with Charleston's historic wealth contributing to a particularly active estate gold and antique silver market. The state exempts investment-grade bullion from sales tax, which benefits buyers statewide. South Carolina's coastal estate sale circuit frequently surfaces pre-1933 gold coins, silver flatware sets, and antique jewelry from families with roots in the state's planter and merchant class.",
    buyingTips:
      "Charleston and Columbia have the most established precious metals markets in South Carolina. Greenville's growing economy has increased dealer activity in the upstate region. Online dealers shipping to South Carolina offer full bullion selection with no sales tax on qualifying investment-grade items.",
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
      "Tennessee's precious metals market is strong in Nashville, Memphis, and Knoxville, with a well-developed network of coin shops, bullion dealers, and estate jewelers. The state exempts most investment-grade precious metals from sales tax, which is a meaningful benefit for buyers. Nashville's growing wealth concentration has increased demand for gold and silver investment products, and the city has attracted several new coin and bullion dealers in recent years.",
    buyingTips:
      "Nashville has the most active and competitive precious metals market in Tennessee. Memphis serves the western part of the state, and Knoxville covers East Tennessee well. Tennessee's sales tax exemption on qualifying bullion applies to both local and online purchases shipped to Tennessee addresses.",
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
      "Virginia's precious metals market is one of the largest on the East Coast, anchored by Northern Virginia's proximity to Washington, D.C. and the wealth concentrated in the D.C. metro region. Richmond and Virginia Beach also have active coin and bullion markets. Virginia exempts investment-grade precious metals from sales tax, and the state's high concentration of federal employees, defense contractors, and financial professionals creates sustained demand for gold and silver as portfolio diversifiers.",
    buyingTips:
      "Northern Virginia (Tysons Corner, Arlington, Falls Church) has the most competitive bullion dealer market in the state. Richmond and Virginia Beach are well-served for collector and investment demand. Virginia's sales tax exemption on qualifying bullion applies statewide.",
  },
  "west-virginia": {
    intro:
      "West Virginia's precious metals market is modest, with coin shops operating in Charleston and Huntington. The state's coal and natural resources history has driven wealth that occasionally surfaces in estate gold and silver collections. West Virginia charges sales tax on precious metals transactions, which affects local pricing. The state's proximity to Ohio — which has a much larger dealer community — means many West Virginia buyers cross the border for larger purchases.",
    buyingTips:
      "Charleston has the most established coin market in West Virginia. For larger bullion purchases, the Columbus and Cincinnati Ohio markets are accessible. Online dealers shipping to West Virginia provide the broadest selection.",
  },
  wisconsin: {
    intro:
      "Wisconsin has an active coin collecting community anchored in Milwaukee and Madison, with coin shows held regularly throughout the state. The Wisconsin State Numismatic Society is one of the older numismatic clubs in the Midwest. Wisconsin charges sales tax on precious metals, which affects local transaction costs. Milwaukee's German and Scandinavian heritage communities historically valued tangible savings, and old-family estate collections in Wisconsin frequently include Morgan silver dollars and early U.S. gold coins.",
    buyingTips:
      "Milwaukee has the most active coin and bullion market in Wisconsin, with multiple dealers competing for collector and investor business. Madison serves the south-central market. For investment bullion, online dealers shipping to Wisconsin offer competitive pricing, with the sales tax situation varying by dealer.",
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
