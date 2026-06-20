import { motion } from 'framer-motion'
import { useTranslation } from '../../hooks/useTranslation'
import Button from '../ui/Button'
import { images } from '../../data/images'

const rise = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.1 + i * 0.12, ease: [0.4, 0, 0.2, 1] },
  }),
}

/**
 * Full-bleed hero: the bar interior under a dark wash, with a centred Catorze
 * wordmark lockup (gold title), cream tagline and gold-outline CTA.
 */
export default function Hero() {
  const { t } = useTranslation()

  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background photograph */}
      <img
        src={images.interior.src}
        alt=""
        aria-hidden="true"
        fetchpriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Legibility wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/55 to-ink/80" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <motion.p
          variants={rise}
          custom={0}
          initial="hidden"
          animate="show"
          className="text-xs uppercase tracking-kicker text-cream"
        >
          {t('hero.kicker')}
        </motion.p>

        <motion.h1
          variants={rise}
          custom={1}
          initial="hidden"
          animate="show"
          className="mt-6 font-display text-5xl uppercase leading-none text-accent sm:text-7xl md:text-8xl"
        >
          {t('hero.name')}
        </motion.h1>

        <motion.p
          variants={rise}
          custom={2}
          initial="hidden"
          animate="show"
          className="mx-auto mt-7 max-w-xl font-sans text-base leading-relaxed text-cream/90 sm:text-lg"
        >
          {t('hero.tagline')}
        </motion.p>

        <motion.div variants={rise} custom={3} initial="hidden" animate="show" className="mt-10">
          <Button as="a" href="#contact" variant="brand">
            {t('hero.cta')}
          </Button>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        variants={rise}
        custom={4}
        initial="hidden"
        animate="show"
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 text-cream/70 transition-colors hover:text-cream"
        aria-label={t('hero.scroll')}
      >
        <span className="font-display text-[0.65rem] uppercase tracking-kicker">{t('hero.scroll')}</span>
        <span className="block h-10 w-px bg-cream/50" />
      </motion.a>
    </section>
  )
}
