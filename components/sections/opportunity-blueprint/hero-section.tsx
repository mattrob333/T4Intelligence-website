"use client"

import { useState, useEffect } from "react"
import { CustomButton } from "@/components/ui/custom-button"
import { FileText, Award } from "lucide-react" // Ensure Award is imported
import { motion } from "framer-motion"
import OpportunityBlueprintModal from "@/components/opportunity-blueprint-modal"
// The fetch logic for blueprintContent will be kept

const heroStats = [
  { label: "AI Automations Deployed", value: "12" },
  { label: "Average Year 1 Return", value: "$2.4M" },
  { label: "First Money Saved", value: "Week 4" },
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
      <section className="relative pt-24 pb-12 md:pt-48 md:pb-24 bg-secondary-black overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-4 md:mb-6 leading-tight">
              We Build $2M Worth of Working AI in 90 Days
            </h1>
            <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto mb-6 md:mb-8 px-2">
              Stop Planning. Start Automating. Watch Money Flow In By Week 4.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto mb-8 sm:mb-10 px-2">
              {heroStats.map((stat) => (
                <div key={stat.label} className="bg-card-bg p-3 sm:p-4 rounded-lg border border-border-color">
                  <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-green">{stat.value}</p>
                  <p className="text-xs sm:text-sm text-text-secondary">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full max-w-md mx-auto space-y-4 mb-8"
          >
            <div className="space-y-2">
              <CustomButton
                variant="primary"
                size="default"
                onClick={() => (window.location.href = "/book-call")}
                id="opportunity-blueprint-cta"
                className="w-full justify-center py-3 text-base sm:text-lg"
              >
                START BUILDING
              </CustomButton>
              <p className="text-xs sm:text-sm text-text-secondary text-center px-2">
                ✓ Working AI, Not PowerPoints ✓ Guaranteed ROI or We Keep Building
              </p>
            </div>
            <div className="w-full">
              <CustomButton
                variant="secondary"
                size="default"
                onClick={openModal}
                className="w-full justify-center py-3 text-base sm:text-lg"
              >
                <FileText className="mr-2 h-5 w-5" /> Build Blueprint Example
              </CustomButton>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="inline-flex items-center justify-center bg-primary-green/10 text-primary-green font-semibold px-4 py-2 rounded-full"
          >
            <Award className="h-5 w-5 mr-2" />
            100% of the Foundation cost credits towards the Build Phase
          </motion.div>
        </div>
      </section>
      <OpportunityBlueprintModal isOpen={isModalOpen} onClose={closeModal} markdownContent={blueprintContent} />
    </>
  )
}
