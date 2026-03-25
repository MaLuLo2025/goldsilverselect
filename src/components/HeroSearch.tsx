"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { states } from "@/lib/states";
import { getCitiesByState } from "@/lib/cities";
import { categories } from "@/lib/categories";
import { iconMap } from "./Icons";

// Verticals that don't require a location selection
const LOCATION_INDEPENDENT = new Set(["online-coin-bullion", "gold-silver-ira"]);

// Map verticals to their destination pages
function getCategoryUrl(
  vertical: string,
  slug: string,
  stateSlug: string,
  citySlug: string
): string {
  if (vertical === "online-coin-bullion") return "/online-dealers";
  if (vertical === "gold-silver-ira") return "/gold-silver-iras";
  if (vertical === "recycling") {
    return citySlug
      ? `/dealers/${stateSlug}/${citySlug}` // city page groups by vertical
      : stateSlug
      ? `/dealers/${stateSlug}`
      : "/recycling";
  }
  if (vertical === "jewelry") {
    return citySlug
      ? `/dealers/${stateSlug}/${citySlug}`
      : stateSlug
      ? `/dealers/${stateSlug}`
      : "/jewelry";
  }
  // local-coin-bullion
  if (citySlug) return `/dealers/${stateSlug}/${citySlug}`;
  if (stateSlug) return `/dealers/${stateSlug}`;
  return "/dealers";
}

export default function HeroSearch() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Restore state from URL params
  const [selectedState, setSelectedState] = useState(
    searchParams.get("state") || ""
  );
  const [selectedCity, setSelectedCity] = useState(
    searchParams.get("city") || ""
  );

  const citiesForState = selectedState ? getCitiesByState(selectedState) : [];

  // Update URL params when selection changes (preserves back button)
  useEffect(() => {
    const params = new URLSearchParams();
    if (selectedState) params.set("state", selectedState);
    if (selectedCity) params.set("city", selectedCity);
    const qs = params.toString();
    const newUrl = qs ? `/?${qs}` : "/";
    window.history.replaceState(null, "", newUrl);
  }, [selectedState, selectedCity]);

  function handleCategoryClick(cat: (typeof categories)[number]) {
    const needsLocation = !LOCATION_INDEPENDENT.has(cat.vertical);
    if (needsLocation && !selectedState) {
      // Flash the state dropdown to prompt selection
      const sel = document.getElementById("hero-state-select");
      if (sel) {
        sel.focus();
        sel.style.borderColor = "#C5A44E";
        setTimeout(() => (sel.style.borderColor = ""), 1500);
      }
      return;
    }
    const url = getCategoryUrl(
      cat.vertical,
      cat.slug,
      selectedState,
      selectedCity
    );
    router.push(url);
  }

  return (
    <div>
      {/* Dropdowns */}
      <div className="flex gap-3 justify-center flex-wrap mb-8">
        <select
          id="hero-state-select"
          className="gs-select"
          value={selectedState}
          onChange={(e) => {
            setSelectedState(e.target.value);
            setSelectedCity("");
          }}
        >
          <option value="">Select State</option>
          {states.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.name}
            </option>
          ))}
        </select>
        <select
          className="gs-select"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          disabled={!selectedState}
          style={{ opacity: selectedState ? 1 : 0.5 }}
        >
          <option value="">Select City</option>
          {citiesForState.map((c) => (
            <option key={c.slug} value={c.slug}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      {/* Category cards */}
      <div className="grid grid-cols-3 gap-4 max-w-[820px] mx-auto">
        {categories.slice(0, 3).map((cat) => {
          const Icon = iconMap[cat.icon];
          const isLocationIndependent = LOCATION_INDEPENDENT.has(cat.vertical);
          const hasLocation = !!selectedState;
          const clickable = isLocationIndependent || hasLocation;

          return (
            <button
              key={cat.slug}
              onClick={() => handleCategoryClick(cat)}
              className="category-card text-left"
              style={{
                opacity: clickable ? 1 : 0.6,
                cursor: clickable ? "pointer" : "default",
              }}
            >
              <div className="mb-3">{Icon && <Icon />}</div>
              <h3 className="font-serif text-[17px] font-semibold text-gold mb-1.5">
                {cat.title}
              </h3>
              <p
                className="font-sans text-[12.5px] leading-relaxed"
                style={{ color: "#777" }}
              >
                {cat.description}
              </p>
            </button>
          );
        })}
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4 max-w-[540px] mx-auto">
        {categories.slice(3).map((cat) => {
          const Icon = iconMap[cat.icon];
          const hasLocation = !!selectedState;

          return (
            <button
              key={cat.slug}
              onClick={() => handleCategoryClick(cat)}
              className="category-card text-left"
              style={{
                opacity: hasLocation ? 1 : 0.6,
                cursor: hasLocation ? "pointer" : "default",
              }}
            >
              <div className="mb-3">{Icon && <Icon />}</div>
              <h3 className="font-serif text-[17px] font-semibold text-gold mb-1.5">
                {cat.title}
              </h3>
              <p
                className="font-sans text-[12.5px] leading-relaxed"
                style={{ color: "#777" }}
              >
                {cat.description}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
