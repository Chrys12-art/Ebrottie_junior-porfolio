import { motion, useScroll, useSpring } from 'motion/react'

// Fin filet en haut de l'écran qui suit la progression de lecture.
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    restDelta: 0.001,
  })

  return <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />
}
