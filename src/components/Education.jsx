import { GraduationCap, MapPin } from 'lucide-react'
import { useLang } from '../hooks/useLang'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'
import TiltCard from './TiltCard'

export default function Education() {
  const { t } = useLang()
  const e = t.education

  return (
    <section id="education" className="section" aria-labelledby="education-title">
      <div className="container">
        <SectionHeader eyebrow={e.eyebrow} title={e.title} id="education-title" />

        <Reveal>
          <TiltCard className="glass edu" max={3}>
            <div className="edu__main">
              <span className="icon-badge icon-badge--lg" aria-hidden="true">
                <GraduationCap size={30} />
              </span>
              <div>
                <p className="edu__school">{e.school}</p>
                <h3 className="edu__degree">{e.degree}</h3>
                <p className="edu__full">{e.full}</p>
                <p className="edu__meta">
                  <span className="tag tag--live">
                    <span className="status__dot" aria-hidden="true" />
                    {e.status}
                  </span>
                  <span className="edu__loc">
                    <MapPin size={14} aria-hidden="true" />
                    {e.location}
                  </span>
                </p>
              </div>
            </div>

            <div className="edu__side">
              <p className="muted">{e.description}</p>

              {e.path && (
                <>
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
                </>
              )}

              <ul className="chips">
                {e.pillars.map((p) => (
                  <li key={p} className="chip">
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </TiltCard>
        </Reveal>
      </div>
    </section>
  )
}
