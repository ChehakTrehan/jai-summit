import { ProfileHeader } from "@/components/profile-header"
import { OverviewSection } from "@/components/overview-section"
import { HighlightsSection } from "@/components/highlights-section"
import { ThemesSection } from "@/components/themes-section"
import { HackathonSection } from "@/components/hackathon-section"
import { ScheduleSection } from "@/components/schedule-section"
import { VenueSection } from "@/components/venue-section"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <ProfileHeader />
      <OverviewSection />
      <HighlightsSection />
      <ThemesSection />
      <HackathonSection />
      <ScheduleSection />
      <VenueSection />
      <SiteFooter />
    </main>
  )
}
