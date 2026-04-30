import type { Metadata } from "next";
import PlantCard from "@/components/PlantCard";
import ZipSearch from "@/components/ZipSearch";
import { plants, getPlantsByZone } from "@/data/plants";
import { parseZoneNumber } from "@/data/zones";

export const metadata: Metadata = {
  title: "Plant Catalog",
  description:
    "Rare and unusual trees matched to your USDA hardiness zone. Monkey puzzle, baobab, desert willow, rare oaks, low-chill fruit trees, and more.",
};

interface Props {
  searchParams: Promise<{ zone?: string }>;
}

export default async function PlantsPage({ searchParams }: Props) {
  const params = await searchParams;
  const zoneStr = params.zone;
  const zoneNum = zoneStr ? parseZoneNumber(zoneStr) : null;
  const displayPlants = zoneNum !== null ? getPlantsByZone(zoneNum) : plants;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="mb-12">
        <p
          className="text-acid text-xs tracking-[0.3em] mb-3"
          style={{ fontFamily: "var(--font-display, Oswald)", textTransform: "uppercase" }}
        >
          Priest Trees Worldwide
        </p>
        <h1
          className="text-text text-5xl sm:text-6xl mb-4"
          style={{ fontFamily: "var(--font-display, Oswald)", textTransform: "uppercase" }}
        >
          The Catalog
        </h1>
        <p className="text-muted text-lg max-w-xl">
          {zoneNum !== null
            ? `Showing trees compatible with Zone ${zoneStr?.toUpperCase()}. ${displayPlants.length} match${displayPlants.length === 1 ? "" : "es"}.`
            : `${plants.length} trees. Non-native, forgotten classics, and things your nursery refuses to stock.`}
        </p>
      </div>

      {/* Zone filter + search */}
      <div className="mb-10 flex flex-col sm:flex-row gap-4 items-start">
        <div className="w-full sm:w-96">
          <ZipSearch inline={false} />
        </div>
        {zoneNum !== null && (
          <div className="flex items-center gap-3 mt-2 sm:mt-6">
            <span className="text-muted text-sm">
              Filtered to Zone{" "}
              <span className="text-acid font-semibold">{zoneStr?.toUpperCase()}</span>
            </span>
            <a
              href="/plants"
              className="text-xs text-muted hover:text-acid transition-colors border border-border px-3 py-1"
              style={{ fontFamily: "var(--font-display, Oswald)", textTransform: "uppercase", letterSpacing: "0.1em" }}
            >
              Clear ×
            </a>
          </div>
        )}
      </div>

      {/* Grid */}
      {displayPlants.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-muted text-lg mb-2">No trees match Zone {zoneStr?.toUpperCase()}.</p>
          <p className="text-subtle text-sm">Try a different zone or browse the full catalog.</p>
          <a
            href="/plants"
            className="inline-block mt-6 px-6 py-3 border border-acid text-acid text-xs tracking-widest hover:bg-acid hover:text-background transition-colors"
            style={{ fontFamily: "var(--font-display, Oswald)", textTransform: "uppercase" }}
          >
            Full Catalog
          </a>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {displayPlants.map((plant) => (
            <PlantCard key={plant.slug} plant={plant} />
          ))}
        </div>
      )}
    </div>
  );
}
