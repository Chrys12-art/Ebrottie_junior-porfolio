import { useEffect, useRef, useState } from 'react'
import { useLang } from '../hooks/useLang'
import { site } from '../data/site'

export default function Preloader({ onDone }) {
  const { t } = useLang()
  const [progress, setProgress] = useState(0)
  const [leaving, setLeaving] = useState(false)
  const doneRef = useRef(false)
  const rafRef = useRef(null)
  const timersRef = useRef([])

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const finish = () => {
      if (doneRef.current) return
      doneRef.current = true
      setLeaving(true)
      timersRef.current.push(setTimeout(onDone, 420))
    }

    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setProgress(100)
      timersRef.current.push(setTimeout(finish, 160))
    } else {
      const duration = 1250
      const start = performance.now()
      const tick = (now) => {
        const p = Math.min(100, ((now - start) / duration) * 100)
        setProgress(Math.round(p))
        if (p < 100) rafRef.current = requestAnimationFrame(tick)
        else finish()
      }
      rafRef.current = requestAnimationFrame(tick)
    }

    // Filet de sécurité : si requestAnimationFrame est suspendu (onglet en
    // arrière-plan, économie d'énergie), le chargement ne doit jamais bloquer.
    timersRef.current.push(setTimeout(finish, 2000))

    return () => {
      cancelAnimationFrame(rafRef.current)
      timersRef.current.forEach(clearTimeout)
      document.body.style.overflow = previousOverflow
    }
  }, [onDone])

  const label = progress >= 100 ? t.preloader.ready : t.preloader.label

  return (
    <div className={`preloader ${leaving ? 'is-leaving' : ''}`} aria-hidden={leaving}>
      <div className="preloader__inner" role="status" aria-live="polite">
        <span className="preloader__mark" aria-hidden="true">
          {site.initials}
        </span>
        <p className="preloader__name">{site.name}</p>
        <p className="preloader__label">{label}</p>
        <div className="preloader__track" aria-hidden="true">
          <span className="preloader__bar" style={{ transform: `scaleX(${progress / 100})` }} />
        </div>
        <p className="preloader__hint">{t.preloader.hint}</p>
        <span className="preloader__percent" aria-hidden="true">
          {progress}%
        </span>
      </div>
    </div>
  )
}
