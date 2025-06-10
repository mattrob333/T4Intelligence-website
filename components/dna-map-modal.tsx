"use client"

import React from "react"

import { useEffect, useState, useRef } from "react"
import { X, Info, Copy, Check } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { CustomButton } from "@/components/ui/custom-button"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { cn } from "@/lib/utils"

interface DnaMapModalProps {
  isOpen: boolean
  onClose: () => void
  markdownContent: string
}

const DnaMapModal: React.FC<DnaMapModalProps> = ({ isOpen, onClose, markdownContent }) => {
  const [isCopied, setIsCopied] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose()
      }
    }
    if (isOpen) {
      document.addEventListener("keydown", handleEsc)
      document.body.style.overflow = "hidden" // Prevent background scroll
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.removeEventListener("keydown", handleEsc)
      document.body.style.overflow = "auto"
    }
  }, [isOpen, onClose])

  // Focus trapping would typically involve more complex logic,
  // for simplicity in this environment, we'll skip full focus trap implementation.
  // In a full app, libraries like 'focus-trap-react' would be used.

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(markdownContent)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
      // Optionally, show an error toast/message
    }
  }

  const handleStartMappingClick = () => {
    onClose()
    // Scroll to main CTA - this would require a ref and scrollIntoView logic
    // For now, it just closes the modal.
    const ctaButton = document.getElementById("main-cta-business-dna") // Assuming an ID on the main CTA
    if (ctaButton) {
      ctaButton.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 md:p-0"
          onClick={onClose} // Click outside to close
        >
          <motion.div
            ref={modalRef}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-secondary-black border border-border-color rounded-card w-full max-w-[900px] max-h-[90vh] flex flex-col overflow-hidden md:rounded-[16px]"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 md:p-8 border-b border-border-color flex-shrink-0">
              <h2 className="text-2xl md:text-[28px] font-bold text-text-primary">Business DNA Map™ Sample</h2>
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="text-text-secondary hover:text-text-primary transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Content Area (Scrollable) */}
            <div className="p-6 md:p-8 overflow-y-auto flex-grow">
              {/* Explanation Section */}
              <div className="bg-card-bg border border-primary-green rounded-[12px] p-6 mb-6">
                <div className="flex items-start">
                  <Info size={24} className="text-primary-green mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-text-primary mb-2 text-lg">🤖 AI-Optimized Format</h3>
                    <p className="text-text-secondary text-sm leading-relaxed whitespace-pre-line">
                      {`This Business DNA Map™ is structured in a markdown format specifically designed for AI ingestion and processing. The hierarchical structure, clear labeling, and systematic organization allow AI systems to quickly understand your business context, identify patterns, and make intelligent recommendations.

This format enables AI to:
• Parse complex business relationships
• Identify automation opportunities
• Understand dependencies and workflows
• Generate insights from your unique business fingerprint`}
                    </p>
                  </div>
                </div>
              </div>

              {/* Code Block Container */}
              <div className="bg-background border border-border-color rounded-lg relative group">
                <div className="p-6 font-mono text-sm text-[#E0E0E0] leading-relaxed overflow-x-auto">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      h1: ({ node, ...props }) => <h1 className="text-primary-green mb-2 mt-4 text-2xl font-bold" {...props} />,
                      h2: ({ node, ...props }) => <h2 className="text-primary-green mb-2 mt-4 text-xl font-bold" {...props} />,
                      h3: ({ node, ...props }) => <h3 className="text-primary-green mb-2 mt-4 text-lg font-bold" {...props} />,
                      h4: ({ node, ...props }) => <h4 className="text-primary-green mb-2 mt-4 text-base font-bold" {...props} />,
                      h5: ({ node, ...props }) => <h5 className="text-primary-green mb-2 mt-4 text-sm font-bold" {...props} />,
                      h6: ({ node, ...props }) => <h6 className="text-primary-green mb-2 mt-4 text-xs font-bold" {...props} />,
                      strong: ({ node, ...props }) => <strong className="text-accent-gold" {...props} />,
                      b: ({ node, ...props }) => <b className="text-accent-gold" {...props} />,
                      ul: ({ node, ...props }) => <ul className="list-disc ml-6 text-[#E0E0E0] my-2" {...props} />,
                      ol: ({ node, ...props }) => <ol className="list-decimal ml-6 text-[#E0E0E0] my-2" {...props} />,
                      li: ({ node, ...props }) => <li className="mb-1 text-[#E0E0E0]" {...props} />,
                      p: ({ node, ...props }) => <p className="mb-2 text-[#E0E0E0]" {...props} />,
                      code: ({ node, inline, className, children, ...props }) => {
                        if (inline) {
                          return (
                            <code className="bg-[#2a2a2a] px-1 py-0.5 rounded text-[#E0E0E0] text-[85%]" {...props}>
                              {children}
                            </code>
                          )
                        }
                        return (
                          <pre className="bg-[#2a2a2a] p-4 rounded my-2 overflow-x-auto">
                            <code className="text-[#E0E0E0] text-[85%] block" {...props}>
                              {children}
                            </code>
                          </pre>
                        )
                      },
                      blockquote: ({ node, ...props }) => (
                        <blockquote 
                          className="border-l-4 border-border-color pl-4 my-4 text-[#B0B0B0] italic"
                          {...props}
                        />
                      ),
                    }}
                  >
                    {markdownContent}
                  </ReactMarkdown>
                </div>
                <button
                  onClick={handleCopy}
                  className={cn(
                    "absolute top-3 right-3 bg-card-bg border border-primary-green rounded-md px-3 py-2 text-xs md:text-sm font-semibold transition-all duration-200 ease-in-out",
                    "text-primary-green hover:bg-primary-green hover:text-background focus:outline-none focus:ring-2 focus:ring-primary-green focus:ring-offset-2 focus:ring-offset-background",
                    "opacity-0 group-hover:opacity-100 focus:opacity-100", // Show on hover/focus
                  )}
                >
                  {isCopied ? (
                    <>
                      <Check size={16} className="inline mr-1" /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy size={16} className="inline mr-1" /> Copy DNA Map
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 md:p-8 border-t border-border-color flex-shrink-0 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-text-secondary text-xs md:text-sm text-center md:text-left">
                This is a sample. Your DNA Map will be unique to your business.
              </p>
              <CustomButton variant="primary" size="default" onClick={handleStartMappingClick}>
                Start Your DNA Mapping
              </CustomButton>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default DnaMapModal
