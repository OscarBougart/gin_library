import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'

/**
 * Access the active language and translation helper.
 * @returns {{ lang: 'de' | 'en', setLang: (lang: 'de' | 'en') => void, t: (key: string) => string }}
 */
export function useTranslation() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useTranslation must be used within a LanguageProvider')
  }
  return ctx
}
