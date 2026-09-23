import { THEMES } from "@/lib/summit-data"
import { SectionHeading } from "@/components/section-heading"

export function ThemesSection() {
  return (
    <section id="themes" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:py-20">
      <SectionHeading
        eyebrow="Agentic AI Focus Tracks"
        title="Key Thematic Areas"
        body="Frontier application tracks where autonomous agent architectures drive transformative industry solutions."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {THEMES.map((theme) => (
          <article
            key={theme.title}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-primary" />
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              {theme.tag}
            </span>
            <h3 className="mt-3 text-xl font-bold text-foreground">{theme.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {theme.body}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {theme.chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground"
                >
                  {chip}
                </span>
              ))}
            </div>
            <p className="mt-5 text-xs font-bold uppercase tracking-widest text-primary/80">
              Explore Track →
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
