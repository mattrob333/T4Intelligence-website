"use client"
import { motion } from "framer-motion"
import { CustomButton } from "@/components/ui/custom-button"
import { Check, X } from "lucide-react"

const comparisonData = [
  {
    name: "McKinsey AI Assessment",
    price: "$500,000",
    timeline: "6 months",
    deliverable: "PowerPoint deck",
    implementationHelp: false,
    isTier4: false,
  },
  {
    name: "Deloitte Strategy",
    price: "$300,000",
    timeline: "4 months",
    deliverable: "Strategy document",
    implementationHelp: false,
    isTier4: false,
  },
  {
    name: "Tier 4 Blueprint",
    price: "$40K-$60K",
    timeline: "10 days",
    deliverable: "Complete roadmap + financials",
    implementationHelp: true,
    isTier4: true,
  },
]

export default function PricingComparisonSection() {
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
          The <span className="text-primary-green">Smart Investment</span>
        </motion.h2>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border-color border border-border-color rounded-lg overflow-hidden">
            {comparisonData.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-6 text-center ${item.isTier4 ? "bg-primary-green/5 border-t-4 border-primary-green" : "bg-card-bg"}`}
              >
                <h3 className="text-xl font-bold text-text-primary h-16 flex items-center justify-center">
                  {item.name}
                </h3>
                <p className="text-4xl font-extrabold my-4 h-16 flex items-center justify-center">
                  {item.isTier4 ? <span className="text-primary-green">{item.price}</span> : item.price}
                </p>
                <div className="text-text-secondary space-y-3 text-sm">
                  <p>
                    <span className="font-semibold text-text-primary">Timeline:</span> {item.timeline}
                  </p>
                  <p>
                    <span className="font-semibold text-text-primary">Deliverable:</span> {item.deliverable}
                  </p>
                  <p className="flex items-center justify-center">
                    <span className="font-semibold text-text-primary mr-2">Implementation Help:</span>
                    {item.implementationHelp ? (
                      <Check className="h-5 w-5 text-success" />
                    ) : (
                      <X className="h-5 w-5 text-error" />
                    )}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 bg-card-bg p-8 rounded-lg border border-border-color max-w-3xl mx-auto text-center"
        >
          <p className="text-text-secondary">
            Investment: <span className="font-bold text-2xl text-primary-green">$40K-$60K</span>
          </p>
          <p className="text-text-secondary">
            Bundle Pricing:{" "}
            <span className="font-bold text-lg text-text-primary">
              $30K-$50K (when combined with Business DNA Map™)
            </span>
          </p>
          <p className="text-text-secondary">
            Total Bundle Value: <span className="font-bold text-lg text-text-primary">$45K-$75K for both services</span>
          </p>
          <p className="text-text-secondary">
            You Save: <span className="font-bold text-lg text-accent-gold">$10K</span>
          </p>
          <p className="text-text-secondary">
            Guarantee: <span className="font-bold text-lg text-text-primary">Find $100K+ in savings or it's free</span>
          </p>
          <CustomButton variant="primary" size="default" className="mt-6">
            Start Your Blueprint Today
          </CustomButton>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }} // Adjust delay if needed
          className="mt-8 bg-primary-green/10 p-8 rounded-lg border border-primary-green max-w-3xl mx-auto text-center"
        >
          <h3 className="text-xl font-bold text-primary-green mb-3">💡 SMART CLIENT TIP:</h3>
          <p className="text-text-secondary mb-4">
            Start with Business DNA Map™ first and save $10K on your Blueprint.
            <br />
            Total investment for both: <span className="font-semibold text-text-primary">$45K-$75K</span> (save $10K)
          </p>
          <CustomButton
            variant="secondary"
            size="default" // Making it a bit more prominent
            onClick={() => (window.location.href = "/business-dna")}
          >
            Start with Business DNA Map →
          </CustomButton>
        </motion.div>
      </div>
    </section>
  )
}
