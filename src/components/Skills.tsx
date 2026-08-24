import { skills } from '../data/portfolio'

export default function Skills() {
  return (
    <section id="skills" className="relative py-32">
      <div className="container-content">
        {/* 头部 */}
        <div className="mb-16 flex flex-col gap-4">
          <span className="section-label">03 / 个人优势</span>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="section-title">核心能力</h2>
            <p className="max-w-md text-sm text-text-muted">
              从后端架构到 AI 应用，全链路覆盖，能独立完成复杂系统的设计与落地。
            </p>
          </div>
        </div>

        {/* 能力卡片网格 */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="group glass-card relative overflow-hidden p-8 transition-all duration-500 hover:border-accent/30"
            >
              {/* 序号背景 */}
              <span className="pointer-events-none absolute -right-2 -top-4 font-mono text-8xl font-bold text-bg-border/50 transition-colors group-hover:text-accent/10">
                {String(index + 1).padStart(2, '0')}
              </span>

              {/* 图标 */}
              <div className="relative mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-accent/20 bg-accent/5">
                <span className="font-mono text-lg font-bold text-accent">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              {/* 标题 */}
              <h3 className="relative mb-3 text-xl font-bold text-text-primary transition-colors group-hover:text-accent">
                {skill.title}
              </h3>

              {/* 描述 */}
              <p className="relative mb-6 text-sm leading-relaxed text-text-secondary">
                {skill.description}
              </p>

              {/* 标签 */}
              <div className="relative flex flex-wrap gap-2">
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-bg-border bg-bg-soft/50 px-2.5 py-1 font-mono text-xs text-text-muted transition-colors group-hover:border-accent/20 group-hover:text-text-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* 底部装饰线 */}
              <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-accent to-transparent transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
