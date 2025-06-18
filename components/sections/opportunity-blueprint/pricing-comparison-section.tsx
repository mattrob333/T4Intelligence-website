"use client"
import { motion } from "framer-motion"
import { CustomButton } from "@/components/ui/custom-button"
import { Check, X } from "lucide-react"

const investmentData = [
  {
    title: "📉 YOUR HIDDEN COSTS",
    amount: "$500,000/month",
    subtitle: "Currently Bleeding Out",
    items: [
      "Inefficient processes",
      "Manual workflows",
      "Human errors",
      "Slow decision-making"
    ]
  },
  {
    title: "🎯 YOUR INVESTMENT",
    amount: "$40K-$60K",
    subtitle: "One-Time Build Cost",
    items: [
      "Custom AI solutions",
      "Full implementation",
      "Team training",
      "90-day deployment"
    ]
  },
  {
    title: "📈 YOUR RETURNS",
    amount: "$2.4M/year",
    subtitle: "New Profit Generated",
    items: [
      "Automated savings",
      "Error elimination",
      "Faster operations",
      "Competitive edge"
    ]
  }
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
          The <span className="text-primary-green">ROI Math That Makes CFOs Smile</span>
        </motion.h2>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {investmentData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card-bg p-8 rounded-lg border border-border-color text-center"
              >
                <p className="text-lg font-semibold text-primary-green mb-2">{item.title}</p>
                <h3 className="text-2xl font-bold text-text-primary mb-1">{item.amount}</h3>
                <p className="text-text-secondary italic mb-4">{item.subtitle}</p>
                <ul className="text-left space-y-2 mb-6">
                  {item.items.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary-green mr-2">•</span>
                      <span className="text-text-secondary">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-primary-green/5 border border-primary-green rounded-lg p-8 max-w-2xl mx-auto text-center"
          >
            <h4 className="text-xl font-bold text-text-primary mb-4">MATH ALERT: $40K-$60K</h4>
            <p className="text-text-secondary mb-3">"Every dollar spent on proper AI builds returns $5-$10 in Year 1"</p>
            <p className="text-text-secondary mb-4">"Most clients see payback in 90-120 days"</p>
            <div className="border-t border-border-color pt-4 mt-4">
              <p className="text-text-secondary italic mb-4">
                "Our Foundation™ paid for itself before we even started building. Just knowing our real numbers changed everything."
                <span className="block font-semibold mt-2">- Sarah Chen, COO</span>
              </p>
              <CustomButton variant="primary" size="default" className="w-full max-w-xs mx-auto" onClick={() => (window.location.href = "/book-call")}>
                BUILD YOUR FOUNDATION™ →
              </CustomButton>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 bg-card-bg border border-border-color rounded-lg p-6 max-w-3xl mx-auto"
          >
            <div className="flex items-start">
              <div className="bg-primary-green/10 p-2 rounded-full mr-4">
                <span className="text-primary-green font-bold">✓</span>
              </div>
              <div>
                <p className="font-bold text-text-primary mb-2">SMART CLIENT TIP:</p>
                <p className="text-text-secondary">
                  "Most clients fund their entire AI transformation from the savings we identify in Week 1. The Foundation™ literally pays for The Build."
                </p>
                <CustomButton variant="secondary" size="default" className="mt-4" onClick={() => (window.location.href = "/book-call")}>
                  START WITH FOUNDATION DISCOVERY →
                </CustomButton>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 bg-primary-green/10 p-8 rounded-lg border border-primary-green max-w-3xl mx-auto text-center"
          >
            <h3 className="text-xl font-bold text-primary-green mb-3">💡 SMART CLIENT TIP:</h3>
            <p className="text-text-secondary mb-4">
              Start with Foundation™ Discovery first and save $10K on your complete AI transformation.
              <br />
              Total investment for both: <span className="font-semibold text-text-primary">$45K-$75K</span> (save $10K)
            </p>
            <CustomButton
              variant="secondary"
              size="default"
              onClick={() => (window.location.href = "/book-call")}
            >
              START WITH FOUNDATION™ DISCOVERY →
            </CustomButton>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
