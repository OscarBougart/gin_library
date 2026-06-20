import { createContext, useCallback, useEffect, useMemo, useState } from 'react'
import de from '../i18n/de.json'
import en from '../i18n/en.json'

const translations = { de, en }
const DEFAULT_LANG = 'de'
const STORAGE_KEY = 'gin-library-lang'

// eslint-disable-next-line react-refresh/only-export-components
export const LanguageContext = createContext(null)

function readInitialLang() {
  if (typeof window === 'undefined') return DEFAULT_LANG
  const stored = window.localStorage.getItem(STORAGE_KEY)
  return stored === 'en' || stored === 'de' ? stored : DEFAULT_LANG
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(readInitialLang)

  // Persist the choice and keep <html lang> in sync.
  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang)
    document.documentElement.lang = lang
  }, [lang])

  const setLang = useCallback((next) => {
    setLangState(next === 'en' ? 'en' : 'de')
  }, [])

  // t('section.key') resolves a dot-path against the active dictionary,
  // falling back to the key itself when a translation is missing.
  const t = useCallback(
    (key) => {
      const dict = translations[lang]
      const value = key
        .split('.')
        .reduce((acc, part) => (acc && typeof acc === 'object' ? acc[part] : undefined), dict)
      return value ?? key
    },
    [lang],
  )

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
