import { motion } from 'framer-motion'
import { FiCheck } from 'react-icons/fi'
import SectionHeading from './SectionHeading'
import { strengths } from '../data'
import { fadeUp, scalePop, staggerContainer, viewportOnce } from './motion'

/**
 * Personal Strengths — animated checklist where each item
 * slides in with a check badge and a soft hover highlight.
 */
export default function Strengths() {
  return (
    <section id="strengths" className="section-pad relative overflow-hidden bg-gradient-to-b from-white to-slate-50">
      <div className="container-page">
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
          {strengths.map((strength) => (
            <motion.li
              key={strength}
              variants={fadeUp}
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-card hover:border-brand-300 hover:shadow-lift"
            >
              <motion.span
                variants={scalePop}
                className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-dark text-white shadow-glow-accent transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12"
              >
                <FiCheck size={16} strokeWidth={3} aria-hidden="true" />
              </motion.span>
              <span className="font-medium text-navy transition-colors group-hover:text-brand-700">
                {strength}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
