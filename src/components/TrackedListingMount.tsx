"use client";

import { useEffect, useRef } from "react";
import { trackCategorySelected } from "@/lib/analytics";

/**
 * Fires a `category_selected` event with the listing-page result count on
 * first paint. Mounted invisibly inside Server Component listing pages so
 * we can attribute "user landed on this category in this city and saw N
 * providers" — including the empty state (resultCount: 0), which is the
 * single most useful signal for vendor recruitment.
 */
export default function TrackedListingMount({
  category,
  city = null,
  state = null,
  resultCount,
}: {
  category: string;
  city?: string | null;
  state?: string | null;
  resultCount: number;
}) {
  const fired = useRef(false);

  useEffect(() => {
    if (fired.current) return;
    fired.current = true;
    trackCategorySelected({ category, city, state, resultCount });
  }, [category, city, state, resultCount]);

  return null;
}
