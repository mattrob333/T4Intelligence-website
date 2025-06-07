import HeroSection from "@/components/sections/hero-section"
import HowItWorksSection from "@/components/sections/how-it-works-section"
import ProblemSolutionSection from "@/components/sections/problem-solution-section"
import ServicesOverviewSection from "@/components/sections/services-overview-section"
import SocialProofSection from "@/components/sections/social-proof-section"
import UrgencyCtaSection from "@/components/sections/urgency-cta-section"
import Tier4JourneySection from "@/components/sections/tier-4-journey-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSolutionSection />
      <HowItWorksSection />
      <ServicesOverviewSection />
      <Tier4JourneySection />
      <SocialProofSection />
      <UrgencyCtaSection />
    </>
  )
}
