"use client";

import { useState } from "react";
import { states } from "@/lib/states";

export default function HeroSearch() {
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

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
      </select>
      <button className="btn-gold">Find Dealers</button>
    </div>
  );
}
