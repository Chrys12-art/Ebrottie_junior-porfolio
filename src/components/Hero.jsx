import { motion } from 'motion/react'
import { ArrowRight, Download, MapPin } from 'lucide-react'
import GithubIcon from './GithubIcon'
import LinkedinIcon from './LinkedinIcon'
import { useLang } from '../hooks/useLang'
import { site } from '../data/site'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.075, delayChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const avatar = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Hero() {
  const { t } = useLang()

  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <motion.div
        className="container hero__inner"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div className="hero__identity" variants={item}>
          <motion.img
            className="hero__avatar"
            src={site.portrait}
            alt={t.hero.portraitAlt}
            width="76"
            height="76"
            variants={avatar}
          />
          <p className="hero__eyebrow">{t.hero.badgeLabel}</p>
        </motion.div>

        <motion.h1 id="hero-title" className="hero__title" variants={item}>
          {site.name}
        </motion.h1>

        <motion.p className="hero__lead" variants={item}>
          {t.hero.tagline}
        </motion.p>
        <motion.p className="hero__intro" variants={item}>
          {t.hero.intro}
        </motion.p>

        <motion.div className="hero__actions" variants={item}>
          <a href="#projects" className="btn btn--primary">
            {t.hero.ctaProjects}
            <ArrowRight size={16} aria-hidden="true" />
          </a>
          <a href="#contact" className="btn btn--ghost">
            {t.hero.ctaContact}
          </a>
        </motion.div>

        <motion.div className="hero__links" variants={item}>
          {site.cv && (
            <a href={site.cv} download={site.cvDownloadName}>
              <Download size={15} aria-hidden="true" />
              {t.hero.cv}
            </a>
          )}
          <a href={site.github} target="_blank" rel="noopener noreferrer">
            <GithubIcon size={16} aria-hidden="true" />
            GitHub
          </a>
          {site.linkedin && (
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
              <LinkedinIcon size={16} aria-hidden="true" />
              LinkedIn
            </a>
          )}
        </motion.div>

        <motion.div className="hero__meta" variants={item}>
          <span>
            <MapPin size={14} aria-hidden="true" />
            {t.hero.location}
          </span>
          <span>{t.hero.availability}</span>
        </motion.div>
      </motion.div>
    </section>
  )
}
