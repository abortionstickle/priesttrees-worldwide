import Link from "next/link";
import GorillaSVG from "@/components/GorillaSVG";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <GorillaSVG className="h-24 w-24 text-acid mx-auto mb-8 opacity-40" />
        <h1
          className="text-text text-6xl sm:text-8xl mb-4"
          style={{ fontFamily: "var(--font-display, Oswald)", textTransform: "uppercase" }}
        >
          404
        </h1>
        <p
          className="text-acid text-xl mb-4"
          style={{ fontFamily: "var(--font-display, Oswald)", textTransform: "uppercase" }}
        >
          Tree Not Found
        </p>
        <p className="text-muted leading-relaxed mb-8">
          This page doesn&apos;t exist. The gorilla climbed past it.
          Head back to the catalog and find something worth growing.
        </p>
        <Link
          href="/plants"
          className="inline-block px-8 py-4 bg-acid text-background text-sm tracking-widest font-semibold hover:bg-acid-dim transition-colors"
          style={{ fontFamily: "var(--font-display, Oswald)", textTransform: "uppercase" }}
        >
          Back to the Catalog
        </Link>
      </div>
    </div>
  );
}
