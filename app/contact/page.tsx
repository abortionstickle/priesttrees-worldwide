import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Priest Trees Worldwide. Questions about availability, climate matching, or shipping.",
};

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-2xl">
        <p
          className="text-acid text-xs tracking-[0.3em] mb-4"
          style={{ fontFamily: "var(--font-display, Oswald)", textTransform: "uppercase" }}
        >
          Get in Touch
        </p>
        <h1
          className="text-text text-5xl sm:text-6xl mb-6"
          style={{ fontFamily: "var(--font-display, Oswald)", textTransform: "uppercase" }}
        >
          Contact
        </h1>
        <p className="text-muted text-lg leading-relaxed mb-12">
          Questions about availability, climate compatibility, or shipping to your state.
          We respond to every inquiry personally — no automation.
        </p>

        {/* Contact form */}
        <form className="space-y-6">
          <div>
            <label
              className="block text-xs tracking-widest text-muted mb-2"
              style={{ fontFamily: "var(--font-display, Oswald)", textTransform: "uppercase" }}
            >
              Name
            </label>
            <input
              type="text"
              className="w-full bg-surface border border-border text-text px-4 py-3 text-sm focus:outline-none focus:border-acid transition-colors"
              placeholder="Your name"
            />
          </div>

          <div>
            <label
              className="block text-xs tracking-widest text-muted mb-2"
              style={{ fontFamily: "var(--font-display, Oswald)", textTransform: "uppercase" }}
            >
              Email
            </label>
            <input
              type="email"
              className="w-full bg-surface border border-border text-text px-4 py-3 text-sm focus:outline-none focus:border-acid transition-colors"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label
              className="block text-xs tracking-widest text-muted mb-2"
              style={{ fontFamily: "var(--font-display, Oswald)", textTransform: "uppercase" }}
            >
              Your Zip Code <span className="text-subtle normal-case">(optional — helps with zone matching)</span>
            </label>
            <input
              type="text"
              maxLength={5}
              className="w-full bg-surface border border-border text-text px-4 py-3 text-sm focus:outline-none focus:border-acid transition-colors"
              placeholder="78701"
            />
          </div>

          <div>
            <label
              className="block text-xs tracking-widest text-muted mb-2"
              style={{ fontFamily: "var(--font-display, Oswald)", textTransform: "uppercase" }}
            >
              Message
            </label>
            <textarea
              rows={6}
              className="w-full bg-surface border border-border text-text px-4 py-3 text-sm focus:outline-none focus:border-acid transition-colors resize-none"
              placeholder="Which tree you're asking about, your growing conditions, shipping destination, or anything else."
            />
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto px-10 py-4 bg-acid text-background text-sm tracking-widest font-semibold hover:bg-acid-dim transition-colors"
            style={{ fontFamily: "var(--font-display, Oswald)", textTransform: "uppercase" }}
          >
            Send Message
          </button>
        </form>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-muted text-sm leading-relaxed">
            We&apos;re based in Texas. Response time is typically 24–48 hours.
            We ship to most US states — we&apos;ll confirm availability and
            phytosanitary compliance for your state when we respond.
          </p>
        </div>
      </div>
    </div>
  );
}
