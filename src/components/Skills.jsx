import { motion } from 'motion/react'
import { BookOpenCheck, Code2, DatabaseZap, Wrench, Workflow } from 'lucide-react'
import { useLang } from '../hooks/useLang'
import { skillCategories } from '../data/skills'
import SectionHeader from './SectionHeader'
import TiltCard from './TiltCard'

const ICONS = { Code2, DatabaseZap, Workflow, Wrench }

const list = {
  hidden: {},
  show: { transition: { staggerChildren: 0.045, delayChildren: 0.15 } },
}
const pill = {
  hidden: { opacity: 0, y: 12, scale: 0.94 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
}

export default function Skills() {
  const { t } = useLang()
  const s = t.skills

  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeader eyebrow={s.eyebrow} title={s.title} subtitle={s.subtitle} id="skills-title" />

        <div className="skills-grid">
          {skillCategories.map((cat, idx) => {
            const Icon = ICONS[cat.icon]
            const info = s.categories[cat.id]
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.65, delay: (idx % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <TiltCard className={`glass skill-card accent-${cat.accent}`}>
                  <div className="skill-card__head">
                    <motion.span
                      className="icon-badge"
                      whileHover={{ rotate: -8, scale: 1.1 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 14 }}
                      aria-hidden="true"
                    >
                      <Icon size={22} />
                    </motion.span>
                    <div>
                      <h3>{info.title}</h3>
                      <p className="muted">{info.desc}</p>
                    </div>
                  </div>

                  <motion.ul
                    className="pills"
                    variants={list}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-60px' }}
                  >
                    {cat.items.map((it) => (
                      <motion.li
                        key={it.name}
                        variants={pill}
                        className={`pill ${it.level ? 'pill--level' : ''}`}
                        whileHover={{ y: -3 }}
                      >
                        {s.names[it.name] || it.name}
                        {it.level && <small>{s.levels[it.level]}</small>}
                      </motion.li>
                    ))}
                  </motion.ul>
                </TiltCard>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          className="glass learning"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="learning__head">
            <span className="icon-badge icon-badge--sm" aria-hidden="true">
              <BookOpenCheck size={18} />
            </span>
            <div>
              <h3>{s.inProgress.title}</h3>
              <p className="muted">{s.inProgress.desc}</p>
            </div>
          </div>
          <ul className="chips">
            {s.inProgress.items.map((i) => (
              <li key={i} className="chip chip--dashed">
                {i}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
