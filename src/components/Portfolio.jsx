import { motion } from 'framer-motion'
import { FiExternalLink, FiClock } from 'react-icons/fi'
import { BsDribbble } from 'react-icons/bs'
import SectionHeading from './SectionHeading'
import { portfolio } from '../data'
import { fadeUp, staggerContainer, viewportOnce } from './motion'

/**
 * Portfolio / Work Preview — teases the Behance portfolio with elegant
 * "coming soon" placeholder cards and a CTA that opens Behance in a new tab.
 */
export default function Portfolio() {
  return (
    <section id="portfolio" className="section-pad relative bg-slate-50">
      {/* Blueprint texture as a subtle section divider accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-300 to-transparent"
      />
      <div className="container-page">
        <SectionHeading
          eyebrow="Portfolio"
          title={portfolio.heading}
          description={portfolio.tagline}
        />

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-6 md:grid-cols-3"
        >
          {portfolio.cards.map((card) => (
            <motion.article
              key={card.id}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card hover:border-brand-300 hover:shadow-lift"
            >
              {/* Placeholder card visual */}
              <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-gradient-to-br from-navy to-navy-light">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-blueprint-grid bg-grid opacity-40"
                />
                <div
                  aria-hidden="true"
                  className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-brand-500/20 blur-2xl transition-transform duration-500 group-hover:scale-[1.8]"
                />
                <BsDribbble
                  size={56}
                  aria-hidden="true"
                  className="relative text-slate-300/50 transition-transform duration-500 group-hover:scale-125 group-hover:text-brand-300"
                />
                <span className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-slate-200 backdrop-blur">
                  <FiClock size={12} />
                  {card.status}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-navy transition-colors group-hover:text-brand-700">
                  {card.title}
                </h3>
                <p className="mt-1 text-sm text-slate-500">{card.subtitle}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 text-center"
        >
          <a
            href={portfolio.behanceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            View Full Portfolio
            <FiExternalLink />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
