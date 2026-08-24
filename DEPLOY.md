# 部署指南

本项目前后端完全解耦，需分别部署。

---

## 一、前端部署（静态网站）

前端为纯静态 Next.js 应用，推荐部署到 Vercel / Netlify / Cloudflare Pages。

### 方案 A：Vercel（推荐）

1. 将前端代码推送到 GitHub 仓库
2. 登录 [vercel.com](https://vercel.com)，点击 **Add New → Project**
3. 导入你的 GitHub 仓库
4. 配置环境变量：
   - `NEXT_PUBLIC_RAG_API_URL` = 你的后端 API 地址（如 `https://your-space.hf.space`）
5. 点击 **Deploy**，等待构建完成
6. 部署后会获得一个 `xxx.vercel.app` 域名，可在设置中绑定自定义域名

### 方案 B：Netlify

1. 推送代码到 GitHub
2. 登录 [netlify.com](https://netlify.com)，**Add new site → Import an existing project**
3. 选择仓库，构建命令填 `npm run build`，发布目录填 `.next`
4. 环境变量中添加 `NEXT_PUBLIC_RAG_API_URL`
5. 点击 **Deploy site**

### 方案 C：Cloudflare Pages

1. 推送代码到 GitHub
2. 登录 Cloudflare Dashboard → **Pages → Create a project**
3. 连接 Git 仓库，框架预设选 **Next.js**
4. 环境变量添加 `NEXT_PUBLIC_RAG_API_URL`
5. 点击 **Save and Deploy**

> 注意：`NEXT_PUBLIC_` 前缀的变量会在构建时嵌入前端代码，因此**不要**在此放任何 API Key 等敏感信息。

---

## 二、后端部署（RAG API 服务）

后端基于 FastAPI，有两种部署方案。

### 方案 A：HuggingFace Spaces（推荐，免费）

适合轻量 RAG（bge-small embedding + 外部 LLM API 调用），免费 CPU 内存 2GB-8GB。

#### 步骤

1. 登录 [huggingface.co](https://huggingface.co)，点击 **Spaces → Create new Space**
2. 填写 Space 名称，SDK 选择 **Docker**
3. 将后端代码（含 `Dockerfile`）推送到 Space 的 Git 仓库：
   ```bash
   git clone https://huggingface.co/spaces/你的用户名/你的space名
   # 复制后端代码进去
   git add .
   git commit -m "init"
   git push
   ```
4. 在 Space 的 **Settings → Secrets** 中添加环境变量：
   - `LLM_API_KEY`（必填）
   - `LLM_BASE_URL`（如用通义千问则填 `https://dashscope.aliyuncs.com/compatible-mode/v1`）
   - `LLM_MODEL`（如 `qwen-turbo`）
   - `CORS_ORIGINS`（填你的前端域名，如 `https://yourname.vercel.app`）
   - `USE_RERANKER=false`（免费 CPU 建议关闭，加载慢）
5. 等待 Docker 构建并启动（首次需下载 embedding 模型，约 100MB，耗时几分钟）
6. Space 地址即 API 地址，如 `https://你的用户名-你的space名.hf.space`
7. 在前端环境变量 `NEXT_PUBLIC_RAG_API_URL` 中填入该地址，重新部署前端

#### 注意事项

- HuggingFace Spaces 免费版 48 小时无访问会休眠，首次访问需等待冷启动（前端已有 loading 状态处理）
- 如需 24/7 运行，可升级到付费硬件或使用方案 B
- 默认关闭 Reranker，如需开启请在 Secrets 中设 `USE_RERANKER=true`（会额外加载 400MB 模型）

### 方案 B：本地服务器 + 内网穿透

适合 RAG 较重（开启 Reranker、大文档、高并发）的场景。

#### 步骤

1. **本地启动后端**
   ```bash
   cd RAGdemo
   python -m venv venv
   # Windows: venv\Scripts\activate
   # Mac/Linux: source venv/bin/activate
   pip install -r requirements.txt
   cp .env.example .env  # 编辑 .env 填入 LLM_API_KEY
   uvicorn app.main:app --host 0.0.0.0 --port 8000
   ```

2. **内网穿透（三选一）**

   - **Cloudflare Tunnel（推荐，免费稳定）**
     ```bash
     # 安装 cloudflared 后
     cloudflared tunnel --url http://localhost:8000
     ```
     会得到一个 `https://xxx.trycloudflare.com` 地址。

   - **ngrok**
     ```bash
     ngrok http 8000
     ```

   - **frp**（需自有服务器）
     按 frp 文档配置客户端，将本地 8000 端口映射到公网。

3. 将穿透得到的公网地址填入前端 `NEXT_PUBLIC_RAG_API_URL`，重新部署前端。

4. 后端 `.env` 中设置 `CORS_ORIGINS=https://yourname.vercel.app`（你的前端域名）。

#### 注意事项

- 电脑需保持开机和网络连接
- 免费版 ngrok / cloudflared 地址可能变化，生产环境建议用固定域名
- Cloudflare Tunnel 可绑定自定义域名实现固定地址

---

## 三、环境变量总览

### 前端

| 变量 | 必填 | 说明 |
|------|------|------|
| `NEXT_PUBLIC_RAG_API_URL` | 是 | 后端 API 完整地址，如 `https://xxx.hf.space` |

### 后端

| 变量 | 必填 | 默认值 | 说明 |
|------|------|--------|------|
| `LLM_API_KEY` | 是 | - | 大模型 API Key |
| `LLM_BASE_URL` | 否 | 通义千问地址 | 兼容 OpenAI 协议的 API 地址 |
| `LLM_MODEL` | 否 | `qwen-turbo` | 模型名称 |
| `EMBEDDING_MODEL` | 否 | `BAAI/bge-small-zh-v1.5` | Embedding 模型 |
| `USE_RERANKER` | 否 | `false` | 是否启用 Reranker |
| `USE_HYDE` | 否 | `false` | 是否启用 HyDE |
| `USE_MULTI_QUERY` | 否 | `false` | 是否启用 Multi-Query |
| `FAISS_INDEX_PATH` | 否 | `./data/faiss_index` | 向量索引路径 |
| `CORS_ORIGINS` | 否 | `*` | 允许跨域的前端域名，逗号分隔 |

---

## 四、更换示例文档

1. 将你的 PDF 文件放到后端 `data/` 目录，命名为 `doc.pdf`（覆盖原文件）
2. 删除已有的向量索引：`rm -rf data/faiss_index`
3. 重启后端服务，启动时会自动摄入新的 `doc.pdf`
4. 也可通过前端 RAG 体验页面的「上传 PDF」按钮动态上传文档

---

## 五、常见问题

**Q: 前端提示"后端服务不可用"？**
A: 检查 `NEXT_PUBLIC_RAG_API_URL` 是否正确，后端是否已启动，CORS 是否配置了前端域名。

**Q: 首次提问等待很久？**
A: 后端首次启动需要下载 embedding 模型（约 100MB），HuggingFace Spaces 冷启动也需要时间。前端有 loading 状态，请耐心等待。

**Q: 回答说"知识库中未找到相关信息"？**
A: 确认文档已成功摄入（健康检查显示 ready），问题与文档内容相关。可尝试开启 Reranker 或调整切分参数。

**Q: 如何绑定自定义域名？**
A: 前端在 Vercel/Netlify 项目设置中添加域名并按提示配置 DNS；后端 HuggingFace Spaces 付费版支持自定义域名，免费版使用默认域名即可。
