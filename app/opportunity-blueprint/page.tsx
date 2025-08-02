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
  title: "AI Opportunity Blueprint™ - Identify $10M+ AI Opportunities | Tier 4 Intelligence",
  description:
    "Discover $10M+ in hidden AI automation opportunities in just 10 days. Comprehensive AI consulting assessment for mid-market companies. ROI-focused implementation roadmap.",
  keywords: "AI opportunity blueprint, AI consulting assessment, business automation opportunities, AI ROI analysis, AI implementation consulting",
  openGraph: {
    title: "AI Opportunity Blueprint™ - Identify $10M+ AI Opportunities | Tier 4 Intelligence",
    description: "Discover $10M+ in hidden AI automation opportunities in just 10 days. Comprehensive AI consulting assessment for mid-market companies.",
    url: 'https://tier4intelligence.com/opportunity-blueprint',
  },
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
