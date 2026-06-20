import { useTranslation } from '../../hooks/useTranslation'
import SectionWrapper from '../ui/SectionWrapper'
import Reveal from '../ui/Reveal'
import { cocktails } from '../../data/images'

/**
 * Signature Cocktails — centred heading over the surface tone, then a grid of
 * cocktail close-ups that lift on hover. A top hairline marks the section.
 */
export default function SignatureCocktails() {
  const { t } = useTranslation()

  return (
    <SectionWrapper id="cocktails" className="border-t border-border/40 bg-surface">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl uppercase leading-none text-foreground sm:text-5xl">
          {t('cocktails.title')}
        </h2>
        <div className="mx-auto mt-6 h-px w-16 bg-border" />
        <p className="mt-7 font-sans text-base leading-relaxed text-foreground/75 sm:text-lg">
          {t('cocktails.subtitle')}
        </p>
      </Reveal>

      <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5">
        {cocktails.map((photo, i) => (
          <Reveal
            as="figure"
            key={i}
            delay={(i % 3) * 80}
            className="group overflow-hidden rounded-sm border border-border/40 bg-background"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full object-cover transition-transform duration-500 ease-reveal group-hover:scale-105"
            />
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  )
}
