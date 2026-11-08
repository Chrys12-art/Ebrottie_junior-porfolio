import { motion } from 'motion/react'
import {
  Baby,
  BarChart3,
  Car,
  Stethoscope,
  Database,
  ExternalLink,
  HeartHandshake,
  Layers,
  Lightbulb,
  Plus,
  Smartphone,
  Zap,
} from 'lucide-react'
import GithubIcon from './GithubIcon'
import { useLang } from '../hooks/useLang'
import { projects } from '../data/projects'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'
import TiltCard from './TiltCard'

const ICONS = { Zap, HeartHandshake, Database, Smartphone, BarChart3, Car, Baby, Stethoscope }

// Illustration générée (SVG) : pas d'image externe, léger et net à toutes les tailles.
function ProjectVisual({ icon, accent, name }) {
  const Icon = ICONS[icon] || Layers
  return (
    <div className={`visual accent-${accent}`} aria-hidden="true">
      <svg className="visual__grid" viewBox="0 0 400 220" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id={`g-${name}`} width="28" height="28" patternUnits="userSpaceOnUse">
            <path d="M28 0H0V28" fill="none" stroke="currentColor" strokeOpacity="0.14" />
          </pattern>
          <radialGradient id={`r-${name}`} cx="50%" cy="50%" r="60%">
            <stop offset="0" stopColor="currentColor" stopOpacity="0.35" />
            <stop offset="1" stopColor="currentColor" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="400" height="220" fill={`url(#g-${name})`} />
        <rect width="400" height="220" fill={`url(#r-${name})`} />
        <circle cx="70" cy="48" r="26" fill="none" stroke="currentColor" strokeOpacity="0.3" />
        <circle cx="338" cy="168" r="44" fill="none" stroke="currentColor" strokeOpacity="0.22" strokeDasharray="4 6" />
        <rect x="300" y="26" width="34" height="34" rx="8" fill="none" stroke="currentColor" strokeOpacity="0.25" transform="rotate(14 317 43)" />
      </svg>
      <motion.div
        className="visual__icon"
        whileHover={{ scale: 1.12, rotate: -6 }}
        transition={{ type: 'spring', stiffness: 260, damping: 14 }}
      >
        <Icon size={46} strokeWidth={1.5} />
      </motion.div>
    </div>
  )
}

function ProjectCard({ project, index }) {
  const { t } = useLang()
  const p = t.projects
  const text = p.items[project.id]

  return (
    <Reveal delay={0.05}>
      <TiltCard className={`glass project accent-${project.accent}`} max={3.5}>
        <ProjectVisual icon={project.icon} accent={project.accent} name={project.id} />

        <div className="project__body">
          <div className="project__meta">
            <span className="project__index">0{index + 1}</span>
            <span className="project__tags">
              {project.status === 'wip' && <span className="tag tag--wip">{p.statusWip}</span>}
              <span className="tag">{text.type}</span>
            </span>
          </div>

          <h3 className="project__name">{text.name}</h3>
          <p className="project__desc">{text.description}</p>

          <div className="project__block">
            <h4>
              <Lightbulb size={15} aria-hidden="true" />
              {p.problem}
            </h4>
            <p className="muted">{text.problem}</p>
          </div>

          <div className="project__block">
            <h4>
              <Layers size={15} aria-hidden="true" />
              {text.featuresTitle || p.features}
            </h4>
            <ul className="features">
              {text.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>

          <div className="project__block">
            <h4>{p.stack}</h4>
            <ul className="chips">
              {project.tech.map((tech) => (
                <li key={tech} className="chip chip--tech">
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="project__links">
            {project.github && (
              <a
                className="btn btn--ghost btn--sm"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${p.github} — ${text.name}`}
              >
                <GithubIcon size={16} aria-hidden="true" />
                {p.github}
              </a>
            )}
            {project.demo && (
              <a
                className="btn btn--primary btn--sm"
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${p.demo} — ${text.name}`}
              >
                <ExternalLink size={16} aria-hidden="true" />
                {p.demo}
              </a>
            )}
            {!project.github && !project.demo && <span className="muted small">{p.noPublicLink}</span>}
          </div>
        </div>
      </TiltCard>
    </Reveal>
  )
}

export default function Projects() {
  const { t } = useLang()
  const p = t.projects

  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeader eyebrow={p.eyebrow} title={p.title} subtitle={p.subtitle} id="projects-title" />

        <div className="projects-grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}

          <Reveal delay={0.1}>
            <div className="project-more" role="note">
              <span className="icon-badge" aria-hidden="true">
                <Plus size={22} />
              </span>
              <h3>{p.moreTitle}</h3>
              <p className="muted">{p.moreText}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
