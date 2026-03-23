import { MetalPrice, Market } from "./types";

// These are placeholder prices — in production, these would come from a live API
export const metalPrices: MetalPrice[] = [
  { metal: "gold", label: "GOLD", price: 5127.4, change: 42.15, pct: 0.83 },
  { metal: "silver", label: "SILVER", price: 58.92, change: 1.04, pct: 1.8 },
  {
    metal: "platinum",
    label: "PLATINUM",
    price: 1089.5,
    change: -8.2,
    pct: -0.75,
  },
  {
    metal: "palladium",
    label: "PALLADIUM",
    price: 987.3,
    change: 5.6,
    pct: 0.57,
  },
];

export const markets: Market[] = [
  {
    name: "Hong Kong (HKEX)",
    shortName: "Hong Kong",
    opens: "9:00 PM",
    closes: "4:00 AM",
    status: "closed",
  },
  {
    name: "London (LBMA)",
    shortName: "London",
    opens: "3:00 AM",
    closes: "12:00 PM",
    status: "closed",
  },
  {
    name: "Chicago (COMEX)",
    shortName: "Chicago",
    opens: "8:20 AM",
    closes: "1:30 PM",
    status: "open",
  },
  {
    name: "Shanghai (SGE)",
    shortName: "Shanghai",
    opens: "9:00 PM",
    closes: "2:30 AM",
    status: "closed",
  },
];

export function getGoldSilverRatio(): string {
  const gold = metalPrices.find((m) => m.metal === "gold");
  const silver = metalPrices.find((m) => m.metal === "silver");
  if (gold && silver) {
    return (gold.price / silver.price).toFixed(1);
  }
  return "—";
}
