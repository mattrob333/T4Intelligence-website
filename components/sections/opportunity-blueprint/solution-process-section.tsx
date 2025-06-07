"use client"
import { motion } from "framer-motion"

const processSteps = [
  {
    days: "DAY 1-3",
    title: "Complete Business Scan",
    details: ["Map every process", "Identify all workflows", "Document time spent", "Calculate current costs"],
  },
  {
    days: "DAY 4-6",
    title: "AI Opportunity Analysis",
    details: [
      "Score automation potential",
      "Calculate ROI for each",
      "Assess technical feasibility",
      "Identify dependencies",
    ],
  },
  {
    days: "DAY 7-8",
    title: "Priority Matrix Creation",
    details: [
      "Rank by impact vs effort",
      "Create implementation timeline",
      "Define success metrics",
      "Build risk mitigation plan",
    ],
  },
  {
    days: "DAY 9-10",
    title: "Blueprint Delivery",
    details: [
      "Present findings to leadership",
      "Deliver comprehensive report",
      "Answer all questions",
      "Plan next steps",
    ],
  },
]

export default function SolutionProcessSection() {
  return (
    <section className="py-section-padding-mobile md:py-section-padding bg-secondary-black">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-section-headline-mobile md:text-section-headline text-center text-text-primary mb-4"
        >
          The AI Opportunity <span className="text-primary-green">Blueprint Process</span>
        </motion.h2>
        <div className="w-full max-w-2xl mx-auto mb-12">
          <p className="text-center text-text-secondary mb-2">10-Day Timeline</p>
          <div className="w-full bg-border-color rounded-full h-2.5">
            <motion.div
              className="bg-primary-green h-2.5 rounded-full"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            ></motion.div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-card-bg p-6 rounded-lg border border-border-color"
            >
              <p className="text-sm font-bold text-primary-green mb-2">{step.days}</p>
              <h3 className="text-xl font-bold text-text-primary mb-3">{step.title}</h3>
              <ul className="text-sm text-text-secondary space-y-1">
                {step.details.map((detail) => (
                  <li key={detail}>• {detail}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
