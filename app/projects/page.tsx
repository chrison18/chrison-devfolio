import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { projects } from "@/data/projects";

export const metadata = {
  title: "作品",
  description: "个人项目作品集，涵盖 RAG 系统、Web 应用等技术项目。",
};

export default function ProjectsPage() {
  return (
    <div className="max-w-content-wide mx-auto px-6 py-16 sm:py-20">
      {/* 页面标题 */}
      <div className="mb-12">
        <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
          作品
        </h1>
        <div className="flex items-center gap-3">
          <div className="h-1 w-16 rounded-full bg-gradient-to-r from-accent to-purple-600" />
          <p className="text-sm text-slate-500 dark:text-slate-400">
            共 {projects.length} 个项目
          </p>
        </div>
      </div>

      {/* 项目卡片网格 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project, idx) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-6 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
          >
            {/* 卡片顶部渐变条 */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-purple-500 to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="flex items-start justify-between gap-3 mb-3">
              <h2 className="font-heading font-semibold text-lg text-slate-900 dark:text-white group-hover:text-accent dark:group-hover:text-accent-light transition-colors">
                {project.title}
              </h2>
              <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-accent group-hover:text-white transition-all duration-300 group-hover:rotate-[-45deg]">
                <ArrowRight size={16} />
              </div>
            </div>

            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4 line-clamp-2">
              {project.description}
            </p>

            <div className="flex items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {project.tech.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="text-xs font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded"
                  >
                    {t}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="text-xs font-medium text-slate-400 dark:text-slate-500 px-1">
                    +{project.tech.length - 3}
                  </span>
                )}
              </div>
              <span className="flex items-center gap-1 text-xs text-slate-400 dark:text-slate-500 flex-shrink-0">
                <Calendar size={12} />
                {project.date}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
