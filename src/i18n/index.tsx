import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { en, type Dict } from './en'
import { fr } from './fr'
import cvEn from '../../assets/cv/assim-ben-ahmed-cv-en.pdf?url'
import cvFr from '../../assets/cv/assim-ben-ahmed-cv-fr.pdf?url'

export type Lang = 'en' | 'fr'

const STORAGE_KEY = 'lang'
const dicts: Record<Lang, Dict> = { en, fr }
export const cvByLang: Record<Lang, { href: string; filename: string }> = {
  en: { href: cvEn, filename: 'assim-ben-ahmed-cv-en.pdf' },
  fr: { href: cvFr, filename: 'assim-ben-ahmed-cv-fr.pdf' },
}

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'en' || saved === 'fr') return saved
  } catch {
    // storage blocked — fall through to the browser language
  }
  return navigator.language?.toLowerCase().startsWith('fr') ? 'fr' : 'en'
}

type I18n = { lang: Lang; t: Dict; setLang: (l: Lang) => void; toggle: () => void }
const I18nContext = createContext<I18n | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang)

  const setLang = useCallback((l: Lang) => {
    setLangState(l)
    try {
      localStorage.setItem(STORAGE_KEY, l)
    } catch {
      // ignore
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const value = useMemo<I18n>(
    () => ({ lang, t: dicts[lang], setLang, toggle: () => setLang(lang === 'en' ? 'fr' : 'en') }),
    [lang, setLang],
  )
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used inside I18nProvider')
  return ctx
}

/** Pick the right side of an { en, fr } pair. */
export type Localized<T = string> = { en: T; fr: T }
export function useL() {
  const { lang } = useI18n()
  return <T,>(v: Localized<T>) => v[lang]
}
