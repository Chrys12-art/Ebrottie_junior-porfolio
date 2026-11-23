import { useLang } from '../hooks/useLang'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function About() {
  const { t } = useLang()
  const a = t.about

  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <SectionHeader eyebrow={a.eyebrow} title={a.title} id="about-title" />

        <div className="about">
          <div className="about__text">
            {a.paragraphs.map((p, i) => (
              <Reveal as="p" key={i} delay={i * 0.04} className={i === 0 ? 'lead' : ''}>
                {p}
              </Reveal>
            ))}
          </div>

          <div className="about__side">
            <Reveal className="panel panel--pad">
              <h3>{a.factsTitle || a.eyebrow}</h3>
              <dl className="facts">
                {a.facts.map((f) => (
                  <div key={f.label}>
                    <dt>{f.label}</dt>
                    <dd>{f.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal className="panel panel--pad" delay={0.08}>
              <h3>{a.interestsTitle}</h3>
              <ul className="text-list">
                {a.interests.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>

              <h3 className="panel__sub">{a.ambitionsTitle}</h3>
              <p className="muted">{a.ambitionsText}</p>

              <h3 className="panel__sub">{a.qualitiesTitle}</h3>
              <ul className="text-list">
                {a.qualities.map((q) => (
                  <li key={q}>{q}</li>
                ))}
              </ul>

              <h3 className="panel__sub">{a.personalTitle}</h3>
              <ul className="text-list">
                {a.personal.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
