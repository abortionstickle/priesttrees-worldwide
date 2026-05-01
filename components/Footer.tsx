import Link from "next/link";
import GorillaSVG from "./GorillaSVG";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <GorillaSVG className="h-8 w-8 text-acid" />
              <div>
                <div className="text-text text-sm tracking-widest" style={{ fontFamily: "var(--font-display, Oswald)", textTransform: "uppercase" }}>
                  Priest Trees Worldwide
                </div>
                <div className="text-muted text-xs">Texas-Based</div>
              </div>
            </div>
            <p className="text-muted text-sm leading-relaxed">
              Rare and unusual trees for homeowners who want something different.
              Unusual. Forgotten classics. Climate-matched.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-text text-xs tracking-widest mb-4 uppercase" style={{ fontFamily: "var(--font-display, Oswald)" }}>
              Navigate
            </h3>
            <div className="flex flex-col gap-2">
              {[
                { href: "/plants", label: "Plant Catalog" },
                { href: "/climate", label: "Climate Zones" },
                { href: "/about", label: "Our Philosophy" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="text-muted hover:text-acid text-sm transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-text text-xs tracking-widest mb-4 uppercase" style={{ fontFamily: "var(--font-display, Oswald)" }}>
              Location
            </h3>
            <p className="text-muted text-sm">Texas, USA</p>
            <p className="text-muted text-sm mt-1">priesttreesworldwide.com</p>
            <p className="text-muted text-sm mt-4">
              Partner:{" "}
              <a href="https://austinpeppers.com" target="_blank" rel="noopener noreferrer" className="text-acid hover:underline">
                Austin Peppers
              </a>
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex items-center justify-between gap-4">
          <p className="text-subtle text-xs">
            © {new Date().getFullYear()} Priest Trees Worldwide. We sell unusual and forgotten trees without apology.
          </p>
          <p className="text-subtle text-xs">priesttreesworldwide.com</p>
        </div>
      </div>
    </footer>
  );
}
