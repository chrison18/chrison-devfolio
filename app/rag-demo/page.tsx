import RagChat from "@/components/RagChat";
import { Sparkles, Database, Wand2, GitBranch } from "lucide-react";

export const metadata = {
  title: "RAG 在线体验",
  description: "在线体验 RAG 知识库问答系统，支持 PDF 文档上传、检索策略切换与引用来源展示。",
};

const features = [
  { icon: Database, label: "PDF 文档上传", desc: "支持自定义知识库" },
  { icon: Wand2, label: "多种检索策略", desc: "Reranker / HyDE / Multi-Query" },
  { icon: GitBranch, label: "引用来源追溯", desc: "答案可溯源到原文片段" },
];

export default function RagDemoPage() {
  return (
    <div className="relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_60%)] pointer-events-none" />
      <div className="bg-orb w-[400px] h-[400px] bg-accent/15 -top-20 -right-20" />

      <div className="relative max-w-content-wide mx-auto px-6 py-12 sm:py-16">
        {/* 页面标题 */}
        <header className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-50 dark:bg-accent/10 border border-accent/10 dark:border-accent/20 mb-5">
            <Sparkles size={14} className="text-accent" />
            <span className="text-xs font-medium text-accent dark:text-accent-light">
              交互式 Demo
            </span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            RAG <span className="text-gradient">在线体验</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto text-sm sm:text-base">
            基于 LangChain + FAISS 的检索增强生成问答系统。上传 PDF 文档或使用默认知识库，
            支持 Reranker 精排、HyDE 假设文档检索、Multi-Query 多路召回等进阶策略。
          </p>
        </header>

        {/* 特性标签 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
          {features.map((f) => (
            <div
              key={f.label}
              className="flex items-center gap-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/40 backdrop-blur px-4 py-3"
            >
              <div className="w-9 h-9 rounded-lg bg-accent-50 dark:bg-accent/10 flex items-center justify-center text-accent dark:text-accent-light flex-shrink-0">
                <f.icon size={16} />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium text-slate-900 dark:text-white">{f.label}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 聊天组件 */}
        <RagChat />
      </div>
    </div>
  );
}
