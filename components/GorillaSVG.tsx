export default function GorillaSVG({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 72"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Sagittal crest bump */}
      <ellipse cx="32" cy="8" rx="7" ry="7" />
      {/* Main skull */}
      <ellipse cx="32" cy="26" rx="22" ry="20" />
      {/* Wide jaw / lower face */}
      <ellipse cx="32" cy="48" rx="18" ry="14" />
      {/* Prominent brow ridge — supraorbital torus */}
      <rect x="11" y="30" width="42" height="7" rx="3.5" style={{ fill: "#0d100a", opacity: 0.35 }} />
      {/* Eye sockets */}
      <ellipse cx="22" cy="35" rx="5" ry="4.5" style={{ fill: "#0d100a", opacity: 0.45 }} />
      <ellipse cx="42" cy="35" rx="5" ry="4.5" style={{ fill: "#0d100a", opacity: 0.45 }} />
      {/* Pupils — acid green glint */}
      <circle cx="22" cy="35" r="2" style={{ fill: "#b8d42a", opacity: 0.6 }} />
      <circle cx="42" cy="35" r="2" style={{ fill: "#b8d42a", opacity: 0.6 }} />
      {/* Nose bridge */}
      <ellipse cx="32" cy="46" rx="9" ry="6" style={{ fill: "#0d100a", opacity: 0.2 }} />
      {/* Nostrils */}
      <ellipse cx="27" cy="47" rx="3" ry="2.5" style={{ fill: "#0d100a", opacity: 0.5 }} />
      <ellipse cx="37" cy="47" rx="3" ry="2.5" style={{ fill: "#0d100a", opacity: 0.5 }} />
      {/* Mouth line */}
      <path
        d="M 21 57 C 26 60 38 60 43 57"
        stroke="#0d100a"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        style={{ opacity: 0.35 }}
      />
    </svg>
  );
}
