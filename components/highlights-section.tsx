import { HIGHLIGHTS } from "@/lib/summit-data"
import { SectionHeading } from "@/components/section-heading"
import { cn } from "@/lib/utils"

export function HighlightsSection() {
  return (
    <section id="highlights" className="scroll-mt-20 bg-secondary/60 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Core Confluence Pillars"
          title="Summit Highlights"
          body="Seven distinguished engagement tracks featured in the official summit brochure."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {HIGHLIGHTS.map((item, index) => {
            const isFeatured = index === HIGHLIGHTS.length - 1

            return (
              <article
                key={item.title}
                className={cn(
                  "flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md",
                  isFeatured && "lg:col-start-2"
                )}
              >
                <span className="w-fit rounded-full bg-accent px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-accent-foreground">
                  {item.tag}
                </span>
                <h3 className="mt-4 text-lg font-bold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
