import { Suspense, lazy, useEffect, useState } from 'react'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/profile'

const HeroCanvas = lazy(() => import('./HeroCanvas'))

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] } },
}

export default function Hero() {
  const reduce = useReducedMotion()
  const [canvasOk, setCanvasOk] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const update = () => {
      let webgl = false
      try {
        const c = document.createElement('canvas')
        webgl = !!(c.getContext('webgl2') || c.getContext('webgl'))
      } catch {
        webgl = false
      }
      setCanvasOk(mq.matches && webgl)
    }
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  const showCanvas = canvasOk && !reduce

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Static gradient is always present; the shader canvas paints over it when enabled */}
      <div className="hero-static absolute inset-0" />
      {showCanvas && (
        <Suspense fallback={null}>
          <HeroCanvas />
        </Suspense>
      )}
      {/* Fade the bottom edge into the page background */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-base" />

      <motion.div
        variants={container}
        initial={reduce ? false : 'hidden'}
        animate="show"
        className="relative z-10 mx-auto w-full max-w-content px-6 pt-16"
      >
        <motion.div variants={item}>
          <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/60 px-4 py-1.5 font-mono text-xs text-body backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan2 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan2" />
            </span>
            {profile.status}
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="mt-8 font-display text-5xl font-extrabold tracking-tight text-bright sm:text-7xl lg:text-8xl"
        >
          Karim ElSedfy
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-3xl font-display text-2xl font-semibold text-bright/90 md:text-4xl"
        >
          Full-stack engineer who ships <span className="text-gradient">AI/ML systems</span>{' '}
          end-to-end.
        </motion.p>

        <motion.p variants={item} className="mt-6 max-w-xl text-lg leading-relaxed">
          {profile.sub}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-gradient-to-r from-indigo2 via-violet2 to-cyan2 px-6 py-3 font-semibold text-white transition-[filter] hover:brightness-110"
          >
            View my work
          </a>
          <a
            href={profile.resumeUrl}
            download="KarimElSedfyResume.pdf"
            className="rounded-lg border border-line bg-surface/60 px-6 py-3 font-semibold text-bright backdrop-blur transition-colors hover:border-violet2/50"
          >
            Download resume
          </a>
          <div className="ml-1 flex items-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-body transition-colors hover:text-bright"
            >
              <Github size={22} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-body transition-colors hover:text-bright"
            >
              <Linkedin size={22} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="text-body transition-colors hover:text-bright"
            >
              <Mail size={22} />
            </a>
          </div>
        </motion.div>
      </motion.div>

      {!reduce && (
        <motion.a
          href="#about"
          aria-label="Scroll to about section"
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-body hover:text-bright"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={26} />
        </motion.a>
      )}
    </section>
  )
}
