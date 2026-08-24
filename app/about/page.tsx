import { Mail, Github, Linkedin, MapPin, Briefcase, GraduationCap, Code2 } from "lucide-react";

export const metadata = {
  title: "关于我",
  description: "个人简介、技术栈、经历与联系方式。",
};

const techGroups = [
  { category: "语言", items: ["Python", "TypeScript", "SQL"], icon: Code2 },
  { category: "AI / LLM", items: ["LangChain", "FAISS", "sentence-transformers", "OpenAI API"], icon: Code2 },
  { category: "后端", items: ["FastAPI", "Node.js", "PostgreSQL"], icon: Code2 },
  { category: "前端", items: ["React", "Next.js", "Tailwind CSS"], icon: Code2 },
  { category: "运维 / 部署", items: ["Docker", "HuggingFace Spaces", "Vercel"], icon: Code2 },
  { category: "工具", items: ["Git", "Linux", "VS Code"], icon: Code2 },
];

const experiences = [
  {
    type: "work",
    title: "职位 / 角色（占位）",
    org: "公司 / 组织名称",
    period: "2023 - 至今",
    desc: "工作职责与成就描述占位。请填写你在该岗位的主要工作内容、技术贡献和成果。",
  },
  {
    type: "education",
    title: "教育经历（占位）",
    org: "学校 / 专业",
    period: "2019 - 2023",
    desc: "学历、相关课程或成就占位。",
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-content-wide mx-auto px-6 py-16 sm:py-20">
      {/* 页面标题 */}
      <div className="mb-14">
        <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
          关于我
        </h1>
        <div className="h-1 w-16 rounded-full bg-gradient-to-r from-accent to-purple-600" />
      </div>

      {/* 个人简介 */}
      <section className="mb-16">
        <h2 className="font-heading text-xl font-semibold text-slate-900 dark:text-white mb-5 flex items-center gap-2.5">
          <span className="w-1 h-5 rounded-full bg-accent" />
          简介
        </h2>
        <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-base">
          <p>
            这里是个人简介占位。请填写你的职业背景、技术方向和兴趣领域。
          </p>
          <p>
            AI 应用工程师，专注于 RAG（检索增强生成）系统与大模型应用开发。
            热衷于将前沿 AI 技术转化为可落地的产品体验，擅长 Python 后端开发与前端交互实现。
          </p>
        </div>
      </section>

      {/* 技术栈 */}
      <section className="mb-16">
        <h2 className="font-heading text-xl font-semibold text-slate-900 dark:text-white mb-5 flex items-center gap-2.5">
          <span className="w-1 h-5 rounded-full bg-accent" />
          技术栈
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {techGroups.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-5 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-soft transition-all duration-300"
            >
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <group.icon size={14} className="text-accent" />
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md hover:bg-accent-50 dark:hover:bg-accent/10 hover:text-accent dark:hover:text-accent-light transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 经历时间线 */}
      <section className="mb-16">
        <h2 className="font-heading text-xl font-semibold text-slate-900 dark:text-white mb-6 flex items-center gap-2.5">
          <span className="w-1 h-5 rounded-full bg-accent" />
          经历
        </h2>
        <div className="relative pl-8 sm:pl-10">
          {/* 时间线竖线 */}
          <div className="absolute left-3 sm:left-4 top-2 bottom-2 w-px bg-gradient-to-b from-accent via-slate-200 dark:via-slate-700 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative">
                {/* 时间线圆点 */}
                <div className="absolute -left-[29px] sm:-left-[35px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-2 border-accent flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                </div>

                <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-5 sm:p-6 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-soft transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-1">
                    <h3 className="font-heading font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                      {exp.type === "work" ? (
                        <Briefcase size={16} className="text-accent" />
                      ) : (
                        <GraduationCap size={16} className="text-accent" />
                      )}
                      {exp.title}
                    </h3>
                    <span className="text-xs font-medium text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md w-fit">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-2.5">
                    {exp.org}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {exp.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 联系方式 */}
      <section>
        <h2 className="font-heading text-xl font-semibold text-slate-900 dark:text-white mb-5 flex items-center gap-2.5">
          <span className="w-1 h-5 rounded-full bg-accent" />
          联系方式
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <a
            href="mailto:your@email.com"
            className="group flex items-center gap-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-4 hover:border-accent/30 dark:hover:border-accent/30 hover:shadow-soft transition-all duration-300"
          >
            <span className="w-10 h-10 rounded-lg bg-accent-50 dark:bg-accent/10 flex items-center justify-center text-accent dark:text-accent-light group-hover:bg-accent group-hover:text-white transition-colors">
              <Mail size={18} />
            </span>
            <div>
              <p className="text-xs text-slate-400 dark:text-slate-500">邮箱</p>
              <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
                your@email.com
              </p>
            </div>
          </a>
          <a
            href="https://github.com/yourname"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-4 hover:border-accent/30 dark:hover:border-accent/30 hover:shadow-soft transition-all duration-300"
          >
            <span className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 group-hover:bg-slate-900 group-hover:text-white transition-colors">
              <Github size={18} />
            </span>
            <div>
              <p className="text-xs text-slate-400 dark:text-slate-500">GitHub</p>
              <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
                @yourname
              </p>
            </div>
          </a>
          <a
            href="https://linkedin.com/in/yourname"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-4 hover:border-accent/30 dark:hover:border-accent/30 hover:shadow-soft transition-all duration-300"
          >
            <span className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Linkedin size={18} />
            </span>
            <div>
              <p className="text-xs text-slate-400 dark:text-slate-500">LinkedIn</p>
              <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
                in/yourname
              </p>
            </div>
          </a>
          <div className="flex items-center gap-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-4">
            <span className="w-10 h-10 rounded-lg bg-rose-50 dark:bg-rose-900/20 flex items-center justify-center text-rose-500">
              <MapPin size={18} />
            </span>
            <div>
              <p className="text-xs text-slate-400 dark:text-slate-500">所在地</p>
              <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
                城市（占位）
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
