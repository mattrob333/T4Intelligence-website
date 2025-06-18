"use client"
import { CustomButton } from "@/components/ui/custom-button"
import { ShieldCheck } from "lucide-react"
import { motion } from "framer-motion"

export default function FinalCtaSection() {
  return (
    <section className="relative py-section-padding-mobile md:py-section-padding bg-urgency-gradient bg-200% animate-subtle-gradient overflow-hidden">
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-section-headline-mobile md:text-section-headline text-text-primary mb-4">
            Stop Losing the <span className="text-accent-gold">AI Race</span>
          </h2>
          <p className="text-body-large-mobile md:text-body-large text-text-secondary max-w-3xl mx-auto mb-8">
            Every day without proper AI leadership costs you money and market share. Your competitors aren't waiting.
            Neither should you.
          </p>
          <div className="bg-card-bg/80 p-4 rounded-lg border border-border-color max-w-md mx-auto mb-8">
            <p className="font-bold text-text-primary mb-2">Current CAO Availability:</p>
            <p className="text-text-secondary">
              Q1 2025: <span className="text-error font-semibold">SOLD OUT</span>
            </p>
            <p className="text-text-secondary">
              Q2 2025: <span className="text-accent-gold font-semibold">2 spots remaining</span>
            </p>
            <p className="text-text-secondary">
              Q3 2025: <span className="text-success font-semibold">4 spots available</span>
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <CustomButton variant="primary" size="default" onClick={() => (window.location.href = "/book-call")}>
            Secure Your CAO Now
          </CustomButton>
          <CustomButton variant="secondary" size="secondary" onClick={() => (window.location.href = "/book-call")}>
            Discuss Your Needs
          </CustomButton>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-flex items-center text-text-secondary"
        >
          <ShieldCheck className="h-5 w-5 mr-2 text-primary-green" />
          30-Day Trial: Not happy? Walk away. No questions, no fees.
        </motion.div>
      </div>
    </section>
  )
}
