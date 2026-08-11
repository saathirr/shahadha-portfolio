/**
 * RotatingBadge — circular text that slowly spins around a center point.
 * Used as a stylish decorative accent around the hero profile photo.
 */
export default function RotatingBadge({ text, className = '' }) {
  const circleRadius = 88

  return (
    <div aria-hidden="true" className={`relative ${className}`}>
      <svg
        viewBox="0 0 200 200"
        className="h-full w-full animate-spin-slow"
        style={{ animationDirection: 'reverse' }}
      >
        <defs>
          <path
            id="badge-circle"
            d={`M 100,100 m -${circleRadius},0 a ${circleRadius},${circleRadius} 0 1,1 ${circleRadius * 2},0 a ${circleRadius},${circleRadius} 0 1,1 -${circleRadius * 2},0`}
            fill="none"
          />
        </defs>
        <text fontSize="12.5" fontWeight="700" letterSpacing="2" fill="#cbd5e1">
          <textPath href="#badge-circle" startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>
    </div>
  )
}
