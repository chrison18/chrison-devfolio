import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github, Calendar, Tag } from "lucide-react";
import { getProjectBySlug, projects } from "@/data/projects";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectDetailPage({ params }: PageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-content-wide mx-auto px-6 py-12 sm:py-16">
      {/* 返回按钮 */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400 hover:text-accent dark:hover:text-accent-light transition-colors mb-8 group"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
        返回作品列表
      </Link>

      {/* 标题区域 */}
      <header className="mb-10">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <h1 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            {project.title}
          </h1>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-5">
          <span className="inline-flex items-center gap-1.5">
            <Calendar size={14} />
            {project.date}
          </span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="inline-flex items-center gap-1 text-xs font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md"
            >
              <Tag size={10} className="opacity-50" />
              {t}
            </span>
          ))}
        </div>
      </header>

      {/* 作品截图占位 */}
      <div className="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 h-56 sm:h-72 flex items-center justify-center mb-10">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="relative text-center">
          <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-white/80 dark:bg-slate-700/80 backdrop-blur flex items-center justify-center shadow-lg">
            <ExternalLink size={28} className="text-slate-400 dark:text-slate-300" />
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
            作品截图 / 演示图（占位）
          </p>
        </div>
      </div>

      {/* 详细描述 */}
      <article className="mb-10">
        <h2 className="font-heading text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2.5">
          <span className="w-1 h-5 rounded-full bg-accent" />
          项目详情
        </h2>
        <div className="text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line text-base space-y-4">
          {project.detail}
        </div>
      </article>

      {/* 项目链接 */}
      {project.links && project.links.length > 0 && (
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
          <h3 className="font-heading text-sm font-semibold text-slate-900 dark:text-white mb-4 uppercase tracking-wider text-slate-500 dark:text-slate-400">
            项目链接
          </h3>
          <div className="flex flex-wrap gap-3">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target={link.url.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 px-4 py-2.5 rounded-xl text-sm font-medium hover:border-accent/30 dark:hover:border-accent/30 hover:shadow-soft transition-all duration-200"
              >
                {link.label === "GitHub" ? (
                  <Github size={16} className="text-slate-500 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
                ) : (
                  <ExternalLink size={16} className="text-slate-500 group-hover:text-accent transition-colors" />
                )}
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
