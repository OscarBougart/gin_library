import { useTranslation } from '../../hooks/useTranslation'

const options = [
  { code: 'de', label: 'DE' },
  { code: 'en', label: 'EN' },
]

/**
 * DE / EN segmented switch. Gold to match the rest of the top bar: gold
 * outline, idle labels in dimmed gold, the active language a solid gold chip.
 *
 * @param {Object} props
 * @param {boolean} [props.dark] - True when sitting on a solid (dark) bar.
 */
export default function LanguageToggle({ dark = false }) {
  const { lang, setLang } = useTranslation()

  return (
    <div
      className="flex items-center rounded-sm border border-accent/50"
      role="group"
      aria-label="Language / Sprache"
    >
      {options.map((option) => {
        const active = lang === option.code
        const activeCls = 'bg-accent text-background'
        const idleCls = 'text-accent/70 hover:text-accent'
        return (
          <button
            key={option.code}
            type="button"
            onClick={() => setLang(option.code)}
            aria-pressed={active}
            className={`inline-flex min-h-[44px] items-center justify-center px-3 font-display text-[0.7rem] uppercase tracking-widest transition-colors ${
              active ? activeCls : idleCls
            }`}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}
