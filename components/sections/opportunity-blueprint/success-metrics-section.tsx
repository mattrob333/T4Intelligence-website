"use client"
import { motion } from "framer-motion"
import { CustomButton } from "@/components/ui/custom-button"

const metrics = [
  { value: "47", label: "Bottlenecks Found", subtext: "Manufacturing" },
  { value: "$2.5M", label: "Annual Savings", subtext: "Identified" },
  { value: "37 days", label: "To First ROI", subtext: "Average" },
  { value: "100%", label: "Success Rate", subtext: "Guaranteed" },
]

export default function SuccessMetricsSection() {
  return (
    <section className="py-section-padding-mobile md:py-section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-section-headline-mobile md:text-section-headline text-center text-text-primary mb-12 md:mb-16"
        >
Blueprint <span className="text-primary-green">Success Stories</span>
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card-bg p-6 rounded-lg border border-border-color text-center"
            >
              <p className="text-5xl font-extrabold text-primary-green mb-2">{metric.value}</p>
              <h3 className="text-lg font-bold text-text-primary">{metric.label}</h3>
              <p className="text-sm text-text-secondary">{metric.subtext}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="bg-card-bg p-8 rounded-lg border border-primary-green max-w-3xl mx-auto text-center"
        >
          <p className="text-body-large italic text-text-primary mb-4">
            "The Blueprint paid for itself 23X over. We found $2M in savings we had no idea existed."
          </p>
          <div className="mt-6">
            <CustomButton variant="primary" size="default" className="w-full max-w-xs mx-auto">
              Get Your 10% Efficiency Gains Guaranteed →
            </CustomButton>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
