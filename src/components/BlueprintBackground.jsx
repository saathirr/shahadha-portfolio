/**
 * BlueprintBackground — subtle construction / blueprint grid texture
 * used in the hero and as section dividers to reinforce the QS theme.
 */
export default function BlueprintBackground({ className = '' }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 bg-blueprint-grid bg-grid ${className}`}
    />
  )
}
