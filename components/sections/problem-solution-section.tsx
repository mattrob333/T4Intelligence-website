"use client"
import { XCircle, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

const comparisonData = [
  {
    title: "The McKinsey Way",
    points: [
      { text: "$3M for strategy decks", type: "negative" },
      { text: "18-month timelines", type: "negative" },
      { text: "88% failure rate", type: "negative" },
      { text: 'Generic "best practices"', type: "negative" },
      { text: "Your AI still doesn't work", type: "negative" },
    ],
  },
  {
    title: "The DIY Disaster",
    points: [
      { text: 'Hiring random "AI experts"', type: "negative" },
      { text: "Pilots that never scale", type: "negative" },
      { text: "$2M down the drain", type: "negative" },
      { text: "Team burnout", type: "negative" },
      { text: "Board losing patience", type: "negative" },
    ],
  },
  {
    title: "The Tier 4 Way",
    points: [
      { text: "Working AI in 90 days", type: "positive" },
      { text: "80% less cost", type: "positive" },
      { text: "100% success rate", type: "positive" },
      { text: "AI that knows YOUR business", type: "positive" },
      { text: "ROI you can measure", type: "positive" },
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
          The <span className="text-primary-green">Expensive Truth</span> About AI
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
      </div>
    </section>
  )
}
