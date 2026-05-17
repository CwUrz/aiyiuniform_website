export function JacketIcon({ className }: { className?: string }) {
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
      <path d="M12 2L8 6v12h2V8l2-2 2 2v10h2V6l-4-4z" />
      <path d="M6 8v10h2V8H6zM16 8v10h2V8h-2z" />
    </svg>
  );
}
