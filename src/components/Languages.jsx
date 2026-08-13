import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import CountUp from './CountUp'
import FloatingMath from './FloatingMath'
import { languages } from '../data'
import { fadeUp, scalePop, staggerContainer, viewportOnce } from './motion'

const barGradients = [
  'from-brand-700 via-brand-500 to-brand-400',
  'from-accent via-accent-light to-brand-400',
  'from-emerald-600 via-emerald-400 to-brand-400',
]

/**
 * Languages — animated proficiency bars that fill from 0 to the
 * declared percentage as the section scrolls into view.
 */
export default function Languages() {
  return (
    <section id="languages" className="section-pad relative overflow-hidden bg-gradient-to-br from-white via-brand-50/40 to-white">
      <FloatingMath count={4} tone="light" />
      <div className="container-page relative">
        <SectionHeading
          eyebrow="Languages"
          title="Languages"
          description="Languages I speak and work with."
        />

        <motion.div
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto max-w-2xl space-y-8"
        >
          {languages.map((lang, i) => (
            <motion.div key={lang.name} variants={fadeUp}>
              <div className="mb-2 flex items-baseline justify-between">
                <h3 className="font-semibold text-navy">{lang.name}</h3>
                <div className="flex items-center gap-2">
                  <motion.span
                    variants={fadeUp}
                    className="text-sm font-bold tabular-nums text-brand-700"
                  >
                    <CountUp to={lang.percent} suffix="%" />
                  </motion.span>
                  <motion.span
                    variants={scalePop}
                    className="rounded-full bg-brand-50 px-3 py-0.5 text-sm font-bold text-brand-700 ring-1 ring-brand-200"
                  >
                    {lang.level}
                  </motion.span>
                </div>
              </div>
              <div
                className="h-3 w-full overflow-hidden rounded-full bg-slate-200 shadow-inner"
                role="img"
                aria-label={`${lang.name}: ${lang.level} (${lang.percent}%)`}
              >
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${lang.percent}%` }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.9, ease: 'easeOut' }}
                  className={`relative h-full rounded-full bg-gradient-to-r ${barGradients[i % barGradients.length]} shadow-glow`}
                >
                  <span className="absolute inset-y-0 right-0 w-2 rounded-full bg-white/60" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
