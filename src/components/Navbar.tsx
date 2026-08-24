import { useState, useEffect } from 'react'

const navLinks = [
  { label: '首页', href: '#hero' },
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
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4">
      <nav
        className={`flex items-center gap-1 rounded-full border px-2 py-1.5 transition-all duration-300 ${
          scrolled
            ? 'border-bg-border bg-bg-card/90 shadow-lg shadow-ink/5 backdrop-blur-md'
            : 'border-transparent bg-bg-card/60 backdrop-blur-sm'
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="rounded-full px-4 py-1.5 text-sm text-ink-soft transition-colors hover:bg-bg-soft hover:text-ink"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          className="ml-1 rounded-full bg-ink px-4 py-1.5 text-sm font-medium text-bg transition-colors hover:bg-ink-soft"
        >
          联系我
        </a>
      </nav>
    </header>
  )
}
