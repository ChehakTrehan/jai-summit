"use client"

import Image from "next/image"
import { useState } from "react"
import { NAV_LINKS, STATS } from "@/lib/summit-data"
import { Button } from "@/components/ui/button"

export function ProfileHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header id="home" className="relative">
      {/* Sticky top navigation (LinkedIn-style top bar) */}
      <nav className="sticky top-0 z-50 border-b border-border bg-white/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <a href="#home" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-primary text-sm font-bold text-primary-foreground">
              JAI
            </span>
            <span className="hidden text-sm font-semibold text-foreground sm:inline">
              JAI 2026
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Button
              render={<a href="#hackathon" />}
              size="sm"
              className="hidden sm:inline-flex"
            >
              Register
            </Button>
            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="grid h-9 w-9 place-items-center rounded-md border border-border text-foreground lg:hidden"
            >
              <span className="sr-only">Menu</span>
              <div className="space-y-1.5">
                <span className="block h-0.5 w-5 bg-current" />
                <span className="block h-0.5 w-5 bg-current" />
                <span className="block h-0.5 w-5 bg-current" />
              </div>
            </button>
          </div>
        </div>

        {open && (
          <ul className="grid gap-1 border-t border-border px-4 py-3 lg:hidden">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>

      {/* LinkedIn-style profile card */}
      <div className="mx-auto max-w-6xl px-4 pb-6 pt-4 sm:pt-6">
        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          {/* Banner - Jaypee campus photo */}
          <div className="relative h-40 w-full sm:h-56 md:h-72">
            <Image
              src="/images/campus.png"
              alt="Jaypee Institute of Information Technology campus"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-primary/10 to-transparent" />
          </div>

          {/* Profile row */}
          <div className="px-5 pb-6 sm:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              {/* Agentic AI logo as profile picture, overlapping the banner */}
              <div className="-mt-16 flex items-end gap-4 sm:-mt-20">
                <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full border-4 border-card bg-white shadow-md sm:h-36 sm:w-36">
                  <Image
                    src="/images/agentic-logo.png"
                    alt="Jaypee Agentic AI International Summit logo"
                    fill
                    className="object-contain p-2"
                  />
                </div>
              </div>

              {/* Campus identity badge */}
              <div className="flex items-center gap-3 sm:pb-2">
                <span className="grid h-9 w-9 place-items-center rounded-md bg-primary text-sm font-bold text-primary-foreground">
                  JAI
                </span>
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                  JIIT · Noida
                </span>
              </div>
            </div>

            {/* Name / headline block */}
            <div className="mt-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Agentic AI Summit
              </p>
              <h1 className="mt-2 text-3xl font-extrabold leading-tight text-foreground sm:text-4xl md:text-5xl">
                Jaypee Agentic AI International Summit{" "}
                <span className="text-primary">2026</span>
              </h1>
              <p className="mt-3 text-sm font-medium text-muted-foreground sm:text-base">
                JIIT Sector 128, Wish Town, Noida &nbsp;|&nbsp; October 30 – 31, 2026
              </p>
              <p className="mt-4 text-lg font-semibold italic text-foreground sm:text-xl">
                &ldquo;Human Intelligence Meets Agentic Possibilities&rdquo;
              </p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Real Problems &nbsp;|&nbsp; Intelligent Agents &nbsp;|&nbsp; Lasting Impact
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <Button render={<a href="#hackathon" />} size="lg">
                  Register for Summit
                </Button>
                <Button render={<a href="#about" />} size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Stats row */}
            <dl className="mt-6 grid grid-cols-2 gap-3 border-t border-border pt-6 sm:grid-cols-4">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl bg-secondary px-4 py-3 text-center"
                >
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-2xl font-extrabold text-primary">{stat.value}</dd>
                  <dd className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </header>
  )
}
