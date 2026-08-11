import { motion } from 'framer-motion'
import {
  FaRulerCombined,
  FaFileContract,
  FaCalculator,
  FaHardHat,
  FaBalanceScale,
  FaUsers,
  FaHandshake,
  FaChartLine,
  FaCube,
  FaFolderOpen,
} from 'react-icons/fa'
import SectionHeading from './SectionHeading'
import { academicKnowledge } from '../data'
import { fadeUp, staggerContainer, viewportOnce } from './motion'

/** Icons cycled across the academic knowledge items. */
const icons = [
  FaRulerCombined,
  FaFileContract,
  FaCalculator,
  FaHardHat,
  FaBalanceScale,
  FaUsers,
  FaHandshake,
  FaChartLine,
  FaCube,
  FaFolderOpen,
]

/**
 * Academic Knowledge — two-column icon grid on desktop,
 * single column on mobile, with staggered fade-up reveals.
 */
export default function AcademicKnowledge() {
  return (
    <section id="knowledge" className="section-pad relative overflow-hidden bg-white">
      <div className="container-page">
        <SectionHeading
          eyebrow="Knowledge"
          title="Academic Knowledge"
          description="Key areas studied within the Higher Diploma in Quantity Surveying."
        />

        <motion.ul
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-4 sm:gap-5 md:grid-cols-2"
        >
          {academicKnowledge.map((item, index) => {
            const Icon = icons[index % icons.length]
            return (
              <motion.li key={item} variants={fadeUp}>
                <motion.div
                  whileHover={{ x: 6 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                  className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-colors duration-300 hover:border-brand-300 hover:bg-white hover:shadow-card"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-brand-400 text-white shadow-glow transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <span className="font-medium text-navy transition-colors group-hover:text-brand-700">
                    {item}
                  </span>
                </motion.div>
              </motion.li>
            )
          })}
        </motion.ul>
      </div>
    </section>
  )
}
