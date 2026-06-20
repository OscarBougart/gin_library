/**
 * Section shell: anchor id, consistent vertical rhythm and a 1140px inner
 * column. Scroll reveals are applied per-block via <Reveal>, so the section
 * background is always painted and content is never gated on a scroll event.
 *
 * @param {Object} props
 * @param {string} props.id - Anchor id used by the navbar links.
 * @param {string} [props.className] - Extra classes on the <section>.
 * @param {string} [props.innerClassName] - Extra classes on the inner column.
 * @param {boolean} [props.fluid] - Drop the max-width column (full-bleed content).
 */
export default function SectionWrapper({
  id,
  className = '',
  innerClassName = '',
  fluid = false,
  children,
}) {
  return (
    <section id={id} className={`scroll-mt-20 px-6 py-24 ${className}`}>
      <div className={fluid ? innerClassName : `mx-auto max-w-container ${innerClassName}`}>
        {children}
      </div>
    </section>
  )
}
