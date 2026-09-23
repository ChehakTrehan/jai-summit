import { TEAM, initials } from "@/lib/summit-data"
import { SectionHeading } from "@/components/section-heading"

export function TeamSection() {
  return (
    <section id="team" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:py-20">
      <SectionHeading
        eyebrow="Faculty Organizing Committee"
        title="The Minds Driving JAI 2026"
        body="Meet the faculty leadership and committee architects organizing the Jaypee Agentic AI International Summit at Jaypee Institute of Information Technology, Wish Town Campus, Sector-128, Noida."
      />

      <div className="mt-12 space-y-12">
        {TEAM.map((group) => (
          <div key={group.track}>
            <div className="mb-5 border-l-4 border-primary pl-4">
              <p className="text-xs font-bold uppercase tracking-widest text-primary">
                {group.track}
              </p>
              <h3 className="mt-1 text-xl font-bold text-foreground">{group.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{group.body}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.members.map((member) => (
                <div
                  key={member.name}
                  className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 shadow-sm transition-shadow hover:shadow-md"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {initials(member.name)}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate font-semibold text-foreground">{member.name}</p>
                    <p className="truncate text-xs font-medium text-muted-foreground">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
