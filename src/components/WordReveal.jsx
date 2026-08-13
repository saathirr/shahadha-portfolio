import { motion } from 'framer-motion'
import { fadeWord, staggerContainer, viewportOnce } from './motion'

/**
 * One-word-at-a-time reveal for intro paragraphs.
 * Splits text into words that cascade in with a gentle lift.
 */
export default function WordReveal({ text, className = '', delay = 0 }) {
  const words = text.split(' ')
  return (
    <motion.span
      variants={staggerContainer(0.045, delay)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={className}
      aria-label={text}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={fadeWord}
          className="inline-block"
          aria-hidden="true"
        >
          {word}
          {i < words.length - 1 ? '\u00A0' : ''}
        </motion.span>
      ))}
    </motion.span>
  )
}
