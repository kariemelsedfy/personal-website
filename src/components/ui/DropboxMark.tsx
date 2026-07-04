/**
 * Dropbox glyph (monochrome, inherits currentColor).
 */
export default function DropboxMark({ size = 16, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size * (20 / 24)}
      viewBox="0 0 24 20"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M6 0l6 3.75L6 7.5 0 3.75 6 0zm12 0l6 3.75-6 3.75-6-3.75L18 0zM0 11.25L6 7.5l6 3.75L6 15l-6-3.75zm18-3.75l6 3.75L18 15l-6-3.75 6-3.75zM6 16.25l6-3.75 6 3.75L12 20l-6-3.75z" />
    </svg>
  )
}
