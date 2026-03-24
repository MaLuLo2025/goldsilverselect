import { City } from "./types";

export const cities: City[] = [
  // Texas
  { name: "Austin", slug: "austin", state: "Texas", stateSlug: "texas" },
  { name: "San Antonio", slug: "san-antonio", state: "Texas", stateSlug: "texas" },
  { name: "Houston", slug: "houston", state: "Texas", stateSlug: "texas" },
  { name: "Dallas", slug: "dallas", state: "Texas", stateSlug: "texas" },
  { name: "Fort Worth", slug: "fort-worth", state: "Texas", stateSlug: "texas" },
  { name: "El Paso", slug: "el-paso", state: "Texas", stateSlug: "texas" },
];

export function getCitiesByState(stateSlug: string): City[] {
  return cities.filter((c) => c.stateSlug === stateSlug);
}

export function getCityBySlug(stateSlug: string, citySlug: string): City | undefined {
  return cities.find((c) => c.stateSlug === stateSlug && c.slug === citySlug);
}
