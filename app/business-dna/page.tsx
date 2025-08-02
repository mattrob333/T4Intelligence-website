import type { Metadata } from "next"
import HeroSection from "@/components/sections/business-dna/hero-section"
import WhatIsSection from "@/components/sections/business-dna/what-is-section"
import ProcessTimelineSection from "@/components/sections/business-dna/process-timeline-section"
import DeliverablesSection from "@/components/sections/business-dna/deliverables-section"
import RoiCalculatorSection from "@/components/sections/business-dna/roi-calculator-section"
import SuccessStorySection from "@/components/sections/business-dna/success-story-section"
import GuaranteeSection from "@/components/sections/business-dna/guarantee-section"

export const metadata: Metadata = {
  title: "Business DNA Map™ - AI Foundation Assessment | Tier 4 Intelligence",
  description:
    "Discover your business's AI automation potential with our proprietary DNA Map™. 90-day roadmap to AI transformation for $10M-$100M companies. Free assessment available.",
  keywords: "business DNA map, AI foundation assessment, business automation consulting, AI readiness assessment, AI implementation roadmap",
  openGraph: {
    title: "Business DNA Map™ - AI Foundation Assessment | Tier 4 Intelligence",
    description: "Discover your business's AI automation potential with our proprietary DNA Map™. 90-day roadmap to AI transformation for $10M-$100M companies.",
    url: 'https://tier4intelligence.com/business-dna',
  },
}

export default function BusinessDnaPage() {
  return (
    <>
      <HeroSection />
      <WhatIsSection />
      <ProcessTimelineSection />
      <DeliverablesSection />
      <RoiCalculatorSection />
      <SuccessStorySection />
      <GuaranteeSection />
    </>
  )
}
