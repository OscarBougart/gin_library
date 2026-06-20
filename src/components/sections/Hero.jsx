import { motion } from 'framer-motion'
import { useTranslation } from '../../hooks/useTranslation'
import Button from '../ui/Button'
import { images } from '../../data/images'

const EASE = [0.22, 1, 0.36, 1] // ease-out-quint

const wordmark = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.2 } },
}
const glyph = {
  hidden: { opacity: 0, y: 18, filter: 'blur(8px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: EASE } },
}
const fade = {
  hidden: { opacity: 0, y: 18 },
  show: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.8, delay: d, ease: EASE } }),
}

/**
 * Renders the wordmark split into per-word / per-letter spans so wrapping is
 * stable across breakpoints. `plain` returns inert spans (used by the sheen
 * overlay); otherwise each letter is a staggered motion span.
 */
function SplitWordmark({ text, plain = false }) {
  const words = text.split(' ')
  const Letter = plain ? 'span' : motion.span
  return words.map((word, wi) => (
    <span key={wi} className="inline-block whitespace-nowrap">
      {[...word].map((ch, ci) => (
        <Letter key={ci} className="inline-block" {...(plain ? {} : { variants: glyph })}>
          {ch}
        </Letter>
      ))}
      {wi < words.length - 1 ? <span className="inline-block">&nbsp;</span> : null}
    </span>
  ))
}

/**
 * Full-bleed hero over the bar interior. The gold wordmark resolves letter by
 * letter on load, then a single cream sheen sweeps across it once. Kicker,
 * tagline and CTA rise in after.
 */
export default function Hero() {
  const { t } = useTranslation()
  const name = t('hero.name')

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background photograph (painted first; wash + content layer on top by
          DOM order, so no negative z-index that could escape the stacking ctx) */}
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

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <motion.p
          variants={fade}
          custom={0.15}
          initial="hidden"
          animate="show"
          className="text-xs uppercase tracking-kicker text-cream"
        >
          {t('hero.kicker')}
        </motion.p>

        <h1
          aria-label={name}
          className="relative mt-6 font-display text-5xl uppercase leading-none text-accent sm:text-7xl md:text-8xl"
        >
          {/* Animated gold lettering */}
          <motion.span
            variants={wordmark}
            initial="hidden"
            animate="show"
            aria-hidden="true"
            className="hero-wordmark inline-block"
          >
            <SplitWordmark text={name} />
          </motion.span>

          {/* Sheen sweep: solid-cream duplicate revealed through a moving mask.
              Not background-clip:text — the fill is a single solid colour. */}
          <span aria-hidden="true" className="hero-sheen pointer-events-none absolute inset-0">
            <SplitWordmark text={name} plain />
          </span>
        </h1>

        <motion.p
          variants={fade}
          custom={0.9}
          initial="hidden"
          animate="show"
          className="mx-auto mt-7 max-w-xl font-sans text-base leading-relaxed text-cream/90 sm:text-lg"
        >
          {t('hero.tagline')}
        </motion.p>

        <motion.div variants={fade} custom={1.1} initial="hidden" animate="show" className="mt-10">
          <Button as="a" href="#contact" variant="brand">
            {t('hero.cta')}
          </Button>
        </motion.div>
      </div>

      {/* Scroll cue. Centering lives on a static wrapper because framer-motion
          writes an inline transform on the link, which would otherwise override
          the -translate-x-1/2 centering. */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <motion.a
          href="#about"
          variants={fade}
          custom={1.4}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center gap-3 text-cream/70 transition-colors hover:text-cream"
          aria-label={t('hero.scroll')}
        >
          <span className="font-display text-[0.65rem] uppercase tracking-kicker">
            {t('hero.scroll')}
          </span>
          <span className="block h-10 w-px bg-cream/50" />
        </motion.a>
      </div>
    </section>
  )
}
