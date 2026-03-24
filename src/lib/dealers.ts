import { Dealer } from "./types";

export const dealers: Dealer[] = [
  // === AUSTIN LOCAL COIN & BULLION ===
  {
    slug: "austin-gold-exchange",
    name: "Austin Gold Exchange",
    vertical: "local-coin-bullion",
    description:
      "Buys and sells gold, silver, and platinum coins and bars. Offers competitive pricing on American Eagles, Canadian Maples, and generic rounds. Walk-in appraisals available.",
    address: "5501 N Lamar Blvd, Austin, TX 78751",
    city: "Austin",
    citySlug: "austin",
    state: "Texas",
    stateSlug: "texas",
    phone: "(512) 555-0101",
    website: "https://example.com",
    isVerified: false,
  },
  {
    slug: "lone-star-coin-and-bullion",
    name: "Lone Star Coin & Bullion",
    vertical: "local-coin-bullion",
    description:
      "Full-service coin dealer since 2008. Specializes in U.S. Mint products, junk silver, and 1oz gold bars. Member of the American Numismatic Association.",
    address: "2300 S Congress Ave, Austin, TX 78704",
    city: "Austin",
    citySlug: "austin",
    state: "Texas",
    stateSlug: "texas",
    phone: "(512) 555-0102",
    isVerified: false,
  },
  {
    slug: "capital-city-precious-metals",
    name: "Capital City Precious Metals",
    vertical: "local-coin-bullion",
    description:
      "Retail precious metals dealer offering gold and silver coins, bars, and rounds. Competitive buy-back program. Free verbal appraisals on estate collections.",
    address: "8900 Shoal Creek Blvd, Austin, TX 78757",
    city: "Austin",
    citySlug: "austin",
    state: "Texas",
    stateSlug: "texas",
    phone: "(512) 555-0103",
    isVerified: false,
  },
  // === AUSTIN JEWELRY ===
  {
    slug: "austin-estate-jewelers",
    name: "Austin Estate Jewelers",
    vertical: "jewelry",
    description:
      "Estate jewelry specialists offering antique and vintage gold and silver pieces. Custom design services. GIA-certified gemologist on staff.",
    address: "1200 W 6th St, Austin, TX 78703",
    city: "Austin",
    citySlug: "austin",
    state: "Texas",
    stateSlug: "texas",
    phone: "(512) 555-0201",
    isVerified: false,
  },
  {
    slug: "hill-country-custom-jewelers",
    name: "Hill Country Custom Jewelers",
    vertical: "jewelry",
    description:
      "Custom gold and platinum jewelry design. Repairs, resizing, and restoration of antique pieces. Uses recycled precious metals on request.",
    address: "4500 Guadalupe St, Austin, TX 78751",
    city: "Austin",
    citySlug: "austin",
    state: "Texas",
    stateSlug: "texas",
    phone: "(512) 555-0202",
    isVerified: false,
  },
  // === AUSTIN RECYCLING ===
  {
    slug: "austin-gold-buyers",
    name: "Austin Gold Buyers",
    vertical: "recycling",
    description:
      "Buys scrap gold, silver, and platinum. Transparent testing and weighing process. Payment based on current spot prices with published buy rates.",
    address: "3300 Bee Caves Rd, Austin, TX 78746",
    city: "Austin",
    citySlug: "austin",
    state: "Texas",
    stateSlug: "texas",
    phone: "(512) 555-0301",
    isVerified: false,
  },
  {
    slug: "central-texas-refining",
    name: "Central Texas Refining",
    vertical: "recycling",
    description:
      "Precious metals refiner accepting dental gold, jewelry scrap, industrial silver, and e-waste. Assay reports provided. Serves individual sellers and businesses.",
    address: "7700 N MoPac Expy, Austin, TX 78731",
    city: "Austin",
    citySlug: "austin",
    state: "Texas",
    stateSlug: "texas",
    phone: "(512) 555-0302",
    isVerified: false,
  },
  // === ONLINE DEALERS ===
  {
    slug: "jm-bullion",
    name: "JM Bullion",
    vertical: "online-coin-bullion",
    description:
      "Online precious metals dealer offering gold, silver, platinum, and palladium coins, bars, and rounds. Free shipping on orders over $199. IRA-eligible products available.",
    city: "Dallas",
    citySlug: "dallas",
    state: "Texas",
    stateSlug: "texas",
    website: "https://www.jmbullion.com",
    isVerified: false,
  },
  {
    slug: "money-metals-exchange",
    name: "Money Metals Exchange",
    vertical: "online-coin-bullion",
    description:
      "Online bullion dealer based in Eagle, Idaho. Monthly accumulation program available. Publishes buy and sell prices using live spot pricing. Offers storage and buyback programs.",
    city: "Eagle",
    citySlug: "eagle",
    state: "Idaho",
    stateSlug: "idaho",
    website: "https://www.moneymetals.com",
    isVerified: false,
  },
  {
    slug: "apmex",
    name: "APMEX",
    vertical: "online-coin-bullion",
    description:
      "One of the largest online precious metals retailers. Extensive inventory of coins, bars, and rounds in gold, silver, platinum, and palladium. IRA-eligible products. Based in Oklahoma City.",
    city: "Oklahoma City",
    citySlug: "oklahoma-city",
    state: "Oklahoma",
    stateSlug: "oklahoma",
    website: "https://www.apmex.com",
    isVerified: false,
  },
  {
    slug: "sd-bullion",
    name: "SD Bullion",
    vertical: "online-coin-bullion",
    description:
      "Online dealer offering competitive pricing on gold and silver bullion. Price-match guarantee. Free shipping on qualifying orders.",
    city: "Williston",
    citySlug: "williston",
    state: "North Dakota",
    stateSlug: "north-dakota",
    website: "https://www.sdbullion.com",
    isVerified: false,
  },
  // === GOLD & SILVER IRAs ===
  {
    slug: "goldco",
    name: "Goldco",
    vertical: "gold-silver-ira",
    description:
      "Self-directed precious metals IRA provider. Offers gold and silver IRA rollovers. A+ BBB rating. Minimum investment typically required.",
    city: "Woodland Hills",
    citySlug: "woodland-hills",
    state: "California",
    stateSlug: "california",
    isVerified: false,
  },
  {
    slug: "augusta-precious-metals",
    name: "Augusta Precious Metals",
    vertical: "gold-silver-ira",
    description:
      "Precious metals IRA company offering gold and silver retirement accounts. Provides educational resources and one-on-one web conferences. Transparent fee structure published online.",
    city: "Casper",
    citySlug: "casper",
    state: "Wyoming",
    stateSlug: "wyoming",
    isVerified: false,
  },
  {
    slug: "birch-gold-group",
    name: "Birch Gold Group",
    vertical: "gold-silver-ira",
    description:
      "Precious metals dealer offering gold and silver IRAs as well as direct purchases. In business since 2003. A+ BBB rating.",
    city: "Burbank",
    citySlug: "burbank",
    state: "California",
    stateSlug: "california",
    isVerified: false,
  },
  // === SAN ANTONIO LOCAL DEALERS ===
  {
    slug: "alamo-precious-metals",
    name: "Alamo Precious Metals",
    vertical: "local-coin-bullion",
    description:
      "San Antonio coin and bullion dealer. Buys and sells gold, silver, and platinum. Walk-in service with immediate payment on sells.",
    address: "4400 Fredericksburg Rd, San Antonio, TX 78201",
    city: "San Antonio",
    citySlug: "san-antonio",
    state: "Texas",
    stateSlug: "texas",
    phone: "(210) 555-0401",
    isVerified: false,
  },
  {
    slug: "south-texas-gold-and-silver",
    name: "South Texas Gold & Silver",
    vertical: "local-coin-bullion",
    description:
      "Full-service precious metals dealer in San Antonio. Specializes in American Eagles, generic bars, and pre-1965 junk silver. Estate collection buyers.",
    address: "12000 Huebner Rd, San Antonio, TX 78230",
    city: "San Antonio",
    citySlug: "san-antonio",
    state: "Texas",
    stateSlug: "texas",
    phone: "(210) 555-0402",
    isVerified: false,
  },
];

export function getDealersByCity(
  stateSlug: string,
  citySlug: string
): Dealer[] {
  return dealers.filter(
    (d) => d.stateSlug === stateSlug && d.citySlug === citySlug
  );
}

export function getDealersByState(stateSlug: string): Dealer[] {
  return dealers.filter((d) => d.stateSlug === stateSlug);
}

export function getDealersByVertical(vertical: string): Dealer[] {
  return dealers.filter((d) => d.vertical === vertical);
}

export function getDealerBySlug(
  stateSlug: string,
  citySlug: string,
  dealerSlug: string
): Dealer | undefined {
  return dealers.find(
    (d) =>
      d.stateSlug === stateSlug &&
      d.citySlug === citySlug &&
      d.slug === dealerSlug
  );
}

export function getOnlineDealers(): Dealer[] {
  return dealers.filter((d) => d.vertical === "online-coin-bullion");
}

export function getIRAProviders(): Dealer[] {
  return dealers.filter((d) => d.vertical === "gold-silver-ira");
}
