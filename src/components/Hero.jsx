import { motion } from 'framer-motion'
import { FiArrowRight, FiMapPin } from 'react-icons/fi'
import { BsRulers } from 'react-icons/bs'
import { MdOutlineArchitecture, MdOutlineLightbulb } from 'react-icons/md'
import BlueprintBackground from './BlueprintBackground'
import RotatingBadge from './RotatingBadge'
import TypeWriter from './TypeWriter'
import { flipIn } from './motion'
import WordReveal from './WordReveal'
import { hero, personalInfo, skills } from '../data'

/**
 * Hero / Landing — dark navy blueprint-themed intro with:
 *  - large two-line name reveal ("Thowfeek Shahadha") with animated gradient
 *    text + glow on the surname
 *  - typewriter effect cycling through the CV roles
 *  - circular profile photo with rotating badge ring + pulse rings
 *    (centered on mobile, right column on desktop)
 *  - animated gradient blobs + blueprint grid background
 *  - skills marquee ticker along the bottom edge
 */
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const roleWords = personalInfo.subtitle.split('|').map((r) => r.trim())

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col overflow-hidden bg-navy text-white"
    >
      {/* Subtle background layers */}
      <BlueprintBackground className="opacity-60" />

      {/* Animated gradient blobs */}
      <div aria-hidden="true" className="absolute inset-0">
        <motion.div
          animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -left-24 top-10 h-96 w-96 rounded-full bg-brand-600/30 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-accent/20 blur-3xl"
        />
      </div>

      {/* Floating construction-themed line art */}
      <motion.div
        aria-hidden="true"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        className="absolute right-[10%] top-16 hidden text-brand-400/30 xl:block"
      >
        <MdOutlineArchitecture size={140} />
      </motion.div>
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-[8%] top-1/4 hidden text-accent/25 lg:block"
      >
        <BsRulers size={90} />
      </motion.div>

      {/* Hero content */}
      <div className="container-page relative z-10 flex flex-1 items-center pb-16 pt-28 sm:pt-32 lg:pb-24">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
          {/* Text content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="mx-auto max-w-2xl text-center lg:mx-0 lg:max-w-none lg:text-left"
          >
            {/* Profile photo — centered on mobile/tablet, hidden on desktop */}
            <motion.div variants={flipIn} className="relative mx-auto mb-8 h-36 w-36 sm:h-40 sm:w-40 lg:hidden">
              <span className="absolute inset-0 rounded-full bg-brand-500/40 animate-pulse-ring" />
              <span
                className="absolute inset-0 rounded-full bg-accent/40 animate-pulse-ring"
                style={{ animationDelay: '0.8s' }}
              />
              <div className="relative h-full w-full rounded-full bg-gradient-to-br from-brand-500 to-accent p-1.5 shadow-lift">
                <img
                  src={personalInfo.profilePhoto}
                  alt="Portrait of Thowfeek Shahadha"
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-200 backdrop-blur"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <FiMapPin aria-hidden="true" />
              {personalInfo.location}
            </motion.p>

            {/* Two-line visual name reveal */}
            <motion.h1
              aria-label={personalInfo.name}
              className="font-heading font-extrabold leading-[1.02] tracking-tight"
            >
              <motion.span
                aria-hidden="true"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25, ease: 'easeOut' }}
                className="block text-[2.6rem] text-white sm:text-6xl md:text-7xl"
              >
                Thowfeek
              </motion.span>
              <motion.span
                aria-hidden="true"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45, ease: 'easeOut' }}
                className="gradient-text text-glow block text-[2.6rem] sm:text-6xl md:text-7xl lg:text-[5.25rem]"
              >
                Shahadha
              </motion.span>
            </motion.h1>

            {/* Typewriter roles */}
            <motion.p
              variants={fadeUp}
              className="mt-5 min-h-[2rem] text-lg font-semibold text-slate-200 sm:text-xl"
            >
              <TypeWriter words={roleWords} className="text-brand-300" />
            </motion.p>

            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-300 lg:mx-0">
              <WordReveal text={hero.tagline} />
            </p>

            {/* CTA buttons */}
            <motion.div
              variants={fadeUp}
              className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
            >
              <a
                href={hero.primaryCta.href}
                className="btn-accent"
              >
                {hero.primaryCta.label}
                <FiArrowRight />
              </a>
            </motion.div>

            {/* Quick-fact chips derived from the CV data */}
            <motion.ul
              variants={fadeUp}
              className="mt-10 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
            >
              <li className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-300 backdrop-blur">
                <BsRulers className="text-accent" aria-hidden="true" />
                NVQ Level 5 — IIBT
              </li>
              <li className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-300 backdrop-blur">
                <MdOutlineLightbulb className="text-accent" aria-hidden="true" />
                {skills.length}+ Skills
              </li>
              <li className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-300 backdrop-blur">
                <FiMapPin className="text-accent" aria-hidden="true" />
                Based in Sri Lanka
              </li>
            </motion.ul>
          </motion.div>

          {/* Profile photo — right column on desktop with rotating badge */}
          <motion.div
            variants={flipIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.7, ease: 'easeOut' }}
            className="relative hidden justify-center lg:flex"
          >
            <div className="relative h-72 w-72 xl:h-80 xl:w-80">
              {/* Pulse rings */}
              <span className="absolute inset-4 rounded-full bg-brand-500/30 animate-pulse-ring" />
              <span
                className="absolute inset-4 rounded-full bg-accent/30 animate-pulse-ring"
                style={{ animationDelay: '0.9s' }}
              />
              {/* Rotating circular text badge */}
              <RotatingBadge
                text="QUANTITY SURVEYING STUDENT • COST MANAGEMENT • ASPIRING QUANTITY SURVEYOR • "
                className="absolute -inset-6 animate-float"
              />
              {/* Photo */}
              <div className="absolute inset-0">
                <div className="h-full w-full animate-float rounded-full bg-gradient-to-br from-brand-500 via-brand-600 to-accent p-1.5 shadow-glow">
                  <img
                    src={personalInfo.profilePhoto}
                    alt="Portrait of Thowfeek Shahadha"
                    className="h-full w-full rounded-full object-cover ring-4 ring-white/20"
                  />
                </div>
              </div>
              {/* Floating chips */}
              <motion.span
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-4 top-8 rounded-xl bg-white/10 px-3 py-2 text-xs font-bold text-white shadow-card backdrop-blur"
              >
                QS
              </motion.span>
              <motion.span
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -right-4 bottom-10 rounded-xl bg-accent px-3 py-2 text-xs font-bold text-navy shadow-card"
              >
                NVQ L5
              </motion.span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Skills marquee ticker */}
      <div className="relative z-10 border-t border-white/10 bg-white/5 py-4 backdrop-blur">
        <div className="flex overflow-hidden" aria-hidden="true">
          {[0, 1].map((dup) => (
            <ul
              key={dup}
              className="flex shrink-0 animate-marquee items-center gap-10 pr-10 whitespace-nowrap"
            >
              {skills.map((skill, i) => (
                <li
                  key={`${dup}-${i}`}
                  className="flex items-center gap-10 text-sm font-semibold uppercase tracking-widest text-slate-300"
                >
                  {skill}
                  <BsRulers className="text-accent" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  )
}
