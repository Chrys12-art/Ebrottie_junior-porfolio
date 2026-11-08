import { useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { ArrowRight, Download, GraduationCap, MapPin, Send } from 'lucide-react'
import GithubIcon from './GithubIcon'
import { useLang } from '../hooks/useLang'
import { site } from '../data/site'

// Particules : positions fixes (pas de Math.random → rendu stable).
const PARTICLES = [
  { x: 8, y: 22, s: 3, d: 0, t: 9 },
  { x: 18, y: 68, s: 2, d: 2, t: 11 },
  { x: 30, y: 12, s: 2, d: 4, t: 10 },
  { x: 42, y: 80, s: 3, d: 1, t: 12 },
  { x: 55, y: 30, s: 2, d: 3, t: 9 },
  { x: 66, y: 74, s: 3, d: 5, t: 13 },
  { x: 76, y: 16, s: 2, d: 2, t: 10 },
  { x: 86, y: 52, s: 3, d: 6, t: 11 },
  { x: 93, y: 84, s: 2, d: 1, t: 12 },
  { x: 48, y: 52, s: 2, d: 7, t: 14 },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.15 } },
}
const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
}

function Portrait() {
  const { t } = useLang()
  const [failed, setFailed] = useState(false)

  return (
    <div className="portrait">
      <div className="portrait__halo" aria-hidden="true" />
      <div className="portrait__ring" aria-hidden="true" />
      <div className="portrait__ring portrait__ring--alt" aria-hidden="true" />
      <div className="portrait__frame">
        {failed ? (
          // Repli propre tant que la photo n'est pas ajoutée dans /public
          <div className="portrait__fallback" role="img" aria-label={t.hero.portraitAlt}>
            <span>{site.initials}</span>
          </div>
        ) : (
          <img
            src={site.portrait}
            alt={t.hero.portraitAlt}
            width="520"
            height="640"
            fetchPriority="high"
            decoding="async"
            onError={() => setFailed(true)}
          />
        )}
        <div className="portrait__shine" aria-hidden="true" />
      </div>

      <motion.div
        className="portrait__badge"
        initial={{ opacity: 0, scale: 0.8, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <GraduationCap size={16} aria-hidden="true" />
        <span>{t.hero.badgeLabel}</span>
      </motion.div>
    </div>
  )
}

export default function Hero() {
  const { t } = useLang()
  const reduce = useReducedMotion()

  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero__fx" aria-hidden="true">
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="particle"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.s,
              height: p.s,
              animationDelay: `${p.d}s`,
              animationDuration: `${p.t}s`,
            }}
          />
        ))}
        <span className="shape shape--ring" />
        <span className="shape shape--square" />
        <span className="shape shape--triangle" />
        <span className="shape shape--dots" />
      </div>

      <div className="container hero__inner">
        <motion.div className="hero__content" variants={container} initial="hidden" animate="show">
          <motion.div variants={item} className="status">
            <span className="status__dot" aria-hidden="true" />
            {t.hero.availability}
          </motion.div>

          <motion.p variants={item} className="hero__role">
            {t.hero.role}
          </motion.p>

          <motion.h1 variants={item} id="hero-title" className="hero__title">
            <span className="gradient-text">{site.name}</span>
          </motion.h1>

          <motion.p variants={item} className="hero__tagline">
            {t.hero.tagline}
          </motion.p>

          <motion.p variants={item} className="hero__intro">
            {t.hero.intro}
          </motion.p>

          <motion.div variants={item} className="hero__cta">
            <a href="#projects" className="btn btn--primary">
              <span>{t.hero.ctaProjects}</span>
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a href="#contact" className="btn btn--ghost">
              <Send size={17} aria-hidden="true" />
              <span>{t.hero.ctaContact}</span>
            </a>
            {site.cv && (
              <a
                href={site.cv}
                download={site.cvDownloadName}
                className="btn btn--ghost"
              >
                <Download size={17} aria-hidden="true" />
                <span>{t.hero.cv}</span>
              </a>
            )}
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--icon"
              aria-label={`${t.hero.github} (${site.github})`}
            >
              <GithubIcon size={20} aria-hidden="true" />
            </a>
          </motion.div>

          <motion.p variants={item} className="hero__location">
            <MapPin size={16} aria-hidden="true" />
            {t.hero.location}
          </motion.p>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            animate={reduce ? undefined : { y: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Portrait />
          </motion.div>
        </motion.div>
      </div>

      <a href="#about" className="scroll-cue" aria-label={t.hero.scroll}>
        <span className="scroll-cue__mouse" aria-hidden="true">
          <span />
        </span>
      </a>
    </section>
  )
}
