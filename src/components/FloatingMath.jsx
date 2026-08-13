import { motion } from 'framer-motion'

const SYMBOLS = ['+', '−', '×', '÷', '∑', '√', 'π', '△', '□', '≈']

const PLACES = [
  { top: '6%', left: '4%', size: 44, dur: 7, delay: 0 },
  { top: '14%', right: '6%', size: 56, dur: 9, delay: 1.2 },
  { bottom: '10%', left: '8%', size: 48, dur: 8, delay: 0.6 },
  { bottom: '16%', right: '4%', size: 40, dur: 6.5, delay: 1.8 },
  { top: '42%', left: '2%', size: 34, dur: 7.5, delay: 2.4 },
  { top: '38%', right: '2%', size: 46, dur: 8.5, delay: 0.9 },
  { top: '70%', left: '4%', size: 38, dur: 8.2, delay: 1.5 },
  { bottom: '8%', right: '10%', size: 50, dur: 7.8, delay: 2.8 },
]

/**
 * FloatingMath — slow-drifting QS/maths glyphs (∑, π, △, +, × …)
 * that bob and gently rotate in a section's background. Purely decorative.
 */
export default function FloatingMath({ count = 6, tone = 'dark' }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {PLACES.slice(0, count).map((p, i) => (
        <motion.span
          key={i}
          className={`absolute select-none font-heading font-extrabold ${
            tone === 'dark' ? 'text-white/10' : 'text-brand-700/10'
          }`}
          style={{ ...p, fontSize: p.size, lineHeight: 1 }}
          animate={{ y: [0, -24, 0], rotate: [0, i % 2 ? 16 : -16, 0] }}
          transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        >
          {SYMBOLS[(i * 3 + p.size) % SYMBOLS.length]}
        </motion.span>
      ))}
    </div>
  )
}