import type { Metadata } from "next"
import HeroSection from "@/components/sections/opportunity-blueprint/hero-section"
import ProblemSection from "@/components/sections/opportunity-blueprint/problem-section"
import SolutionProcessSection from "@/components/sections/opportunity-blueprint/solution-process-section"
import WhatsIncludedSection from "@/components/sections/opportunity-blueprint/whats-included-section"
import PricingComparisonSection from "@/components/sections/opportunity-blueprint/pricing-comparison-section"
import SuccessMetricsSection from "@/components/sections/opportunity-blueprint/success-metrics-section"
import FAQSection from "@/components/sections/opportunity-blueprint/faq-section"
import FinalCTASection from "@/components/sections/opportunity-blueprint/final-cta-section"

export const metadata: Metadata = {
  title: "AI Opportunity Blueprint™ | Tier 4 Intelligence",
  description:
    "Find $10M in hidden AI opportunities in 10 days. Stop guessing and start knowing exactly where AI will make you money.",
}

export default function OpportunityBlueprintPage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <SolutionProcessSection />
      <WhatsIncludedSection />
      <PricingComparisonSection />
      <SuccessMetricsSection />
      <FAQSection />
      <FinalCTASection />
    </>
  )
}
