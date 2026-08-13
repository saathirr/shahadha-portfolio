import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewportOnce } from './motion'
import MeasureLine from './MeasureLine'

/**
 * Reusable section heading — eyebrow label + title + optional description.
 * Animates as a staggered block when scrolled into view, with a
 * self-drawing QS measurement line beneath the title.
 */
export default function SectionHeading({ eyebrow, title, description, center = true }) {
  return (
    <motion.div
      variants={staggerContainer(0.12)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={`mb-12 sm:mb-16 ${center ? 'text-center' : ''}`}
    >
      {eyebrow && (
        <motion.span variants={fadeUp} className="eyebrow">
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        variants={fadeUp}
        className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[2.75rem]"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeUp}
          className={`mt-4 max-w-2xl text-base leading-relaxed text-slate-500 sm:text-lg ${
            center ? 'mx-auto' : ''
          }`}
        >
          {description}
        </motion.p>
      )}
      <motion.div variants={fadeUp} className={`${center ? 'mx-auto' : ''} mt-6`}>
        <MeasureLine className="w-full max-w-[320px]" />
      </motion.div>
    </motion.div>
  )
}
