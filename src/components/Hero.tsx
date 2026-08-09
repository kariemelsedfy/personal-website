import { Suspense, lazy, useEffect, useState, type ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react'
import DropboxMark from './ui/DropboxMark'
import { profile } from '../data/profile'

const HeroCanvas = lazy(() => import('./HeroCanvas'))

function Enter({
  children,
  order,
  className,
  reduce,
}: {
  children: ReactNode
  order: number
  className?: string
  reduce: boolean
}) {
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.05 + order * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function Hero() {
  const reduce = useReducedMotion() ?? false
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
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center md:flex-row"
    >
      {/* Static gradient is always present; the shader canvas paints over it when enabled */}
      <div className="hero-static absolute inset-0" />
      {showCanvas && (
        <Suspense fallback={null}>
          <HeroCanvas />
        </Suspense>
      )}
      {/* Fade the bottom edge into the page background */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-base" />

      <figure className="relative z-10 mb-8 mt-24 w-[min(58vw,17rem)] md:absolute md:right-[max(1.5rem,calc((100vw-72rem)/2))] md:top-1/2 md:mb-0 md:mt-0 md:w-[min(30vw,22rem)] md:-translate-y-1/2 lg:w-[22rem] xl:w-96">
        <div className="absolute -inset-3 rotate-3 rounded-[1.4rem] border border-accent/30 bg-accent/10" />
        <div className="relative overflow-hidden rounded-2xl border border-line/80 bg-surface shadow-2xl shadow-black/30">
          <img
            src={`${import.meta.env.BASE_URL}personal_photo.JPG`}
            alt="Karim ElSedfy"
            width={800}
            height={1200}
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="block aspect-[2/3] w-full object-cover object-top"
          />
        </div>
      </figure>

      <div className="relative z-10 mx-auto w-full max-w-content px-6 pt-16">
        <div className="md:w-[58%] lg:w-[54%]">
          <Enter order={0} reduce={reduce}>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/70 px-4 py-1.5 font-mono text-xs text-bright backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <DropboxMark size={15} className="shrink-0" />
              {profile.status}
            </span>
          </Enter>

          <Enter order={1} reduce={reduce}>
            <h1 className="mt-8 font-display text-5xl font-bold leading-[1.35] tracking-tight text-bright sm:text-6xl sm:leading-[1.35] lg:text-7xl lg:leading-[1.35]">
              Karim ElSedfy
            </h1>
          </Enter>

          <Enter order={2} reduce={reduce}>
            <p className="mt-6 max-w-3xl font-display text-2xl font-medium leading-[1.35] text-bright md:text-4xl md:leading-[1.35]">
              Full-stack engineer who ships <span className="text-accent">AI/ML systems</span>{' '}
              end-to-end.
            </p>
          </Enter>

          <Enter order={3} reduce={reduce}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#cfc8ba]">{profile.sub}</p>
          </Enter>

          <Enter order={4} reduce={reduce} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-md bg-accent px-6 py-3 font-semibold text-ink transition-[filter] hover:brightness-110"
            >
              View my work
            </a>
            <a
              href={profile.resumeUrl}
              download="KarimElSedfyResume.pdf"
              className="rounded-md border border-line bg-surface px-6 py-3 font-semibold text-bright transition-colors hover:border-accent/50"
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
          </Enter>
        </div>
      </div>

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
