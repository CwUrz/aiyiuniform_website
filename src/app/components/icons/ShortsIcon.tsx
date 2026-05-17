export function ShortsIcon({ className }: { className?: string }) {
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
      <path d="M6 6h12v6l-2 6H8l-2-6V6z" />
      <line x1="12" y1="6" x2="12" y2="18" />
    </svg>
  );
}
