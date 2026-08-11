import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import { navLinks } from '../data'

/**
 * Navbar — sticky, with a scroll-spy underline indicator that follows the
 * active section. Transparent over the hero, then turns white on scroll.
 * Fully keyboard-navigable with a mobile hamburger menu.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)

  // Track scroll position to switch navbar appearance.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scroll-spy: highlight the section currently in view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const solid = scrolled || open

  const handleLinkClick = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? 'border-b border-slate-200 bg-white/90 shadow-sm backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="container-page flex h-16 items-center justify-between sm:h-20"
      >
        {/* Brand */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            handleLinkClick('home')
          }}
          className={`group flex items-center gap-2 font-heading text-lg font-extrabold tracking-tight transition-colors ${
            solid ? 'text-navy' : 'text-white'
          }`}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-accent text-white shadow-glow transition-transform duration-300 group-hover:rotate-6">
            TS
          </span>
          <span className="hidden sm:inline">
            Shahadha<span className="text-accent">.</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map(({ id, label }) => {
            const isActive = active === id
            return (
              <li key={id} className="relative">
                <button
                  onClick={() => handleLinkClick(id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    solid
                      ? isActive
                        ? 'text-brand-700'
                        : 'text-slate-600 hover:text-navy'
                      : isActive
                        ? 'text-white'
                        : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className={`absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full ${
                        solid ? 'bg-brand-600' : 'bg-accent'
                      }`}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              </li>
            )
          })}
        </ul>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`rounded-lg p-2 text-2xl transition-colors lg:hidden ${
            solid ? 'text-navy' : 'text-white'
          }`}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-slate-100 bg-white/95 backdrop-blur-md lg:hidden"
          >
            <ul className="container-page flex flex-col gap-1 py-4">
              {navLinks.map(({ id, label }) => (
                <li key={id}>
                  <button
                    onClick={() => handleLinkClick(id)}
                    className={`w-full rounded-lg px-4 py-2.5 text-left text-sm font-medium transition-colors ${
                      active === id
                        ? 'bg-brand-50 text-brand-700'
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
