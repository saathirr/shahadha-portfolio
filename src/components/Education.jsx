import { motion } from 'framer-motion'
import { FaGraduationCap } from 'react-icons/fa'
import SectionHeading from './SectionHeading'
import { education } from '../data'
import { fadeUp, scalePop, slideLeft, slideRight, staggerContainer, viewportOnce } from './motion'

/**
 * Education — vertical animated timeline. Each entry has a dot that
 * scales/pops in when it scrolls into view, connected by a vertical line.
 */
export default function Education() {
  return (
    <section id="education" className="section-pad relative bg-white">
      <div className="container-page">
        <SectionHeading
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
            className="absolute left-5 top-0 h-full w-0.5 origin-top bg-gradient-to-b from-brand-500 via-brand-600 to-accent sm:left-1/2 sm:-translate-x-1/2"
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
              return (
                <motion.li
                  key={item.id}
                  variants={fadeUp}
                  className="relative pl-14 sm:pl-0"
                >
                  {/* Pop-in timeline dot */}
                  <motion.span
                    variants={scalePop}
                    className={`absolute top-1 left-5 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center sm:left-1/2 ${
                      item.current
                        ? 'bg-accent ring-4 ring-accent/20'
                        : 'bg-brand-600 ring-4 ring-brand-100'
                    }`}
                    style={{ borderRadius: '9999px' }}
                    aria-hidden="true"
                  />

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
                      className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-card hover:border-brand-300 hover:shadow-lift"
                    >
                      <span
                        aria-hidden="true"
                        className={`absolute top-0 h-1 w-full ${
                          item.current
                            ? 'bg-gradient-to-r from-accent via-accent-light to-transparent'
                            : 'bg-gradient-to-r from-brand-600 via-brand-400 to-transparent'
                        }`}
                      />
                      <div
                        className={`mb-3 flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-widest ${
                          leftSide ? 'sm:flex-row-reverse' : ''
                        }`}
                      >
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-2.5 py-1 text-brand-700 ring-1 ring-brand-200">
                          <FaGraduationCap aria-hidden="true" />
                          {item.status}
                        </span>
                        <span className="text-slate-400">·</span>
                        <span className="text-slate-500">{item.period}</span>
                      </div>
                      <h3 className="text-lg font-bold leading-snug text-navy">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-sm text-slate-500">{item.institution}</p>
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
