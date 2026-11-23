import { motion } from 'motion/react'

// Apparition discrète au défilement, une seule fois.
export default function Reveal({ children, delay = 0, y = 12, as = 'div', className = '', ...rest }) {
  const Tag = motion[as] || motion.div
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay, ease: 'easeOut' }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
