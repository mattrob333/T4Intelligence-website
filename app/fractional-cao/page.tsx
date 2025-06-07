import type { Metadata } from "next"
import HeroSection from "@/components/sections/fractional-cao/hero-section"
import ProblemSolutionSection from "@/components/sections/fractional-cao/problem-solution-section"
import WhatCaoDoesSection from "@/components/sections/fractional-cao/what-cao-does-section"
import EngagementPackagesSection from "@/components/sections/fractional-cao/engagement-packages-section"
import CaoProfileSection from "@/components/sections/fractional-cao/cao-profile-section"
import RoiEvidenceSection from "@/components/sections/fractional-cao/roi-evidence-section"
import FinalCtaSection from "@/components/sections/fractional-cao/final-cta-section"

export const metadata: Metadata = {
  title: "Fractional CAO | Tier 4 Intelligence",
  description: "World-class AI leadership without the executive price tag. Your $400K AI Executive for $6K/Month.",
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
