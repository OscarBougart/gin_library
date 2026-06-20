import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MotionConfig } from 'framer-motion'
import App from './App.jsx'
import { LanguageProvider } from './context/LanguageContext.jsx'
import './index.css'

// Mark the document JS-ready so the scroll-reveal hidden state only applies
// when we can actually reveal it. Without `.js`, [data-reveal] stays visible.
document.documentElement.classList.add('js')

// Safety net: reveal anything that never scrolled into view (non-scrolling
// renderers, print, very tall viewports) shortly after load — never blank.
const revealStragglers = () =>
  document
    .querySelectorAll('[data-reveal]:not(.is-visible)')
    .forEach((el) => el.classList.add('is-visible'))
if (document.readyState === 'complete') {
  setTimeout(revealStragglers, 2000)
} else {
  window.addEventListener('load', () => setTimeout(revealStragglers, 2000))
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* reducedMotion="user" makes every framer animation honour the OS setting. */}
    <MotionConfig reducedMotion="user">
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </MotionConfig>
  </StrictMode>,
)
