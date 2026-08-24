import { profile } from '../data/portfolio'

const letters = 'CHRISON'.split('')

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden pt-20">
      {/* 背景渐变光晕 */}
      <div className="pointer-events-none absolute inset-0">
        <div className="glow-shift absolute -right-32 top-10 h-[500px] w-[500px] rounded-full bg-accent/[0.06] blur-[120px]" />
        <div className="absolute -left-20 bottom-0 h-[400px] w-[400px] rounded-full bg-accent/[0.04] blur-[100px]" />
      </div>

      <div className="container-content relative">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* 左侧：文字内容 */}
          <div className="lg:col-span-7">
            {/* 标签 */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-bg-border bg-bg-card/60 px-3.5 py-1.5 backdrop-blur-sm">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
              <span className="font-mono text-xs tracking-wider text-ink-soft">
                Personal Portfolio · 2026
              </span>
            </div>

            {/* CHRISON 艺术字大标题 */}
            <h1 className="font-display text-[clamp(3.5rem,10vw,8rem)] font-black leading-[0.9] tracking-tight text-ink">
              {letters.map((letter, i) => (
                <span
                  key={i}
                  className="hero-letter"
                  style={{ transitionDelay: `${i * 30}ms` }}
                >
                  {letter}
                </span>
              ))}
            </h1>

            {/* 拼音/副标题 */}
            <p className="mt-3 font-mono text-sm uppercase tracking-[0.35em] text-accent">
              {profile.name} · Backend Developer
            </p>

            {/* 标语 */}
            <p className="mt-6 font-serif text-xl text-ink-soft md:text-2xl">
              用代码构建系统，用 AI 赋予智能
            </p>

            {/* 简介 */}
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-ink-muted md:text-base">
              {profile.bio}
            </p>

            {/* 按钮 */}
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-bg transition-all hover:bg-ink-soft hover:shadow-lg"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 3h18v18H3z" />
                  <path d="M3 9h18" />
                  <path d="M9 21V9" />
                </svg>
                查看项目
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-bg-border bg-bg-card/40 px-6 py-3 text-sm font-medium text-ink-soft backdrop-blur-sm transition-all hover:border-ink/30 hover:text-ink"
              >
                联系我
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </a>
            </div>
          </div>

          {/* 右侧：动态头像 */}
          <div className="flex items-center justify-center lg:col-span-5">
            <AvatarOrbit />
          </div>
        </div>
      </div>

      {/* 底部滚动提示 */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-xs tracking-wider2 text-ink-muted">SCROLL</span>
          <div className="h-8 w-px bg-gradient-to-b from-ink-muted to-transparent" />
        </div>
      </div>
    </section>
  )
}

function AvatarOrbit() {
  return (
    <div className="avatar-wrap relative flex h-[340px] w-[340px] items-center justify-center md:h-[420px] md:w-[420px]">
      {/* 最外层轨道 */}
      <div className="orbit-spin-slow absolute inset-0 rounded-full border border-bg-border">
        <span className="orbit-dot absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-accent" />
      </div>

      {/* 第二层轨道（反向） */}
      <div className="orbit-spin-reverse absolute inset-8 rounded-full border border-bg-border/70">
        <span className="orbit-dot absolute top-1/2 -right-1 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-accent/70" style={{ animationDelay: '0.5s' }} />
        <span className="orbit-dot absolute -left-1 top-1/3 h-1.5 w-1.5 rounded-full bg-accent/50" style={{ animationDelay: '1s' }} />
      </div>

      {/* 第三层轨道 */}
      <div className="orbit-spin-fast absolute inset-16 rounded-full border border-bg-border/50">
        <span className="orbit-dot absolute -bottom-1 left-1/3 h-1.5 w-1.5 rounded-full bg-accent/60" style={{ animationDelay: '0.3s' }} />
      </div>

      {/* 中心交叉线（参考图风格） */}
      <div className="absolute inset-20 flex items-center justify-center">
        <div className="absolute h-px w-full bg-bg-border/40" />
        <div className="absolute h-full w-px bg-bg-border/40" />
        <div className="absolute h-px w-full rotate-45 bg-bg-border/20" />
        <div className="absolute h-px w-full -rotate-45 bg-bg-border/20" />
      </div>

      {/* 头像 */}
      <div className="avatar-float relative z-10 flex h-40 w-40 items-center justify-center overflow-hidden rounded-full border border-bg-border bg-bg-card shadow-xl md:h-48 md:w-48">
        <img
          src="/avatar.jpg"
          alt="Chrison avatar"
          className="h-full w-full object-cover"
          style={{ mixBlendMode: 'multiply' }}
        />
      </div>

      {/* 底部标签 */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-center">
        <div className="font-mono text-xs tracking-wider2 text-ink-soft">Backend × AI</div>
        <div className="mt-0.5 font-mono text-[10px] tracking-wider text-ink-muted">
          signals become intelligent systems
        </div>
      </div>
    </div>
  )
}
