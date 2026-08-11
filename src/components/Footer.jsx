import { motion } from 'framer-motion'
import { FaLinkedinIn, FaBehance } from 'react-icons/fa'
import { FiMail, FiPhone } from 'react-icons/fi'
import { personalInfo } from '../data'
import { fadeUp, staggerContainer, viewportOnce } from './motion'

/**
 * Footer — simple closing bar with name, copyright year,
 * and a small row of social icons.
 */
export default function Footer() {
  const year = new Date().getFullYear()

  const socials = [
    { label: 'Email', href: `mailto:${personalInfo.email}`, Icon: FiMail },
    { label: 'Phone', href: `tel:${personalInfo.phoneHref}`, Icon: FiPhone },
    { label: 'LinkedIn', href: personalInfo.linkedin, Icon: FaLinkedinIn },
    { label: 'Behance', href: personalInfo.behance, Icon: FaBehance },
  ]

  return (
    <footer className="border-t border-navy/10 bg-navy-dark py-10 text-slate-400">
      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="container-page flex flex-col items-center justify-between gap-5 sm:flex-row"
      >
        <motion.p variants={fadeUp} className="text-sm">
          © {year} {personalInfo.name}. All rights reserved.
        </motion.p>

        <motion.ul variants={fadeUp} className="flex items-center gap-3">
          {socials.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-brand-400 hover:bg-brand-600 hover:text-white"
              >
                <Icon size={17} aria-hidden="true" />
              </a>
            </li>
          ))}
        </motion.ul>
      </motion.div>
    </footer>
  )
}
