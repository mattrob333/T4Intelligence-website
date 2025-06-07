"use client"
import { CustomButton } from "@/components/ui/custom-button"
import { AlertTriangle, CalendarCheck } from "lucide-react"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 bg-secondary-black overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-hero-headline-mobile md:text-hero-headline text-text-primary mb-6">
            Your <span className="text-primary-green">$400K AI Executive</span> for $6K/Month
          </h1>
          <p className="text-body-large-mobile md:text-body-large text-text-secondary max-w-3xl mx-auto mb-10">
            World-Class AI Leadership Without the Executive Price Tag
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-10 text-left"
        >
          <div className="bg-card-bg p-6 rounded-lg border border-border-color">
            <h3 className="text-subsection-mobile font-bold text-text-primary mb-2">Full-Time CAO</h3>
            <p className="text-text-secondary line-through">$400K salary</p>
            <p className="text-text-secondary line-through">$100K benefits</p>
            <p className="text-text-secondary line-through">Equity</p>
            <p className="text-2xl font-bold text-error mt-2">~ $500K+/year</p>
          </div>
          <div className="bg-primary-green/10 p-6 rounded-lg border border-primary-green">
            <h3 className="text-subsection-mobile font-bold text-text-primary mb-2">Fractional CAO</h3>
            <p className="text-text-primary">No equity dilution</p>
            <p className="text-text-primary">No long-term commitment</p>
            <p className="text-2xl font-bold text-primary-green mt-2">$8K-$15K/month</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <CustomButton variant="primary" size="default" onClick={() => console.log("Meet Your Fractional CAO")}>
            Meet Your Fractional CAO
          </CustomButton>
          <CustomButton variant="secondary" size="secondary" onClick={() => console.log("Check Availability")}>
            <CalendarCheck className="mr-2 h-5 w-5" /> Check Availability
          </CustomButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="text-accent-gold font-semibold flex items-center justify-center"
        >
          <AlertTriangle className="h-5 w-5 mr-2" />
          Only 2 CAO spots available for Q2 2025
        </motion.div>
      </div>
    </section>
  )
}
