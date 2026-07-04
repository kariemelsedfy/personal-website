import type { ReactNode } from 'react'
import Reveal from './Reveal'

type Props = {
  id: string
  eyebrow: string
  title: string
  children: ReactNode
  className?: string
}

export default function Section({ id, eyebrow, title, children, className }: Props) {
  return (
    <section id={id} className={`relative mx-auto max-w-content px-6 py-24 md:py-32 ${className ?? ''}`}>
      <Reveal>
        <p className="mb-3 font-mono text-sm text-cyan2">// {eyebrow}</p>
        <h2 className="font-display text-3xl font-bold tracking-tight text-bright md:text-4xl">{title}</h2>
        <div className="mt-5 h-px w-24 bg-gradient-to-r from-indigo2 via-violet2 to-cyan2" />
      </Reveal>
      <div className="mt-12 md:mt-16">{children}</div>
    </section>
  )
}
