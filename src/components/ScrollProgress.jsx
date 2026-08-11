import { motion, useScroll, useSpring } from 'framer-motion'

/**
 * ScrollProgress — thin animated progress bar fixed to the top of the page
 * that fills as the user scrolls. Sits above the navbar.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25, restDelta: 0.001 })

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-brand-600 via-brand-400 to-accent"
    />
  )
}
