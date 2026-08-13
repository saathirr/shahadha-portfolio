import { motion } from 'framer-motion'
import { FiCheck } from 'react-icons/fi'
import SectionHeading from './SectionHeading'
import FloatingMath from './FloatingMath'
import { strengths } from '../data'
import { fadeUp, staggerContainer, viewportOnce } from './motion'

const badgeColors = [
  'from-accent to-accent-dark',
  'from-brand-600 to-brand-400',
  'from-emerald-600 to-emerald-400',
  'from-rose-500 to-rose-400',
  'from-violet-600 to-violet-400',
]

const edgeColors = [
  'from-accent/40',
  'from-brand-500/40',
  'from-emerald-500/40',
  'from-rose-500/40',
  'from-violet-500/40',
]

/**
 * Personal Strengths — animated checklist where each item pops in
 * with a rotating "stamp" check badge, drifting QS maths glyphs behind.
 */
export default function Strengths() {
  return (
    <section id="strengths" className="section-pad relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
      <FloatingMath count={5} tone="light" />
      <div className="container-page relative">
        <SectionHeading
          eyebrow="Strengths"
          title="Personal Strengths"
          description="What I bring to the team beyond the classroom."
        />

        <motion.ul
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2"
        >
          {strengths.map((strength, i) => (
            <motion.li
              key={strength}
              variants={fadeUp}
              whileHover={{ y: -5, x: 3 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="group relative flex items-start gap-4 overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-card hover:border-brand-300 hover:shadow-lift"
            >
              <span
                aria-hidden="true"
                className={`absolute -top-10 -right-10 h-24 w-24 rounded-full bg-gradient-to-br ${edgeColors[i % edgeColors.length]} to-transparent blur-2xl transition-all duration-500 group-hover:scale-[1.7]`}
              />
              <motion.span
                variants={{
                  hidden: { opacity: 0, scale: 2.2, rotate: -30 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                    transition: { type: 'spring', stiffness: 260, damping: 14 },
                  },
                }}
                className={`relative mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${badgeColors[i % badgeColors.length]} text-white shadow-glow-accent transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12`}
              >
                <FiCheck size={16} strokeWidth={3} aria-hidden="true" />
              </motion.span>
              <span className="relative font-medium text-navy transition-colors group-hover:text-brand-700">
                {strength}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}