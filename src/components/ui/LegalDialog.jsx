import { useEffect, useRef } from 'react'
import { useTranslation } from '../../hooks/useTranslation'
import { legal } from '../../i18n/legal'

/**
 * Legal content (Impressum / Datenschutz) in a native <dialog>. The native
 * element gives us a real focus trap, Escape-to-close and a backdrop for free,
 * and escapes every parent stacking/overflow context. `kind` drives it:
 * 'imprint' | 'privacy' opens the modal, null closes it.
 *
 * @param {Object} props
 * @param {'imprint'|'privacy'|null} props.kind
 * @param {() => void} props.onClose
 */
export default function LegalDialog({ kind, onClose }) {
  const ref = useRef(null)
  const { lang } = useTranslation()

  // Sync the open state with the `kind` prop via the imperative dialog API.
  useEffect(() => {
    const dlg = ref.current
    if (!dlg) return
    if (kind && !dlg.open) dlg.showModal()
    else if (!kind && dlg.open) dlg.close()
  }, [kind])

  const content = kind ? legal[lang]?.[kind] ?? legal.de[kind] : null
  const closeLabel = lang === 'de' ? 'Schließen' : 'Close'

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === ref.current) onClose() // click on the ::backdrop
      }}
      className="m-auto w-[min(92vw,640px)] max-h-[85vh] overflow-y-auto rounded-sm border border-border/60 bg-surface text-foreground shadow-floating backdrop:bg-black/75"
    >
      {content && (
        <div className="p-8 sm:p-10">
          <div className="flex items-start justify-between gap-6">
            <h2 className="font-display text-2xl uppercase leading-none text-foreground sm:text-3xl">
              {content.title}
            </h2>
            <button
              type="button"
              onClick={onClose}
              aria-label={closeLabel}
              className="-mr-2 -mt-2 flex h-11 w-11 flex-none items-center justify-center text-2xl leading-none text-muted transition-colors hover:text-accent"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="mt-8 space-y-7">
            {content.sections.map((section, i) => (
              <section key={i}>
                <h3 className="font-display text-sm uppercase tracking-widest text-accent">
                  {section.heading}
                </h3>
                <div className="mt-3 space-y-1.5 font-sans text-sm leading-relaxed text-foreground/80">
                  {section.body.map((line, j) => (
                    <p key={j}>{line}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      )}
    </dialog>
  )
}
