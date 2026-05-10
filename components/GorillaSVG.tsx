export default function GorillaSVG({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="32" height="32" fill="#0d100a"/>
      {/* Ear */}
      <ellipse cx="23" cy="17" rx="2.5" ry="3" fill="#b8d42a"/>
      {/* Gorilla profile facing left — sagittal crest, heavy brow, projecting muzzle */}
      <path
        d="M 24 30 C 27 22 27 10 20 6 Q 16 2 12 4 C 9 5 7 9 7 12 Q 6 14 7 17 Q 8 19 7 21 C 6 23 5 25 7 28 Q 11 31 18 31 Z"
        fill="#b8d42a"
      />
    </svg>
  );
}
