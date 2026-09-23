import { Button } from "@/components/ui/button"

export function HackathonSection() {
  return (
    <section id="hackathon" className="scroll-mt-20 bg-primary py-16 text-primary-foreground sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-foreground/70">
            Flagship Competition
          </p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Agentic AI Hackathon</h2>
          <p className="mt-4 text-base leading-relaxed text-primary-foreground/85">
            Build autonomous agents solving mission-critical real-world challenges across
            healthcare, security, NLP, and open innovation.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl bg-primary-foreground/10 p-6 text-center ring-1 ring-primary-foreground/20">
              <p className="text-xs font-bold uppercase tracking-widest text-primary-foreground/70">
                Exciting Prize Pool
              </p>
              <p className="mt-3 text-2xl font-extrabold sm:text-3xl">INR 1.5 Million</p>
            </div>
            <div className="rounded-2xl bg-primary-foreground/10 p-6 text-center ring-1 ring-primary-foreground/20">
              <p className="text-xs font-bold uppercase tracking-widest text-primary-foreground/70">
                Pre-Seed Funding Pool
              </p>
              <p className="mt-3 text-2xl font-extrabold sm:text-3xl">INR 10 Million</p>
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
                size="lg"
                variant="secondary"
                className="w-full bg-white text-primary hover:bg-white/90"
              >
                Register for Hackathon
              </Button>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center rounded-2xl bg-white p-6 text-center text-foreground">
            <p className="text-xs font-bold uppercase tracking-widest text-primary">
              Scan to Register
            </p>
            <div className="mt-4 grid h-32 w-32 place-items-center rounded-xl bg-primary text-2xl font-extrabold text-primary-foreground">
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
