"use client"
import { motion } from "framer-motion"
import { CustomButton } from "@/components/ui/custom-button"
import { Download } from "lucide-react"
import { useState } from "react"
import ProcessExplainerModal from "@/components/ui/process-explainer-modal"

const deliverables = [
  "Complete Business Intelligence Files",
  "Process Automation Blueprints",
  "AI Instruction Library",
  "Knowledge Capture Database",
  "AI-Ready Data Architecture",
  "90-Day Implementation Roadmap"
]

const subtexts = [
  "Structured docs AI can read and understand - your entire operation decoded",
  "Every workflow mapped with clear automation opportunities identified and prioritized",
  "Pre-written prompts and commands that make AI think like your best employees",
  "Your tribal knowledge, documented forever - no more losing IP when people leave",
  "Your systems mapped so AI knows where everything lives and how to access it",
  "Step-by-step plan showing which automations to build first for maximum ROI"
]

export default function DeliverablesSection() {
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
          What Your <span className="text-primary-green">Foundation Contains</span>
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {deliverables.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card-bg p-6 rounded-lg border border-border-color h-full"
            >
              <h3 className="text-xl font-bold text-primary-green mb-2">{item}</h3>
              <p className="text-text-secondary text-sm">{subtexts[index]}</p>
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
          <CustomButton variant="primary" size="default" onClick={() => setIsModalOpen(true)}>
            <Download className="mr-2 h-5 w-5" /> Learn More about the Foundation
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
