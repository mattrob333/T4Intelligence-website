import type { Metadata } from "next"
import HeroSection from "@/components/sections/business-dna/hero-section"
import WhatIsSection from "@/components/sections/business-dna/what-is-section"
import ProcessTimelineSection from "@/components/sections/business-dna/process-timeline-section"
import DeliverablesSection from "@/components/sections/business-dna/deliverables-section"
import RoiCalculatorSection from "@/components/sections/business-dna/roi-calculator-section"
import SuccessStorySection from "@/components/sections/business-dna/success-story-section"
import GuaranteeSection from "@/components/sections/business-dna/guarantee-section"

export const metadata: Metadata = {
  title: "Business DNA Map™ | Tier 4 Intelligence",
  description:
    "We map your business DNA so AI finally understands you. Stop forcing your business to speak AI's language and unlock true automation potential.",
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
