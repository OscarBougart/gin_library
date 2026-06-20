import { useEffect, useRef } from 'react'

/**
 * Scroll-into-view reveal as progressive enhancement. The element is visible
 * by default (see index.css `[data-reveal]`); the hidden start state only
 * exists under `html.js`, and this observer adds `.is-visible` when it enters
 * the viewport. Reduced-motion / no-IntersectionObserver reveal immediately.
 *
 * @param {Object} props
 * @param {React.ElementType} [props.as] - Element to render (default "div").
 * @param {number} [props.delay] - Stagger delay in ms (transition-delay).
 * @param {string} [props.className]
 */
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...props }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || !('IntersectionObserver' in window)) {
      el.classList.add('is-visible')
      return
    }

    const io = new IntersectionObserver(
      (entries, obs) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            obs.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      data-reveal=""
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={className}
      {...props}
    >
      {children}
    </Tag>
  )
}
