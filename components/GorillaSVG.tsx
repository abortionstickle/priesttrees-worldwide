export default function GorillaSVG({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 16"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="32" height="16" fill="#0d100a" rx="2" />
      <radialGradient id="eyegl" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#ff3a20" stopOpacity="1" />
        <stop offset="60%" stopColor="#c03020" stopOpacity="1" />
        <stop offset="100%" stopColor="#7a1a10" stopOpacity="0" />
      </radialGradient>
      <circle cx="10" cy="8" r="5" fill="url(#eyegl)" />
      <circle cx="22" cy="8" r="5" fill="url(#eyegl)" />
      <circle cx="10" cy="8" r="2.5" fill="#ff4433" />
      <circle cx="22" cy="8" r="2.5" fill="#ff4433" />
      <circle cx="9.5" cy="7.5" r="1" fill="#ff7a66" opacity="0.8" />
      <circle cx="21.5" cy="7.5" r="1" fill="#ff7a66" opacity="0.8" />
    </svg>
  );
}
