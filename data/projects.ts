/**
 * 作品集数据 —— 占位内容，后续替换为真实作品信息
 */
export interface Project {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  date: string;
  detail: string;
  links?: { label: string; url: string }[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "rag-qa-system",
    title: "RAG 知识库问答系统",
    description:
      "基于 LangChain + FAISS 的检索增强生成系统，支持 PDF 文档摄入、向量检索、Reranker 精排与 Query 改写。",
    tech: ["Python", "FastAPI", "LangChain", "FAISS", "sentence-transformers"],
    date: "2024",
    detail:
      "从零搭建的 RAG 问答系统，实现了文档加载、递归切分、向量化存储、相似度检索、Cross-Encoder 重排序、HyDE 假设文档检索、Multi-Query 多路召回与 RRF 融合等完整链路。后端以 FastAPI 暴露 REST 接口，支持前端在线体验。",
    links: [
      { label: "GitHub", url: "#" },
      { label: "在线体验", url: "/rag-demo" },
    ],
    featured: true,
  },
  {
    slug: "project-placeholder-2",
    title: "作品二（占位）",
    description: "此处为作品占位描述，后续替换为真实项目信息。",
    tech: ["React", "TypeScript", "Node.js"],
    date: "2024",
    detail:
      "这是作品详情的占位内容。请在此处填写项目背景、技术难点、解决方案和个人贡献等详细信息。",
    links: [{ label: "GitHub", url: "#" }],
    featured: true,
  },
  {
    slug: "project-placeholder-3",
    title: "作品三（占位）",
    description: "此处为作品占位描述，后续替换为真实项目信息。",
    tech: ["Python", "PyTorch", "Docker"],
    date: "2023",
    detail:
      "这是作品详情的占位内容。请在此处填写项目背景、技术难点、解决方案和个人贡献等详细信息。",
    links: [{ label: "GitHub", url: "#" }],
    featured: true,
  },
  {
    slug: "project-placeholder-4",
    title: "作品四（占位）",
    description: "此处为作品占位描述，后续替换为真实项目信息。",
    tech: ["Next.js", "Tailwind CSS", "PostgreSQL"],
    date: "2023",
    detail:
      "这是作品详情的占位内容。请在此处填写项目背景、技术难点、解决方案和个人贡献等详细信息。",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
