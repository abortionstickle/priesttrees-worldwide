"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import GorillaSVG from "./GorillaSVG";

const links = [
  { href: "/", label: "Home" },
  { href: "/plants", label: "Plants" },
  { href: "/climate", label: "Climate Zones" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-surface border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <GorillaSVG className="h-6 w-12 transition-transform group-hover:scale-110" />
            <span
              className="text-text font-display text-lg tracking-widest leading-tight hidden sm:block"
              style={{ fontFamily: "var(--font-display, Oswald, sans-serif)" }}
            >
              PRIEST TREES
              <span className="block text-muted text-xs tracking-[0.2em]">WORLDWIDE</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => {
              const active = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 text-sm tracking-widest transition-colors ${
                    active
                      ? "text-acid border-b-2 border-acid"
                      : "text-muted hover:text-text"
                  }`}
                  style={{ fontFamily: "var(--font-display, Oswald, sans-serif)" }}
                >
                  {link.label.toUpperCase()}
                </Link>
              );
            })}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-muted hover:text-text p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-surface border-t border-border">
          {links.map((link) => {
            const active = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block px-6 py-3 text-sm tracking-widest border-b border-border transition-colors ${
                  active ? "text-acid bg-surface-2" : "text-muted hover:text-text hover:bg-surface-2"
                }`}
                style={{ fontFamily: "var(--font-display, Oswald, sans-serif)" }}
              >
                {link.label.toUpperCase()}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
