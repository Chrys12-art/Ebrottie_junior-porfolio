import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'motion/react'

// Carte avec léger effet 3D au survol (souris uniquement, désactivé si
// prefers-reduced-motion ou sur écran tactile).
export default function TiltCard({ children, className = '', max = 6, ...rest }) {
  const reduce = useReducedMotion()
  const px = useMotionValue(0)
  const py = useMotionValue(0)
  const spring = { stiffness: 180, damping: 18, mass: 0.4 }
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-max, max]), spring)
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [max, -max]), spring)

  const onMove = (e) => {
    if (reduce || e.pointerType === 'touch') return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    px.set(x)
    py.set(y)
    // Position du reflet lumineux (utilisée en CSS)
    e.currentTarget.style.setProperty('--mx', `${(x + 0.5) * 100}%`)
    e.currentTarget.style.setProperty('--my', `${(y + 0.5) * 100}%`)
  }

  const onLeave = () => {
    px.set(0)
    py.set(0)
  }

  return (
    <motion.div
      className={`tilt ${className}`}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={reduce ? undefined : { rotateX, rotateY, transformPerspective: 900 }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
