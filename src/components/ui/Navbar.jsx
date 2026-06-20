import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from '../../hooks/useTranslation'
import LanguageToggle from './LanguageToggle'
import Button from './Button'

const links = [
  { id: 'about', key: 'nav.about' },
  { id: 'cocktails', key: 'nav.cocktails' },
  { id: 'events', key: 'nav.events' },
  { id: 'gallery', key: 'nav.gallery' },
  { id: 'contact', key: 'nav.contact' },
]

/**
 * Fixed navigation. Transparent (cream-on-photo) over the hero, then resolves
 * to a solid dark bar with a hairline once the page scrolls. Stacked brand
 * lockup on the left, letter-spaced anchor links + DE/EN + reserve on the right.
 */
export default function Navbar() {
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const dark = scrolled || open // dark text surface when bar is solid
  const linkColor = dark
    ? 'text-accent hover:text-cream'
    : 'text-accent hover:text-cream text-on-photo'

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        dark
          ? 'border-b border-border/20 bg-background'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="flex items-center justify-between px-6 py-4 lg:px-10">
        {/* Brand lockup */}
        <a href="#hero" className="group flex flex-col leading-none" aria-label="The Gin Library">
          <span
            className={`text-[.8rem] font-medium uppercase tracking-kicker text-accent ${
              dark ? '' : 'text-on-photo'
            }`}
          >
            Cocktail Bar
          </span>
          <span
            className={`font-display text-[2.5rem] uppercase tracking-wide text-accent transition-colors ${
              dark ? '' : 'text-on-photo'
            }`}
          >
            The Gin Library
          </span>
          <span
            className={`text-[1rem] font-medium uppercase tracking-kicker text-accent ${
              dark ? '' : 'text-on-photo'
            }`}
          >
            Aachen
          </span>
        </a>

        {/* Right group: nav links + controls */}
        <div className="flex items-center gap-6 lg:gap-9">
          <ul className="hidden items-center gap-7 lg:flex">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`inline-flex min-h-[44px] items-center font-display text-l uppercase tracking-widest transition-colors ${linkColor}`}
                >
                  {t(link.key)}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <LanguageToggle dark={dark} />
            <Button
              as="a"
              href="#contact"
              variant={dark ? 'outline' : 'brand'}
              className="hidden px-5 py-2 sm:inline-flex"
            >
              {t('nav.reserve')}
            </Button>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="flex h-11 w-11 items-center justify-center text-accent lg:hidden"
            >
              <span className="relative block h-3 w-5">
                <span
                  className={`absolute left-0 top-0 h-px w-5 bg-current transition-transform ${
                    open ? 'translate-y-1.5 rotate-45' : ''
                  }`}
                />
                <span
                  className={`absolute bottom-0 left-0 h-px w-5 bg-current transition-transform ${
                    open ? '-translate-y-1 -rotate-45' : ''
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile dropdown panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-border/15 bg-background lg:hidden"
          >
            <ul className="mx-auto flex max-w-container flex-col px-6 py-2">
              {links.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    className="block border-b border-border/10 py-4 font-display text-sm uppercase tracking-widest text-foreground"
                  >
                    {t(link.key)}
                  </a>
                </li>
              ))}
              <li className="py-4">
                <Button as="a" href="#contact" variant="outline" onClick={() => setOpen(false)}>
                  {t('nav.reserve')}
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
