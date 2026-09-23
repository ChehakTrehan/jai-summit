import { OVERVIEW_CARDS } from "@/lib/summit-data"
import { SectionHeading } from "@/components/section-heading"

export function OverviewSection() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:py-20">
      <SectionHeading
        eyebrow="Summit Overview"
        title="Where Human Intelligence Meets Autonomous Execution"
        body="Hosted at Jaypee Institute of Information Technology (JIIT) Wish Town Campus in Sector-128, Noida, JAI 2026 convenes academic researchers, industry architects, and student innovators to pioneer the frontier of agentic AI systems."
      />

      <p className="mx-auto mt-6 max-w-2xl text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        Real Problems &nbsp;|&nbsp; Intelligent Agents &nbsp;|&nbsp; Lasting Impact
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {OVERVIEW_CARDS.map((card, i) => (
          <div
            key={card.title}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary text-lg font-bold text-primary-foreground">
              {i + 1}
            </span>
            <h3 className="mt-4 text-lg font-bold text-foreground">{card.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {card.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
