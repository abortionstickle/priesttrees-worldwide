import Link from "next/link";
import type { Plant } from "@/data/plants";

function ZoneBadge({ min, max }: { min: number; max: number }) {
  const fmt = (n: number) => {
    const base = Math.floor(n);
    const half = n % 1 !== 0;
    return `${base}${half ? "b" : ""}`;
  };
  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs rounded border border-moss text-moss-light bg-surface-2">
      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 2a8 8 0 100 16A8 8 0 0010 2zm0 2a6 6 0 110 12A6 6 0 0110 4z" />
      </svg>
      Zone {fmt(min)}–{fmt(max)}
    </span>
  );
}

export default function PlantCard({ plant }: { plant: Plant }) {
  return (
    <Link href={`/plants/${plant.slug}`} className="group block">
      <div className="bg-surface border border-border rounded-sm overflow-hidden transition-all duration-200 hover:border-acid hover:shadow-lg hover:shadow-acid/5">
        {/* Image placeholder */}
        <div className="aspect-[4/3] bg-surface-2 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-subtle text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-display, Oswald)" }}>
              {plant.scientificName}
            </span>
          </div>
          {plant.category === "pepper" && (
            <div className="absolute top-2 right-2 px-2 py-0.5 bg-earth text-text text-xs tracking-widest"
              style={{ fontFamily: "var(--font-display, Oswald)" }}>
              PARTNER
            </div>
          )}
          {plant.featured && (
            <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-acid" />
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3
              className="text-text text-lg leading-tight group-hover:text-acid transition-colors"
              style={{ fontFamily: "var(--font-display, Oswald)", textTransform: "uppercase" }}
            >
              {plant.name}
            </h3>
          </div>
          <p className="text-muted text-xs italic mb-3">{plant.scientificName}</p>
          <p className="text-muted text-sm leading-relaxed mb-4 line-clamp-2">{plant.tagline}</p>

          <div className="flex items-center gap-2 flex-wrap">
            <ZoneBadge min={plant.zoneMin} max={plant.zoneMax} />
            <span className="inline-flex items-center px-2 py-0.5 text-xs rounded border border-border text-muted">
              {plant.koppenLabel}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
