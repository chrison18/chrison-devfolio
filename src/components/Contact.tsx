import { profile, contacts } from '../data/portfolio'

export default function Contact() {
  return (
    <section id="contact" className="bg-bg-soft py-24 md:py-32">
      <div className="container-content">
        {/* 头部 */}
        <div className="mb-16 text-center">
          <span className="section-label">04 / 联系</span>
          <h2 className="section-title mt-3">保持联系</h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-ink-soft">
            如果你对我的经历感兴趣，或者有合作机会，欢迎随时联系我。
          </p>
        </div>

        {/* 联系方式网格 */}
        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              className="group flex items-center justify-between rounded-lg border border-bg-border bg-bg-card px-5 py-4 transition-colors hover:border-ink/30"
            >
              <div>
                <div className="font-mono text-xs text-ink-muted">{c.label}</div>
                <div className="mt-0.5 text-sm text-ink transition-colors group-hover:text-accent">
                  {c.value}
                </div>
              </div>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-ink-muted transition-all group-hover:translate-x-0.5 group-hover:text-accent"
              >
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </a>
          ))}
        </div>

        {/* 主按钮 */}
        <div className="mt-12 text-center">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-ink px-8 py-3.5 text-sm font-medium text-bg transition-colors hover:bg-ink-soft"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            发送邮件
          </a>
        </div>

        {/* 底部版权 */}
        <div className="mt-20 flex flex-col items-center justify-between gap-3 border-t border-bg-border pt-8 text-center md:flex-row md:text-left">
          <p className="font-mono text-xs text-ink-muted">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p className="font-mono text-xs text-ink-muted">
            Built with React + Vite + Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  )
}
