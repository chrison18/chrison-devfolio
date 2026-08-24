import Link from "next/link";
import { ArrowRight, Sparkles, Github, ExternalLink, Search, Bot, Zap } from "lucide-react";
import { getFeaturedProjects } from "@/data/projects";

export default function HomePage() {
  const featured = getFeaturedProjects();

  return (
    <div className="relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)] pointer-events-none" />
      <div className="bg-orb w-[500px] h-[500px] bg-accent/20 -top-40 -right-40" />
      <div className="bg-orb w-[400px] h-[400px] bg-purple-500/15 top-20 -left-32" />

      <div className="relative max-w-content-wide mx-auto px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
        {/* Hero 区域 */}
        <section className="mb-24 sm:mb-32">
          <div className="animate-fade-in-up">
            {/* 状态标签 */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-50 dark:bg-accent/10 border border-accent/10 dark:border-accent/20 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-xs font-medium text-accent dark:text-accent-light">
                可接新项目 / Open to work
              </span>
            </div>

            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-slate-900 dark:text-white mb-5">
              你好，我是
              <br />
              <span className="text-gradient">你的名字</span>
            </h1>

            <p className="text-lg sm:text-xl font-medium text-slate-700 dark:text-slate-200 mb-5">
              AI 工程师 · 专注 RAG 与大模型应用
            </p>

            <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 leading-relaxed mb-10 max-w-2xl">
              专注于检索增强生成（RAG）系统与大模型应用开发，擅长将 AI 技术落地为可交互的产品体验。
              从文档处理、向量检索到前端交互，全链路打造智能问答产品。
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/rag-demo"
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-accent to-purple-600 text-white px-6 py-3 rounded-xl text-sm font-semibold shadow-accent-glow hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <Sparkles size={16} />
                RAG 在线体验
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </Link>
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 px-6 py-3 rounded-xl text-sm font-semibold hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-200"
              >
                查看作品
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </Link>
            </div>
          </div>
        </section>

        {/* 精选作品 */}
        <section className="mb-24">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                精选作品
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                近期完成的代表性项目
              </p>
            </div>
            <Link
              href="/projects"
              className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-accent dark:hover:text-accent-light transition-colors group"
            >
              全部作品
              <ArrowRight
                size={14}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </Link>
          </div>

          {/* Bento 风格卡片网格 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featured.map((project, idx) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className={`group relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-6 sm:p-7 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 ${
                  idx === 0 ? "md:col-span-2" : ""
                }`}
              >
                {/* 卡片顶部渐变条 */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-purple-500 to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2.5 mb-2">
                      <h3
                        className={`font-heading font-semibold text-slate-900 dark:text-white group-hover:text-accent dark:group-hover:text-accent-light transition-colors ${
                          idx === 0 ? "text-xl sm:text-2xl" : "text-lg"
                        }`}
                      >
                        {project.title}
                      </h3>
                    </div>
                    <p
                      className={`text-slate-500 dark:text-slate-400 leading-relaxed ${
                        idx === 0 ? "text-sm sm:text-base max-w-2xl" : "text-sm"
                      }`}
                    >
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {project.tech.slice(0, idx === 0 ? 6 : 4).map((t) => (
                        <span
                          key={t}
                          className="text-xs font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-accent group-hover:text-white transition-all duration-300 group-hover:rotate-[-45deg]">
                    <ArrowRight size={18} />
                  </div>
                </div>

                {/* 大卡片额外信息 */}
                {idx === 0 && project.links && (
                  <div className="flex flex-wrap gap-3 mt-5 pt-5 border-t border-slate-100 dark:border-slate-800">
                    {project.links.map((link) => (
                      <span
                        key={link.label}
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400"
                      >
                        {link.label === "GitHub" ? (
                          <Github size={12} />
                        ) : (
                          <ExternalLink size={12} />
                        )}
                        {link.label}
                      </span>
                    ))}
                  </div>
                )}
              </Link>
            ))}
          </div>

          {/* 移动端查看全部 */}
          <div className="mt-6 sm:hidden">
            <Link
              href="/projects"
              className="inline-flex items-center gap-1 text-sm font-medium text-accent"
            >
              查看全部作品
              <ArrowRight size={14} />
            </Link>
          </div>
        </section>

        {/* 技术亮点 */}
        <section>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-8">
            技术方向
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                title: "RAG 系统",
                desc: "文档处理、向量检索、重排序、Query 改写全链路",
                icon: Search,
              },
              {
                title: "大模型应用",
                desc: "LangChain、Agent、Function Calling、Prompt 工程",
                icon: Bot,
              },
              {
                title: "全栈开发",
                desc: "FastAPI 后端 + Next.js 前端，端到端产品交付",
                icon: Zap,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-6 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-soft transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-accent-50 dark:bg-accent/10 flex items-center justify-center text-accent dark:text-accent-light mb-3">
                  <item.icon size={20} />
                </div>
                <h3 className="font-heading font-semibold text-slate-900 dark:text-white mb-1.5">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
