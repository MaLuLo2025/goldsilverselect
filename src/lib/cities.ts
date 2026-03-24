import { City } from "./types";

export const cities: City[] = [
  // Texas
  { name: "Austin", slug: "austin", state: "Texas", stateSlug: "texas" },
  { name: "San Antonio", slug: "san-antonio", state: "Texas", stateSlug: "texas" },
  { name: "Houston", slug: "houston", state: "Texas", stateSlug: "texas" },
  { name: "Dallas", slug: "dallas", state: "Texas", stateSlug: "texas" },
  { name: "Fort Worth", slug: "fort-worth", state: "Texas", stateSlug: "texas" },
  { name: "El Paso", slug: "el-paso", state: "Texas", stateSlug: "texas" },
  { name: "Round Rock", slug: "round-rock", state: "Texas", stateSlug: "texas" },
  { name: "Pflugerville", slug: "pflugerville", state: "Texas", stateSlug: "texas" },
  // Colorado
  { name: "Denver", slug: "denver", state: "Colorado", stateSlug: "colorado" },
  { name: "Greenwood Village", slug: "greenwood-village", state: "Colorado", stateSlug: "colorado" },
  { name: "Aurora", slug: "aurora", state: "Colorado", stateSlug: "colorado" },
  { name: "Boulder", slug: "boulder", state: "Colorado", stateSlug: "colorado" },
  { name: "Centennial", slug: "centennial", state: "Colorado", stateSlug: "colorado" },
  // New York
  { name: "New York", slug: "new-york", state: "New York", stateSlug: "new-york" },
  { name: "Elmhurst", slug: "elmhurst", state: "New York", stateSlug: "new-york" },
  // California
  { name: "Los Angeles", slug: "los-angeles", state: "California", stateSlug: "california" },
  { name: "Alhambra", slug: "alhambra", state: "California", stateSlug: "california" },
  { name: "Torrance", slug: "torrance", state: "California", stateSlug: "california" },
  { name: "Tarzana", slug: "tarzana", state: "California", stateSlug: "california" },
  { name: "Santa Monica", slug: "santa-monica", state: "California", stateSlug: "california" },
  { name: "Studio City", slug: "studio-city", state: "California", stateSlug: "california" },
  { name: "Downey", slug: "downey", state: "California", stateSlug: "california" },
  // Illinois
  { name: "Chicago", slug: "chicago", state: "Illinois", stateSlug: "illinois" },
  { name: "Morton Grove", slug: "morton-grove", state: "Illinois", stateSlug: "illinois" },
  { name: "Skokie", slug: "skokie", state: "Illinois", stateSlug: "illinois" },
];

export function getCitiesByState(stateSlug: string): City[] {
  return cities.filter((c) => c.stateSlug === stateSlug);
}

export function getCityBySlug(stateSlug: string, citySlug: string): City | undefined {
  return cities.find((c) => c.stateSlug === stateSlug && c.slug === citySlug);
}
