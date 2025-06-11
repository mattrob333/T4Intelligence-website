"use client"
import ServiceCard from "@/components/service-card"
import { Dna, MapPinned, UserIcon as UserTie, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    icon: Dna,
    title: "FOUNDATION",
    tagline: "Build Your AI's Knowledge Foundation",
    stepNumber: 1,
    features: [
      "Deep-dive analysis of your entire operation",
      "Capture 20 years of tribal knowledge in 30 days",
      "Create your proprietary AI training data",
      "Map every process, system, and shortcut",
      "100% credit toward implementation"
    ],
    ctaText: "START HERE →",
    ctaLink: "/business-dna",
    bottomNote: "✓ Required first step for all clients"
  },
  {
    icon: MapPinned,
    title: "THE BUILD",
    tagline: "Turn Opportunities Into Operating Income",
    stepNumber: 2,
    isMostPopular: true,
    features: [
      "Build your highest-ROI automation first",
      "Live, working AI - not PowerPoints",
      "Guaranteed 3X return in 12 months",
      "Deploy across all departments",
      "Pay balance only after proven results"
    ],
    ctaText: "BUILD FAST →",
    ctaLink: "/opportunity-blueprint",
    bottomNote: "✓ Where ROI becomes reality"
  },
  {
    icon: UserTie,
    title: "YOUR CHIEF AI OFFICER",
    tagline: "Your AI Leadership On Demand",
    stepNumber: 3,
    isMaximumValue: true,
    features: [
      "10X faster than hiring full-time",
      "Fortune 500 expertise at fraction of cost",
      "100+ successful implementations",
      "Strategic oversight + hands-on execution",
      "Your competitive advantage secured",
      "Scale up or down as needed"
    ],
    ctaText: "LEAD FOREVER →",
    ctaLink: "/fractional-cao",
    bottomNote: "✓ For companies ready to dominate their market"
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
          Three Steps to AI-Powered Market Domination
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
            <span className="font-semibold text-text-primary">Client Success Path:</span> <em>93% of our most successful clients progress through all three steps. They start with Foundation, see immediate ROI with The Build, then accelerate past competitors with their Chief AI Officer.</em>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
