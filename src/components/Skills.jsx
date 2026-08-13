import { motion } from 'framer-motion'
import { FiCheckCircle } from 'react-icons/fi'
import SectionHeading from './SectionHeading'
import { skills } from '../data'
import { fadeUp, scalePop, staggerContainer, viewportOnce } from './motion'

/**
 * Technical Skills — responsive card grid where each skill
 * fades up in a staggered cascade and tilts/scales on hover.
 */
export default function Skills() {
  return (
    <section id="skills" className="section-pad relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-blueprint-fade opacity-30" />
      <div className="container-page relative">
        <SectionHeading
          eyebrow="Skills"
          title="Technical Skills"
          description="Core quantity surveying capabilities I'm developing through study and practice."
        />

        <motion.ul
          variants={staggerContainer(0.07)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
        >
          {skills.map((skill, index) => (
            <motion.li key={skill} variants={fadeUp} className="h-full">
              <motion.div
                whileHover={{ y: -6, scale: 1.03, rotate: index % 2 === 0 ? 0.6 : -0.6 }}
                transition={{ type: 'spring', stiffness: 320, damping: 18 }}
                className="group flex h-full items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-card hover:border-brand-300 hover:shadow-lift"
              >
                <motion.span
                  variants={scalePop}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-600 to-brand-400 text-white shadow-glow transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
                >
                  <FiCheckCircle size={20} aria-hidden="true" />
                </motion.span>
                <span className="font-medium text-navy transition-colors group-hover:text-brand-700">
                  {skill}
                </span>
              </motion.div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
