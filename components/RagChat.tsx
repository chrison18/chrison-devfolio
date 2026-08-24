"use client";

import { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import {
  Send,
  Upload,
  Loader2,
  AlertCircle,
  CheckCircle2,
  FileText,
  ChevronDown,
  ChevronUp,
  User,
  Bot,
  Sparkles,
} from "lucide-react";
import { checkHealth, ingestPdf, queryRag, type SourceDoc } from "@/lib/ragApi";

// 示例问题（根据默认文档内容调整）
const SAMPLE_QUESTIONS = [
  "这份文档的核心内容是什么？",
  "文档中提到了哪些关键技术？",
  "请总结文档的主要结论",
  "文档中有哪些具体的数据或案例？",
];

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  sources?: SourceDoc[];
  error?: boolean;
}

type HealthState = "checking" | "ready" | "not-ready" | "offline";

export default function RagChat() {
  const [health, setHealth] = useState<HealthState>("checking");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadMsg, setUploadMsg] = useState<string | null>(null);
  const [showSources, setShowSources] = useState<number | null>(null);

  // 检索策略开关
  const [useReranker, setUseReranker] = useState(false);
  const [useHyde, setUseHyde] = useState(false);
  const [useMultiQuery, setUseMultiQuery] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // 页面加载时检查后端健康状态
  useEffect(() => {
    checkHealth()
      .then((res) => {
        setHealth(res.ready ? "ready" : "not-ready");
      })
      .catch(() => setHealth("offline"));
  }, []);

  // 自动滚动到底部
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleSend = async (question?: string) => {
    const q = (question ?? input).trim();
    if (!q || loading) return;

    setInput("");
    setLoading(true);
    setMessages((prev) => [...prev, { role: "user", content: q }]);

    try {
      const result = await queryRag(q, {
        use_reranker: useReranker,
        use_hyde: useHyde,
        use_multi_query: useMultiQuery,
      });
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: result.answer, sources: result.source_docs },
      ]);
    } catch (err) {
      const msg = err instanceof Error ? err.message : "请求失败，请稍后重试";
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: `抱歉，${msg}`, error: true },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setUploadMsg(null);

    try {
      const result = await ingestPdf(file);
      setUploadMsg(`✓ ${result.message}，共 ${result.chunks} 个文本块`);
      setHealth("ready");
    } catch (err) {
      const msg = err instanceof Error ? err.message : "上传失败";
      setUploadMsg(`✗ ${msg}`);
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  const healthConfig = {
    checking: { icon: Loader2, color: "text-slate-400", bg: "bg-slate-100 dark:bg-slate-800", text: "正在连接后端服务...", spin: true },
    ready: { icon: CheckCircle2, color: "text-green-500", bg: "bg-green-50 dark:bg-green-900/20", text: "后端已就绪，知识库已加载", spin: false },
    "not-ready": { icon: AlertCircle, color: "text-amber-500", bg: "bg-amber-50 dark:bg-amber-900/20", text: "后端在线，但知识库为空，请上传 PDF", spin: false },
    offline: { icon: AlertCircle, color: "text-red-500", bg: "bg-red-50 dark:bg-red-900/20", text: "后端服务不可用，请确认 API 地址配置正确", spin: false },
  };

  const hc = healthConfig[health];

  return (
    <div className="space-y-5">
      {/* 状态条 + 上传区 */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-5 space-y-4 shadow-soft">
        {/* 后端状态 */}
        <div className="flex items-center gap-3">
          <div className={`w-9 h-9 rounded-lg ${hc.bg} flex items-center justify-center flex-shrink-0`}>
            <hc.icon size={16} className={`${hc.color} ${hc.spin ? "animate-spin" : ""}`} />
          </div>
          <span className="text-sm text-slate-600 dark:text-slate-300 font-medium">{hc.text}</span>
        </div>

        {/* 上传按钮 */}
        <div>
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf"
            onChange={handleUpload}
            className="hidden"
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            disabled={uploading || health === "offline"}
            className="inline-flex items-center gap-2 text-sm font-medium border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-slate-700 dark:text-slate-200 hover:border-accent/40 dark:hover:border-accent/40 hover:bg-accent-50 dark:hover:bg-accent/5 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          >
            {uploading ? (
              <Loader2 size={16} className="animate-spin" />
            ) : (
              <Upload size={16} />
            )}
            {uploading ? "上传中..." : "上传 PDF 文档"}
          </button>
          {uploadMsg && (
            <p
              className={`text-sm mt-2.5 font-medium ${
                uploadMsg.startsWith("✓") ? "text-green-600 dark:text-green-400" : "text-red-500 dark:text-red-400"
              }`}
            >
              {uploadMsg}
            </p>
          )}
        </div>
      </div>

      {/* 检索策略开关 */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-5 shadow-soft">
        <p className="text-sm font-semibold text-slate-900 dark:text-white mb-3.5 flex items-center gap-2">
          <Sparkles size={14} className="text-accent" />
          检索策略（可选）
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-3">
          <ToggleSwitch
            label="Reranker 精排"
            checked={useReranker}
            onChange={setUseReranker}
          />
          <ToggleSwitch
            label="HyDE 假设文档"
            checked={useHyde}
            onChange={setUseHyde}
          />
          <ToggleSwitch
            label="Multi-Query 多路召回"
            checked={useMultiQuery}
            onChange={setUseMultiQuery}
          />
        </div>
      </div>

      {/* 对话区域 */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 overflow-hidden shadow-soft">
        {/* 消息列表 */}
        <div className="h-[420px] overflow-y-auto p-4 sm:p-5 space-y-5 bg-slate-50/50 dark:bg-slate-950/30">
          {messages.length === 0 && !loading && (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-800 shadow-soft flex items-center justify-center mb-4">
                <FileText size={28} className="text-slate-300 dark:text-slate-600" />
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-5 max-w-xs">
                {health === "ready"
                  ? "输入问题开始对话，或点击下方示例问题"
                  : "请先上传 PDF 文档或等待默认知识库加载"}
              </p>
              <div className="flex flex-wrap gap-2 justify-center max-w-md">
                {SAMPLE_QUESTIONS.map((q) => (
                  <button
                    key={q}
                    onClick={() => handleSend(q)}
                    disabled={health !== "ready"}
                    className="text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full px-3.5 py-1.5 text-slate-600 dark:text-slate-300 hover:border-accent hover:text-accent dark:hover:text-accent-light disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 hover:shadow-soft"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.map((msg, idx) => (
            <div key={idx} className="animate-fade-in-up">
              <div
                className={`flex gap-3 ${
                  msg.role === "user" ? "flex-row-reverse" : "flex-row"
                }`}
              >
                {/* 头像 */}
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    msg.role === "user"
                      ? "bg-gradient-to-br from-accent to-purple-600 text-white shadow-accent-glow"
                      : msg.error
                      ? "bg-red-100 dark:bg-red-900/30 text-red-500"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
                  }`}
                >
                  {msg.role === "user" ? <User size={15} /> : <Bot size={15} />}
                </div>

                {/* 消息气泡 */}
                <div
                  className={`max-w-[80%] sm:max-w-[75%] rounded-2xl px-4 py-3 text-sm ${
                    msg.role === "user"
                      ? "bg-gradient-to-br from-accent to-purple-600 text-white rounded-tr-md shadow-accent-glow"
                      : msg.error
                      ? "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border border-red-100 dark:border-red-900/30 rounded-tl-md"
                      : "bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-tl-md shadow-soft"
                  }`}
                >
                  {msg.role === "assistant" ? (
                    <div className="prose-answer">
                      <ReactMarkdown>{msg.content}</ReactMarkdown>
                    </div>
                  ) : (
                    <p className="leading-relaxed">{msg.content}</p>
                  )}
                </div>
              </div>

              {/* 引用来源 */}
              {msg.sources && msg.sources.length > 0 && (
                <div className="mt-2.5 ml-11">
                  <button
                    onClick={() =>
                      setShowSources(showSources === idx ? null : idx)
                    }
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 dark:text-slate-500 hover:text-accent dark:hover:text-accent-light transition-colors bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 rounded-lg px-2.5 py-1.5"
                  >
                    {showSources === idx ? (
                      <ChevronUp size={12} />
                    ) : (
                      <ChevronDown size={12} />
                    )}
                    引用来源 ({msg.sources.length})
                  </button>
                  {showSources === idx && (
                    <div className="mt-2.5 space-y-2 animate-fade-in">
                      {msg.sources.map((doc, sIdx) => (
                        <div
                          key={sIdx}
                          className="bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 rounded-xl p-3 text-xs text-slate-500 dark:text-slate-400"
                        >
                          <div className="text-slate-400 dark:text-slate-500 mb-1.5 font-medium">
                            {doc.metadata?.page != null && `第 ${String(doc.metadata.page)} 页`}
                            {doc.metadata?.source != null && ` · ${String(doc.metadata.source)}`}
                          </div>
                          <p className="line-clamp-3 leading-relaxed">
                            {doc.page_content}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="flex gap-3 animate-fade-in">
              <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center flex-shrink-0">
                <Bot size={15} className="text-slate-500 dark:text-slate-400" />
              </div>
              <div className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl rounded-tl-md px-4 py-3 shadow-soft">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600 animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600 animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600 animate-bounce" />
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* 输入框 */}
        <div className="border-t border-slate-100 dark:border-slate-800 p-3 sm:p-4 bg-white dark:bg-slate-900/50">
          <div className="flex gap-2.5">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder={
                health === "offline" ? "后端不可用" : "输入你的问题..."
              }
              disabled={loading || health === "offline"}
              className="flex-1 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm bg-slate-50 dark:bg-slate-800/50 text-slate-800 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 dark:focus:ring-accent/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            />
            <button
              onClick={() => handleSend()}
              disabled={!input.trim() || loading || health === "offline"}
              className="bg-gradient-to-r from-accent to-purple-600 text-white rounded-xl px-5 py-2.5 text-sm font-semibold hover:shadow-accent-glow disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:shadow-none transition-all duration-200 inline-flex items-center gap-1.5 hover:scale-[1.02] active:scale-[0.98]"
            >
              {loading ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <Send size={16} />
              )}
              发送
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/** 开关组件 */
function ToggleSwitch({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <label className="inline-flex items-center gap-2.5 cursor-pointer select-none group">
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`relative w-10 h-5.5 rounded-full transition-colors duration-200 flex-shrink-0 ${
          checked ? "bg-gradient-to-r from-accent to-purple-600" : "bg-slate-200 dark:bg-slate-700"
        }`}
        style={{ height: "22px" }}
      >
        <span
          className={`absolute top-0.5 left-0.5 w-4.5 h-4.5 bg-white rounded-full shadow transition-transform duration-200 ${
            checked ? "translate-x-[18px]" : "translate-x-0"
          }`}
          style={{ width: "18px", height: "18px" }}
        />
      </button>
      <span className={`text-sm font-medium transition-colors ${
        checked ? "text-slate-900 dark:text-white" : "text-slate-500 dark:text-slate-400"
      }`}>
        {label}
      </span>
    </label>
  );
}
