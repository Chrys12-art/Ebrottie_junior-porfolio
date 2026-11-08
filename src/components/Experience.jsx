import { Briefcase, CreditCard, Headphones, Mic2 } from 'lucide-react'
import GithubIcon from './GithubIcon'
import { useLang } from '../hooks/useLang'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'
import TiltCard from './TiltCard'

const TOOL_ICONS = {
  genius: [GithubIcon, CreditCard],
  connect: [Headphones, Mic2],
}

export default function Experience() {
  const { t } = useLang()
  const e = t.experience

  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="container">
        <SectionHeader eyebrow={e.eyebrow} title={e.title} id="experience-title" />

        <div className="timeline">
          {e.items.map((item) => (
            <Reveal className="timeline__item" key={item.id}>
              <span className="timeline__node" aria-hidden="true">
                <Briefcase size={16} />
              </span>
              <TiltCard className="glass exp-card" max={3}>
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
                  {item.tools.map((tool, i) => {
                    const Icon = TOOL_ICONS[item.id]?.[i] || Briefcase
                    return (
                      <li key={tool.name}>
                        <span className="icon-badge icon-badge--sm" aria-hidden="true">
                          <Icon size={17} />
                        </span>
                        <span>
                          <strong>{tool.name}</strong>
                          <span className="muted">{tool.desc}</span>
                        </span>
                      </li>
                    )
                  })}
                </ul>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
