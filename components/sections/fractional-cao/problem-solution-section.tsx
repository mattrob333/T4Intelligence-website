"use client"
import { motion } from "framer-motion"
import { CheckCircle, XCircle } from "lucide-react"

const needs = [
  "Strategic AI vision",
  "Someone who's done this 100+ times",
  "Technical + business expertise",
  "Leader who can execute",
  "Board-level strategic thinking",
]

const cantAfford = [
  "❌ Another failed AI pilot",
  "❌ Full-time executive overhead",
  "❌ 18-month learning curves",
  "❌ Wrong hire disasters",
  "❌ Competitor advantages",
]

export default function ProblemSolutionSection() {
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
          You Need AI Leadership. <br className="md:hidden" />
          <span className="text-primary-green">We Made It Accessible.</span>
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="bg-card-bg p-8 rounded-lg border border-border-color"
          >
            <h3 className="text-subsection font-bold text-text-primary mb-4">You Need:</h3>
            <ul className="space-y-3">
              {needs.map((item) => (
                <li key={item} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-success mr-3 mt-1 flex-shrink-0" />
                  <span className="text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="bg-card-bg p-8 rounded-lg border border-border-color"
          >
            <h3 className="text-subsection font-bold text-text-primary mb-4">You Can't Afford:</h3>
            <ul className="space-y-3">
              {cantAfford.map((item) => (
                <li key={item} className="flex items-start">
                  <XCircle className="h-5 w-5 text-error mr-3 mt-1 flex-shrink-0" />
                  <span className="text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="bg-primary-green/10 border border-primary-green p-8 rounded-lg text-center max-w-3xl mx-auto"
        >
          <h3 className="text-subsection font-bold text-primary-green mb-2">
            Get Fortune 500 Leadership. Pay What Makes Sense.
          </h3>
          <p className="text-text-secondary">
            Experience the expertise of a seasoned AI executive without the full-time commitment or cost.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
