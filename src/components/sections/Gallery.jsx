import { useTranslation } from '../../hooks/useTranslation'
import SectionWrapper from '../ui/SectionWrapper'
import Reveal from '../ui/Reveal'
import { gallery } from '../../data/images'

/**
 * Glimpses — an editorial masonry of every Gin Library photograph.
 */
export default function Gallery() {
  const { t } = useTranslation()

  return (
    <SectionWrapper id="gallery" className="border-t border-border/40 bg-surface">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl uppercase leading-none text-foreground sm:text-5xl">
          {t('gallery.title')}
        </h2>
        <div className="mx-auto mt-6 h-px w-16 bg-border" />
      </Reveal>

      <div className="mt-14 columns-2 gap-4 md:columns-3 lg:columns-4">
        {gallery.map((photo, i) => (
          <Reveal
            as="figure"
            key={i}
            delay={(i % 4) * 70}
            className="group mb-4 break-inside-avoid overflow-hidden rounded-sm border border-border/30"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              loading="lazy"
              decoding="async"
              className="w-full object-cover transition-transform duration-500 ease-reveal group-hover:scale-[1.04]"
            />
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  )
}
