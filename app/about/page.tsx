import type { Metadata } from "next";
import Link from "next/link";
import GorillaSVG from "@/components/GorillaSVG";

export const metadata: Metadata = {
  title: "About",
  description:
    "Our philosophy on non-native trees. We sell forgotten classics without apology.",
};

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="max-w-3xl mb-16">
        <div className="flex items-center gap-6 mb-8">
          <GorillaSVG className="h-20 w-20 text-acid shrink-0" />
          <div>
            <p
              className="text-acid text-xs tracking-[0.3em] mb-2"
              style={{ fontFamily: "var(--font-display, Oswald)", textTransform: "uppercase" }}
            >
              Who We Are
            </p>
            <h1
              className="text-text text-4xl sm:text-5xl"
              style={{ fontFamily: "var(--font-display, Oswald)", textTransform: "uppercase" }}
            >
              Priest Trees Worldwide
            </h1>
            <p className="text-muted text-sm mt-1">Texas-Based. Worldwide Perspective.</p>
          </div>
        </div>
        <p className="text-muted text-lg leading-relaxed">
          We sell trees that most nurseries don&apos;t carry, haven&apos;t heard of, or decided
          their customers wouldn&apos;t understand. We think that&apos;s a mistake.
        </p>
      </div>

      {/* Philosophy sections */}
      <div className="max-w-3xl space-y-16">
        {/* Non-native stance */}
        <section>
          <h2
            className="text-acid text-3xl sm:text-4xl mb-6"
            style={{ fontFamily: "var(--font-display, Oswald)", textTransform: "uppercase" }}
          >
            On Non-Native Plants
          </h2>
          <div className="space-y-4 text-muted leading-relaxed">
            <p>
              We don&apos;t organize our inventory around whether a tree came from this
              continent. We organize it around whether it will thrive in your climate,
              whether it&apos;s worth growing, and whether anyone is actually selling it.
            </p>
            <p>
              The monkey puzzle tree is from Chile and Argentina. It grows in Zone 7–10.
              It&apos;s one of the most structurally interesting trees on earth. It belongs
              in more Texas yards and it&apos;s almost impossible to find at retail. We
              carry it because the gap between &ldquo;available&rdquo; and &ldquo;worth growing&rdquo;
              is enormous.
            </p>
            <p>
              The baobab is from sub-Saharan Africa. It stores hundreds of gallons of water
              in its trunk. It lives for two thousand years. In Zone 10b and warmer, it
              thrives outdoors in Texas. We don&apos;t apologize for selling it.
            </p>
            <p className="text-text">
              The one exception: we don&apos;t sell plants that are documented invasive
              species in Texas or the surrounding region. Invasiveness is an ecological
              problem. Non-native status is not.
            </p>
          </div>
        </section>

        {/* Forgotten classics */}
        <section className="border-t border-border pt-12">
          <h2
            className="text-text text-3xl sm:text-4xl mb-6"
            style={{ fontFamily: "var(--font-display, Oswald)", textTransform: "uppercase" }}
          >
            What Are Forgotten Classics?
          </h2>
          <div className="space-y-4 text-muted leading-relaxed">
            <p>
              &ldquo;Forgotten classic&rdquo; means a tree that was once widely known, widely
              grown, or widely admired — and then the nursery industry forgot about it.
              Usually because it takes longer to grow, requires more specialist knowledge
              to sell, or simply fell out of fashion during the post-war suburban landscape
              boom when speed and conformity won.
            </p>
            <p>
              The Hercules club is a perfect example. It was a known medicinal tree in the
              American South for centuries. Dentists used it. Pioneers used it. Today, most
              Texans have never seen one. It grows from Southeast Texas to East Texas, it&apos;s
              wildlife habitat, and it looks like something from another era entirely. Nobody
              sells it. We do.
            </p>
            <p>
              Same story for the escarpment black cherry, the lacey oak, the desert willow
              in East Texas, and dozens of others. They exist. They thrive here. They&apos;ve
              been forgotten by commerce, not by nature.
            </p>
          </div>
        </section>

        {/* Target customer */}
        <section className="border-t border-border pt-12">
          <h2
            className="text-text text-3xl sm:text-4xl mb-6"
            style={{ fontFamily: "var(--font-display, Oswald)", textTransform: "uppercase" }}
          >
            Who This Is For
          </h2>
          <div className="space-y-4 text-muted leading-relaxed">
            <p>
              Homeowners who have planted the standard rotation — live oak, red maple, crepe
              myrtle — and want something with more history, more presence, more story.
            </p>
            <p>
              The kind of person who returns from a trip to Africa or South America or
              coastal Chile and spends the next two years trying to figure out if that tree
              they saw can grow in Texas.
            </p>
            <p>
              People who understand that a tree is a thirty-year investment and want that
              investment to be in something worth explaining to your grandchildren.
            </p>
          </div>
        </section>

        {/* Texas */}
        <section className="border-t border-border pt-12 bg-surface border border-border p-8">
          <h2
            className="text-acid text-2xl mb-4"
            style={{ fontFamily: "var(--font-display, Oswald)", textTransform: "uppercase" }}
          >
            Based in Texas
          </h2>
          <p className="text-muted leading-relaxed mb-4">
            Texas has five distinct climate zones, three Köppen classifications, and more
            variation in soil types, rainfall patterns, and temperature extremes than most
            countries. It&apos;s one of the most challenging and one of the most rewarding
            places on earth to grow unusual trees.
          </p>
          <p className="text-muted leading-relaxed">
            We ship within Texas and to states where phytosanitary regulations permit.
            Climate matching is built into every plant we sell — if it won&apos;t work in
            your zone, we&apos;ll tell you that before you buy.
          </p>
        </section>

        {/* CTA */}
        <div className="flex gap-4">
          <Link
            href="/plants"
            className="inline-block px-8 py-4 bg-acid text-background text-sm tracking-widest font-semibold hover:bg-acid-dim transition-colors"
            style={{ fontFamily: "var(--font-display, Oswald)", textTransform: "uppercase" }}
          >
            See the Catalog
          </Link>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 border border-border text-muted text-sm tracking-widest hover:border-acid hover:text-acid transition-colors"
            style={{ fontFamily: "var(--font-display, Oswald)", textTransform: "uppercase" }}
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
