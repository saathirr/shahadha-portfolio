/**
 * SectionDivider — soft SVG wave/curve that separates sections.
 * Flip colors via the `fill` prop; used as a stylish visual break.
 */
export default function SectionDivider({ fill = '#ffffff' }) {
  return (
    <div aria-hidden="true" className="pointer-events-none relative -mb-px h-10 w-full overflow-hidden sm:h-14">
      <svg
        className="absolute bottom-0 left-0 h-full w-full"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
      >
        <path
          d="M0,32 C240,60 480,60 720,40 C960,20 1200,20 1440,44 L1440,60 L0,60 Z"
          fill={fill}
        />
      </svg>
    </div>
  )
}
