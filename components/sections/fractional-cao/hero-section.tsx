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
            Your <span className="text-primary-green">Chief AI Officer</span>, Without the Chief AI Officer Overhead
          </h1>
          <p className="text-body-large-mobile md:text-body-large text-text-secondary max-w-3xl mx-auto mb-10">
            World-Class AI Leadership Designed for Smart Companies
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-10 text-left"
        >
          <div className="bg-card-bg p-6 rounded-lg border border-border-color">
            <h3 className="text-subsection-mobile font-bold text-text-primary mb-4">The Old Way:</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-primary-green mr-2">•</span>
                <span className="text-text-secondary">Executive salary + equity</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-green mr-2">•</span>
                <span className="text-text-secondary">Benefits & overhead</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-green mr-2">•</span>
                <span className="text-text-secondary">6 months to find</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-green mr-2">•</span>
                <span className="text-text-secondary">50% fail in Year 1</span>
              </li>
            </ul>
          </div>
          <div className="bg-primary-green/10 p-6 rounded-lg border border-primary-green">
            <h3 className="text-subsection-mobile font-bold text-text-primary mb-4">The Smart Way:</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-primary-green mr-2">•</span>
                <span className="text-text-primary">Flexible engagement</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-green mr-2">•</span>
                <span className="text-text-primary">Scale up or down</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-green mr-2">•</span>
                <span className="text-text-primary">Start next week</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-green mr-2">•</span>
                <span className="text-text-primary">100% success rate</span>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <CustomButton variant="primary" size="default">
            MEET YOUR AI EXECUTIVE
          </CustomButton>
          <CustomButton variant="secondary" size="secondary">
            EXPLORE ENGAGEMENT OPTIONS
          </CustomButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="text-accent-gold font-semibold flex items-center justify-center"
        >
          <AlertTriangle className="h-5 w-5 mr-2" />
          Only 7 leadership spots available for Q3 2025
        </motion.div>
      </div>
    </section>
  )
}
