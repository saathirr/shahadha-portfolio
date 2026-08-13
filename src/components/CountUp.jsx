import { useEffect, useRef, useState } from 'react'
import { animate, useInView, useReducedMotion } from 'framer-motion'

/**
 * CountUp — animates a number from 0 to `to` when scrolled into view.
 * Used for QS-style metrics (percentages, counts, measurements).
 */
export default function CountUp({
  to,
  duration = 1.8,
  prefix = '',
  suffix = '',
  className = '',
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const prefersReduced = useReducedMotion()
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (prefersReduced) {
      setValue(to)
      return
    }
    const controls = animate(0, to, {
      duration,
      ease: 'easeOut',
      onUpdate: (v) => setValue(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, to, duration, prefersReduced])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value}
      {suffix}
    </span>
  )
}