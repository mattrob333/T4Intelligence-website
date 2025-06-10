import HeroSection from "@/components/sections/hero-section"
import HowItWorksSection from "@/components/sections/how-it-works-section"
import ProblemSolutionSection from "@/components/sections/problem-solution-section"
import ServicesOverviewSection from "@/components/sections/services-overview-section"
import SocialProofSection from "@/components/sections/social-proof-section"
import UrgencyCtaSection from "@/components/sections/urgency-cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSolutionSection />
      <HowItWorksSection />
      <ServicesOverviewSection />
      <SocialProofSection />
      <UrgencyCtaSection />
    </>
  )
}
