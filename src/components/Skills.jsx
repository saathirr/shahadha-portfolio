import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import CountUp from './CountUp'
import FloatingMath from './FloatingMath'
import { skillBars } from '../data'
import { fadeUp, staggerContainer, viewportOnce } from './motion'

const barGradients = [
  'from-brand-600 to-brand-400',
  'from-accent to-accent-light',
  'from-emerald-600 to-emerald-400',
  'from-violet-600 to-violet-400',
  'from-rose-500 to-rose-400',
  'from-sky-600 to-sky-400',
]

/**
 * Technical Skills — each capability rendered as a QS-style
 * measuring bar that fills from zero and counts its percentage up.
 */
export default function Skills() {
  return (
    <section id="skills" className="section-pad relative overflow-hidden bg-gradient-to-br from-white via-brand-50/40 to-white">
      <FloatingMath count={6} tone="light" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-blueprint-fade opacity-30" />
      <div className="container-page relative">
        <SectionHeading
          eyebrow="Skills"
          title="Technical Skills"
          description="Core quantity surveying capabilities I'm developing through study and practice."
        />

        <motion.div
          variants={staggerContainer(0.07)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto grid max-w-4xl gap-x-10 gap-y-7 sm:grid-cols-2"
        >
          {skillBars.map((skill, index) => (
            <motion.div key={skill.name} variants={fadeUp} className="group">
              <div className="mb-2 flex items-end justify-between gap-3">
                <h3 className="text-sm font-semibold text-navy transition-colors group-hover:text-brand-700 sm:text-base">
                  {skill.name}
                </h3>
                <span className="shrink-0 font-heading text-lg font-extrabold tabular-nums text-brand-700">
                  <CountUp to={skill.percent} suffix="%" />
                </span>
              </div>
              {/* Measuring track */}
              <div
                className="relative h-3.5 w-full overflow-hidden rounded-full bg-slate-200/80 shadow-inner"
                role="img"
                aria-label={`${skill.name}: ${skill.percent}%`}
              >
                {/* Ruler ticks along the track */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 flex justify-between px-1"
                  style={{
                    backgroundImage:
                      'repeating-linear-gradient(90deg, transparent 0 9px, rgba(255,255,255,0.7) 9px 10px)',
                  }}
                />
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percent}%` }}
                  viewport={viewportOnce}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative h-full rounded-full bg-gradient-to-r ${barGradients[index % barGradients.length]} shadow-glow`}
                >
                  <motion.span
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute inset-y-0 right-0 w-2 rounded-full bg-white/70"
                    aria-hidden="true"
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}