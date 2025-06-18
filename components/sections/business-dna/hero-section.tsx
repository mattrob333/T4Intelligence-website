"use client"
import { useState } from "react"
import { CustomButton } from "@/components/ui/custom-button"
import { PlayCircle, CheckCircle, FileText } from "lucide-react"
import { motion } from "framer-motion"
import DnaMapModal from "@/components/dna-map-modal"

const trustElements = ["30-Day Build", "100% Success Rate", "47% Avg. Process Improvement"]

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 bg-secondary-black overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-hero-headline-mobile md:text-hero-headline text-text-primary mb-6">
              Build The AI Foundation That <span className="text-primary-green">Runs Your Future Business</span>
            </h1>
            <p className="text-body-large-mobile md:text-body-large text-text-secondary max-w-3xl mx-auto mb-10">
              We Create Your Company's AI Intelligence Asset - The New 'Data Room' Smart Buyers Will Demand
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="max-w-3xl mx-auto mb-10 aspect-video bg-card-bg border border-border-color rounded-lg flex items-center justify-center"
          >
            <div className="text-center p-8">
              <PlayCircle className="h-16 w-16 mx-auto text-primary-green mb-4" />
              <p className="text-xl font-medium text-text-primary">5-Minute Demo: How We Build Your AI Foundation</p>
            </div>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-6 mb-12 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="w-full sm:w-auto">
              <CustomButton variant="primary" size="lg" className="w-full">
                START YOUR FOUNDATION
              </CustomButton>
            </div>
            <div className="w-full sm:w-auto">
              <CustomButton 
                variant="default" 
                size="lg"
                onClick={() => setIsModalOpen(true)}
                className="w-full"
              >
                SEE SAMPLE FOUNDATION
              </CustomButton>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="space-y-3 md:space-y-0 md:flex md:flex-wrap md:justify-center md:gap-x-8 md:gap-y-3"
          >
            {trustElements.map((badge, index) => (
              <div key={index} className="flex items-center justify-center text-text-secondary text-sm">
                <CheckCircle className="h-4 w-4 mr-2 text-primary-green" />
                {badge}
              </div>
            ))}
          </motion.div>
        </div>
      </section>
      <DnaMapModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
