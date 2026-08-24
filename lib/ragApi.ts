/**
 * RAG 后端 API 封装
 * 所有与后端通信的逻辑集中在此，便于统一管理 base URL 和错误处理
 */

const API_BASE = process.env.NEXT_PUBLIC_RAG_API_URL || "http://localhost:8000";

export interface SourceDoc {
  page_content: string;
  metadata: Record<string, unknown>;
}

export interface QueryResult {
  answer: string;
  source_docs: SourceDoc[];
}

export interface HealthStatus {
  status: string;
  ready: boolean;
}

export interface IngestResult {
  chunks: number;
  message: string;
}

/** 检查后端是否就绪 */
export async function checkHealth(): Promise<HealthStatus> {
  const res = await fetch(`${API_BASE}/health`, { cache: "no-store" });
  if (!res.ok) throw new Error(`健康检查失败: ${res.status}`);
  return res.json();
}

/** 上传 PDF 文档并建立索引 */
export async function ingestPdf(file: File): Promise<IngestResult> {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch(`${API_BASE}/api/ingest`, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({ detail: res.statusText }));
    throw new Error(err.detail || "文档上传失败");
  }
  return res.json();
}

/**
 * 发起 RAG 问答
 * @param question 用户问题
 * @param options 检索策略开关
 */
export async function queryRag(
  question: string,
  options?: {
    use_reranker?: boolean;
    use_hyde?: boolean;
    use_multi_query?: boolean;
  }
): Promise<QueryResult> {
  const res = await fetch(`${API_BASE}/api/query`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question, ...options }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({ detail: res.statusText }));
    throw new Error(err.detail || "问答请求失败");
  }
  return res.json();
}
