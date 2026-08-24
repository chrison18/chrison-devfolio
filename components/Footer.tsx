import { Github, Mail, Linkedin, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  {
    icon: Mail,
    label: "邮箱",
    href: "mailto:your@email.com",
    handle: "your@email.com",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/yourname",
    handle: "@yourname",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/yourname",
    handle: "in/yourname",
  },
];

const navLinks = [
  { href: "/", label: "首页" },
  { href: "/projects", label: "作品" },
  { href: "/rag-demo", label: "RAG 体验" },
  { href: "/about", label: "关于" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 mt-24">
      <div className="max-w-content-wide mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* 品牌区 */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="font-heading font-bold text-lg text-slate-900 dark:text-white mb-3 inline-block"
            >
              你的名字
            </Link>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-xs">
              AI 工程师，专注 RAG 系统与大模型应用开发，致力于将 AI 技术落地为可交互的产品体验。
            </p>
          </div>

          {/* 导航区 */}
          <div>
            <h3 className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-4">
              导航
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 dark:text-slate-300 hover:text-accent dark:hover:text-accent-light transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 社交区 */}
          <div>
            <h3 className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-4">
              联系
            </h3>
            <ul className="space-y-2.5">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="text-sm text-slate-600 dark:text-slate-300 hover:text-accent dark:hover:text-accent-light transition-colors inline-flex items-center gap-2.5 group"
                  >
                    <span className="w-7 h-7 rounded-md bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
                      <social.icon size={14} />
                    </span>
                    {social.handle}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 底部版权 */}
        <div className="pt-8 border-t border-slate-100 dark:border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-400 dark:text-slate-500">
            © {new Date().getFullYear()} 你的名字. All rights reserved.
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
