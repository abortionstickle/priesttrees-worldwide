import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPlantBySlug, plants } from "@/data/plants";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return plants.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const plant = getPlantBySlug(slug);
  if (!plant) return {};
  return {
    title: plant.name,
    description: plant.tagline,
  };
}

function formatZone(n: number): string {
  const base = Math.floor(n);
  return `${base}${n % 1 !== 0 ? "b" : ""}`;
}

export default async function PlantDetailPage({ params }: Props) {
  const { slug } = await params;
  const plant = getPlantBySlug(slug);
  if (!plant) notFound();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Breadcrumb */}
      <nav className="mb-8 flex items-center gap-2 text-xs text-muted">
        <Link href="/plants" className="hover:text-acid transition-colors">Plants</Link>
        <span>/</span>
        <span className="text-text">{plant.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Image placeholder */}
        <div className="aspect-[4/3] bg-surface-2 border border-border flex items-center justify-center">
          <div className="text-center p-8">
            <p className="text-muted text-sm italic mb-2">{plant.scientificName}</p>
            <p className="text-subtle text-xs">Photography coming soon</p>
          </div>
        </div>

        {/* Details */}
        <div>
          {plant.category === "pepper" && (
            <div className="inline-block px-3 py-1 bg-earth text-text text-xs tracking-widest mb-4"
              style={{ fontFamily: "var(--font-display, Oswald)", textTransform: "uppercase" }}>
              Partner Product
            </div>
          )}

          <h1
            className="text-text text-4xl sm:text-5xl mb-2"
            style={{ fontFamily: "var(--font-display, Oswald)", textTransform: "uppercase" }}
          >
            {plant.name}
          </h1>
          <p className="text-muted italic text-sm mb-6">{plant.scientificName}</p>

          <p className="text-acid text-lg mb-6" style={{ fontFamily: "var(--font-display, Oswald)" }}>
            &ldquo;{plant.tagline}&rdquo;
          </p>

          <p className="text-muted leading-relaxed mb-8">{plant.description}</p>

          {/* Specs grid */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            <div className="bg-surface border border-border p-4">
              <p className="text-muted text-xs tracking-widest mb-1" style={{ fontFamily: "var(--font-display, Oswald)", textTransform: "uppercase" }}>
                USDA Zone
              </p>
              <p className="text-acid text-xl" style={{ fontFamily: "var(--font-display, Oswald)" }}>
                {formatZone(plant.zoneMin)}–{formatZone(plant.zoneMax)}
              </p>
            </div>
            <div className="bg-surface border border-border p-4">
              <p className="text-muted text-xs tracking-widest mb-1" style={{ fontFamily: "var(--font-display, Oswald)", textTransform: "uppercase" }}>
                Climate Type
              </p>
              <p className="text-text text-sm">{plant.koppenLabel}</p>
              <p className="text-subtle text-xs mt-1">{plant.koppen.join(", ")}</p>
            </div>
            {plant.mature && (
              <div className="bg-surface border border-border p-4">
                <p className="text-muted text-xs tracking-widest mb-1" style={{ fontFamily: "var(--font-display, Oswald)", textTransform: "uppercase" }}>
                  Mature Size
                </p>
                <p className="text-text text-sm">{plant.mature}</p>
              </div>
            )}
            <div className="bg-surface border border-border p-4">
              <p className="text-muted text-xs tracking-widest mb-1" style={{ fontFamily: "var(--font-display, Oswald)", textTransform: "uppercase" }}>
                Native Region
              </p>
              <p className="text-text text-sm">{plant.nativeRegion}</p>
            </div>
            {plant.chillHours && (
              <div className="bg-surface border border-border p-4 col-span-2">
                <p className="text-muted text-xs tracking-widest mb-1" style={{ fontFamily: "var(--font-display, Oswald)", textTransform: "uppercase" }}>
                  Chill Hours Required
                </p>
                <p className="text-text text-sm">{plant.chillHours}</p>
              </div>
            )}
          </div>

          {/* Partner link */}
          {plant.partnerUrl && (
            <div className="border border-earth/50 bg-surface p-4 mb-6">
              <p className="text-muted text-xs mb-2">Available through our partner:</p>
              <a
                href={plant.partnerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-acid hover:underline text-sm tracking-widest"
                style={{ fontFamily: "var(--font-display, Oswald)", textTransform: "uppercase" }}
              >
                {plant.partnerName} →
              </a>
            </div>
          )}

          {/* CTA */}
          <Link
            href="/contact"
            className="inline-block w-full sm:w-auto text-center px-8 py-4 bg-acid text-background text-sm tracking-widest font-semibold hover:bg-acid-dim transition-colors"
            style={{ fontFamily: "var(--font-display, Oswald)", textTransform: "uppercase" }}
          >
            Inquire About This Tree
          </Link>
        </div>
      </div>

      {/* Köppen detail */}
      <div className="border-t border-border pt-12">
        <h2
          className="text-text text-2xl mb-4"
          style={{ fontFamily: "var(--font-display, Oswald)", textTransform: "uppercase" }}
        >
          Climate Compatibility
        </h2>
        <p className="text-muted mb-4">
          This tree performs well in <strong className="text-text">{plant.koppenLabel}</strong> climates
          (Köppen codes: <span className="text-acid">{plant.koppen.join(", ")}</span>).
        </p>
        <Link
          href="/climate"
          className="text-acid text-xs tracking-widest hover:underline"
          style={{ fontFamily: "var(--font-display, Oswald)", textTransform: "uppercase" }}
        >
          Learn How Climate Zones Work →
        </Link>
      </div>
    </div>
  );
}
