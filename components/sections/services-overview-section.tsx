"use client"
import ServiceCard from "@/components/service-card"
import { Dna, MapPinned, UserIcon as UserTie } from "lucide-react" // UserTie for Fractional CAO
import { motion } from "framer-motion"

const services = [
  {
    icon: Dna,
    title: "AI READINESS AUDIT",
    tagline: "Teach AI Your Business in 30 Days",
    price: "$15K-$25K",
    features: [
      "Find your top 10 automation opportunities",
      "Calculate exact ROI for each",
      "Get your AI transformation roadmap",
      "100% credit toward full implementation"
    ],
    ctaText: "Learn More →",
    ctaLink: "/ai-readiness-audit",
  },
  {
    icon: MapPinned,
    title: "FIRST AI WINS PACKAGE",
    tagline: "Deploy Your First Profitable AI in 90 Days",
    price: "$40K-$60K",
    isMostPopular: true,
    features: [
      "We build your highest-ROI AI first",
      "Working solution, not just plans",
      "Pays for itself in 6 months",
      "Success fee only after proven ROI"
    ],
    ctaText: "Get Started →",
    ctaLink: "/first-ai-wins",
  },
  {
    icon: UserTie,
    title: "AI EXECUTIVE-AS-A-SERVICE",
    tagline: "Your $400K AI Exec for 80% Less",
    price: "$8K-$15K/month",
    features: [
      "Fortune 500 AI leadership",
      "Without Fortune 500 prices",
      "Scale up or down anytime",
      "They've done this 100+ times"
    ],
    ctaText: "Meet Your AI Exec →",
    ctaLink: "/ai-executive",
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
          <span className="text-primary-green">Proven</span> AI Solutions, <span className="text-primary-green">Guaranteed</span> Results
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
