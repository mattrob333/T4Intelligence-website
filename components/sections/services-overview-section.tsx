"use client"
import ServiceCard from "@/components/service-card"
import { Dna, MapPinned, UserIcon as UserTie } from "lucide-react" // UserTie for Fractional CAO
import { motion } from "framer-motion"

const services = [
  {
    icon: Dna,
    title: "BUSINESS DNA MAP™",
    tagline: "Teach AI Your Secret Sauce",
    price: "$15K-$25K", // UPDATED
    features: ["Map your entire operation", "Capture tribal knowledge", "Connect all systems", "30-day delivery"],
    ctaText: "Learn More →",
    ctaLink: "/business-dna",
  },
  {
    icon: MapPinned,
    title: "AI OPPORTUNITY BLUEPRINT™",
    tagline: "Find Your Hidden Millions",
    price: "$40K-$60K", // UPDATED
    isMostPopular: true,
    bundleDiscountText: "Save $10K with DNA Map", // ADDED
    features: [
      "Top 10 AI opportunities",
      "ROI calculations included",
      "90-day quick wins",
      "Credits toward implementation",
    ],
    ctaText: "Get Your Blueprint →",
    ctaLink: "/opportunity-blueprint",
  },
  {
    icon: UserTie,
    title: "FRACTIONAL CAO",
    tagline: "Your AI Executive On-Demand",
    price: "$8K-$15K/month", // UPDATED
    features: ["World-class leadership", "80% less than full-time", "Scale up or down", "No long-term contracts"],
    ctaText: "Meet Your CAO →",
    ctaLink: "/fractional-cao",
  },
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
          Choose Your Path to <span className="text-primary-green">AI Success</span>
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
