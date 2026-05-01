"use client";

import { useState, useMemo } from "react";
import type { Plant } from "@/data/plants";
import PlantCard from "./PlantCard";

const CONTINENTS: { value: Plant["continent"] | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "texas", label: "Texas" },
  { value: "americas", label: "Americas" },
  { value: "europe", label: "Europe" },
  { value: "asia", label: "Asia" },
  { value: "africa", label: "Africa" },
  { value: "australia", label: "Australia" },
];

const CATEGORIES: { value: Plant["category"] | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "specimen", label: "Specimen" },
  { value: "tropical", label: "Tropical" },
  { value: "fruit", label: "Fruit" },
  { value: "oak", label: "Oak" },
  { value: "conifer", label: "Conifer" },
  { value: "pepper", label: "Pepper" },
];

function FilterChips<T extends string>({
  options,
  active,
  onSelect,
}: {
  options: { value: T; label: string }[];
  active: T;
  onSelect: (v: T) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => (
        <button
          key={o.value}
          onClick={() => onSelect(o.value)}
          className={`px-3 py-1 text-xs tracking-widest border transition-colors ${
            active === o.value
              ? "border-acid text-acid bg-acid/10"
              : "border-border text-muted hover:border-acid/50 hover:text-text"
          }`}
          style={{ fontFamily: "var(--font-display, Oswald)", textTransform: "uppercase" }}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

export default function PlantCatalog({ plants }: { plants: Plant[] }) {
  const [continent, setContinent] = useState<Plant["continent"] | "all">("all");
  const [category, setCategory] = useState<Plant["category"] | "all">("all");

  const filtered = useMemo(() => {
    return plants.filter((p) => {
      if (continent !== "all" && p.continent !== continent) return false;
      if (category !== "all" && p.category !== category) return false;
      return true;
    });
  }, [plants, continent, category]);

  return (
    <div>
      <div className="mb-6 flex flex-col gap-3">
        <FilterChips options={CONTINENTS} active={continent} onSelect={setContinent} />
        <FilterChips options={CATEGORIES} active={category} onSelect={setCategory} />
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-muted text-lg mb-2">No trees match that filter.</p>
          <button
            onClick={() => { setContinent("all"); setCategory("all"); }}
            className="inline-block mt-4 px-6 py-3 border border-acid text-acid text-xs tracking-widest hover:bg-acid hover:text-background transition-colors"
            style={{ fontFamily: "var(--font-display, Oswald)", textTransform: "uppercase" }}
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((plant) => (
            <PlantCard key={plant.slug} plant={plant} />
          ))}
        </div>
      )}
    </div>
  );
}
