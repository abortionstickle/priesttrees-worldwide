export default function GorillaSVG({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 72 60"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Ears — clearly on the sides */}
      <ellipse cx="5" cy="30" rx="7" ry="9" />
      <ellipse cx="67" cy="30" rx="7" ry="9" />
      {/* Single wide head — no stacked blobs */}
      <ellipse cx="36" cy="30" rx="28" ry="26" />
      {/* Heavy brow ridge */}
      <rect x="14" y="24" width="44" height="10" rx="4" style={{ fill: "#0d100a", opacity: 0.5 }} />
      {/* Left eye socket + pupil */}
      <ellipse cx="24" cy="29" rx="7" ry="6" style={{ fill: "#0d100a", opacity: 0.65 }} />
      <circle cx="24" cy="29" r="3.5" style={{ fill: "#0d100a" }} />
      {/* Right eye socket + pupil */}
      <ellipse cx="48" cy="29" rx="7" ry="6" style={{ fill: "#0d100a", opacity: 0.65 }} />
      <circle cx="48" cy="29" r="3.5" style={{ fill: "#0d100a" }} />
      {/* Wide flat nose — two nostrils */}
      <ellipse cx="28" cy="40" rx="5" ry="4" style={{ fill: "#0d100a", opacity: 0.55 }} />
      <ellipse cx="44" cy="40" rx="5" ry="4" style={{ fill: "#0d100a", opacity: 0.55 }} />
      {/* Mouth */}
      <path
        d="M 22 50 Q 36 56 50 50"
        stroke="#0d100a"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        style={{ opacity: 0.38 }}
      />
    </svg>
  );
}
