export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden">
      {/* 视频背景 */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      >
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-network-of-connected-dots-32768-large.mp4"
          type="video/mp4"
        />
      </video>

      {/* 渐变遮罩 */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg/60 via-bg/75 to-bg" />
      <div className="absolute inset-0 grid-bg opacity-50" />

      {/* 光晕装饰 */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 h-80 w-80 rounded-full bg-accent/5 blur-[100px]" />

      {/* 内容 */}
      <div className="container-content relative z-10">
        <div className="max-w-4xl">
          {/* 状态标签 */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-bg-border bg-bg-card/50 px-4 py-1.5 backdrop-blur-sm animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="font-mono text-xs text-text-secondary">
              正在接受新项目合作
            </span>
          </div>

          {/* 大标题 */}
          <h1 className="mb-6 text-5xl font-extrabold leading-[1.1] tracking-tight text-text-primary md:text-7xl lg:text-8xl animate-fade-up">
            构建可靠的
            <br />
            <span className="bg-gradient-to-r from-accent via-accent-dim to-accent bg-clip-text text-transparent">
              后端系统
            </span>
            <span className="text-text-primary"> 与 </span>
            <span className="bg-gradient-to-r from-accent via-accent-dim to-accent bg-clip-text text-transparent">
              AI 应用
            </span>
          </h1>

          {/* 副标题 */}
          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-text-secondary md:text-xl animate-fade-up" style={{ animationDelay: '0.15s' }}>
            我是 Chrison，一名后端开发工程师 / AI 应用工程师。
            专注于高并发分布式架构与大模型应用落地，用工程化思维解决复杂问题。
          </p>

          {/* 按钮组 */}
          <div className="flex flex-wrap items-center gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <a href="#projects" className="btn-primary">
              查看作品
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#contact" className="btn-ghost">
              联系合作
            </a>
          </div>
        </div>
      </div>

      {/* 底部滚动提示 */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-float">
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-xs text-text-muted">SCROLL</span>
          <div className="h-10 w-px bg-gradient-to-b from-accent to-transparent" />
        </div>
      </div>
    </section>
  )
}
