import { Button } from "@/components/ui/button"

export function HackathonSection() {
  return (
    <section id="hackathon" className="scroll-mt-20 bg-secondary py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Flagship Competition
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-foreground sm:text-4xl">
            Agentic AI Hackathon
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Build autonomous agents solving mission-critical real-world challenges across
            healthcare, security, NLP, and open innovation.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-primary/15 bg-card p-6 text-center shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Exciting Prize Pool
              </p>
              <p className="mt-3 text-2xl font-extrabold text-primary sm:text-3xl">INR 1.5 Million</p>
            </div>
            <div className="rounded-2xl border border-primary/15 bg-card p-6 text-center shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Pre-Seed Funding Pool
              </p>
              <p className="mt-3 text-2xl font-extrabold text-primary sm:text-3xl">INR 10 Million</p>
            </div>
            <div className="sm:col-span-2">
              <Button
                render={
                  <a
                    href="https://forms.gle/E1x9CT8mF5z1R4YC8"
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
                nativeButton={false}
                size="lg"
                className="w-full"
              >
                Register for Hackathon
              </Button>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center rounded-2xl border border-primary/15 bg-card p-6 text-center shadow-sm">
            <p className="text-xs font-bold uppercase tracking-widest text-primary">
              Scan to Register
            </p>
            <div className="mt-4 grid h-32 w-32 place-items-center rounded-xl bg-secondary text-2xl font-extrabold text-primary ring-1 ring-primary/20">
              JAI
            </div>
            <p className="mt-4 break-all text-sm font-medium text-muted-foreground">
              forms.gle/E1x9CT8mF5z1R4YC8
            </p>
            <Button
              render={
                <a
                  href="https://forms.gle/E1x9CT8mF5z1R4YC8"
                  target="_blank"
                    rel="noopener noreferrer"
                  />
                }
                nativeButton={false}
                variant="outline"
                size="sm"
                className="mt-4"
              >
              Open Form
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
