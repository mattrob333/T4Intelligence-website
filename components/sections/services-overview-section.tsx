"use client"
import ServiceCard from "@/components/service-card"
import { Dna, MapPinned, UserIcon as UserTie, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    icon: Dna,
    title: "RAPID ASSESSMENT",
    tagline: "AI Opportunities Identified in 24 Hours",
    stepNumber: 1,
    features: [
      "Proprietary analysis of your operations",
      "Industry-specific automation opportunities",
      "High-value use cases prioritized by ROI",
      "Competitive landscape assessment",
      "Strategic alignment with business goals"
    ],
    ctaText: "GET ASSESSMENT →",
    ctaLink: "/book-call",
    bottomNote: "✓ Before we meet, we analyze your business"
  },
  {
    icon: MapPinned,
    title: "PROOF-OF-CONCEPT",
    tagline: "Working Prototypes in 5 Days",
    stepNumber: 2,
    isMostPopular: true,
    features: [
      "Functional MVP demonstrations",
      "Customized to your specific use cases",
      "Precise technical scoping complete",
      "Verified cost quotes from vetted partners",
      "Clear implementation roadmap"
    ],
    ctaText: "SEE PROTOTYPES →",
    ctaLink: "/opportunity-blueprint",
    bottomNote: "✓ Tangible results, not theoretical plans"
  },
  {
    icon: UserTie,
    title: "STRATEGIC PARTNERSHIP",
    tagline: "Your Fractional Chief Automation Officer",
    stepNumber: 3,
    isMaximumValue: true,
    features: [
      "Executive-level AI strategy leadership",
      "End-to-end implementation management",
      "Continuous optimization and scaling",
      "Cross-functional integration expertise",
      "World-class results without executive overhead",
      "Long-term competitive advantage"
    ],
    ctaText: "SCALE SUCCESS →",
    ctaLink: "/fractional-cao",
    bottomNote: "✓ Strategic AI leadership for sustained growth"
  }
]

export default function ServicesOverviewSection() {
  return (
    <section className="py-section-padding-mobile md:py-section-padding bg-secondary-black">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-section-headline-mobile md:text-section-headline text-center text-text-primary mb-12 md:mb-16"
        >
          From <span className="text-primary-green">Uncertainty to Implementation</span> in One Week
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {services.map((service, index) => (
            <div key={index} className="relative">
              <ServiceCard {...service} />
              {/* Arrow between cards on desktop */}
              {index < services.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="h-8 w-8 text-primary-green" />
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Client Success Path */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-text-secondary text-lg max-w-4xl mx-auto">
            <span className="font-semibold text-text-primary">Our Methodology:</span> <em>We've engineered a proprietary system to cut through AI hype and deliver clarity. Using specialized AI research agents and rapid prototyping, we move from assessment to development-ready plan in days, not months.</em>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
