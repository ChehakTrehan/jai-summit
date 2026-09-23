import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"

export function VenueSection() {
  return (
    <section id="venue" className="scroll-mt-20 bg-secondary/60 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Official Location"
          title="Venue & Directions"
          body="Campus address and interactive navigation map for the summit venue."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-7 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-widest text-primary">
              Wish Town Campus
            </p>
            <h3 className="mt-3 text-xl font-bold text-foreground">
              Jaypee Institute of Information Technology (JIIT)
            </h3>
            <address className="mt-4 not-italic text-sm leading-relaxed text-muted-foreground">
              Jaypee Wish Town, Sector 128,
              <br />
              Noida, Uttar Pradesh 201304,
              <br />
              India
            </address>
            <Button
              render={
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Jaypee+Institute+of+Information+Technology+Sector+128+Noida"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              className="mt-6"
            >
              Open in Google Maps
            </Button>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
            <iframe
              title="JIIT Sector 128 Noida map"
              src="https://maps.google.com/maps?q=Jaypee%20Institute%20of%20Information%20Technology%20Sector%20128%20Noida&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="h-full min-h-[320px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
