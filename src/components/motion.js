/**
 * Shared Framer Motion variants + helpers used across sections.
 * Keeping these central ensures consistent, tasteful animation timing.
 */

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, ease: 'easeOut' },
  },
}

/** Fade up with a soft blur sweep — feels airy and premium. */
export const fadeUpBlur = {
  hidden: { opacity: 0, y: 34, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

/** Slide in horizontally from the left (measurement-line motif). */
export const slideLeft = {
  hidden: { opacity: 0, x: -56 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
}

/** Slide in horizontally from the right. */
export const slideRight = {
  hidden: { opacity: 0, x: 56 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
}

/** 3D flip on the Y axis — a "drawing board being rotated into view". */
export const flipIn = {
  hidden: { opacity: 0, rotateY: -75, scale: 0.88, y: 20 },
  visible: {
    opacity: 1,
    rotateY: 0,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

/** Popping scale spring — great for dots, checkmarks and icon badges. */
export const scalePop = {
  hidden: { opacity: 0, scale: 0.3 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 400, damping: 15 },
  },
}

/** One-word-at-a-time reveal used for intro paragraphs. */
export const fadeWord = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.32, ease: 'easeOut' },
  },
}

/** Container that staggers its children by ~0.1s each. */
export const staggerContainer = (stagger = 0.1, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren },
  },
})

export const viewportOnce = { once: true, amount: 0.25 }
