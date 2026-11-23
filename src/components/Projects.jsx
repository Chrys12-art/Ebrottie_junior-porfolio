import {
  Baby,
  Car,
  Database,
  HeartHandshake,
  Layers,
  Smartphone,
  Stethoscope,
  Zap,
} from 'lucide-react'
import { ExternalLink } from 'lucide-react'
import GithubIcon from './GithubIcon'
import TechIcon from './TechIcon'
import { useLang } from '../hooks/useLang'
import { projects } from '../data/projects'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

const ICONS = { Zap, HeartHandshake, Database, Smartphone, Car, Baby, Stethoscope }

function ProjectCard({ project, index }) {
  const { t } = useLang()
  const p = t.projects
  const text = p.items[project.id]
  const Icon = ICONS[project.icon] || Layers

  return (
    <Reveal delay={(index % 3) * 0.06}>
      <article className="project-card">
        <div className="project__head">
          <span className="project__index">0{index + 1}</span>
          <span className="project__icon" aria-hidden="true">
            <Icon size={19} strokeWidth={1.6} />
          </span>
          <div className="project__heading">
            <h3 className="project__title">{text.name}</h3>
            <p className="project__type">{text.type}</p>
          </div>
          {project.status === 'wip' && <span className="tag tag--wip">{p.statusWip}</span>}
        </div>

        <p className="project__desc">{text.description}</p>

        <div className="project__section">
          <h4>{p.problem}</h4>
          <p className="muted" style={{ fontSize: '0.92rem', margin: 0 }}>
            {text.problem}
          </p>
        </div>

        <div className="project__section">
          <h4>{text.featuresTitle || p.features}</h4>
          <ul className="simple-list">
            {text.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>

        {text.note && (
          <p className="small muted" style={{ marginTop: '1rem', fontStyle: 'italic' }}>
            {text.note}
          </p>
        )}

        <div className="project__section">
          <h4>{p.stack}</h4>
          <div className="tag-list">
            {project.tech.map((tech) => (
              <span key={tech} className="tag">
                <TechIcon name={tech} size={13} />
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="project__actions">
          {project.github && (
            <a
              className="btn btn--ghost btn--sm"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${p.github} — ${text.name}`}
            >
              <GithubIcon size={15} aria-hidden="true" />
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
              <ExternalLink size={15} aria-hidden="true" />
              {p.demo}
            </a>
          )}
          {!project.github && !project.demo && <span className="small muted">{p.noPublicLink}</span>}
        </div>
      </article>
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
        </div>

        <p className="projects-note">
          <strong>{p.moreTitle}</strong>
          {p.moreText}
        </p>
      </div>
    </section>
  )
}
