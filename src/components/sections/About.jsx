import { useTranslation } from '../../hooks/useTranslation'
import SectionWrapper from '../ui/SectionWrapper'
import Reveal from '../ui/Reveal'
import { images } from '../../data/images'

/**
 * "Between the Lines" — split column: story text beside the gin flight photo.
 * Keeps the one deliberate section kicker for the brand's narrative opener.
 */
export default function About() {
  const { t } = useTranslation()
  const photo = images.ginFlight

  return (
    <SectionWrapper id="about" className="bg-background">
      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
        {/* Text column */}
        <Reveal>
          <span className="kicker">{t('about.kicker')}</span>
          <h2 className="mt-5 font-display text-4xl uppercase leading-none text-foreground sm:text-5xl">
            {t('about.title')}
          </h2>
          <div className="mt-6 h-px w-16 bg-border" />
          <p className="mt-7 max-w-prose font-sans text-base leading-relaxed text-foreground/80 sm:text-lg">
            {t('about.body')}
          </p>
        </Reveal>

        {/* Image column */}
        <Reveal delay={120} className="relative">
          <img
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            loading="lazy"
            decoding="async"
            className="aspect-[4/5] w-full rounded-sm object-cover shadow-raised"
          />
          <span className="absolute -bottom-3 -left-3 -z-10 hidden h-full w-full rounded-sm border border-border md:block" />
        </Reveal>
      </div>
    </SectionWrapper>
  )
}
