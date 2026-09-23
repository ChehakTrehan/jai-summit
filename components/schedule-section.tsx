import { SCHEDULE } from "@/lib/summit-data"
import { SectionHeading } from "@/components/section-heading"

export function ScheduleSection() {
  return (
    <section id="schedule" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:py-20">
      <SectionHeading
        eyebrow="Program Itinerary"
        title="Tentative Summit Schedule (TBD)"
        body="Tentative timeline framework for the two-day summit. Detailed sessions to be announced."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {SCHEDULE.map((day) => (
          <div key={day.day} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="flex items-baseline justify-between gap-3 border-b border-border pb-4">
              <h3 className="text-lg font-bold text-foreground">{day.day}</h3>
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {day.note}
              </span>
            </div>
            <ol className="mt-4 space-y-5">
              {day.sessions.map((s) => (
                <li key={s.title} className="relative pl-6">
                  <span className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full bg-primary" />
                  <p className="text-xs font-bold uppercase tracking-wide text-primary">
                    {s.time}
                  </p>
                  <p className="mt-1 font-semibold text-foreground">{s.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {s.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </section>
  )
}
