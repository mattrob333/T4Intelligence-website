"use client"
import { Dna, Target, Bot } from "lucide-react"
import { CustomButton } from "@/components/ui/custom-button"
import { motion } from "framer-motion"
import { useState } from "react"
import ProcessExplainerModal from "@/components/ui/process-explainer-modal"

const steps = [
  {
    number: "01",
    title: "RAPID ASSESSMENT",
    timeframe: "24 Hours",
    description: "Before we meet, our proprietary AI analysis tools conduct a comprehensive assessment of your operations, industry, and competitive landscape. We identify high-value automation opportunities tailored to your constraints and goals.",
    icon: Dna,
  },
  {
    number: "02",
    title: "EXPERT VALIDATION",
    timeframe: "Days 1-2",
    description: "We meet with your leadership team for validation, not exploration. We present findings, confirm pain points, align on strategic goals, and prioritize the highest-impact opportunities with executive clarity.",
    icon: Target,
  },
  {
    number: "03",
    title: "PROOF-OF-CONCEPT",
    timeframe: "Days 2-5",
    description: "Immediate prototyping delivers detailed, functional MVP-level demonstrations customized to your specific use case. You see exactly how the automation will work before committing resources.",
    icon: Bot,
  },
]

export default function HowItWorksSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
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
          From <span className="text-primary-green">Assessment to Prototype</span> in One Week
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
          <CustomButton 
            variant="secondary" 
            size="secondary" 
            onClick={() => setIsModalOpen(true)}
          >
            See Our Methodology →
          </CustomButton>
        </motion.div>
      </div>
      <ProcessExplainerModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  )
}
