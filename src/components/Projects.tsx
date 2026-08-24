import { useProjects } from '../hooks/useProjects'

export default function Projects() {
  const { data, loading } = useProjects()

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container-content">
        {/* 头部 */}
        <div className="mb-16">
          <span className="section-label">03 / 项目</span>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
            <h2 className="section-title">项目经历</h2>
            <p className="max-w-sm text-xs text-ink-muted">
              项目数据支持从后端接口 <code className="font-mono text-accent">/api/projects</code> 动态获取
            </p>
          </div>
        </div>

        {/* 加载状态 */}
        {loading && (
          <div className="space-y-8">
            {[1, 2].map((i) => (
              <div key={i} className="animate-pulse space-y-4">
                <div className="h-5 w-1/3 rounded bg-bg-border" />
                <div className="h-4 w-1/4 rounded bg-bg-border" />
                <div className="h-4 w-full rounded bg-bg-border" />
                <div className="h-4 w-5/6 rounded bg-bg-border" />
              </div>
            ))}
          </div>
        )}

        {/* 项目列表 */}
        {!loading && (
          <div className="space-y-12">
            {data.map((project, index) => (
              <article
                key={project.id}
                className="group border-t border-bg-border pt-10 first:border-t-0 first:pt-0"
              >
                <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
                  {/* 左侧：序号 + 时间 */}
                  <div className="md:col-span-2">
                    <span className="font-mono text-2xl font-light text-bg-border transition-colors group-hover:text-accent">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="mt-2 font-mono text-xs text-ink-muted">{project.period}</div>
                    <div className="mt-1 text-xs text-ink-soft">{project.role}</div>
                  </div>

                  {/* 右侧：内容 */}
                  <div className="md:col-span-10">
                    <h3 className="font-serif text-xl font-semibold text-ink transition-colors group-hover:text-accent md:text-2xl">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                      {project.description}
                    </p>

                    {/* 技术要点 */}
                    {project.details && project.details.length > 0 && (
                      <div className="mt-5">
                        <h4 className="mb-2 font-mono text-xs uppercase tracking-wider2 text-ink-muted">
                          技术要点
                        </h4>
                        <ul className="space-y-1.5">
                          {project.details.map((d: string, i: number) => (
                            <li key={i} className="flex gap-2 text-sm text-ink-soft">
                              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent/50" />
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* 业绩成果 */}
                    {project.achievements && project.achievements.length > 0 && (
                      <div className="mt-5">
                        <h4 className="mb-2 font-mono text-xs uppercase tracking-wider2 text-ink-muted">
                          业绩成果
                        </h4>
                        <ul className="space-y-1.5">
                          {project.achievements.map((a: string, i: number) => (
                            <li key={i} className="flex gap-2 text-sm text-ink-soft">
                              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                              <span>{a}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* 技术标签 */}
                    {project.tags && project.tags.length > 0 && (
                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {project.tags.map((tag: string) => (
                          <span
                            key={tag}
                            className="rounded bg-bg-soft px-2 py-0.5 font-mono text-xs text-ink-soft"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
