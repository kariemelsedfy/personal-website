import { ArrowUpRight, ExternalLink, FileText, Github, Play } from 'lucide-react'
import Section from './ui/Section'
import Reveal from './ui/Reveal'
import TiltCard from './ui/TiltCard'
import Tag from './ui/Tag'
import { featured, flagship, more, pipeline, type Project, type ProjectLink } from '../data/projects'
import { profile } from '../data/profile'

function LinkIcon({ kind }: { kind: ProjectLink['kind'] }) {
  if (kind === 'github') return <Github size={15} />
  if (kind === 'live') return <ExternalLink size={15} />
  if (kind === 'video') return <Play size={15} />
  return <FileText size={15} />
}

function ProjectLinks({ links }: { links: ProjectLink[] }) {
  return (
    <div className="flex flex-wrap gap-x-5 gap-y-2">
      {links.map(({ label, href, kind }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-bright transition-colors hover:text-cyan2"
        >
          <LinkIcon kind={kind} />
          {label}
        </a>
      ))}
    </div>
  )
}

function FeaturedCard({ project, delay }: { project: Project; delay: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <TiltCard className="flex h-full flex-col p-6">
        {project.badge && <p className="mb-3 font-mono text-xs text-cyan2">{project.badge}</p>}
        <h3 className="font-display text-xl font-semibold text-bright">{project.title}</h3>
        <p className="mt-3 text-sm leading-relaxed">{project.blurb}</p>
        {project.metrics && (
          <div className="mt-5 grid grid-cols-3 gap-4 rounded-xl border border-line bg-raised/60 p-4">
            {project.metrics.map(({ value, label }) => (
              <div key={label}>
                <p className="font-display text-lg font-bold">
                  <span className="text-gradient">{value}</span>
                </p>
                <p className="mt-0.5 text-[11px] leading-snug text-body/80">{label}</p>
              </div>
            ))}
          </div>
        )}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <div className="mt-auto pt-6">
          <ProjectLinks links={project.links} />
        </div>
      </TiltCard>
    </Reveal>
  )
}

export default function Projects() {
  return (
    <Section id="projects" eyebrow="projects" title="Selected work">
      {/* Flagship */}
      <Reveal>
        <div className="relative overflow-hidden rounded-2xl border border-line bg-surface">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-indigo2 via-violet2 to-cyan2"
          />
          <div className="grid md:grid-cols-[3fr,2fr]">
            <div className="p-6 md:p-10">
              <p className="mb-3 font-mono text-xs text-cyan2">{flagship.badge}</p>
              <h3 className="font-display text-2xl font-bold text-bright md:text-3xl">
                {flagship.title}
              </h3>
              <p className="mt-4 leading-relaxed">{flagship.blurb}</p>
              <ul className="mt-5 space-y-2.5">
                {flagship.bullets?.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-sm leading-relaxed">
                    <span aria-hidden="true" className="mt-0.5 shrink-0 text-cyan2">
                      ▹
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {flagship.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
              <div className="mt-8">
                <ProjectLinks links={flagship.links} />
              </div>
            </div>

            {/* Pipeline visual */}
            <div className="flex items-center justify-center border-t border-line bg-raised/40 p-8 md:border-l md:border-t-0 md:p-10">
              <div className="w-full max-w-xs">
                {pipeline.map((step, i) => (
                  <div key={step}>
                    <div className="flex items-center justify-between rounded-lg border border-line bg-surface px-4 py-2.5 font-mono text-sm text-bright">
                      <span>{step}</span>
                      <span className="text-xs text-cyan2">0{i + 1}</span>
                    </div>
                    {i < pipeline.length - 1 && (
                      <div
                        aria-hidden="true"
                        className="mx-auto h-5 w-px bg-gradient-to-b from-violet2 to-cyan2"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Featured grid */}
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {featured.map((project, i) => (
          <FeaturedCard key={project.title} project={project} delay={i * 0.07} />
        ))}
      </div>

      {/* More on GitHub */}
      <Reveal delay={0.1}>
        <div className="mt-16">
          <div className="flex items-baseline justify-between">
            <h3 className="font-mono text-sm text-cyan2">// more on GitHub</h3>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-sm text-body transition-colors hover:text-bright"
            >
              all repos →
            </a>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {more.map(({ name, desc, lang, href }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group rounded-xl border border-line bg-surface p-4 transition-colors hover:border-cyan2/40"
              >
                <p className="flex items-center justify-between font-mono text-sm text-bright">
                  {name}
                  <ArrowUpRight
                    size={15}
                    className="text-body opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </p>
                <p className="mt-2 text-xs leading-relaxed">{desc}</p>
                <p className="mt-3 font-mono text-[11px] text-cyan2">{lang}</p>
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
