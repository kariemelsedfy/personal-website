import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'
import { useRef, type ReactNode, type MouseEvent } from 'react'

type Props = {
  children: ReactNode
  className?: string
}

/**
 * Card with a subtle 3D hover tilt and a cursor-following spotlight.
 * Disabled entirely under prefers-reduced-motion.
 */
export default function TiltCard({ children, className }: Props) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const rx = useMotionValue(0)
  const ry = useMotionValue(0)
  const srx = useSpring(rx, { stiffness: 180, damping: 20 })
  const sry = useSpring(ry, { stiffness: 180, damping: 20 })

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el || reduce) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    ry.set(px * 6)
    rx.set(-py * 6)
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    el.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  const onMouseLeave = () => {
    rx.set(0)
    ry.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={reduce ? undefined : { rotateX: srx, rotateY: sry, transformPerspective: 900 }}
      className={`group relative rounded-2xl border border-line bg-surface transition-colors duration-300 hover:border-violet2/40 ${className ?? ''}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), rgba(139, 92, 246, 0.10), transparent 65%)',
        }}
      />
      {children}
    </motion.div>
  )
}
