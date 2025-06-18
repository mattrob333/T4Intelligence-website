"use client"
import { motion } from "framer-motion"
import { Download } from "lucide-react"
import { CustomButton } from "@/components/ui/custom-button"

interface FeatureItem {
  title: string;
  description: string;
  icon: string;
  highlight?: boolean;
}

const features: FeatureItem[] = [
  {
    title: "AI Employees",
    description: "Fully functional AI team members that work 24/7/365",
    icon: "🤖",
    highlight: true
  },
  {
    title: "Custom Automations",
    description: "Tailored workflows that integrate with your existing systems",
    icon: "⚙️",
    highlight: true
  },
  {
    title: "Live Dashboards",
    description: "Real-time visibility into performance and ROI metrics",
    icon: "📊",
    highlight: true
  },
  {
    title: "Hands-On Training",
    description: "Comprehensive training for your team to manage and scale AI",
    icon: "👨‍🏫"
  },
  {
    title: "Security & Compliance",
    description: "Enterprise-grade security protocols and compliance measures",
    icon: "🔒"
  },
  {
    title: "Ongoing Support",
    description: "Dedicated support team for continuous optimization",
    icon: "🛠️"
  },
]

export default function WhatsIncludedSection() {
  return (
    <section className="py-section-padding-mobile md:py-section-padding bg-card-bg">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-section-headline-mobile md:text-section-headline text-center text-text-primary mb-12 md:mb-16"
        >
          Here's <span className="text-primary-green">What You're Getting</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature: FeatureItem, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 rounded-lg border ${feature.highlight ? 'border-primary-green bg-secondary-black/50' : 'border-border-color'} hover:border-primary-green transition-all duration-300 h-full flex flex-col`}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-text-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-text-secondary mt-auto">
                {feature.description}
              </p>
              {feature.highlight && (
                <div className="mt-3">
                  <span className="inline-block bg-primary-green/10 text-primary-green text-xs font-medium px-2.5 py-0.5 rounded-full">
                    Most Valuable
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-text-secondary text-lg max-w-3xl mx-auto mb-8">
            No theory. No PowerPoints. Just working AI that delivers real ROI starting Week 1.
          </p>
          <CustomButton
            variant="primary"
            size="default"
            onClick={() => (window.location.href = "/book-call")}
            className="mx-auto"
          >
            Start Building Your AI Team
          </CustomButton>
        </motion.div>
      </div>
    </section>
  )
}
