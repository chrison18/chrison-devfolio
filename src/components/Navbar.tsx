import { useState, useEffect } from 'react'
import { profile } from '../data/portfolio'

const navLinks = [
  { label: '关于', href: '#about' },
  { label: '经历', href: '#experience' },
  { label: '项目', href: '#projects' },
  { label: '联系', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-bg-border bg-bg/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="container-content flex h-16 items-center justify-between md:h-20">
        <a href="#hero" className="flex items-center gap-2">
          <span className="font-serif text-lg font-semibold tracking-tight text-ink">
            {profile.name}
          </span>
          <span className="hidden font-mono text-xs text-ink-muted sm:inline">/</span>
          <span className="hidden font-mono text-xs text-ink-muted sm:inline">
            {profile.target}
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-md px-3 py-1.5 text-sm text-ink-soft transition-colors hover:bg-bg-soft hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={`mailto:${profile.email}`}
          className="rounded-full border border-bg-border px-4 py-1.5 text-sm text-ink-soft transition-colors hover:border-ink hover:text-ink"
        >
          联系我
        </a>
      </nav>
    </header>
  )
}
