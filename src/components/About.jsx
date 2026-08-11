import { motion } from 'framer-motion'
import { FaRulerCombined, FaMapMarkerAlt, FaGraduationCap } from 'react-icons/fa'
import SectionHeading from './SectionHeading'
import { about } from '../data'
import { fadeUp, staggerContainer, viewportOnce } from './motion'

/** Map of icon names (from data.js) to React icon components. */
const iconMap = {
  ruler: FaRulerCombined,
  map: FaMapMarkerAlt,
  graduation: FaGraduationCap,
}

/**
 * About / Summary — intro text with animated fade/slide-in on scroll,
 * plus a row of quick-fact highlight cards.
 */
export default function About() {
  return (
    <section id="about" className="section-pad relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-50">
      {/* Subtle blueprint texture accent */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-blueprint-fade opacity-40" />
      <div className="container-page relative">
        <SectionHeading eyebrow="About" title={about.heading} />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto max-w-3xl"
        >
          <motion.p
            variants={fadeUp}
            className="text-center text-base leading-relaxed text-slate-600 sm:text-lg"
          >
            {about.summary}
          </motion.p>
        </motion.div>

        {/* Quick-fact highlight cards */}
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 grid gap-5 sm:grid-cols-3"
        >
          {about.highlightCards.map((card, i) => {
            const Icon = iconMap[card.icon]
            return (
              <motion.div
                key={card.label}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-card hover:border-brand-300"
              >
                <span
                  aria-hidden="true"
                  className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-brand-50 transition-transform duration-500 group-hover:scale-[1.6]"
                />
                <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-brand-400 text-white shadow-glow">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <div className="relative mt-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    {card.label}
                  </p>
                  <p className="mt-1 font-semibold text-navy">{card.value}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
