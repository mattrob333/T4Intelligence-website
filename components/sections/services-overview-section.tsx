"use client"
import ServiceCard from "@/components/service-card"
import { Dna, MapPinned, UserIcon as UserTie } from "lucide-react" // UserTie for Fractional CAO
import { motion } from "framer-motion"

const services = [
  {
    icon: Dna,
    title: "FOUNDATION",
    tagline: "Build Your AI's Knowledge Foundation",
    features: [
      "Deep-dive analysis of your entire operation",
      "Capture 20 years of tribal knowledge in 30 days",
      "Create your proprietary AI training data",
      "Map every process, system, and shortcut",
      "100% credit toward implementation"
    ],
    ctaText: "GET STARTED →",
    ctaLink: "/business-dna",
  },
  {
    icon: MapPinned,
    title: "THE BUILD",
    tagline: "Turn Opportunities Into Operating Income",
    isMostPopular: true,
    features: [
      "Build your highest-ROI automation first",
      "Live, working AI - not PowerPoints",
      "Guaranteed 3X return in 12 months",
      "Deploy across all departments",
      "Pay balance only after proven results"
    ],
    ctaText: "LEARN MORE →",
    ctaLink: "/opportunity-blueprint",
  },
  {
    icon: UserTie,
    title: "YOUR CHIEF AI OFFICER",
    tagline: "Your AI Leadership On Demand",
    features: [
      "Seasoned AI executive on demand",
      "100+ successful implementations",
      "Strategic oversight + hands-on execution",
      "Scale up during critical phases",
      "No equity, no long-term contracts"
    ],
    ctaText: "MEET YOUR CAO →",
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
