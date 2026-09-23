import { NAV_LINKS } from "@/lib/summit-data"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2">
              <span className="grid h-10 w-10 place-items-center rounded-md bg-white text-sm font-bold text-primary">
                JAI
              </span>
              <span className="text-lg font-bold">JAI 2026</span>
            </div>
            <p className="mt-3 text-sm text-primary-foreground/80">
              Jaypee Agentic AI International Summit
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-2 sm:grid-cols-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 border-t border-primary-foreground/20 pt-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-foreground/70">
            People &nbsp;|&nbsp; Ideas &nbsp;|&nbsp; Perspective &nbsp;|&nbsp; A Better Tomorrow
          </p>
          <p className="mt-3 text-xs text-primary-foreground/70">
            © 2026 Jaypee Agentic AI International Summit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
