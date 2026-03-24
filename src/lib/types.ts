export type Metal = "gold" | "silver" | "platinum" | "palladium";

export interface MetalPrice {
  metal: Metal;
  label: string;
  price: number;
  change: number;
  pct: number;
}

export interface Market {
  name: string;
  shortName: string;
  opens: string;
  closes: string;
  status: "open" | "closed";
}

export type DealerVertical =
  | "local-coin-bullion"
  | "online-coin-bullion"
  | "gold-silver-ira"
  | "recycling"
  | "jewelry";

export interface Dealer {
  slug: string;
  name: string;
  vertical: DealerVertical;
  description: string;
  address?: string;
  city: string;
  citySlug: string;
  state: string;
  stateSlug: string;
  phone?: string;
  website?: string;
  isVerified: boolean;
  bbbRating?: string;
  googleRating?: number;
  trustpilotRating?: number;
}

export interface City {
  name: string;
  slug: string;
  state: string;
  stateSlug: string;
}

export interface Category {
  title: string;
  slug: string;
  vertical: DealerVertical;
  description: string;
  icon: string;
}

export interface IntelligenceItem {
  type: "video" | "research";
  speaker: string;
  title: string;
  source: string;
  date: string;
  tag: "Macro" | "Institutional" | "Specialist";
  description: string;
  url?: string;
  timestamp?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  tag: string;
  tagColor: "gold" | "forest";
  excerpt: string;
  date: string;
  series?: string;
}
