import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiSend, FiUser } from 'react-icons/fi'
import { FaLinkedinIn } from 'react-icons/fa'
import BlueprintBackground from './BlueprintBackground'
import MeasureLine from './MeasureLine'
import { contact } from '../data'
import { fadeUp, scalePop, staggerContainer, viewportOnce } from './motion'

/** Icon name → component mapping for the contact cards. */
const iconMap = {
  mail: FiMail,
  phone: FiPhone,
  linkedin: FaLinkedinIn,
}

/**
 * Contact — animated contact cards (email, phone, LinkedIn)
 * plus a simple, non-functional placeholder contact form.
 */
export default function Contact() {
  return (
    <section id="contact" className="section-pad relative overflow-hidden bg-navy text-white">
      <BlueprintBackground className="opacity-40" />
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-brand-600/25 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-accent/15 blur-3xl" />
      </div>

      <div className="container-page relative z-10">
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-12 text-center sm:mb-16"
        >
          <motion.span variants={fadeUp} className="eyebrow !bg-brand-500/15 !text-brand-200 !ring-brand-400/30">
            Contact
          </motion.span>
          <motion.h2 variants={fadeUp} className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {contact.heading}
          </motion.h2>
          <motion.div variants={fadeUp} className="mx-auto mt-6">
            <MeasureLine tone="dark" className="w-full max-w-[320px]" />
          </motion.div>
          <motion.p variants={fadeUp} className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            {contact.tagline}
          </motion.p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Contact cards */}
          <motion.ul
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid content-start gap-4 sm:grid-cols-2"
          >
            {contact.items.map((item) => {
              const Icon = iconMap[item.icon]
              return (
                <motion.li key={item.label} variants={fadeUp}>
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group flex h-full flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition-colors duration-300 hover:border-brand-400/50 hover:bg-white/10"
                  >
                    <motion.span
                      variants={scalePop}
                      className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600 text-white shadow-card transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110"
                    >
                      <Icon size={20} aria-hidden="true" />
                    </motion.span>
                    <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                      {item.label}
                    </span>
                    <span className="break-all text-sm font-medium text-white">
                      {item.value}
                    </span>
                  </a>
                </motion.li>
              )
            })}
          </motion.ul>

          {/* Contact form (placeholder — non-functional) */}
          <motion.form
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            onSubmit={(e) => e.preventDefault()}
            aria-label="Contact form"
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8"
          >
            <h3 className="mb-6 text-xl font-bold">Send a Message</h3>
            <div className="space-y-4">
              <label className="block">
                <span className="mb-1.5 flex items-center gap-2 text-sm font-medium text-slate-300">
                  <FiUser aria-hidden="true" /> Name
                </span>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder-slate-400 transition-colors focus:border-brand-400 focus:outline-none focus:ring-1 focus:ring-brand-400"
                />
              </label>
              <label className="block">
                <span className="mb-1.5 flex items-center gap-2 text-sm font-medium text-slate-300">
                  <FiMail aria-hidden="true" /> Email
                </span>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder-slate-400 transition-colors focus:border-brand-400 focus:outline-none focus:ring-1 focus:ring-brand-400"
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-slate-300">Message</span>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder-slate-400 transition-colors focus:border-brand-400 focus:outline-none focus:ring-1 focus:ring-brand-400"
                />
              </label>
              <button type="submit" className="btn-accent w-full">
                Send Message
                <FiSend />
              </button>
              <p className="text-center text-xs text-slate-400">
                This is a placeholder form — please use the contact cards above.
              </p>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
