import { useLang } from '../hooks/useLang'
import { skillCategories } from '../data/skills'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'
import TechIcon from './TechIcon'

export default function Skills() {
  const { t } = useLang()
  const s = t.skills

  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeader eyebrow={s.eyebrow} title={s.title} subtitle={s.subtitle} id="skills-title" />

        <div className="skills-grid">
          {skillCategories.map((cat, i) => {
            const info = s.categories[cat.id]
            return (
              <Reveal key={cat.id} className="skill-card" delay={i * 0.06}>
                <div className="skill-card__head">
                  <h3>{info.title}</h3>
                  <p>{info.desc}</p>
                </div>
                <ul className="skill-list">
                  {cat.items.map((it) => (
                    <li key={it.name}>
                      <TechIcon name={it.name} size={15} />
                      <span>{s.names[it.name] || it.name}</span>
                      {it.level && <small>{s.levels[it.level]}</small>}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="learning-note">
          <strong>{s.inProgress.title} :</strong> {s.inProgress.items.join(', ')}.
        </Reveal>
      </div>
    </section>
  )
}
