export function LongSleeveIcon({ className }: { className?: string }) {
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
      <path d="M12 4L8 6v12h8V6l-4-2z" />
      <path d="M8 6L4 8v6l4-2V6zM16 6l4 2v6l-4-2V6z" />
    </svg>
  );
}
