import { useState } from 'react'
import { GraduationCap, MapPin } from 'lucide-react'
import Section from './ui/Section'
import Reveal from './ui/Reveal'
import Tag from './ui/Tag'
import { profile } from '../data/profile'

function Avatar() {
  const [imgOk, setImgOk] = useState(true)
  const src = `${import.meta.env.BASE_URL}karim.jpg`
  if (imgOk) {
    return (
      <img
        src={src}
        alt="Karim ElSedfy"
        onError={() => setImgOk(false)}
        className="h-16 w-16 rounded-2xl border border-line object-cover"
      />
    )
  }
  return (
    <div className="rounded-2xl bg-gradient-to-br from-indigo2 via-violet2 to-cyan2 p-[2px]">
      <div className="grid h-[60px] w-[60px] place-items-center rounded-[14px] bg-base font-display text-xl font-bold">
        <span className="text-gradient">KE</span>
      </div>
    </div>
  )
}

export default function About() {
  return (
    <Section id="about" eyebrow="about" title="About me">
      <div className="grid gap-12 md:grid-cols-[3fr,2fr] md:gap-16">
        <div>
          {profile.about.map((paragraph, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="mb-5 leading-relaxed">{paragraph}</p>
            </Reveal>
          ))}

          <Reveal delay={0.2}>
            <div className="mt-10 grid grid-cols-2 gap-8">
              {profile.stats.map(({ value, label }) => (
                <div key={label}>
                  <p className="font-display text-3xl font-bold md:text-4xl">
                    <span className="text-gradient">{value}</span>
                  </p>
                  <p className="mt-1.5 text-xs leading-relaxed text-body/80">{label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="space-y-6">
          <Reveal delay={0.1}>
            <div className="flex items-center gap-4">
              <Avatar />
              <div>
                <p className="font-display font-semibold text-bright">{profile.name}</p>
                <p className="mt-0.5 flex items-center gap-1.5 text-sm">
                  <MapPin size={14} className="text-cyan2" />
                  {profile.location} · from {profile.origin}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="rounded-2xl border border-line bg-surface p-6">
              <p className="flex items-center gap-2 font-mono text-sm text-cyan2">
                <GraduationCap size={16} />
                education
              </p>
              <p className="mt-4 font-display font-semibold text-bright">{profile.education.school}</p>
              <p className="mt-1 text-sm">
                {profile.education.degree} · {profile.education.grad}
              </p>
              {profile.education.lines.map((line) => (
                <p key={line} className="mt-2 text-sm text-body/90">
                  {line}
                </p>
              ))}
              <div className="mt-5 flex flex-wrap gap-2">
                {profile.education.coursework.map((course) => (
                  <Tag key={course}>{course}</Tag>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
