import { motion } from 'framer-motion'
import { viewportOnce } from './motion'

/**
 * MeasureLine — a drafting-style dimension line that draws itself in:
 * the measurement arrow line sweeps across, ticks pop in one by one,
 * and a "3000 MM" style annotation fades in. Very QS/construction-plan.
 */
export default function MeasureLine({
  className = '',
  tone = 'brand',
  width = 320,
  label = 'MM',
}) {
  const color = tone === 'dark' ? 'text-white/70' : 'text-brand-700/80'
  const arrow = tone === 'dark' ? 'text-accent' : 'text-accent'
  const ticks = [64, 104, 144, 184, 224, 264]
  const smallTicks = [48, 84, 124, 164, 204, 244, 284]

  return (
    <div aria-hidden="true" className={`mx-auto w-full ${className}`}>
      <svg
        viewBox="0 0 320 44"
        className={`block w-auto max-w-full ${color}`}
        style={{ width: `${Math.min(width, 320)}px` }}
        fill="none"
      >
        {/* Extension wings */}
        <motion.path
          d="M8 14 V30 M312 14 V30"
          stroke="currentColor"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        />
        {/* Dimension line sweep */}
        <motion.path
          d="M12 22 H308"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        />
        {/* Arrows */}
        <motion.path
          d="M6 16 L13 22 L6 28"
          stroke={arrow}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ opacity: 0, x: -6 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.35, delay: 0.6 }}
        />
        <motion.path
          d="M314 16 L307 22 L314 28"
          stroke={arrow}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ opacity: 0, x: 6 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.35, delay: 0.6 }}
        />
        {/* Ruler ticks — pop in from the line outward */}
        {ticks.map((x, i) => (
          <motion.line
            key={`t${x}`}
            x1={x}
            y1="18"
            x2={x}
            y2="26"
            stroke="currentColor"
            strokeWidth="1.5"
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            viewport={viewportOnce}
            style={{ originY: '22px' }}
            transition={{ duration: 0.2, delay: 0.35 + i * 0.06 }}
          />
        ))}
        {smallTicks.map((x, i) => (
          <motion.line
            key={`s${x}`}
            x1={x}
            y1="19.5"
            x2={x}
            y2="24.5"
            stroke="currentColor"
            strokeWidth="1"
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            viewport={viewportOnce}
            style={{ originY: '22px' }}
            transition={{ duration: 0.16, delay: 0.3 + i * 0.04 }}
          />
        ))}
        {/* Annotation */}
        <motion.text
          x="160"
          y="41"
          textAnchor="middle"
          className="text-[9px]"
          style={{ fill: 'currentColor', letterSpacing: '0.35em' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.8 }}
          viewport={viewportOnce}
          transition={{ duration: 0.4, delay: 1 }}
        >
          {label}
        </motion.text>
      </svg>
    </div>
  )
}