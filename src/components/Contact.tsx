import { profile, contacts } from '../data/portfolio'

export default function Contact() {
  return (
    <section id="contact" className="relative flex min-h-screen items-center overflow-hidden">
      {/* 背景 */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg-soft to-bg" />
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* 光晕 */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/8 blur-[150px]" />

      <div className="container-content relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          {/* 标签 */}
          <span className="section-label mb-8 inline-block">04 / 联系我</span>

          {/* 大标题 */}
          <h2 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight text-text-primary md:text-7xl">
            让我们一起
            <br />
            <span className="bg-gradient-to-r from-accent via-accent-dim to-accent bg-clip-text text-transparent">
              构建点什么
            </span>
          </h2>

          {/* 副标题 */}
          <p className="mx-auto mb-12 max-w-xl text-lg text-text-secondary">
            无论是后端系统搭建、AI 应用开发，还是技术咨询合作，欢迎随时联系我。
            通常会在 24 小时内回复。
          </p>

          {/* 主联系按钮 */}
          <div className="mb-16 flex flex-wrap items-center justify-center gap-4">
            <a href={`mailto:${profile.email}`} className="btn-primary text-base">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              发送邮件
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn-ghost text-base">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
              GitHub
            </a>
          </div>

          {/* 联系方式卡片 */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="glass-card group p-6 text-left transition-all duration-300 hover:border-accent/30"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg border border-bg-border bg-bg-soft/50 transition-colors group-hover:border-accent/30 group-hover:bg-accent/10">
                  {c.icon === 'mail' && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-text-secondary transition-colors group-hover:text-accent">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  )}
                  {c.icon === 'github' && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-text-secondary transition-colors group-hover:text-accent">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                  )}
                  {c.icon === 'wechat' && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-text-secondary transition-colors group-hover:text-accent">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                  )}
                </div>
                <div className="text-xs text-text-muted">{c.label}</div>
                <div className="mt-1 font-mono text-sm text-text-secondary transition-colors group-hover:text-accent">
                  {c.value}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* 底部版权 */}
        <div className="mt-24 flex flex-col items-center justify-between gap-4 border-t border-bg-border pt-8 md:flex-row">
          <p className="font-mono text-xs text-text-muted">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p className="font-mono text-xs text-text-muted">
            Built with React + Vite + Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  )
}
