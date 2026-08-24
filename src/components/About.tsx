import { profile, stats, contacts } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="container-content">
        {/* 头部 */}
        <div className="mb-16 flex flex-col gap-4">
          <span className="section-label">01 / 关于我</span>
          <h2 className="section-title">个人经历</h2>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* 左侧：头像 + 基本信息 */}
          <div className="lg:col-span-4">
            <div className="glass-card overflow-hidden">
              {/* 头像区域 */}
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-bg-card to-bg-soft">
                {/* 占位头像 — 可替换为 <img src={profile.avatar} /> */}
                <div className="flex h-full w-full items-center justify-center">
                  <span className="font-mono text-8xl font-bold text-accent/20">C</span>
                </div>
                {/* 装饰角标 */}
                <div className="absolute left-4 top-4 flex h-3 w-3 items-center justify-center">
                  <span className="absolute h-3 w-3 animate-ping rounded-full bg-accent opacity-60" />
                  <span className="h-2 w-2 rounded-full bg-accent" />
                </div>
                <div className="absolute bottom-4 right-4 rounded-md border border-bg-border bg-bg/80 px-2 py-1 font-mono text-xs text-text-secondary backdrop-blur-sm">
                  {profile.location}
                </div>
              </div>

              {/* 基本信息 */}
              <div className="border-t border-bg-border p-6">
                <h3 className="text-xl font-bold text-text-primary">{profile.name}</h3>
                <p className="mt-1 text-sm text-accent">{profile.title}</p>
                <div className="mt-4 space-y-3">
                  {contacts.map((c) => (
                    <a
                      key={c.label}
                      href={c.href}
                      className="flex items-center justify-between text-sm transition-colors hover:text-accent"
                    >
                      <span className="text-text-muted">{c.label}</span>
                      <span className="font-mono text-text-secondary">{c.value}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 右侧：介绍 + 数据 */}
          <div className="flex flex-col gap-10 lg:col-span-8">
            {/* 个人介绍 */}
            <div>
              <p className="text-lg leading-relaxed text-text-secondary">
                {profile.bio}
              </p>
              <p className="mt-4 text-base leading-relaxed text-text-muted">
                过去几年里，我参与并主导了多个从 0 到 1 的系统搭建，涵盖交易平台、知识库系统、智能 Agent 等领域。
                我相信好的工程师不仅要写出能运行的代码，更要对系统的可维护性、可扩展性和稳定性负责。
              </p>
            </div>

            {/* 数据统计 */}
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card group p-6 transition-all duration-300 hover:border-accent/30"
                >
                  <div className="font-mono text-3xl font-bold text-text-primary transition-colors group-hover:text-accent md:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-xs text-text-muted">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* 技术栈标签 */}
            <div>
              <h4 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-text-muted">
                核心技术栈
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'Java', 'Go', 'TypeScript', 'Spring Cloud', 'Kafka', 'Redis',
                  'MySQL', 'PostgreSQL', 'Docker', 'Kubernetes', 'LangChain', 'RAG',
                  'Vector DB', 'FastAPI', 'React',
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-bg-border bg-bg-card/50 px-3 py-1.5 font-mono text-xs text-text-secondary transition-colors hover:border-accent/40 hover:text-accent"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
