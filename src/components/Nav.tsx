import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { profile } from '../data/profile'

const links = [
  { id: 'about', label: 'about' },
  { id: 'experience', label: 'experience' },
  { id: 'projects', label: 'projects' },
  { id: 'skills', label: 'skills' },
  { id: 'contact', label: 'contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-30% 0px -60% 0px' },
    )
    for (const { id } of links) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-line bg-base/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-content items-center justify-between px-6" aria-label="Main">
        <a href="#top" className="flex items-center gap-3">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-indigo2 via-violet2 to-cyan2 font-display text-sm font-bold text-white">
            K
          </span>
          <span className="hidden font-display font-semibold text-bright sm:block">Karim ElSedfy</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`font-mono text-sm transition-colors ${
                active === id ? 'text-bright' : 'text-body hover:text-bright'
              }`}
            >
              <span className="text-cyan2">/</span>
              {label}
            </a>
          ))}
          <a
            href={profile.resumeUrl}
            download="KarimElSedfyResume.pdf"
            className="rounded-lg border border-violet2/50 px-4 py-1.5 font-mono text-sm text-bright transition-colors hover:bg-violet2/10"
          >
            resume
          </a>
        </div>

        <button
          className="text-bright md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-b border-line bg-base/95 px-6 py-4 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-4">
            {links.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className="font-mono text-sm text-body hover:text-bright"
              >
                <span className="text-cyan2">/</span>
                {label}
              </a>
            ))}
            <a
              href={profile.resumeUrl}
              download="KarimElSedfyResume.pdf"
              onClick={() => setOpen(false)}
              className="font-mono text-sm text-bright"
            >
              → resume
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
