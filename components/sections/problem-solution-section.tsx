"use client"
import { XCircle, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

const comparisonData = [
  {
    title: "The $3M PowerPoint",
    points: [
      { text: "$3M for 500 slides you'll never read", type: "negative" },
      { text: "18 months to tell you what you already know", type: "negative" },
      { text: "9 out of 10 fail completely", type: "negative" },
      { text: "Copy-paste solutions from 1995", type: "negative" },
      { text: "Year 2: Still in 'pilot phase'", type: "negative" },
    ],
  },
  {
    title: "The Frankenstein Approach",
    points: [
      { text: "$200K salaries for YouTube graduates", type: "negative" },
      { text: "37 pilots, 0 production wins", type: "negative" },
      { text: "Burn rate: $167K/month for nothing", type: "negative" },
      { text: "Your best people quit in frustration", type: "negative" },
      { text: "CEO on the hot seat by Q3", type: "negative" },
    ],
  },
  {
    title: "The Only Way That Works",
    points: [
      { text: "Live, profitable AI by Day 91", type: "positive" },
      { text: "$600K not $3M (math below)", type: "positive" },
      { text: "12 for 12 clients profitable", type: "positive" },
      { text: "Trained on YOUR data, not Wikipedia", type: "positive" },
      { text: "Average: $2.4M saved Year 1", type: "positive" },
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
          Why <span className="text-primary-green">88% of Companies</span> Waste $2M+ on AI That Never Works
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
            The math is simple: Top firms cost $3M and fail 88% of the time. Expected value: -$2.64M. We cost $600K and work every time. Expected value: +$1.8M. This isn't rocket science.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
