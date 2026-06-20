import { useTranslation } from '../../hooks/useTranslation'
import Reveal from '../ui/Reveal'
import Button from '../ui/Button'
import { images } from '../../data/images'

// Google Maps link for the venue.
const MAP_URL = 'https://www.google.com/maps/search/?api=1&query=Am+B%C3%BCchel+11%2C+52062+Aachen'

/**
 * Contact — a dimmed full-bleed "tout" over the interior photograph: opening
 * hours, address, phone/email and a closing reservation CTA in cream-on-dark.
 */
export default function Contact() {
  const { t } = useTranslation()

  const phone = t('contact.phone')
  const telHref = `tel:${phone.replace(/\s+/g, '')}`
  const email = t('contact.email')

  return (
    <section id="contact" className="relative scroll-mt-20 overflow-hidden">
      <img
        src={images.interior.src}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/80" />

      <Reveal className="relative mx-auto max-w-container px-6 py-24 text-cream">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl uppercase leading-none text-cream sm:text-5xl">
            {t('contact.title')}
          </h2>
          <div className="mt-6 h-px w-16 bg-cream/50" />
          <p className="mt-7 font-sans text-base leading-relaxed text-cream/80 sm:text-lg">
            {t('contact.intro')}
          </p>
        </div>

        <div className="mt-12 grid gap-10 border-t border-cream/20 pt-12 sm:grid-cols-2 lg:grid-cols-3">
          {/* Opening hours */}
          <div>
            <h3 className="font-display text-sm uppercase tracking-widest text-cream/70">
              {t('contact.hoursTitle')}
            </h3>
            <ul className="mt-4 space-y-1 font-sans text-cream/90">
              <li>{t('contact.hoursWeekday')}</li>
              <li>{t('contact.hoursWeekend')}</li>
              <li>{t('contact.hoursClosed')}</li>
            </ul>
          </div>

          {/* Address + map */}
          <div>
            <h3 className="font-display text-sm uppercase tracking-widest text-cream/70">
              {t('contact.addressTitle')}
            </h3>
            <address className="mt-4 not-italic font-sans text-cream/90">
              <p>{t('contact.addressLine1')}</p>
              <p>{t('contact.addressLine2')}</p>
            </address>
            <a
              href={MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block font-sans text-sm text-cream underline decoration-cream/50 underline-offset-4 transition-colors hover:decoration-cream"
            >
              {t('contact.mapLink')}
            </a>
          </div>

          {/* Phone + email */}
          <div className="space-y-6">
            <div>
              <h3 className="font-display text-sm uppercase tracking-widest text-cream/70">
                {t('contact.phoneLabel')}
              </h3>
              <a
                href={telHref}
                className="mt-4 inline-block font-sans text-cream/90 transition-colors hover:text-cream"
              >
                {phone}
              </a>
            </div>
            <div>
              <h3 className="font-display text-sm uppercase tracking-widest text-cream/70">
                {t('contact.emailLabel')}
              </h3>
              <a
                href={`mailto:${email}`}
                className="mt-4 inline-block font-sans text-cream/90 transition-colors hover:text-cream"
              >
                {email}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <Button as="a" href={`mailto:${email}`} variant="brand">
            {t('contact.cta')}
          </Button>
        </div>
      </Reveal>
    </section>
  )
}
