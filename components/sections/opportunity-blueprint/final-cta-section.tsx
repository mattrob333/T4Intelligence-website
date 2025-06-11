"use client"
import { motion } from "framer-motion"
import { CustomButton } from "@/components/ui/custom-button"

export default function FinalCTASection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-secondary-black to-card-bg">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-text-primary mb-6"
          >
            Ready to Unlock Your $500K+ AI Opportunity?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-text-secondary mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Join forward-thinking manufacturers who are already transforming their operations with AI. 
            Your first $500K in savings is just 10 days away.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <CustomButton 
              variant="primary" 
              size="default"
              onClick={() => console.log("Get Started")}
              className="px-8 py-4 text-lg"
            >
              Start Your 10-Day Blueprint
            </CustomButton>
            
            <CustomButton 
              variant="secondary" 
              size="default"
              onClick={() => console.log("Book Call")}
              className="px-8 py-4 text-lg"
            >
              Book a 15-Minute Call
            </CustomButton>
          </motion.div>
          
          <motion.p 
            className="mt-8 text-text-secondary text-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            ⏳ Next available blueprint slot: {new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
          </motion.p>
          
          <motion.div 
            className="mt-12 pt-8 border-t border-border-color/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-text-secondary mb-6">
              "The Blueprint was the best investment we made last year. We've already implemented 3 of the 5 AI solutions they recommended, and we're on track to save $1.2M annually."
            </p>
            <p className="font-semibold text-primary-green">
              — Michael Tan, Director of Operations, Precision Manufacturing Co.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
