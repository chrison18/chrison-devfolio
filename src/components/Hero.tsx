import { profile } from '../data/portfolio'

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center pt-20">
      {/* 背景装饰 */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 top-20 h-72 w-72 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute -left-20 bottom-20 h-64 w-64 rounded-full bg-accent/[0.03] blur-3xl" />
      </div>

      <div className="container-content relative">
        <div className="max-w-3xl">
          {/* 状态标签 */}
          <div className="mb-8 inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="font-mono text-xs tracking-wider2 text-ink-soft">
              求职中 · {profile.target} · {profile.location}
            </span>
          </div>

          {/* 大标题 */}
          <h1 className="font-serif text-5xl font-semibold leading-tight tracking-tight text-ink md:text-6xl lg:text-7xl">
            {profile.name}
          </h1>

          {/* 副标题 */}
          <p className="mt-4 font-serif text-xl text-ink-soft md:text-2xl">
            {profile.title}
          </p>

          {/* 个人简介 */}
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
            {profile.bio}
          </p>

          {/* 关键信息 */}
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-ink-muted">邮箱</span>
              <a
                href={`mailto:${profile.email}`}
                className="text-sm text-ink transition-colors hover:text-accent"
              >
                {profile.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-ink-muted">电话</span>
              <a href={`tel:${profile.phone}`} className="text-sm text-ink transition-colors hover:text-accent">
                {profile.phone}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-ink-muted">GitHub</span>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-ink transition-colors hover:text-accent"
              >
                @chrison18
              </a>
            </div>
          </div>

          {/* 按钮 */}
          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-bg transition-colors hover:bg-ink-soft"
            >
              查看项目
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-bg-border px-6 py-3 text-sm font-medium text-ink-soft transition-colors hover:border-ink hover:text-ink"
            >
              联系我
            </a>
          </div>
        </div>
      </div>

      {/* 底部滚动提示 */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-xs text-ink-muted">SCROLL</span>
          <div className="h-8 w-px bg-gradient-to-b from-ink-muted to-transparent" />
        </div>
      </div>
    </section>
  )
}
