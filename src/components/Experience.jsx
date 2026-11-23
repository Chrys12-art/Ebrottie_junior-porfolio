import { useLang } from '../hooks/useLang'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function Experience() {
  const { t } = useLang()
  const e = t.experience

  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="container">
        <SectionHeader eyebrow={e.eyebrow} title={e.title} id="experience-title" />

        <div className="timeline">
          {e.items.map((item, i) => (
            <Reveal className="timeline__item" key={item.id} delay={i * 0.05}>
              <span className="timeline__marker" aria-hidden="true" />
              <article className="timeline__card exp-card">
                <div className="exp-card__head">
                  <div>
                    <h3>{item.role}</h3>
                    <p className="exp-card__company">{item.company}</p>
                  </div>
                  <span className="tag">{item.type}</span>
                </div>
                <p>{item.description}</p>

                <h4 className="exp-card__sub">{item.toolsTitle}</h4>
                <ul className="tools">
                  {item.tools.map((tool) => (
                    <li key={tool.name}>
                      <strong>{tool.name}</strong>
                      <span>{tool.desc}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
