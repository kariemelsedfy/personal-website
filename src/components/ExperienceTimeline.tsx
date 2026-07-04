import Section from './ui/Section'
import Reveal from './ui/Reveal'
import Tag from './ui/Tag'
import { experience } from '../data/experience'

export default function ExperienceTimeline() {
  return (
    <Section id="experience" eyebrow="experience" title="Where I’ve worked">
      <div className="relative ml-2 space-y-12 border-l border-line pl-8 md:ml-4 md:pl-12">
        {experience.map((job, i) => (
          <Reveal key={`${job.company}-${job.role}`} delay={i * 0.06}>
            <article className="relative max-w-3xl">
              <span
                aria-hidden="true"
                className="absolute -left-[39px] top-1.5 h-3 w-3 rounded-full bg-accent ring-4 ring-base md:-left-[55px]"
              />
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h3 className="font-display text-lg font-semibold text-bright">
                  {job.role} <span className="text-accent">@ {job.company}</span>
                </h3>
                <p className="font-mono text-xs text-body/70">{job.period}</p>
              </div>
              <p className="mt-1 font-mono text-xs text-body/70">{job.location}</p>
              <ul className="mt-4 max-w-[58ch] space-y-2.5 text-sm">
                {job.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 leading-relaxed">
                    <span aria-hidden="true" className="mt-0.5 shrink-0 text-accent">
                      ▹
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {job.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
