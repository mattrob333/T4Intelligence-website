"use client"
import { CustomButton } from "@/components/ui/custom-button"
import { AlertTriangle, CalendarClock } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function UrgencyCtaSection() {
  const [daysAutomating, setDaysAutomating] = useState(0)
  const [moneyLeft, setMoneyLeft] = useState(0)

  useEffect(() => {
    // Simulate live counters - replace with actual logic if needed
    const startDate = new Date("2024-01-01").getTime() // Arbitrary start date
    const today = new Date().getTime()
    const diffDays = Math.floor((today - startDate) / (1000 * 60 * 60 * 24))
    setDaysAutomating(diffDays)
    setMoneyLeft(diffDays * 1234) // Arbitrary calculation
  }, [])

  return (
    <section className="relative py-section-padding-mobile md:py-section-padding bg-urgency-gradient bg-200% animate-subtle-gradient overflow-hidden">
      <div className="absolute inset-0 bg-black/50"></div> {/* Overlay for text readability */}
      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-section-headline-mobile md:text-section-headline text-text-primary mb-4"
        >
          Every Day You Wait <span className="text-accent-gold">Costs You Money</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-body-large-mobile md:text-body-large text-text-secondary max-w-2xl mx-auto mb-10"
        >
          Your competitors automated another process while you read this page.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto mb-12"
        >
          <div className="bg-card-bg/80 p-6 rounded-lg border border-border-color">
            <p className="text-text-secondary text-sm mb-1">Days your competitors have been automating:</p>
            <p className="text-4xl font-bold text-primary-green">{daysAutomating.toLocaleString()}</p>
          </div>
          <div className="bg-card-bg/80 p-6 rounded-lg border border-border-color">
            <p className="text-text-secondary text-sm mb-1">Estimated money left on table:</p>
            <p className="text-4xl font-bold text-primary-green">${moneyLeft.toLocaleString()}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center mb-8"
        >
          <CustomButton variant="primary" size="default" onClick={() => (window.location.href = "/book-call")}>
            <CalendarClock className="mr-2 h-5 w-5" /> Book Your Strategy Call - 30 Minutes
          </CustomButton>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-accent-gold font-semibold flex items-center justify-center"
        >
          <AlertTriangle className="h-5 w-5 mr-2" /> We only work with 12 companies per quarter. 3 spots left for Q2
          2025.
        </motion.p>
      </div>
    </section>
  )
}
