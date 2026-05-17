export function SkirtIcon({ className }: { className?: string }) {
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
      <path d="M8 6h8v2L18 18H6l2-10V6z" />
      <line x1="8" y1="8" x2="16" y2="8" />
    </svg>
  );
}
