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
                  <style jsx global>{`
                    .markdown-preview h1, .markdown-preview h2, .markdown-preview h3, .markdown-preview h4, .markdown-preview h5, .markdown-preview h6 { color: var(--primary-green); margin-bottom: 0.5em; margin-top: 1em; }
                    .markdown-preview strong, .markdown-preview b { color: var(--accent-gold); }
                    .markdown-preview ul, .markdown-preview ol { color: #E0E0E0; margin-left: 1.5em; }
                    .markdown-preview li { margin-bottom: 0.25em; }
                    .markdown-preview p { margin-bottom: 0.5em; color: #E0E0E0; }
                    .markdown-preview code { background-color: #2a2a2a; padding: 0.2em 0.4em; border-radius: 3px; font-size: 85%; color: #E0E0E0; }
                    .markdown-preview pre > code { padding: 1em; display: block; overflow-x: auto;}
                    .markdown-preview blockquote { border-left: 3px solid var(--border-color); padding-left: 1em; margin-left: 0; color: #B0B0B0; font-style: italic; }
                    /* Attempt to style numbers - this is very basic and might not catch all cases or differentiate +/- */
                    .markdown-preview p :global(> span[data-number]) { color: #60a5fa; /* Light blue for numbers */ }
                  `}</style>
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    className="markdown-preview"
                    components={{
                      p: ({ node, ...props }) => {
                        // Basic attempt to wrap numbers for styling, very naive
                        const children = React.Children.toArray(props.children).map((child) => {
                          if (typeof child === "string") {
                            return child.replace(/(\b\d+(\.\d+)?%?\b)/g, "<span data-number>$1</span>")
                          }
                          return child
                        })
                        // This is a hack and not robust for complex markdown or security.
                        // For proper styling, a more sophisticated AST manipulation or custom renderer is needed.
                        // For now, we'll rely on the global styles for basic elements.
                        return <p {...props} />
                      },
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
