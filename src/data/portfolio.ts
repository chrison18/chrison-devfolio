// 个人信息
export const profile = {
  name: '周宇轩',
  gender: '男',
  age: 22,
  title: '后端开发工程师',
  subtitle: 'Backend Developer / AI Application Engineer',
  tagline: '专注后端架构与 AI 应用落地',
  bio: '湖南大学信息与计算科学专业本科在读，善于在紧迫周期内从零掌握陌生技术栈并交付高可靠系统。具备将 AI 工具深度嵌入研发流程的工程习惯，擅长快速定位瓶颈、保障高并发下的系统稳定。',
  location: '广州',
  phone: '17377901023',
  email: '2390249519@qq.com',
  github: 'https://github.com/chrison18',
  target: '后端开发',
}

// 个人优势
export const advantages = [
  {
    title: '快速学习与交付',
    description: '一个月内独立完成 Erlang 游戏后端从架构设计、核心模块开发到压测调优的全链路交付；一周内完成 Erlang 语言与 OTP 框架学习。',
  },
  {
    title: 'AI 工程化能力',
    description: '具备将 AI 工具深度嵌入研发流程的工程习惯，熟悉 LangChain、langgraph 等框架，能独立完成 RAG 系统、Agent 应用的设计与落地。',
  },
  {
    title: '高并发系统稳定性',
    description: '擅长快速定位系统瓶颈，基于 OTP supervisor 树搭建进程监控体系实现故障自动恢复，系统通过万人压测，故障自愈率 100%。',
  },
]

// 工作经历
export const workExperience = [
  {
    company: '广州诗悦网络科技有限公司',
    role: 'Erlang 服务端开发工程师',
    period: '2026.06 - 2026.08',
    description:
      '快速切入 Erlang 技术栈，独立交付完整游戏后端。基于 OTP supervisor 树搭建进程监控体系，实现进程故障自动恢复；自研 gen_tcp 长连接网关与二进制协议，采用异步 cast 无锁设计支撑万人在线；设计 ets+dets 混合内存存储方案，实现冷热数据处理，实现 AOI 空间感知算法减少网络开销。',
    highlights: [
      '系统通过万人压测，故障自愈率 100%，延迟维持毫秒级',
      '自研 gen_tcp 长连接网关，异步 cast 无锁设计支撑万人在线',
      'AOI 空间感知算法有效减少网络开销',
    ],
  },
]

// 实习经历
export const internshipExperience = [
  {
    company: '智悦云创（湖南）科技有限公司',
    role: 'Python 后端开发',
    period: '2025.06 - 2025.09',
    description:
      '负责 MySQL 表结构设计、ORM 映射与索引调优；参与 Redis 缓存层搭建，实现连接池、状态管理与异常监控。基于 LangChain 构建 AI 简历分析引擎，使用 PydanticOutputParser 实现结构化输出；独立开发职业规划模块，运用三阶段生成策略与 Celery 异步任务。',
    highlights: [
      '优化 Prompt 将分析准确率提升至 85%+，支持批量分析',
      'Celery 异步任务 + Schema 校验保障数据可靠',
      'Redis 缓存层实现连接池、状态管理与异常监控',
    ],
  },
]

// 教育经历
export const education = [
  {
    school: '湖南大学',
    degree: '本科',
    major: '信息与计算科学',
    period: '2022 - 2026',
    description:
      '学业成绩优异，数学基础扎实，数值分析课程表现突出，熟练运用数学模型、数据结构与算法处理实际问题。曾主导 Python 结课大作业并满分答辩，具备项目分工协调等团队协作能力。担任数学学院宣传部干事，负责公众号运营、活动摄影剪辑及推文审核。',
  },
]

// 项目经历
export const projects = [
  {
    id: 1,
    title: '基于 LangChain 的知识库智能问答系统（RAG）',
    role: '后端开发',
    period: '2026.07 - 2026.08',
    description:
      '基于 LCEL 构建全链路 RAG 引擎，支持 PDF 文档加载、递归字符切分、向量化入库、相似度检索、引用来源溯源，通过 FastAPI 提供 HTTP 问答接口。实现两阶段检索优化与多种 Query 改写策略。',
    details: [
      '全链路 RAG 引擎：基于 LCEL 构建"检索→上下文拼接→Prompt→LLM→输出解析"的可编排流水线',
      '两阶段检索优化：bi-encoder + cross-encoder 架构，解决语义相似但答案不相关的问题',
      'Query 改写增强：HyDE、Multi-Query、RRF 三种策略，改善短查询和口语化查询的召回质量',
      '切分与 Embedding 调优：优化 separators 配置保护句子完整性，应用 bge 模型 query 指令前缀',
    ],
    achievements: [
      'Reranker 两阶段检索使相关文档 top3 命中率提升约 30%',
      'HyDE + Multi-Query + RRF 多路召回融合，top5 召回率提升约 25%',
      '20 页文档切分+向量化耗时 < 5s；查询响应 P95 < 3s',
      '基于 LCEL 构建可编排 RAG 流水线，所有优化手段可配置开关',
    ],
    tags: ['LangChain', 'RAG', 'FastAPI', 'Vector DB', 'bi-encoder', 'cross-encoder'],
    featured: true,
  },
  {
    id: 2,
    title: '基于 langgraph 二次开发的深度研究助手 Agent',
    role: '开发',
    period: '2025.04 - 2025.05',
    description:
      '基于 langgraph 项目进行二次开发，构建深度研究助手 Agent，支持多步骤任务规划、工具调用与结果整合。',
    details: [],
    achievements: [],
    tags: ['langgraph', 'Agent', 'LLM', 'Python'],
    featured: true,
  },
]

// 技能栈
export const skills = {
  languages: ['Erlang', 'Python', 'Java', 'SQL', 'TypeScript'],
  frameworks: ['OTP', 'LangChain', 'langgraph', 'FastAPI', 'Celery', 'Spring'],
  databases: ['MySQL', 'Redis', 'PostgreSQL', 'Vector DB'],
  tools: ['Git', 'Docker', 'Linux', 'Pydantic', 'ORM'],
  ai: ['RAG', 'Agent', 'Prompt Engineering', 'Embedding', 'bi-encoder', 'cross-encoder'],
}

// 联系方式
export const contacts = [
  { label: '邮箱', value: '2390249519@qq.com', href: 'mailto:2390249519@qq.com' },
  { label: '电话', value: '17377901023', href: 'tel:17377901023' },
  { label: 'GitHub', value: 'github.com/chrison18', href: 'https://github.com/chrison18' },
  { label: '所在地', value: '广州', href: '#' },
]

// 资格证书
export const certificates = ['大学英语四级', '普通话二级乙等']
