/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Tokens are defined in src/index.css (:root). Edit them there.
        // rgb(var(--x) / <alpha-value>) keeps the /opacity modifier working.
        background: 'rgb(var(--color-background) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        elevated: 'rgb(var(--color-elevated) / <alpha-value>)',
        foreground: 'rgb(var(--color-foreground) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        border: 'rgb(var(--color-border) / <alpha-value>)',
        accent: {
          DEFAULT: 'rgb(var(--color-accent) / <alpha-value>)',
          strong: 'rgb(var(--color-accent-strong) / <alpha-value>)',
          warm: 'rgb(var(--color-accent-warm) / <alpha-value>)',
        },
        // Back-compat aliases for existing markup.
        cream: 'rgb(var(--color-cream) / <alpha-value>)',
        ink: 'rgb(var(--color-ink) / <alpha-value>)',
      },
      fontFamily: {
        // Defined in src/index.css (:root). Edit them there.
        display: 'var(--font-display)',
        sans: 'var(--font-sans)',
      },
      letterSpacing: {
        widest: '0.2em',
        kicker: '0.35em',
      },
      borderRadius: {
        // Restrict to the system's radius scale; default to 2px.
        DEFAULT: '2px',
        sm: '2px',
        md: '3px',
        lg: '4px',
      },
      boxShadow: {
        // Elevation tokens from the design system.
        raised: '0 0 5px 2px rgba(0,0,0,0.1)',
        floating: '0 0 10px 2px rgba(0,0,0,0.1)',
      },
      maxWidth: {
        container: '1140px',
      },
      transitionTimingFunction: {
        reveal: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
