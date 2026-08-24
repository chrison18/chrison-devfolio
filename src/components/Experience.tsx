import { workExperience, internshipExperience, education } from '../data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="bg-bg-soft py-24 md:py-32">
      <div className="container-content">
        {/* 头部 */}
        <div className="mb-16">
          <span className="section-label">02 / 经历</span>
          <h2 className="section-title mt-3">工作与教育</h2>
        </div>

        <div className="space-y-16">
          {/* 工作经历 */}
          <div>
            <h3 className="mb-8 font-mono text-xs uppercase tracking-wider2 text-ink-muted">
              工作经历
            </h3>
            <div className="space-y-10">
              {workExperience.map((exp, i) => (
                <TimelineItem
                  key={i}
                  title={exp.company}
                  subtitle={exp.role}
                  period={exp.period}
                  description={exp.description}
                  highlights={exp.highlights}
                />
              ))}
            </div>
          </div>

          {/* 实习经历 */}
          <div>
            <h3 className="mb-8 font-mono text-xs uppercase tracking-wider2 text-ink-muted">
              实习经历
            </h3>
            <div className="space-y-10">
              {internshipExperience.map((exp, i) => (
                <TimelineItem
                  key={i}
                  title={exp.company}
                  subtitle={exp.role}
                  period={exp.period}
                  description={exp.description}
                  highlights={exp.highlights}
                />
              ))}
            </div>
          </div>

          {/* 教育经历 */}
          <div>
            <h3 className="mb-8 font-mono text-xs uppercase tracking-wider2 text-ink-muted">
              教育经历
            </h3>
            <div className="space-y-10">
              {education.map((edu, i) => (
                <TimelineItem
                  key={i}
                  title={edu.school}
                  subtitle={`${edu.degree} · ${edu.major}`}
                  period={edu.period}
                  description={edu.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

interface TimelineItemProps {
  title: string
  subtitle: string
  period: string
  description: string
  highlights?: string[]
}

function TimelineItem({ title, subtitle, period, description, highlights }: TimelineItemProps) {
  return (
    <div className="group relative grid grid-cols-1 gap-3 border-l border-bg-border pl-6 md:grid-cols-12 md:gap-8">
      {/* 时间点 */}
      <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-bg bg-accent transition-colors group-hover:border-accent" />

      {/* 时间 */}
      <div className="md:col-span-3">
        <span className="font-mono text-xs text-ink-muted">{period}</span>
      </div>

      {/* 内容 */}
      <div className="md:col-span-9">
        <h4 className="text-base font-semibold text-ink">{title}</h4>
        <p className="mt-0.5 text-sm text-accent">{subtitle}</p>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft">{description}</p>
        {highlights && highlights.length > 0 && (
          <ul className="mt-4 space-y-1.5">
            {highlights.map((h, i) => (
              <li key={i} className="flex gap-2 text-sm text-ink-soft">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent/60" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
