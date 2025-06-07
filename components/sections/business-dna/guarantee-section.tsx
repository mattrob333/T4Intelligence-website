"use client"
import { CustomButton } from "@/components/ui/custom-button"
import { ShieldCheck } from "lucide-react"
import { motion } from "framer-motion"

export default function GuaranteeSection() {
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
          <ShieldCheck className="h-16 w-16 text-accent-gold mx-auto mb-4" />
          <h2 className="text-section-headline-mobile md:text-section-headline text-text-primary mb-4">
            Our <span className="text-accent-gold">Bulletproof Guarantee</span>
          </h2>
          <p className="text-body-large-mobile md:text-body-large text-text-secondary max-w-3xl mx-auto mb-4">
            If your AI isn't working better than a new employee within 90 days, we'll refund every penny.
          </p>
          <p className="text-text-secondary/70 italic mb-10">(Never happened. Won't start with you.)</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }} // Adjust delay
          className="my-12 max-w-2xl mx-auto text-center bg-card-bg p-6 rounded-lg border border-border-color"
        >
          <h3 className="text-subsection-mobile md:text-subsection font-bold text-primary-green mb-3">WHAT'S NEXT?</h3>
          <p className="text-text-secondary mb-4">
            After your Business DNA Map, continue with the AI Opportunity Blueprint and{" "}
            <span className="font-semibold text-accent-gold">save $10K</span> off the regular price.
          </p>
          <CustomButton
            variant="secondary"
            size="secondary"
            onClick={() => (window.location.href = "/opportunity-blueprint")}
          >
            Learn About AI Opportunity Blueprint →
          </CustomButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <CustomButton variant="primary" size="default" onClick={() => console.log("Start Your DNA Mapping clicked")}>
            Start Your DNA Mapping
          </CustomButton>
          <CustomButton variant="secondary" size="secondary" onClick={() => (window.location.href = "/book-call")}>
            Talk to Our Team
          </CustomButton>
        </motion.div>
      </div>
    </section>
  )
}
