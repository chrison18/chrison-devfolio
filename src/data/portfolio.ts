// 个人信息数据
export const profile = {
  name: 'Chrison',
  title: '后端开发工程师 / AI 应用工程师',
  tagline: '构建可靠的后端系统与智能的 AI 应用',
  bio: '专注于高并发后端架构设计与 AI 应用落地。擅长分布式系统、微服务架构、大模型应用开发与 RAG 检索增强生成。热爱用工程化思维解决复杂问题，追求代码质量与系统稳定性。',
  location: '中国 · 广州',
  email: 'hello@chrison.dev',
  github: 'https://github.com/chrison18',
  avatar: '', // 可替换为头像路径
}

// 项目数据统计
export const stats = [
  { label: '年开发经验', value: '5+' },
  { label: '交付项目', value: '30+' },
  { label: 'GitHub Stars', value: '1.2k' },
  { label: '服务用户', value: '100k+' },
]

// 联系方式
export const contacts = [
  { label: 'Email', value: 'hello@chrison.dev', href: 'mailto:hello@chrison.dev', icon: 'mail' },
  { label: 'GitHub', value: 'github.com/chrison18', href: 'https://github.com/chrison18', icon: 'github' },
  { label: '微信', value: 'chrison_dev', href: '#', icon: 'wechat' },
]

// 个人优势 / 技能
export const skills = [
  {
    title: '后端架构',
    description: '精通高并发、分布式系统设计，熟悉微服务、消息队列、缓存架构，能独立完成从 0 到 1 的系统搭建。',
    tags: ['Java', 'Go', 'Spring Cloud', 'Kafka', 'Redis'],
  },
  {
    title: 'AI 应用开发',
    description: '深入理解大模型应用开发，擅长 RAG 检索增强、Agent 智能体、Prompt 工程，能将 AI 能力落地到真实业务场景。',
    tags: ['LangChain', 'RAG', 'Agent', 'Vector DB', 'Prompt Engineering'],
  },
  {
    title: '数据库与存储',
    description: '熟悉关系型与非关系型数据库优化，具备分库分表、读写分离、数据迁移实战经验，注重数据一致性与性能。',
    tags: ['MySQL', 'PostgreSQL', 'MongoDB', 'Elasticsearch'],
  },
  {
    title: '工程化与 DevOps',
    description: '推崇工程化最佳实践，熟悉 CI/CD 流水线、容器化部署、监控告警体系，保障系统的可维护性与稳定性。',
    tags: ['Docker', 'Kubernetes', 'CI/CD', 'Prometheus', 'Grafana'],
  },
]

// 精选项目（前端占位数据，实际运行时可从后端接口获取）
export const projects = [
  {
    id: 1,
    title: '智能知识库 RAG 系统',
    description: '基于大模型的企业级知识库问答系统，支持多文档格式解析、向量检索、语义重排序，问答准确率达 92%。',
    tags: ['RAG', 'LangChain', 'Vector DB', 'FastAPI'],
    image: '',
    link: '#',
    featured: true,
  },
  {
    id: 2,
    title: '高并发订单交易平台',
    description: '支撑日均千万级订单的交易系统，采用分库分表、异步削峰、分布式锁方案，峰值 QPS 达 5 万+。',
    tags: ['微服务', 'Kafka', 'ShardingSphere', 'Redis'],
    image: '',
    link: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'AI Agent 自动化工作流',
    description: '面向运营场景的智能 Agent 平台，支持多工具调用、任务编排、人工介入节点，自动化率提升 70%。',
    tags: ['Agent', 'Workflow', 'LLM', 'TypeScript'],
    image: '',
    link: '#',
    featured: true,
  },
  {
    id: 4,
    title: '实时数据监控平台',
    description: '基于时序数据库的全链路监控系统，覆盖指标采集、告警规则、可视化大盘，支持百万级指标实时写入。',
    tags: ['Prometheus', 'Grafana', 'Go', 'ClickHouse'],
    image: '',
    link: '#',
    featured: false,
  },
]
