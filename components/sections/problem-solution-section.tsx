"use client"
import { XCircle, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

const comparisonData = [
  {
    title: "Traditional Consulting",
    points: [
      { text: "6-18 months for theoretical roadmaps", type: "negative" },
      { text: "PowerPoint deliverables, no working prototypes", type: "negative" },
      { text: "$2M-$5M investment with uncertain ROI", type: "negative" },
      { text: "Generic solutions not tailored to your operations", type: "negative" },
      { text: "Analysis paralysis delays critical decisions", type: "negative" },
    ],
  },
  {
    title: "Internal Development",
    points: [
      { text: "Expensive hires with unproven track records", type: "negative" },
      { text: "Multiple failed pilots, no production wins", type: "negative" },
      { text: "Lack of enterprise AI implementation experience", type: "negative" },
      { text: "Technology choices that don't scale", type: "negative" },
      { text: "Board pressure with nothing to show", type: "negative" },
    ],
  },
  {
    title: "Tier 4's Rapid Validation",
    points: [
      { text: "Working prototypes delivered in 5 days", type: "positive" },
      { text: "Precise scoping with verified cost quotes", type: "positive" },
      { text: "Proven methodology across 100+ implementations", type: "positive" },
      { text: "Strategic partnership for long-term success", type: "positive" },
      { text: "Executive clarity enables confident decisions", type: "positive" },
    ],
  },
]

export default function ProblemSolutionSection() {
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
          The <span className="text-primary-green">AI Clarity Gap</span> is Costing You Millions
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {comparisonData.map((column, index) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card-bg p-6 md:p-8 rounded-card border border-border-color"
            >
              <h3 className="text-subsection-mobile md:text-subsection font-bold text-text-primary mb-6 text-center">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.points.map((point) => (
                  <li key={point.text} className="flex items-start">
                    {point.type === "negative" ? (
                      <XCircle className="h-5 w-5 text-error mr-3 mt-1 flex-shrink-0" />
                    ) : (
                      <CheckCircle className="h-5 w-5 text-success mr-3 mt-1 flex-shrink-0" />
                    )}
                    <span className="text-body-mobile md:text-body text-text-secondary">{point.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 bg-card-bg p-6 md:p-8 rounded-card border border-border-color max-w-3xl mx-auto text-center"
        >
          <p className="text-text-secondary text-lg">
            <span className="text-primary-green font-semibold">Enterprise leaders understand</span> that AI is a necessity, not a luxury. However, the path forward is often obscured by hype, jargon, and expensive consulting engagements that deliver theoretical reports instead of tangible results. You need clear signal: knowing exactly where AI will impact your operations, what the solution looks like, and what the ROI will be—quickly and definitively.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
