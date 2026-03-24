"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { states } from "@/lib/states";
import { getCitiesByState } from "@/lib/cities";

export default function HeroSearch() {
  const router = useRouter();
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const citiesForState = selectedState ? getCitiesByState(selectedState) : [];

  function handleFind() {
    if (!selectedState) return;
    if (selectedCity) {
      router.push(`/dealers/${selectedState}/${selectedCity}`);
    } else {
      router.push(`/dealers/${selectedState}`);
    }
  }

  return (
    <div className="flex gap-3 justify-center flex-wrap">
      <select
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
      <button className="btn-gold" onClick={handleFind}>
        Find Dealers
      </button>
    </div>
  );
}
