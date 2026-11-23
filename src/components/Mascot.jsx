import { useEffect, useRef, useState } from 'react'
import { X } from 'lucide-react'
import { useLang } from '../hooks/useLang'
import { useActiveSection } from '../hooks/useActiveSection'

const SECTIONS = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'goals', 'contact']
const STORAGE_KEY = 'portfolio-mascot-hidden'

function getInitialHidden() {
  try {
    return localStorage.getItem(STORAGE_KEY) === '1'
  } catch {
    return false
  }
}

function MascotGraphic({ waving = false }) {
  return (
    <svg viewBox="0 0 80 80" className="mascot__svg" aria-hidden="true" focusable="false">
      <circle cx="40" cy="11" r="4" fill="var(--accent)" />
      <path d="M40 26 V15" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" />
      <rect x="18" y="26" width="44" height="40" rx="16" fill="var(--accent)" />
      <circle cx="32" cy="42" r="5" fill="#fff" />
      <circle cx="48" cy="42" r="5" fill="#fff" />
      <circle cx="33" cy="43" r="2.2" fill="var(--ink)" />
      <circle cx="49" cy="43" r="2.2" fill="var(--ink)" />
      <path d="M34 53 Q40 58 46 53" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" fill="none" />
      <path d="M18 42 L11 48" stroke="var(--accent)" strokeWidth="6" strokeLinecap="round" />
      <g className={`mascot__arm ${waving ? 'is-waving' : ''}`}>
        <path d="M62 42 L70 33" stroke="var(--accent)" strokeWidth="6" strokeLinecap="round" />
        <circle cx="71" cy="32" r="5" fill="var(--accent)" />
      </g>
    </svg>
  )
}

export default function Mascot() {
  const { t } = useLang()
  const m = t.mascot
  const active = useActiveSection(SECTIONS)
  const [hidden, setHidden] = useState(getInitialHidden)
  const [bubbleOpen, setBubbleOpen] = useState(true)
  const [waving, setWaving] = useState(false)
  const timerRef = useRef(null)

  // Salut à l'arrivée, puis à chaque nouvelle section.
  useEffect(() => {
    setWaving(true)
    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => setWaving(false), 1500)
    return () => clearTimeout(timerRef.current)
  }, [active])

  // Sur Contact, la mascotte recouvrirait le formulaire et son lien de repli.
  if (active === 'contact') return null

  const hide = () => {
    setHidden(true)
    try {
      localStorage.setItem(STORAGE_KEY, '1')
    } catch {
      /* stockage indisponible : on ignore */
    }
  }

  const show = () => {
    setHidden(false)
    setBubbleOpen(true)
    try {
      localStorage.removeItem(STORAGE_KEY)
    } catch {
      /* stockage indisponible : on ignore */
    }
  }

  if (hidden) {
    return (
      <button type="button" className="mascot-launcher" onClick={show} aria-label={m.show} title={m.show}>
        <MascotGraphic />
      </button>
    )
  }

  return (
    <aside className="mascot" aria-label={`${m.name} — ${m.role}`}>
      {bubbleOpen && (
        <div className="mascot__bubble">
          <button
            type="button"
            className="mascot__close"
            onClick={() => setBubbleOpen(false)}
            aria-label={m.close}
            title={m.close}
          >
            <X size={12} aria-hidden="true" />
          </button>
          <strong className="mascot__name">{m.name}</strong>
          <p className="mascot__message" role="status" aria-live="polite">
            <span key={active} className="mascot__message-inner">
              {m.sections[active] || m.welcome}
            </span>
          </p>
        </div>
      )}
      <button type="button" className="mascot__body" onClick={hide} aria-label={m.hide} title={m.hide}>
        <MascotGraphic waving={waving} />
      </button>
    </aside>
  )
}
