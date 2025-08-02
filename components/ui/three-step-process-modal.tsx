"use client"

import React, { MouseEvent } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Target, Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import { CustomButton } from "@/components/ui/custom-button"
import { useRouter } from "next/navigation"

interface ThreeStepProcessModalProps {
  isOpen: boolean
  onClose: () => void
}

const steps = [
  {
    title: "FOUNDATION",
    timeframe: "Week 1-4",
    description: "We study your business like scholars preparing for a dissertation to understand every nuance of your operations.",
    icon: (
      <svg className="w-12 h-12 text-primary-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    color: "from-primary-green/10 to-primary-green/5"
  },
  {
    title: "THE BUILD",
    timeframe: "Week 5-8",
    description: "We identify exactly where AI will make the most impact in your business and calculate the potential ROI.",
    icon: (
      <svg className="w-12 h-12 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "from-yellow-500/10 to-yellow-500/5"
  },
  {
    title: "YOUR CHIEF AI OFFICER",
    timeframe: "Week 9-12",
    description: "We implement AI solutions that work seamlessly with your team, delivering measurable results from day one.",
    icon: (
      <svg className="w-12 h-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: "from-blue-500/10 to-blue-500/5"
  }
]

export function ThreeStepProcessModal({ isOpen, onClose }: ThreeStepProcessModalProps) {
  const router = useRouter()
  const modalRef = React.useRef<HTMLDivElement>(null)

  // Close modal on Escape key
  React.useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
    }
    document.addEventListener("keydown", handleEsc)
    return () => document.removeEventListener("keydown", handleEsc)
  }, [onClose])

  // Prevent body scroll when modal is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
        onClick={onClose}
      >
        <motion.div
          ref={modalRef}
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="bg-secondary-black border border-border-color rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl shadow-primary-green/10"
          onClick={(e: MouseEvent) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border-color bg-[#1A1A1A]">
            <div>
              <h2 className="text-2xl font-bold text-white">Three Steps to AI That Actually Makes Money</h2>
              <p className="text-text-secondary mt-1">
                Our proven process to transform your business with AI
              </p>
            </div>
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-2 rounded-lg text-text-secondary hover:bg-border-color hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Content */}
          <div className="overflow-y-auto flex-grow p-6 md:p-8">
            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={cn(
                    "relative p-6 rounded-xl border border-border-color overflow-hidden",
                    `bg-gradient-to-br ${step.color}`
                  )}
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0 flex items-start">
                      <div className="bg-background p-3 rounded-lg border border-border-color">
                        {step.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl font-bold text-white">{`0${index + 1}`}</span>
                        <div className="h-px flex-1 bg-border-color" />
                        <span className="text-sm font-medium text-primary-green bg-primary-green/10 px-3 py-1 rounded-full">
                          {step.timeframe}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mt-3">{step.title}</h3>
                      <p className="mt-2 text-text-secondary">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-border-color bg-[#151515] flex flex-col md:flex-row items-center justify-center gap-4">
            <CustomButton
              variant="primary"
              size="default"
              onClick={() => {
                onClose()
                router.push("/book-call")
              }}
            >
              <Target className="mr-2 h-5 w-5" />
              Get Your Opportunity Assessment
            </CustomButton>
            <CustomButton
              variant="secondary"
              size="secondary"
              onClick={() => {
                onClose()
                router.push("/book-call")
              }}
            >
              <Phone className="mr-2 h-5 w-5" />
              Schedule Consultation
            </CustomButton>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
