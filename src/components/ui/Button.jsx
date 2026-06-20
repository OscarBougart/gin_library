// Button: sharp 2px corners, condensed caps label, 0.2s colour transition.
// Dark theme — gold (accent) is the highlight colour:
//   solid   → filled gold CTA, dark label. The primary action.
//   brand   → gold-outline CTA used over photography, fills gold on hover.
//   outline → quiet gold-outline secondary action.
const base =
  'inline-flex items-center justify-center rounded-sm px-7 py-3 font-display text-sm uppercase tracking-widest transition-colors duration-200 ease-in-out focus:outline focus:outline-2 focus:outline-offset-2'

const variants = {
  solid:
    'border border-accent bg-accent text-background hover:bg-accent-strong hover:border-accent-strong focus:outline-accent',
  brand:
    'border border-accent text-accent hover:bg-accent hover:text-background focus:outline-accent',
  outline:
    'border border-accent/50 text-accent hover:bg-accent hover:border-accent hover:text-background focus:outline-accent',
}

/**
 * @param {Object} props
 * @param {React.ElementType} [props.as] - Element to render (defaults to "button").
 * @param {'brand'|'solid'|'outline'} [props.variant]
 * @param {string} [props.className]
 */
export default function Button({
  as: Component = 'button',
  variant = 'outline',
  className = '',
  children,
  ...props
}) {
  const styles = variants[variant] ?? variants.outline
  return (
    <Component className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </Component>
  )
}
