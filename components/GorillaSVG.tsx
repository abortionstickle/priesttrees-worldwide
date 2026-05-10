export default function GorillaSVG({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="32" height="32" fill="#0d100a"/>
      {/* Gorilla face — dark brow + green face + muzzle give it structure */}
      {/* Ears */}
      <circle cx="3" cy="19" r="3.5" fill="#b8d42a"/>
      <circle cx="29" cy="19" r="3.5" fill="#b8d42a"/>
      {/* Sagittal crest */}
      <ellipse cx="16" cy="7" rx="5.5" ry="6" fill="#b8d42a"/>
      {/* Wide skull */}
      <ellipse cx="16" cy="20" rx="12.5" ry="11" fill="#b8d42a"/>
      {/* Heavy brow band — single dark stripe, makes it read as a face */}
      <rect x="4" y="14" width="24" height="7" rx="3" fill="#0d100a" opacity="0.82"/>
      {/* Muzzle — slightly recessed lower face */}
      <ellipse cx="16" cy="27" rx="7" ry="4.5" fill="#8aaa18"/>
      {/* Flat nose */}
      <ellipse cx="16" cy="24" rx="4.5" ry="2.5" fill="#0d100a" opacity="0.5"/>
    </svg>
  );
}
