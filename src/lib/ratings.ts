/** Month the Google ratings and review counts in dealers.ts were last checked. Update together with the data. */
export const RATINGS_AS_OF = "October 2026";

/** Label shown next to a Google rating, e.g. "4.8 (1,308 Google reviews, October 2026)". */
export function googleRatingLabel(rating: number, reviewCount: number): string {
  return `${rating} (${reviewCount.toLocaleString("en-US")} Google reviews, ${RATINGS_AS_OF})`;
}
