import Image from "next/image";
import Link from "next/link";
import PlantCard from "@/components/PlantCard";
import ZipSearch from "@/components/ZipSearch";
import { getFeaturedPlants } from "@/data/plants";

export default function HomePage() {
  const featured = getFeaturedPlants();

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-end overflow-hidden">
        <Image
          src="/hero.png"
          alt="Mountain gorilla scaling a monkey puzzle tree"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark gradient overlay — bottom heavy for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/10" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-2xl">
            <p
              className="text-acid text-xs tracking-[0.3em] mb-4"
              style={{ fontFamily: "var(--font-display, Oswald)", textTransform: "uppercase" }}
            >
              Online — Ships Nationwide
            </p>
            <h1
              className="text-text text-5xl sm:text-7xl leading-none mb-6"
              style={{ fontFamily: "var(--font-display, Oswald)", textTransform: "uppercase" }}
            >
              Forgotten
              <br />
              <span className="text-acid">Classics.</span>
              <br />
              Dangerous
              <br />
              Trees.
            </h1>
            <p className="text-muted text-lg leading-relaxed mb-8 max-w-lg">
              Unusual. Forgotten. Climate-matched. The trees your nursery
              doesn&apos;t carry because they require actual knowledge to sell.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/plants"
                className="inline-block px-8 py-4 bg-acid text-background text-sm tracking-widest font-semibold hover:bg-acid-dim transition-colors"
                style={{ fontFamily: "var(--font-display, Oswald)", textTransform: "uppercase" }}
              >
                Explore the Catalog
              </Link>
              <Link
                href="/climate"
                className="inline-block px-8 py-4 border border-border text-muted text-sm tracking-widest hover:border-acid hover:text-acid transition-colors"
                style={{ fontFamily: "var(--font-display, Oswald)", textTransform: "uppercase" }}
              >
                Find Your Climate Zone
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ZIP SEARCH */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 mb-20">
        <div className="max-w-xl">
          <h2
            className="text-text text-sm tracking-[0.2em] mb-3 text-muted"
            style={{ fontFamily: "var(--font-display, Oswald)", textTransform: "uppercase" }}
          >
            What grows at your address?
          </h2>
          <ZipSearch />
        </div>
      </section>

      {/* FEATURED PLANTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="flex items-end justify-between mb-8">
          <h2
            className="text-text text-3xl"
            style={{ fontFamily: "var(--font-display, Oswald)", textTransform: "uppercase" }}
          >
            Trees Worth Knowing
          </h2>
          <Link
            href="/plants"
            className="text-acid text-xs tracking-widest hover:underline"
            style={{ fontFamily: "var(--font-display, Oswald)", textTransform: "uppercase" }}
          >
            Full Catalog →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {featured.map((plant) => (
            <PlantCard key={plant.slug} plant={plant} />
          ))}
        </div>
      </section>

      {/* PHILOSOPHY STATEMENT */}
      <section className="bg-surface border-y border-border py-20 mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2
              className="text-acid text-4xl sm:text-5xl mb-6"
              style={{ fontFamily: "var(--font-display, Oswald)", textTransform: "uppercase" }}
            >
              We Don&apos;t Care About Native Plants.
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-4">
              Unless they&apos;re known invasives — which we won&apos;t sell — we don&apos;t organize our
              inventory around whether a tree came from this continent. We organize it around
              whether it will thrive in your climate and whether it&apos;s worth growing.
            </p>
            <p className="text-muted text-lg leading-relaxed mb-4">
              The monkey puzzle tree is from Chile. The baobab is from Africa. The low-chill
              cherry was bred in California. They all grow in Texas. That&apos;s what matters.
            </p>
            <p className="text-muted text-lg leading-relaxed mb-8">
              The nursery industry forgot most of the interesting trees. We&apos;re bringing them back.
            </p>
            <Link
              href="/about"
              className="inline-block border border-acid text-acid px-6 py-3 text-xs tracking-widest hover:bg-acid hover:text-background transition-colors"
              style={{ fontFamily: "var(--font-display, Oswald)", textTransform: "uppercase" }}
            >
              Our Philosophy →
            </Link>
          </div>
        </div>
      </section>

      {/* CLIMATE ZONE TEASER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-acid text-xs tracking-[0.3em] mb-3" style={{ fontFamily: "var(--font-display, Oswald)", textTransform: "uppercase" }}>
              Climate Intelligence
            </p>
            <h2
              className="text-text text-3xl sm:text-4xl mb-4"
              style={{ fontFamily: "var(--font-display, Oswald)", textTransform: "uppercase" }}
            >
              Your Zone Is More Than a Number
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              USDA hardiness zones tell you what survives winter. Köppen climate
              classifications tell you what <em>thrives</em>. Microclimate tells you
              what your specific yard can do that your zip code can&apos;t.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              We explain all three — in plain language — so you can buy with confidence
              instead of guessing.
            </p>
            <Link
              href="/climate"
              className="inline-block px-6 py-3 bg-moss text-text text-xs tracking-widest hover:bg-moss-light transition-colors"
              style={{ fontFamily: "var(--font-display, Oswald)", textTransform: "uppercase" }}
            >
              Learn Your Climate →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { code: "Cfa", label: "Humid Subtropical", region: "Hot humid summers, mild winters" },
              { code: "BSh", label: "Hot Semi-Arid", region: "Hot dry summers, low rainfall" },
              { code: "BSk", label: "Cold Steppe", region: "Hot summers, cold winters" },
              { code: "BWk", label: "Cold Desert", region: "Extreme heat, hard freezes" },
            ].map((z) => (
              <Link
                key={z.code}
                href="/climate"
                className="bg-surface border border-border p-4 rounded-sm hover:border-acid transition-colors group"
              >
                <div className="text-acid text-2xl mb-1 group-hover:scale-105 transition-transform inline-block"
                  style={{ fontFamily: "var(--font-display, Oswald)" }}>
                  {z.code}
                </div>
                <div className="text-text text-xs tracking-wide mb-1" style={{ fontFamily: "var(--font-display, Oswald)", textTransform: "uppercase" }}>
                  {z.label}
                </div>
                <div className="text-muted text-xs">{z.region}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
