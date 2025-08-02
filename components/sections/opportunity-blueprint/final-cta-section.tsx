"use client"
import { motion } from "framer-motion"
import { CustomButton } from "@/components/ui/custom-button"
import { useRouter } from "next/navigation"

export default function FinalCTASection() {
  const router = useRouter()
  
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
            Your AI Executives Are Ready to Find Your <span className="text-primary-green">$500K+</span> Opportunity
          </motion.h2>
          
          <motion.p 
            className="text-xl text-text-secondary mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            ATLAS, NAVIGATOR, MAESTRO, and CATALYST are already analyzing your market position. 
            Let them show you what they've found - before you pay a dime.
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
              onClick={() => router.push("/book-call")}
              className="px-8 py-4 text-lg"
            >
              Activate Your AI Executives
            </CustomButton>
          </motion.div>
          
          <motion.p 
            className="mt-8 text-text-secondary text-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            ⏳ Limited spots available - We only deploy 12 Foundation™ systems per quarter
          </motion.p>
          
          <motion.div 
            className="mt-12 pt-8 border-t border-border-color/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-text-secondary mb-6">
              "Our AI executives found $1.2M in savings we didn't know existed. NAVIGATOR identified process bottlenecks, MAESTRO automated them, and CATALYST ensured our team embraced the changes. Best investment we've made."
            </p>
            <p className="font-semibold text-primary-green">
              — Sarah Chen, COO, Global Parts Manufacturing
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}