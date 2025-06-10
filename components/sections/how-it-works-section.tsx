"use client"
import { Dna, Target, Bot } from "lucide-react"
import { CustomButton } from "@/components/ui/custom-button"
import { motion } from "framer-motion"
import { useState } from "react"
import ProcessExplainerModal from "@/components/ui/process-explainer-modal"

const steps = [
  {
    number: "01",
    title: "WE SCAN YOUR OPERATION",
    timeframe: "Week 1-4",
    description: "Like an MRI for your business. We map every process, capture every 'that's how we've always done it,' and turn your tribal knowledge into AI fuel.",
    icon: Dna,
  },
  {
    number: "02",
    title: "WE SHOW YOU THE MONEY",
    timeframe: "Week 5-8",
    description: "We find where you're hemorrhaging cash. Example: 'Your team spends 2,400 hours/month on X. AI can do it in 40 hours. That's $312K/year saved.' With receipts.",
    icon: Target,
  },
  {
    number: "03",
    title: "WE BUILD YOUR MONEY MACHINE",
    timeframe: "Week 9-12",
    description: "Launch custom AI employees pre-loaded with your playbook. They start profitable on day one because they already know your business better than new hires ever could.",
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
          <CustomButton 
            variant="secondary" 
            size="secondary" 
            onClick={() => setIsModalOpen(true)}
          >
            Explore Our Process →
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
