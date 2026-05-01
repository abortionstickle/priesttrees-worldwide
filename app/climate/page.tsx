import type { Metadata } from "next";
import Link from "next/link";
import ZipSearch from "@/components/ZipSearch";
import { koppenZones } from "@/data/zones";

export const metadata: Metadata = {
  title: "Climate Zones",
  description:
    "USDA hardiness zones, Köppen climate classifications, and microclimate — explained in plain language for plant buyers.",
};

export default function ClimatePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="max-w-3xl mb-16">
        <p
          className="text-acid text-xs tracking-[0.3em] mb-4"
          style={{ fontFamily: "var(--font-display, Oswald)", textTransform: "uppercase" }}
        >
          Climate Intelligence
        </p>
        <h1
          className="text-text text-5xl sm:text-6xl mb-6"
          style={{ fontFamily: "var(--font-display, Oswald)", textTransform: "uppercase" }}
        >
          Know Your Climate.
          <br />
          <span className="text-acid">Grow What Works.</span>
        </h1>
        <p className="text-muted text-lg leading-relaxed">
          Most nurseries sell you a plant and say &ldquo;good luck.&rdquo; We give you the three
          systems you actually need to understand what will thrive in your specific yard —
          not just survive your zip code.
        </p>
      </div>

      {/* Zip Search */}
      <div className="max-w-md mb-20">
        <h2
          className="text-text text-xl mb-4"
          style={{ fontFamily: "var(--font-display, Oswald)", textTransform: "uppercase" }}
        >
          Start With Your Zone
        </h2>
        <ZipSearch />
      </div>

      {/* SYSTEM 1: USDA */}
      <section className="mb-20 border-t border-border pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div
              className="text-acid text-6xl font-bold mb-4 leading-none"
              style={{ fontFamily: "var(--font-display, Oswald)" }}
            >
              01
            </div>
            <h2
              className="text-text text-3xl sm:text-4xl mb-4"
              style={{ fontFamily: "var(--font-display, Oswald)", textTransform: "uppercase" }}
            >
              USDA Hardiness Zones
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              The USDA divides the country into zones numbered 1 through 13 based on one
              thing: the average annual minimum winter temperature. Zone 1 is interior Alaska.
              Zone 13 is Death Valley.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              Each zone covers a 10°F range, split into &ldquo;a&rdquo; (colder half) and &ldquo;b&rdquo;
              (warmer half). Zone 8b means your average coldest night of the year falls
              between 15°F and 20°F. That&apos;s the number that determines whether a plant
              comes back after winter.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              <strong className="text-text">What it tells you:</strong> Will this plant survive
              winter here? Nothing more. Two yards in Zone 8b can face completely different
              summers, rainfall, and humidity. That&apos;s where Köppen comes in.
            </p>
          </div>
          <div className="space-y-3">
            <p className="text-muted text-xs tracking-widest mb-4" style={{ fontFamily: "var(--font-display, Oswald)", textTransform: "uppercase" }}>
              Zone Reference
            </p>
            {[
              { zone: "6", temp: "−10 to 0°F" },
              { zone: "7", temp: "0 to 10°F" },
              { zone: "8", temp: "10 to 20°F" },
              { zone: "9", temp: "20 to 30°F" },
              { zone: "10", temp: "30 to 40°F" },
              { zone: "11", temp: "40 to 50°F" },
              { zone: "12", temp: "50 to 60°F" },
              { zone: "13", temp: "60°F+" },
            ].map((r) => (
              <div key={r.zone} className="flex items-center justify-between bg-surface border border-border px-4 py-3">
                <span className="text-acid text-lg" style={{ fontFamily: "var(--font-display, Oswald)" }}>
                  Zone {r.zone}
                </span>
                <span className="text-subtle text-xs">{r.temp} avg minimum</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SYSTEM 2: KÖPPEN */}
      <section className="mb-20 border-t border-border pt-12">
        <div
          className="text-acid text-6xl font-bold mb-4 leading-none"
          style={{ fontFamily: "var(--font-display, Oswald)" }}
        >
          02
        </div>
        <h2
          className="text-text text-3xl sm:text-4xl mb-4"
          style={{ fontFamily: "var(--font-display, Oswald)", textTransform: "uppercase" }}
        >
          Köppen Climate Classification
        </h2>
        <div className="max-w-3xl mb-10">
          <p className="text-muted leading-relaxed mb-4">
            The Köppen system goes further than winter cold. It classifies your climate by
            the full seasonal pattern: temperature, rainfall, dry seasons, and humidity
            year-round. Developed by climatologist Wladimir Köppen in 1884, it&apos;s the
            standard language of plant scientists worldwide.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            <strong className="text-text">Why it matters for plant selection:</strong> A monkey
            puzzle tree is native to the Chilean Andes — a cool, wet, high-altitude climate
            (Cfb). Understanding that means understanding what it needs: good drainage, not
            too much summer heat, consistent moisture. Knowing your Köppen code tells you
            which plants from anywhere on Earth are likely to feel at home in your yard.
          </p>
          <p className="text-muted leading-relaxed">
            <strong className="text-text">The forgotten tree angle:</strong> The nursery
            industry stocks plants from their own climate. If your climate matches somewhere
            else in the world that&apos;s been largely ignored, you have access to a catalog
            nobody else is selling. That&apos;s our entire business model.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {koppenZones.map((zone) => (
            <div key={zone.code} className="bg-surface border border-border p-6 hover:border-acid transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <span
                  className="text-acid text-3xl leading-none"
                  style={{ fontFamily: "var(--font-display, Oswald)" }}
                >
                  {zone.code}
                </span>
                <div>
                  <h3
                    className="text-text text-lg"
                    style={{ fontFamily: "var(--font-display, Oswald)", textTransform: "uppercase" }}
                  >
                    {zone.label}
                  </h3>
                  <p className="text-muted text-sm">{zone.description}</p>
                </div>
              </div>
              <p className="text-text text-sm leading-relaxed">
                {zone.plantingImplications}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SYSTEM 3: MICROCLIMATE */}
      <section className="mb-20 border-t border-border pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div
              className="text-acid text-6xl font-bold mb-4 leading-none"
              style={{ fontFamily: "var(--font-display, Oswald)" }}
            >
              03
            </div>
            <h2
              className="text-text text-3xl sm:text-4xl mb-4"
              style={{ fontFamily: "var(--font-display, Oswald)", textTransform: "uppercase" }}
            >
              Microclimate
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Your zip code is Zone 8b. Your backyard south-facing wall with the brick
              foundation? That&apos;s Zone 9b. Two feet of soil, a concrete slab, and a wall
              that holds heat after dark can bump you an entire zone warmer.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              Microclimate is the climate your specific plant experiences — not your region,
              not your neighborhood, not your yard. <em>That exact spot.</em> It&apos;s why the
              same plant dies in the open ground and thrives against the south wall. It&apos;s
              why the corner of your property in the canyon bottom gets 5°F colder than
              the hilltop 50 feet away.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              <strong className="text-text">For rare trees, this is everything.</strong> A baobab
              in Zone 9b might survive outdoors if planted against a heat-retaining wall.
              The same baobab in the open ground of the same yard might not. Learn your
              microclimates and you extend what&apos;s possible by at least a zone in either direction.
            </p>
          </div>
          <div className="space-y-4">
            <h3
              className="text-text text-xl"
              style={{ fontFamily: "var(--font-display, Oswald)", textTransform: "uppercase" }}
            >
              How to Find Your Microclimates
            </h3>
            {[
              {
                step: "01",
                title: "South-Facing Walls",
                body: "Any wall facing south absorbs sun all day and radiates heat at night. The strip of ground within 3–4 feet of a south-facing brick or stucco wall can be 2–3 zones warmer than the open yard.",
              },
              {
                step: "02",
                title: "Frost Pockets",
                body: "Cold air sinks. Low spots, canyon bottoms, and depressions collect cold air drainage on still nights. These spots can be 5–8°F colder than surrounding higher ground — a full zone colder. Never plant tender trees there.",
              },
              {
                step: "03",
                title: "Thermal Mass",
                body: "Concrete, stone, and asphalt absorb heat and release it slowly. Driveways, patios, and foundations create warmer surrounding temperatures. Plants near these surfaces experience milder nights.",
              },
              {
                step: "04",
                title: "Wind Exposure",
                body: "Wind dramatically increases plant stress during cold events. A sheltered courtyard or a north-facing windbreak can make the difference between a plant surviving a hard freeze and losing it.",
              },
              {
                step: "05",
                title: "Tree Canopy",
                body: "Established tree canopy above tender plants buffers radiant heat loss on cold nights — the same principle as a greenhouse. A 30% canopy cover overhead can prevent several degrees of frost damage.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 bg-surface border border-border p-4">
                <span
                  className="text-acid text-xl leading-none shrink-0"
                  style={{ fontFamily: "var(--font-display, Oswald)" }}
                >
                  {item.step}
                </span>
                <div>
                  <h4
                    className="text-text text-sm mb-1"
                    style={{ fontFamily: "var(--font-display, Oswald)", textTransform: "uppercase" }}
                  >
                    {item.title}
                  </h4>
                  <p className="text-muted text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="border-t border-border pt-12 flex flex-col sm:flex-row gap-4">
        <Link
          href="/plants"
          className="inline-block px-8 py-4 bg-acid text-background text-sm tracking-widest font-semibold hover:bg-acid-dim transition-colors"
          style={{ fontFamily: "var(--font-display, Oswald)", textTransform: "uppercase" }}
        >
          Browse the Catalog
        </Link>
        <Link
          href="/contact"
          className="inline-block px-8 py-4 border border-border text-muted text-sm tracking-widest hover:border-acid hover:text-acid transition-colors"
          style={{ fontFamily: "var(--font-display, Oswald)", textTransform: "uppercase" }}
        >
          Ask a Question
        </Link>
      </div>
    </div>
  );
}
