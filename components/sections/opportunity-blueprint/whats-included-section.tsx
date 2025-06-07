"use client"
import { motion } from "framer-motion"
import { BarChart3, Microscope, Calculator, Rocket, Download } from "lucide-react"
import { CustomButton } from "@/components/ui/custom-button"

const includedItems = [
  {
    icon: BarChart3,
    title: "Executive Summary",
    details: [
      "Top 10 opportunities ranked by ROI",
      "Expected savings for each",
      "Investment requirements",
      "Quick win identification",
    ],
  },
  {
    icon: Microscope,
    title: "Detailed Analysis",
    details: [
      "Process-by-process breakdown",
      "Integration requirements",
      "Technical specifications",
      "Success metrics defined",
    ],
  },
  {
    icon: Calculator,
    title: "Financial Model",
    details: [
      "3-year ROI projections",
      "Cost-benefit analysis",
      "Payback period calculations",
      "Budget recommendations",
    ],
  },
  {
    icon: Rocket,
    title: "90-Day Action Plan",
    details: ["What to automate first", "Week-by-week timeline", "Resource requirements", "Early warning indicators"],
  },
]

export default function WhatsIncludedSection() {
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
          Your Complete <span className="text-primary-green">AI Roadmap</span>
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
          {includedItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card-bg p-6 rounded-lg border border-border-color flex items-start gap-4"
            >
              <item.icon className="h-8 w-8 text-primary-green mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-text-primary mb-2">{item.title}</h3>
                <ul className="text-sm text-text-secondary space-y-1">
                  {item.details.map((detail) => (
                    <li key={detail}>✓ {detail}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <CustomButton variant="secondary" size="secondary" onClick={() => console.log("Download Sample Blueprint")}>
            <Download className="mr-2 h-5 w-5" /> Get Sample Blueprint (PDF)
          </CustomButton>
        </motion.div>
      </div>
    </section>
  )
}
