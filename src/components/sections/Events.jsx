import { useTranslation } from '../../hooks/useTranslation'
import SectionWrapper from '../ui/SectionWrapper'
import Reveal from '../ui/Reveal'
import Button from '../ui/Button'
import { images } from '../../data/images'

/**
 * Two offerings side by side: Corporate Events and Gin Tastings (€69 / person),
 * each an image-topped card on the system surface.
 */
export default function Events() {
  const { t } = useTranslation()
  const corporate = images.cocktailPair
  const tasting = images.ginBalloon

  return (
    <SectionWrapper id="events" className="bg-background">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl uppercase leading-none text-foreground sm:text-5xl">
          {t('events.title')}
        </h2>
        <div className="mx-auto mt-6 h-px w-16 bg-border" />
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-2 md:gap-8">
        {/* Corporate Events */}
        <Reveal
          as="article"
          className="flex flex-col overflow-hidden rounded-sm border border-border/60 bg-surface shadow-raised"
        >
          <img
            src={corporate.src}
            alt={corporate.alt}
            width={corporate.width}
            height={corporate.height}
            loading="lazy"
            decoding="async"
            className="aspect-[16/10] w-full object-cover"
          />
          <div className="flex flex-1 flex-col p-8">
            <h3 className="font-display text-2xl uppercase leading-none text-foreground">
              {t('events.corporate.title')}
            </h3>
            <p className="mt-4 flex-1 font-sans leading-relaxed text-foreground/75">
              {t('events.corporate.body')}
            </p>
            <div className="mt-7">
              <Button as="a" href="#contact" variant="outline">
                {t('events.corporate.cta')}
              </Button>
            </div>
          </div>
        </Reveal>

        {/* Gin Tastings */}
        <Reveal
          as="article"
          delay={120}
          className="flex flex-col overflow-hidden rounded-sm border border-border/60 bg-surface shadow-raised"
        >
          <img
            src={tasting.src}
            alt={tasting.alt}
            width={tasting.width}
            height={tasting.height}
            loading="lazy"
            decoding="async"
            className="aspect-[16/10] w-full object-cover"
          />
          <div className="flex flex-1 flex-col p-8">
            <h3 className="font-display text-2xl uppercase leading-none text-foreground">
              {t('events.ginTastings.title')}
            </h3>
            <p className="mt-4 flex-1 font-sans leading-relaxed text-foreground/75">
              {t('events.ginTastings.body')}
            </p>
            <div className="mt-6 flex items-baseline gap-3 border-t border-border/40 pt-6">
              <span className="font-display text-3xl text-foreground">
                {t('events.ginTastings.price')}
              </span>
              <span className="font-sans text-sm text-muted">
                {t('events.ginTastings.priceNote')}
              </span>
            </div>
            <div className="mt-7">
              <Button as="a" href="#contact" variant="outline">
                {t('events.ginTastings.cta')}
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionWrapper>
  )
}
