export default function GorillaSVG({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="32" height="32" fill="#0d100a"/>
      {/* Ears */}
      <circle cx="1.5" cy="20" r="3" fill="#b8d42a"/>
      <circle cx="30.5" cy="20" r="3" fill="#b8d42a"/>
      {/* Head with sagittal crest peak at top */}
      <path d="M 3 20 Q 3 11 10 9 Q 16 4 22 9 Q 29 11 29 20 Q 29 29 16 29 Q 3 29 3 20 Z" fill="#b8d42a"/>
      {/* Curved brow — arc shape, not a rectangle */}
      <path d="M 5 19 Q 16 13 27 19 Q 27 21 16 17 Q 5 21 5 19 Z" fill="#0d100a" opacity="0.88"/>
      {/* Eyes — almond-shaped, under brow */}
      <ellipse cx="12" cy="18" rx="1.5" ry="1" fill="#0d100a"/>
      <ellipse cx="20" cy="18" rx="1.5" ry="1" fill="#0d100a"/>
      {/* Wide flat nose — dominant feature */}
      <ellipse cx="16" cy="23" rx="5.5" ry="3" fill="#0d100a" opacity="0.45"/>
      <ellipse cx="12.5" cy="23.5" rx="2" ry="1.3" fill="#0d100a" opacity="0.9"/>
      <ellipse cx="19.5" cy="23.5" rx="2" ry="1.3" fill="#0d100a" opacity="0.9"/>
      {/* Muzzle */}
      <ellipse cx="16" cy="27" rx="5.5" ry="2.5" fill="#0d100a" opacity="0.2"/>
    </svg>
  );
}
