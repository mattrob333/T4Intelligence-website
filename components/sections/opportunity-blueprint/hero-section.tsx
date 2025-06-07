"use client"

import { useState, useEffect } from "react"
import { CustomButton } from "@/components/ui/custom-button"
import { FileText, Award } from "lucide-react" // Ensure Award is imported
import { motion } from "framer-motion"
import OpportunityBlueprintModal from "@/components/opportunity-blueprint-modal"
// The fetch logic for blueprintContent will be kept

const heroStats = [
  { label: "Average opportunities found", value: "47" },
  { label: "Average savings identified", value: "$2.5M" },
  { label: "Typical ROI", value: "2,400%" },
]

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [blueprintContent, setBlueprintContent] = useState<string>("")

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  useEffect(() => {
    fetch("/content/sample-opportunity-blueprint.md")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        return response.text()
      })
      .then((text) => setBlueprintContent(text))
      .catch((error) => {
        console.error("Error fetching blueprint markdown:", error)
        setBlueprintContent("Error: Could not load blueprint content.")
      })
  }, [])

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
              Find <span className="text-primary-green">$10M in Hidden AI Opportunities</span> in 10 Days
            </h1>
            <p className="text-body-large-mobile md:text-body-large text-text-secondary max-w-3xl mx-auto mb-10">
              Stop Guessing. Start Knowing Exactly Where AI Will Make You Money.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10"
          >
            {heroStats.map((stat) => (
              <div key={stat.label} className="bg-card-bg p-4 rounded-lg border border-border-color">
                <p className="text-3xl md:text-4xl font-bold text-primary-green">{stat.value}</p>
                <p className="text-sm text-text-secondary">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <div className="flex flex-col items-center">
              <CustomButton
                variant="primary"
                size="default"
                onClick={() => console.log("Get Your Blueprint clicked")}
                id="opportunity-blueprint-cta" // Added ID for modal footer scroll
              >
                GET YOUR BLUEPRINT - $40K-$60K
              </CustomButton>
              <p className="text-sm text-text-secondary mt-2">Or $30K-$50K when bundled with Business DNA Map™</p>
            </div>
            <CustomButton
              variant="secondary"
              size="secondary" // Assuming 'secondary' size is appropriate, or adjust if needed
              onClick={openModal} // This button opens the modal
            >
              <FileText className="mr-2 h-5 w-5" /> SEE REAL CLIENT BLUEPRINT
            </CustomButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="inline-flex items-center justify-center bg-primary-green/10 text-primary-green font-semibold px-4 py-2 rounded-full"
          >
            <Award className="h-5 w-5 mr-2" />
            100% of the Blueprint cost credits toward implementation
          </motion.div>
        </div>
      </section>
      <OpportunityBlueprintModal isOpen={isModalOpen} onClose={closeModal} markdownContent={blueprintContent} />
    </>
  )
}
