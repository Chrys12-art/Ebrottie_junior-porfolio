import { Compass, GraduationCap, Languages, MapPin, Palette, Sparkles, Target, Zap } from 'lucide-react'
import { useLang } from '../hooks/useLang'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

const FACT_ICONS = [GraduationCap, MapPin, Compass, Languages]

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
              <Reveal as="p" key={i} delay={i * 0.06} className={i === 0 ? 'lead' : ''}>
                {p}
              </Reveal>
            ))}
          </div>

          <div className="about__side">
            <Reveal className="glass facts" delay={0.1}>
              <ul>
                {a.facts.map((f, i) => {
                  const Icon = FACT_ICONS[i]
                  return (
                    <li key={f.label}>
                      <span className="facts__icon" aria-hidden="true">
                        <Icon size={18} />
                      </span>
                      <span>
                        <span className="facts__label">{f.label}</span>
                        <span className="facts__value">{f.value}</span>
                      </span>
                    </li>
                  )
                })}
              </ul>
            </Reveal>

            <Reveal className="glass interests" delay={0.2}>
              <h3>
                <Sparkles size={18} aria-hidden="true" />
                {a.interestsTitle}
              </h3>
              <ul className="chips">
                {a.interests.map((i) => (
                  <li key={i} className="chip">
                    {i}
                  </li>
                ))}
              </ul>
              <h3 className="interests__sub">
                <Target size={18} aria-hidden="true" />
                {a.ambitionsTitle}
              </h3>
              <p className="muted">{a.ambitionsText}</p>

              {a.qualities && (
                <>
                  <h3 className="interests__sub">
                    <Zap size={18} aria-hidden="true" />
                    {a.qualitiesTitle}
                  </h3>
                  <ul className="chips">
                    {a.qualities.map((q) => (
                      <li key={q} className="chip chip--dashed">
                        {q}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {a.personal && (
                <>
                  <h3 className="interests__sub">
                    <Palette size={18} aria-hidden="true" />
                    {a.personalTitle}
                  </h3>
                  <ul className="chips">
                    {a.personal.map((p) => (
                      <li key={p} className="chip">
                        {p}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
