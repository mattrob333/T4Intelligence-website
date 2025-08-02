import type { Metadata } from "next"
import HeroSection from "@/components/sections/fractional-cao/hero-section"
import ProblemSolutionSection from "@/components/sections/fractional-cao/problem-solution-section"
import WhatCaoDoesSection from "@/components/sections/fractional-cao/what-cao-does-section"
import EngagementPackagesSection from "@/components/sections/fractional-cao/engagement-packages-section"
import CaoProfileSection from "@/components/sections/fractional-cao/cao-profile-section"
import RoiEvidenceSection from "@/components/sections/fractional-cao/roi-evidence-section"
import FinalCtaSection from "@/components/sections/fractional-cao/final-cta-section"

export const metadata: Metadata = {
  title: "Fractional Chief Automation Officer (CAO) Services | Tier 4 Intelligence",
  description: "Get a world-class fractional CAO for $6K/month vs. $400K+ full-time executive. AI automation leadership for $10M-$100M companies. 5X ROI guaranteed. Book consultation today.",
  keywords: "fractional chief automation officer, fractional CAO, AI executive services, business automation leadership, AI transformation consulting",
  openGraph: {
    title: "Fractional Chief Automation Officer (CAO) Services | Tier 4 Intelligence",
    description: "Get a world-class fractional CAO for $6K/month vs. $400K+ full-time executive. AI automation leadership for $10M-$100M companies. 5X ROI guaranteed.",
    url: 'https://tier4intelligence.com/fractional-cao',
  },
}

export default function FractionalCaoPage() {
  return (
    <>
      <HeroSection />
      <ProblemSolutionSection />
      <WhatCaoDoesSection />
      <EngagementPackagesSection />
      <CaoProfileSection />
      <RoiEvidenceSection />
      <FinalCtaSection />
    </>
  )
}
