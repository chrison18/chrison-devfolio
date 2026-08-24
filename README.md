# chrison-devfolio

个人作品集站点，集成了一个可交互的 **RAG 知识库问答 Demo**。前端基于 Next.js 14 静态生成，后端 RAG 服务独立部署，前后端通过 REST API 解耦。

> 在线体验：部署后访问 `/rag-demo` 即可上传 PDF 并进行知识库问答。

## 技术栈

| 层级 | 技术 |
|------|------|
| 框架 | Next.js 14 (App Router) + TypeScript |
| 样式 | Tailwind CSS |
| 图标 | Lucide React |
| Markdown | react-markdown |
| 后端通信 | fetch 封装 (`lib/ragApi.ts`) |

## 功能特性

- **作品集展示**：作品列表 + 详情页，支持技术栈标签筛选展示
- **RAG 在线体验**：
  - PDF 文档上传与自动索引
  - 多轮对话问答，Markdown 渲染回答
  - 引用来源追溯（可折叠展开原文片段）
  - 检索策略开关：Reranker 精排 / HyDE 假设文档 / Multi-Query 多路召回
  - 后端健康状态实时检测
- **响应式设计**：移动端 / 平板 / 桌面端适配
- **SEO 友好**：静态生成 + 元数据配置

## 项目结构

```
chrison-devfolio/
├── app/
│   ├── layout.tsx           # 根布局（导航 + 页脚）
│   ├── page.tsx             # 首页（Hero + 精选作品 + 技术方向）
│   ├── globals.css          # 全局样式与动画
│   ├── about/page.tsx       # 关于页（简介 / 技术栈 / 经历时间线）
│   ├── projects/
│   │   ├── page.tsx         # 作品列表
│   │   └── [slug]/page.tsx  # 作品详情（SSG 预生成）
│   └── rag-demo/page.tsx    # RAG 体验页
├── components/
│   ├── Navbar.tsx           # 顶部导航（滚动玻璃拟态 + 响应式菜单）
│   ├── Footer.tsx           # 页脚
│   └── RagChat.tsx          # RAG 对话组件（核心交互）
├── lib/
│   └── ragApi.ts            # 后端 API 封装（健康检查 / 上传 / 问答）
├── data/
│   └── projects.ts          # 作品数据
├── public/                  # 静态资源
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── .env.example
└── DEPLOY.md                # 详细部署指南
```

## 本地开发

### 前置要求

- Node.js 18+
- 后端 RAG 服务已启动（接口规范见下文）

### 启动

```bash
# 安装依赖
npm install

# 配置环境变量
cp .env.example .env.local
# 编辑 .env.local，设置 NEXT_PUBLIC_RAG_API_URL

# 启动开发服务器
npm run dev
```

访问 http://localhost:3000

### 环境变量

| 变量 | 说明 | 默认值 |
|------|------|--------|
| `NEXT_PUBLIC_RAG_API_URL` | 后端 RAG API 地址 | `http://localhost:8000` |

## 后端接口规范

RAG 后端为独立服务（FastAPI + LangChain + FAISS），需实现以下接口：

| 方法 | 路径 | 说明 |
|------|------|------|
| GET | `/health` | 健康检查，返回 `{ status, ready }` |
| POST | `/api/ingest` | 上传 PDF（multipart/form-data，字段名 `file`），返回 `{ message, chunks }` |
| POST | `/api/query` | 问答请求，body 为 `{ question, use_reranker?, use_hyde?, use_multi_query? }`，返回 `{ answer, source_docs[] }` |

`source_docs` 中每项包含 `page_content` 和 `metadata`（可选 `page`、`source` 字段）。

## 自定义内容

占位内容集中在以下文件，替换为真实信息即可：

- 个人信息：`components/Navbar.tsx`、`components/Footer.tsx`、`app/page.tsx`、`app/about/page.tsx`
- 作品数据：`data/projects.ts`
- 主题色：`tailwind.config.ts` 中的 `accent` 配置
- 示例问题：`components/RagChat.tsx` 中的 `SAMPLE_QUESTIONS`

## 部署

前端为纯静态 Next.js 应用，推荐部署到 Vercel / Netlify / Cloudflare Pages。详细步骤及后端部署方案见 [DEPLOY.md](./DEPLOY.md)。

## 页面路由

| 路由 | 页面 | 说明 |
|------|------|------|
| `/` | 首页 | Hero 介绍 + 精选作品 + 技术方向 |
| `/projects` | 作品列表 | 作品卡片网格 + 技术栈标签 |
| `/projects/[slug]` | 作品详情 | 详细描述 + 截图 + 项目链接 |
| `/rag-demo` | RAG 体验 | PDF 上传 + 对话问答 + 引用来源 + 检索策略 |
| `/about` | 关于 | 简介 + 技术栈 + 经历时间线 + 联系方式 |

## License

MIT
