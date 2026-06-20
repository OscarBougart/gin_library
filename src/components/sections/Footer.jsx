import { useState } from 'react'
import { useTranslation } from '../../hooks/useTranslation'
import LegalDialog from '../ui/LegalDialog'

const links = [
  { id: 'about', key: 'nav.about' },
  { id: 'cocktails', key: 'nav.cocktails' },
  { id: 'events', key: 'nav.events' },
  { id: 'gallery', key: 'nav.gallery' },
  { id: 'contact', key: 'nav.contact' },
]

/**
 * Dark closing footer: brand lockup, repeated nav, address and legal links.
 */
export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()
  const [legalKind, setLegalKind] = useState(null)

  return (
    <footer className="bg-ink px-6 py-16 text-cream">
      <div className="mx-auto max-w-container">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <span className="block text-[0.55rem] uppercase tracking-kicker text-cream/60">
              Speakeasy
            </span>
            <p className="mt-1 font-display text-2xl uppercase leading-none text-cream">
              The Gin Library
            </p>
            <span className="mt-1 block text-[0.55rem] uppercase tracking-kicker text-cream/60">
              Aachen
            </span>
            <p className="mt-5 max-w-xs font-sans text-sm leading-relaxed text-cream/70">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Nav */}
          <nav className="md:justify-self-center">
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="font-display text-sm uppercase tracking-widest text-cream/70 transition-colors hover:text-cream"
                  >
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Address */}
          <address className="not-italic md:justify-self-end">
            <p className="font-sans text-sm leading-relaxed text-cream/80">
              {t('contact.addressLine1')}
              <br />
              {t('contact.addressLine2')}
            </p>
            <a
              href={`tel:${t('contact.phone').replace(/\s+/g, '')}`}
              className="mt-3 block font-sans text-sm text-cream/80 transition-colors hover:text-cream"
            >
              {t('contact.phone')}
            </a>
            <a
              href={`mailto:${t('contact.email')}`}
              className="block font-sans text-sm text-cream/80 transition-colors hover:text-cream"
            >
              {t('contact.email')}
            </a>
          </address>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-cream/15 pt-6 sm:flex-row sm:items-center">
          <p className="font-sans text-xs text-cream/60">
            © {year} The Gin Library · {t('footer.rights')}
          </p>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => setLegalKind('imprint')}
              className="font-sans text-xs text-cream/60 transition-colors hover:text-cream"
            >
              {t('footer.imprint')}
            </button>
            <button
              type="button"
              onClick={() => setLegalKind('privacy')}
              className="font-sans text-xs text-cream/60 transition-colors hover:text-cream"
            >
              {t('footer.privacy')}
            </button>
          </div>
        </div>
      </div>

      <LegalDialog kind={legalKind} onClose={() => setLegalKind(null)} />
    </footer>
  )
}
