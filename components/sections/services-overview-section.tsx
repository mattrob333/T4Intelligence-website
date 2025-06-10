"use client"
import ServiceCard from "@/components/service-card"
import { Dna, MapPinned, UserIcon as UserTie } from "lucide-react" // UserTie for Fractional CAO
import { motion } from "framer-motion"

const services = [
  {
    icon: Dna,
    title: "BUSINESS INTELLIGENCE VAULT",
    tagline: "Build Your AI's Knowledge Foundation",
    price: "$15K-$25K",
    features: [
      "Deep-dive analysis of your entire operation",
      "Capture 20 years of tribal knowledge in 30 days",
      "Create your proprietary AI training data",
      "Map every process, system, and shortcut",
      "100% credit toward implementation"
    ],
    ctaText: "BUILD YOUR VAULT →",
    ctaLink: "/business-dna",
  },
  {
    icon: MapPinned,
    title: "PROFIT AUTOMATION STUDIO",
    tagline: "Turn Opportunities Into Operating Income",
    price: "$40K-$60K",
    isMostPopular: true,
    features: [
      "Build your highest-ROI automation first",
      "Live, working AI - not PowerPoints",
      "Guaranteed 3X return in 12 months",
      "Deploy across all departments",
      "Pay balance only after proven results"
    ],
    ctaText: "START BUILDING →",
    ctaLink: "/opportunity-blueprint",
  },
  {
    icon: UserTie,
    title: "AI EXECUTIVE-AS-A-SERVICE",
    tagline: "Your $400K AI Leader for 80% Less",
    price: "$8K-$15K/month",
    features: [
      "Seasoned AI executive on demand",
      "100+ successful implementations",
      "Strategic oversight + hands-on execution",
      "Scale up during critical phases",
      "No equity, no long-term contracts"
    ],
    ctaText: "MEET YOUR EXEC →",
    ctaLink: "/fractional-cao",
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
