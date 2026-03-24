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
  // Maryland (DC metro)
  { name: "Rockville", slug: "rockville", state: "Maryland", stateSlug: "maryland" },
  { name: "Frederick", slug: "frederick", state: "Maryland", stateSlug: "maryland" },
  { name: "Gaithersburg", slug: "gaithersburg", state: "Maryland", stateSlug: "maryland" },
  { name: "Silver Spring", slug: "silver-spring", state: "Maryland", stateSlug: "maryland" },
  // Washington DC
  { name: "Washington", slug: "washington", state: "District of Columbia", stateSlug: "district-of-columbia" },
  // Pennsylvania
  { name: "Philadelphia", slug: "philadelphia", state: "Pennsylvania", stateSlug: "pennsylvania" },
  { name: "Broomall", slug: "broomall", state: "Pennsylvania", stateSlug: "pennsylvania" },
  { name: "Wayne", slug: "wayne", state: "Pennsylvania", stateSlug: "pennsylvania" },
  { name: "Ardmore", slug: "ardmore", state: "Pennsylvania", stateSlug: "pennsylvania" },
  // Georgia
  { name: "Atlanta", slug: "atlanta", state: "Georgia", stateSlug: "georgia" },
  { name: "Johns Creek", slug: "johns-creek", state: "Georgia", stateSlug: "georgia" },
  // Florida
  { name: "Miami", slug: "miami", state: "Florida", stateSlug: "florida" },
  { name: "Aventura", slug: "aventura", state: "Florida", stateSlug: "florida" },
  { name: "Miami Beach", slug: "miami-beach", state: "Florida", stateSlug: "florida" },
  { name: "Pinecrest", slug: "pinecrest", state: "Florida", stateSlug: "florida" },
  { name: "Coral Gables", slug: "coral-gables", state: "Florida", stateSlug: "florida" },
  // Arizona
  { name: "Phoenix", slug: "phoenix", state: "Arizona", stateSlug: "arizona" },
  { name: "Scottsdale", slug: "scottsdale", state: "Arizona", stateSlug: "arizona" },
  // Massachusetts
  { name: "Boston", slug: "boston", state: "Massachusetts", stateSlug: "massachusetts" },
  { name: "Burlington", slug: "burlington", state: "Massachusetts", stateSlug: "massachusetts" },
  { name: "Wakefield", slug: "wakefield", state: "Massachusetts", stateSlug: "massachusetts" },
  { name: "Concord", slug: "concord", state: "Massachusetts", stateSlug: "massachusetts" },
];

export function getCitiesByState(stateSlug: string): City[] {
  return cities.filter((c) => c.stateSlug === stateSlug);
}

export function getCityBySlug(stateSlug: string, citySlug: string): City | undefined {
  return cities.find((c) => c.stateSlug === stateSlug && c.slug === citySlug);
}
