"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { parseZoneNumber } from "@/data/zones";

export default function ZipSearch({ inline = false }: { inline?: boolean }) {
  const [zip, setZip] = useState("");
  const [zone, setZone] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  async function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (!/^\d{5}$/.test(zip)) {
      setError("Enter a valid 5-digit zip code.");
      return;
    }
    setLoading(true);
    setError(null);
    setZone(null);
    try {
      const res = await fetch(`https://phzmapi.org/${zip}.json`);
      if (!res.ok) throw new Error("not found");
      const data = await res.json();
      const z: string = data.zone ?? data.hardiness_zone ?? data.hardiness ?? "";
      if (!z) throw new Error("no zone");
      setZone(z);
    } catch {
      setError("Zone not found for this zip. Try another.");
    } finally {
      setLoading(false);
    }
  }

  function goToPlants() {
    if (zone) router.push(`/plants?zone=${encodeURIComponent(zone)}`);
  }

  return (
    <div className={inline ? "" : "bg-surface-2 border border-border rounded-sm p-6"}>
      {!inline && (
        <p
          className="text-muted text-xs tracking-widest mb-3 uppercase"
          style={{ fontFamily: "var(--font-display, Oswald)" }}
        >
          Find Your Grow Zone
        </p>
      )}

      <form onSubmit={handleSearch} className="flex gap-2">
        <input
          type="text"
          inputMode="numeric"
          maxLength={5}
          placeholder="ZIP CODE"
          value={zip}
          onChange={(e) => setZip(e.target.value.replace(/\D/g, ""))}
          className="flex-1 bg-surface border border-border text-text placeholder-subtle px-4 py-3 text-sm tracking-widest focus:outline-none focus:border-acid transition-colors"
          style={{ fontFamily: "var(--font-display, Oswald)" }}
        />
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-3 bg-acid text-background text-sm tracking-widest font-semibold hover:bg-acid-dim transition-colors disabled:opacity-50"
          style={{ fontFamily: "var(--font-display, Oswald)" }}
        >
          {loading ? "..." : "FIND"}
        </button>
      </form>

      {error && (
        <p className="mt-2 text-earth-light text-xs">{error}</p>
      )}

      {zone && (
        <div className="mt-4 flex items-center justify-between gap-4 bg-surface border border-acid/30 rounded-sm p-4">
          <div>
            <p className="text-muted text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-display, Oswald)" }}>
              Your Zone
            </p>
            <p className="text-acid text-3xl font-bold leading-none mt-1" style={{ fontFamily: "var(--font-display, Oswald)" }}>
              {zone.toUpperCase()}
            </p>
          </div>
          <button
            onClick={goToPlants}
            className="px-4 py-2 border border-acid text-acid text-xs tracking-widest hover:bg-acid hover:text-background transition-colors"
            style={{ fontFamily: "var(--font-display, Oswald)" }}
          >
            SEE WHAT GROWS HERE →
          </button>
        </div>
      )}
    </div>
  );
}
