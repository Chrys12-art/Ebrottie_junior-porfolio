import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { translations } from '../data/translations'

const LangContext = createContext(null)
const STORAGE_KEY = 'portfolio-lang'

function getInitialLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'fr' || saved === 'en') return saved
  } catch {
    /* stockage indisponible : on ignore */
  }
  if (typeof navigator !== 'undefined' && navigator.language?.toLowerCase().startsWith('en')) {
    return 'en'
  }
  return 'fr'
}

export function LangProvider({ children }) {
  const [lang, setLangState] = useState(getInitialLang)

  const setLang = useCallback((next) => {
    setLangState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* ignore */
    }
  }, [])

  // Met à jour <html lang>, le titre et la meta description.
  useEffect(() => {
    const t = translations[lang]
    document.documentElement.lang = lang
    document.title = t.meta.title
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', t.meta.description)

    // Les réseaux sociaux doivent voir la même langue que le visiteur.
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', t.meta.title)
    const ogDescription = document.querySelector('meta[property="og:description"]')
    if (ogDescription) ogDescription.setAttribute('content', t.meta.description)
    const ogLocale = document.querySelector('meta[property="og:locale"]')
    if (ogLocale) ogLocale.setAttribute('content', lang === 'fr' ? 'fr_FR' : 'en_US')
  }, [lang])

  const value = useMemo(() => ({ lang, setLang, t: translations[lang] }), [lang, setLang])

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang doit être utilisé dans <LangProvider>')
  return ctx
}
