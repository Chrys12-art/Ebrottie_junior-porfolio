import { useLang } from '../hooks/useLang'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function Goals() {
  const { t } = useLang()
  const g = t.goals

  return (
    <section id="goals" className="section" aria-labelledby="goals-title">
      <div className="container">
        <SectionHeader eyebrow={g.eyebrow} title={g.title} subtitle={g.intro} id="goals-title" />

        <ul className="goals">
          {g.items.map((item, i) => (
            <Reveal as="li" key={item.title} className="goal" delay={(i % 3) * 0.06}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </Reveal>
          ))}
        </ul>

        <Reveal className="goals__closing">{g.closing}</Reveal>
      </div>
    </section>
  )
}
