import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { languages } from '../data'
import { fadeUp, staggerContainer, viewportOnce } from './motion'

/**
 * Languages — animated proficiency bars that fill from 0 to the
 * declared percentage as the section scrolls into view.
 */
export default function Languages() {
  return (
    <section id="languages" className="section-pad relative bg-white">
      <div className="container-page">
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
          {languages.map((lang) => (
            <motion.div key={lang.name} variants={fadeUp}>
              <div className="mb-2 flex items-baseline justify-between">
                <h3 className="font-semibold text-navy">{lang.name}</h3>
                <span className="rounded-full bg-brand-50 px-3 py-0.5 text-sm font-bold text-brand-700 ring-1 ring-brand-200">
                  {lang.level}
                </span>
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
                  className="relative h-full rounded-full bg-gradient-to-r from-brand-700 via-brand-500 to-brand-400 shadow-glow"
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
