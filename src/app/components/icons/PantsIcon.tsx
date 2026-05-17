export function PantsIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M6 4h12v16l-2 0V8h-2v12H10V8H8v12l-2 0V4z" />
      <line x1="12" y1="4" x2="12" y2="8" />
    </svg>
  );
}
