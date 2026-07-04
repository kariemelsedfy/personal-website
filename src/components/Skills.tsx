import Section from './ui/Section'
import Reveal from './ui/Reveal'
import Tag from './ui/Tag'
import { skillGroups } from '../data/skills'

export default function Skills() {
  return (
    <Section id="skills" eyebrow="skills" title="Toolbox">
      <div className="grid gap-6 md:grid-cols-3">
        {skillGroups.map(({ label, items }, i) => (
          <Reveal key={label} delay={i * 0.08} className="h-full">
            <div className="h-full rounded-2xl border border-line bg-surface p-6">
              <p className="font-mono text-sm text-cyan2">{label}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
