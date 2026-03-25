import { City } from "./types";
import { dealers } from "./dealers";

// Dynamically generate city list from dealer data —
// every city that has at least one dealer is included automatically.
const cityMap = new Map<string, City>();
for (const d of dealers) {
  if (!d.city || !d.citySlug || !d.state || !d.stateSlug) continue;
  const key = `${d.citySlug}|${d.stateSlug}`;
  if (!cityMap.has(key)) {
    cityMap.set(key, {
      name: d.city,
      slug: d.citySlug,
      state: d.state,
      stateSlug: d.stateSlug,
    });
  }
}

export const cities: City[] = Array.from(cityMap.values()).sort((a, b) =>
  a.state === b.state ? a.name.localeCompare(b.name) : a.state.localeCompare(b.state)
);

export function getCitiesByState(stateSlug: string): City[] {
  return cities.filter((c) => c.stateSlug === stateSlug);
}

export function getCityBySlug(stateSlug: string, citySlug: string): City | undefined {
  return cities.find((c) => c.stateSlug === stateSlug && c.slug === citySlug);
}
