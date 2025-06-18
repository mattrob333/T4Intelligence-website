"use client"
import { motion } from "framer-motion"
import { CustomButton } from "@/components/ui/custom-button"

export default function SuccessStorySection() {
  return (
    <section className="py-section-padding-mobile md:py-section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="bg-card-bg rounded-lg border border-primary-green p-8 md:p-12 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center"
        >
          <div className="lg:col-span-2">
            <p className="text-sm font-semibold text-primary-green mb-2">SUCCESS STORY SPOTLIGHT</p>
            <h3 className="text-subsection font-bold text-text-primary mb-4">GlobalParts Manufacturing</h3>
            <p className="italic text-text-secondary mb-6">
              "The DNA map revealed opportunities we didn't know existed. It's like having X-ray vision for your
              business."
            </p>
            <p className="font-semibold text-text-primary">Mike Torres, CFO</p>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-2xl font-bold text-primary-green">89%</p>
              <p className="text-sm text-text-secondary">Reduction in processing time</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary-green">$2.4M</p>
              <p className="text-sm text-text-secondary">Annual savings</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary-green">4 Months</p>
              <p className="text-sm text-text-secondary">Time to ROI</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
