import { useProjects } from '../hooks/useProjects'
import { profile } from '../data/portfolio'

export default function Projects() {
  const { data, loading } = useProjects()
  const featured = data.filter((p) => p.featured)

  return (
    <section id="projects" className="relative py-32">
      {/* 背景装饰 */}
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-bg-border to-transparent" />

      <div className="container-content relative">
        {/* 头部 */}
        <div className="mb-16 flex flex-col gap-4">
          <span className="section-label">02 / 精选作品</span>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="section-title">项目作品</h2>
            <p className="max-w-md text-sm text-text-muted">
              以下项目数据支持从本地后端接口 <code className="font-mono text-accent">/api/projects</code> 动态获取，接口不可用时展示占位数据。
            </p>
          </div>
        </div>

        {/* 加载状态 */}
        {loading && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="glass-card h-96 animate-pulse">
                <div className="h-2/3 w-full rounded-t-2xl bg-bg-soft" />
                <div className="space-y-3 p-6">
                  <div className="h-5 w-2/3 rounded bg-bg-soft" />
                  <div className="h-4 w-full rounded bg-bg-soft" />
                  <div className="h-4 w-1/2 rounded bg-bg-soft" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 项目大卡片网格 */}
        {!loading && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {featured.map((project, index) => (
              <article
                key={project.id}
                className={`group glass-card overflow-hidden transition-all duration-500 hover:border-accent/30 hover:shadow-[0_0_60px_rgba(110,231,183,0.08)] ${
                  index === 0 ? 'md:col-span-2' : ''
                }`}
              >
                {/* 项目图片区 */}
                <div className={`relative overflow-hidden bg-gradient-to-br from-bg-card to-bg-soft ${index === 0 ? 'aspect-[21/9]' : 'aspect-[16/10]'}`}>
                  {/* 占位图 — 可替换为 <img src={project.image} /> */}
                  <div className="flex h-full w-full items-center justify-center">
                    <div className="text-center">
                      <div className="mb-3 font-mono text-6xl font-bold text-accent/10">
                        {String(project.id).padStart(2, '0')}
                      </div>
                      <div className="font-mono text-xs uppercase tracking-widest text-text-muted">
                        Project Preview
                      </div>
                    </div>
                  </div>

                  {/* 悬浮遮罩 */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent opacity-80" />

                  {/* 角标 */}
                  <div className="absolute left-5 top-5 flex items-center gap-2">
                    <span className="rounded-md border border-accent/30 bg-accent/10 px-2.5 py-1 font-mono text-xs text-accent backdrop-blur-sm">
                      FEATURED
                    </span>
                  </div>

                  {/* 悬浮查看按钮 */}
                  <a
                    href={project.link}
                    className="absolute bottom-5 right-5 flex translate-y-2 items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-xs font-semibold text-bg opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    查看详情
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7M7 7h10v10" />
                    </svg>
                  </a>
                </div>

                {/* 项目信息 */}
                <div className="p-7">
                  <h3 className="text-xl font-bold text-text-primary transition-colors group-hover:text-accent md:text-2xl">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-bg-border bg-bg-soft/50 px-2.5 py-1 font-mono text-xs text-text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* 查看更多 */}
        <div className="mt-12 flex justify-center">
          <a href={profile.github} className="btn-ghost">
            在 GitHub 查看更多
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
