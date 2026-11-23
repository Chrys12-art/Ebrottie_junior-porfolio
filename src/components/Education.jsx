import { useLang } from '../hooks/useLang'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function Education() {
  const { t } = useLang()
  const e = t.education

  return (
    <section id="education" className="section" aria-labelledby="education-title">
      <div className="container">
        <SectionHeader eyebrow={e.eyebrow} title={e.title} id="education-title" />

        <Reveal>
          <article className="edu">
            <div className="edu__main">
              <div>
                <p className="edu__school">{e.school}</p>
                <h3 className="edu__degree">{e.degree}</h3>
                <p className="edu__full">{e.full}</p>
                <p className="edu__meta">
                  <span className="tag">{e.status}</span>
                  <span className="edu__loc">{e.location}</span>
                </p>
              </div>
            </div>

            <div className="edu__side">
              <p>{e.description}</p>

              <h4 className="edu__path-title">{e.pathTitle}</h4>
              <ol className="edu__path">
                {e.path.map((step) => (
                  <li key={step.title} className="edu__step">
                    <span className="edu__period">{step.period}</span>
                    <span className="edu__step-title">{step.title}</span>
                    <span className="edu__place">{step.place}</span>
                  </li>
                ))}
              </ol>

              <div className="tag-list">
                {e.pillars.map((p) => (
                  <span key={p} className="tag">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
