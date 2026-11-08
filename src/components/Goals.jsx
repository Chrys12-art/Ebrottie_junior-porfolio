import { motion } from 'motion/react'
import { BarChart3, Boxes, Code2, Globe2, Network, Rocket } from 'lucide-react'
import { useLang } from '../hooks/useLang'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

const ICONS = [BarChart3, Boxes, Code2, Network, Rocket, Globe2]

export default function Goals() {
  const { t } = useLang()
  const g = t.goals

  return (
    <section id="goals" className="section" aria-labelledby="goals-title">
      <div className="container">
        <SectionHeader eyebrow={g.eyebrow} title={g.title} subtitle={g.intro} id="goals-title" />

        <ul className="goals">
          {g.items.map((item, i) => {
            const Icon = ICONS[i]
            return (
              <motion.li
                key={item.title}
                className="glass goal"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
              >
                <span className="icon-badge icon-badge--sm" aria-hidden="true">
                  <Icon size={18} />
                </span>
                <h3>{item.title}</h3>
                <p className="muted">{item.desc}</p>
              </motion.li>
            )
          })}
        </ul>

        <Reveal className="goals__closing">
          <Globe2 size={18} aria-hidden="true" />
          <p>{g.closing}</p>
        </Reveal>
      </div>
    </section>
  )
}
