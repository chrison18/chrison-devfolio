import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "你的名字 | AI 工程师作品集",
    template: "%s | 你的名字",
  },
  description:
    "AI 工程师个人作品集，专注 RAG 与大模型应用。包含在线 RAG 知识库问答体验。",
  keywords: ["AI 工程师", "RAG", "大模型", "作品集", "LangChain", "FastAPI"],
  authors: [{ name: "你的名字" }],
  openGraph: {
    title: "你的名字 | AI 工程师作品集",
    description: "专注 RAG 与大模型应用的 AI 工程师作品集",
    type: "website",
    locale: "zh_CN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
