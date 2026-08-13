import { motion } from 'framer-motion'
import { FaGraduationCap } from 'react-icons/fa'
import SectionHeading from './SectionHeading'
import BlueprintBackground from './BlueprintBackground'
import FloatingMath from './FloatingMath'
import { education } from '../data'
import { fadeUp, scalePop, slideLeft, slideRight, staggerContainer, viewportOnce } from './motion'

const dotColors = [
  { dot: 'bg-accent ring-accent/20', bar: 'from-accent via-accent-light to-transparent' },
  { dot: 'bg-brand-400 ring-brand-400/20', bar: 'from-brand-400 via-brand-300 to-transparent' },
  { dot: 'bg-emerald-400 ring-emerald-400/20', bar: 'from-emerald-400 via-emerald-300 to-transparent' },
]

/**
 * Education — vertical animated timeline on a navy blueprint canvas.
 * Each entry has a dot that pops in when scrolled into view, connected
 * by a drawing vertical line.
 */
export default function Education() {
  return (
    <section id="education" className="section-pad relative overflow-hidden bg-navy text-white">
      <BlueprintBackground className="opacity-40" />
      <FloatingMath count={6} tone="dark" />
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute -left-16 top-0 h-72 w-72 rounded-full bg-brand-600/20 blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
      </div>

      <div className="container-page relative z-10">
        <SectionHeading
          tone="dark"
          eyebrow="Education"
          title="My Journey"
          description="Academic background building toward a career in quantity surveying."
        />

        <div className="relative mx-auto max-w-3xl">
          {/* Vertical timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="absolute left-5 top-0 h-full w-0.5 origin-top bg-gradient-to-b from-brand-500 via-brand-400 to-accent sm:left-1/2 sm:-translate-x-1/2"
          />

          <motion.ol
            variants={staggerContainer(0.25)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-10 sm:space-y-14"
          >
            {education.map((item, index) => {
              const leftSide = index % 2 === 0
              const palette = dotColors[index % dotColors.length]
              return (
                <motion.li
                  key={item.id}
                  variants={fadeUp}
                  className="relative pl-14 sm:pl-0"
                >
                  {/* Pop-in timeline dot */}
                  <motion.span
                    variants={scalePop}
                    className={`absolute top-1 left-5 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center sm:left-1/2 ${palette.dot}`}
                    style={{ borderRadius: '9999px' }}
                    aria-hidden="true"
                  >
                    <span className="h-2 w-2 rounded-full bg-white/80" />
                  </motion.span>

                  {/* Card — alternating sides on desktop, stacked on mobile */}
                  <div
                    className={`sm:w-[calc(50%-2.5rem)] ${
                      leftSide
                        ? 'sm:mr-auto sm:text-right'
                        : 'sm:ml-auto sm:text-left'
                    }`}
                  >
                    <motion.article
                      variants={leftSide ? slideLeft : slideRight}
                      whileHover={{ y: -5 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-6 shadow-card backdrop-blur hover:border-brand-400/40 hover:bg-white/10"
                    >
                      <span
                        aria-hidden="true"
                        className={`absolute top-0 h-1 w-full bg-gradient-to-r ${palette.bar}`}
                      />
                      <div
                        className={`mb-3 flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-widest ${
                          leftSide ? 'sm:flex-row-reverse' : ''
                        }`}
                      >
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-brand-200 ring-1 ring-white/15">
                          <FaGraduationCap aria-hidden="true" />
                          {item.status}
                        </span>
                        <span className="text-white/30">·</span>
                        <span className="text-slate-300">{item.period}</span>
                      </div>
                      <h3 className="text-lg font-bold leading-snug text-white transition-colors group-hover:text-brand-200">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-sm text-slate-300/80">{item.institution}</p>
                    </motion.article>
                  </div>
                </motion.li>
              )
            })}
          </motion.ol>
        </div>
      </div>
    </section>
  )
}