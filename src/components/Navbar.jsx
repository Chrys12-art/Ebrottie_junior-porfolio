import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useLang } from '../hooks/useLang'
import { useActiveSection } from '../hooks/useActiveSection'
import { site } from '../data/site'

const SECTIONS = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'goals', 'contact']

export default function Navbar() {
  const { t, lang, setLang } = useLang()
  const [open, setOpen] = useState(false)
  const active = useActiveSection(SECTIONS)

  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  // Évite un menu « ouvert » fantôme après un redimensionnement vers le desktop.
  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1000px)')
    const onChange = (e) => {
      if (e.matches) setOpen(false)
    }
    desktop.addEventListener('change', onChange)
    return () => desktop.removeEventListener('change', onChange)
  }, [])

  const links = SECTIONS.filter((id) => id !== 'home')

  return (
    <header className="nav">
      <div className="container nav__inner">
        <a href="#home" className="nav__brand" aria-label={`${site.name} — ${t.nav.home}`}>
          <span className="nav__mark" aria-hidden="true">
            {site.initials}
          </span>
          <span className="nav__name">{site.name}</span>
        </a>

        <nav className="nav__links" aria-label={t.nav.main}>
          {links.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`nav__link ${active === id ? 'is-active' : ''}`}
              aria-current={active === id ? 'true' : undefined}
            >
              {t.nav[id]}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <div className="lang" role="group" aria-label={t.nav.langLabel}>
            {['fr', 'en'].map((code) => (
              <button
                key={code}
                type="button"
                className={`lang__btn ${lang === code ? 'is-active' : ''}`}
                onClick={() => setLang(code)}
                aria-pressed={lang === code}
                lang={code}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="nav__burger"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.nav.menuClose : t.nav.menuOpen}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" className="mobile-menu" aria-label={t.nav.main}>
          {links.map((id, i) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? 'is-active' : ''}
              onClick={() => setOpen(false)}
            >
              <span className="mobile-menu__index">0{i + 1}</span>
              {t.nav[id]}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
