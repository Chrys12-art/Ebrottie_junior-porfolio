import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { useLang } from '../hooks/useLang'
import { useActiveSection } from '../hooks/useActiveSection'
import { site } from '../data/site'

const SECTIONS = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'goals', 'contact']

export default function Navbar() {
  const { t, lang, setLang } = useLang()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(SECTIONS)

  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.3 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Verrouille le défilement et gère Échap quand le menu mobile est ouvert.
  useEffect(() => {
    if (!open) return undefined
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const links = SECTIONS.filter((id) => id !== 'home')

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <motion.div className="nav__progress" style={{ scaleX: progress }} aria-hidden="true" />
      <div className="container nav__inner">
        <a href="#home" className="nav__brand" aria-label={`${site.name} — ${t.nav.home}`}>
          <span className="nav__logo">{site.initials}</span>
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
              {active === id && <motion.span layoutId="nav-underline" className="nav__underline" />}
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
                {lang === code && <motion.span layoutId="lang-pill" className="lang__pill" />}
                <span className="lang__label">{code.toUpperCase()}</span>
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
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            className="mobile-menu"
            aria-label={t.nav.main}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <ul>
              {links.map((id, i) => (
                <motion.li
                  key={id}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.045, duration: 0.3 }}
                >
                  <a
                    href={`#${id}`}
                    className={active === id ? 'is-active' : ''}
                    onClick={() => setOpen(false)}
                  >
                    <span className="mobile-menu__index">0{i + 1}</span>
                    {t.nav[id]}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
