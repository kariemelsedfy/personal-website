import { FileDown, Github, Linkedin, Mail } from 'lucide-react'
import Reveal from './ui/Reveal'
import { profile } from '../data/profile'

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-content px-6 py-24 md:py-32">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-sm text-cyan2">// contact</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-bright md:text-5xl">
            Let’s build <span className="text-gradient">something</span>.
          </h2>
          <p className="mt-6 leading-relaxed">
            I’m always up for talking about AI systems, full-stack engineering, internship
            opportunities, or an interesting problem you’re chewing on. My inbox is open.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo2 via-violet2 to-cyan2 px-6 py-3 font-semibold text-white transition-[filter] hover:brightness-110"
            >
              <Mail size={18} />
              Say hello
            </a>
            <a
              href={profile.resumeUrl}
              download="KarimElSedfyResume.pdf"
              className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-6 py-3 font-semibold text-bright transition-colors hover:border-violet2/50"
            >
              <FileDown size={18} />
              Resume
            </a>
          </div>
          <div className="mt-8 flex items-center justify-center gap-6">
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
          </div>
        </div>
      </Reveal>
    </section>
  )
}
