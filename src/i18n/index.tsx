import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import esLocale from './locales/es.json'
import enLocale from './locales/en.json'

type Locale = 'es' | 'en'

type Translations = typeof esLocale

interface I18nContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
  translations: Translations
}

const locales: Record<Locale, Translations> = {
  es: esLocale,
  en: enLocale,
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

// Helper function to get nested value from object using dot notation
function getNestedValue(obj: any, path: string): string {
  const keys = path.split('.')
  let result = obj
  
  for (const key of keys) {
    if (result && typeof result === 'object' && key in result) {
      result = result[key]
    } else {
      return path // Return the key if not found
    }
  }
  
  return typeof result === 'string' ? result : path
}

export function I18nProvider({ children }: { children: ReactNode }) {
  // Get initial locale from localStorage or browser preference
  const getInitialLocale = (): Locale => {
    const stored = localStorage.getItem('locale') as Locale
    if (stored && (stored === 'es' || stored === 'en')) {
      return stored
    }
    
    // Check browser language
    const browserLang = navigator.language.split('-')[0]
    if (browserLang === 'es') return 'es'
    if (browserLang === 'en') return 'en'
    
    return 'es' // Default to Spanish
  }

  const [locale, setLocaleState] = useState<Locale>(getInitialLocale)
  const [translations, setTranslations] = useState<Translations>(locales[getInitialLocale()])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    setTranslations(locales[newLocale])
    localStorage.setItem('locale', newLocale)
    document.documentElement.lang = newLocale
  }

  // Set initial document language
  useEffect(() => {
    document.documentElement.lang = locale
  }, [])

  // Translation function
  const t = (key: string): string => {
    return getNestedValue(translations, key)
  }

  return (
    <I18nContext.Provider value={{ locale, setLocale, t, translations }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider')
  }
  return context
}

export function useTranslation() {
  const { t, locale, setLocale } = useI18n()
  return { t, locale, setLocale }
}
