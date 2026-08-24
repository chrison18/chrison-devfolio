import { profile, advantages, skills, certificates } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container-content">
        {/* 头部 */}
        <div className="mb-16">
          <span className="section-label">01 / 关于我</span>
          <h2 className="section-title mt-3">个人简介</h2>
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          {/* 左侧：基本信息 */}
          <div className="lg:col-span-4">
            <div className="space-y-6">
              <InfoRow label="姓名" value={profile.name} />
              <InfoRow label="性别" value={profile.gender} />
              <InfoRow label="年龄" value={`${profile.age} 岁`} />
              <InfoRow label="学校" value="湖南大学" />
              <InfoRow label="专业" value="信息与计算科学（本科）" />
              <InfoRow label="求职意向" value={profile.target} />
              <InfoRow label="期望城市" value={profile.location} />
              <div className="divider my-4" />
              <div>
                <div className="mb-2 font-mono text-xs text-ink-muted">资格证书</div>
                <div className="flex flex-wrap gap-2">
                  {certificates.map((c) => (
                    <span
                      key={c}
                      className="rounded-md border border-bg-border bg-bg-card px-2.5 py-1 text-xs text-ink-soft"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 右侧：个人优势 + 技能 */}
          <div className="space-y-14 lg:col-span-8">
            {/* 个人优势 */}
            <div>
              <h3 className="mb-6 font-serif text-xl font-semibold text-ink">个人优势</h3>
              <div className="space-y-6">
                {advantages.map((adv, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="mt-0.5 font-mono text-xs text-accent">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h4 className="mb-1 text-base font-medium text-ink">{adv.title}</h4>
                      <p className="text-sm leading-relaxed text-ink-soft">{adv.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="divider" />

            {/* 技能栈 */}
            <div>
              <h3 className="mb-6 font-serif text-xl font-semibold text-ink">技能栈</h3>
              <div className="space-y-5">
                <SkillGroup label="编程语言" items={skills.languages} />
                <SkillGroup label="框架与库" items={skills.frameworks} />
                <SkillGroup label="数据库" items={skills.databases} />
                <SkillGroup label="AI 技术" items={skills.ai} />
                <SkillGroup label="工具与其他" items={skills.tools} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between border-b border-bg-border pb-2">
      <span className="font-mono text-xs text-ink-muted">{label}</span>
      <span className="text-sm text-ink">{value}</span>
    </div>
  )
}

function SkillGroup({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline">
      <span className="w-24 shrink-0 font-mono text-xs text-ink-muted">{label}</span>
      <div className="flex flex-wrap gap-1.5">
        {items.map((item) => (
          <span
            key={item}
            className="rounded bg-bg-soft px-2 py-0.5 font-mono text-xs text-ink-soft"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
