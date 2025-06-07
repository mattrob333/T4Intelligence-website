"use client"
import { Dna, Target, Bot } from "lucide-react"
import { CustomButton } from "@/components/ui/custom-button"
import { motion } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "MAP YOUR BUSINESS DNA",
    timeframe: "Week 1-4",
    description: "We decode how your business really works—every process, system, and shortcut.",
    icon: Dna,
  },
  {
    number: "02",
    title: "FIND YOUR GOLDMINE",
    timeframe: "Week 5-8",
    description: "Identify the exact automations that will save you millions (with the math to prove it).",
    icon: Target,
  },
  {
    number: "03",
    title: "DEPLOY YOUR AI TEAM",
    timeframe: "Week 9-12",
    description: "Launch AI that speaks your language and delivers results from day one.",
    icon: Bot,
  },
]

export default function HowItWorksSection() {
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
          Three Steps to AI That <span className="text-primary-green">Actually Makes Money</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 md:mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-card-bg p-6 md:p-8 rounded-card border border-border-color text-center md:text-left"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-4">
                <span className="text-6xl font-black text-primary-green">{step.number}</span>
                <step.icon className="h-12 w-12 text-primary-green md:hidden" /> {/* Icon for mobile */}
              </div>
              <div className="flex items-center gap-4 mb-4">
                <step.icon className="hidden md:block h-10 w-10 text-primary-green flex-shrink-0" />
                <div>
                  <h3 className="text-subsection-mobile md:text-subsection font-bold text-text-primary">
                    {step.title}
                  </h3>
                  <p className="text-sm text-accent-gold font-semibold">{step.timeframe}</p>
                </div>
              </div>
              <p className="text-body-mobile md:text-body text-text-secondary">{step.description}</p>
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
          <CustomButton variant="secondary" size="secondary" onClick={() => console.log("Explore Our Process clicked")}>
            Explore Our Process →
          </CustomButton>
        </motion.div>
      </div>
    </section>
  )
}
