"use client"
import { motion } from "framer-motion"
import { CheckCircle, XCircle } from "lucide-react"

const needs = [
  "Strategic AI vision",
  "Someone who's done this before",
  "Executive who speaks to boards",
  "Leader who can execute",
  "Expert who prevents failures",
]

const cantAfford = [
  "$400K+ base salary",
  "Equity dilution",
  "2-year commitments",
  "Wrong hire risk",
  "6-month search process",
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
          <span className="text-primary-green">You Can't Afford It.</span>
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
            Get 20% of their time. Get 100% of their expertise.
          </h3>
          <p className="text-text-secondary">
            Your Fractional CAO brings 15+ years experience, 100+ implementations, and zero learning curve.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
