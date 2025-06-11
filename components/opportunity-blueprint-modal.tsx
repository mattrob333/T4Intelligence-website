"use client"

import { useEffect, useState, useRef } from "react"
import { X, Copy, Check, Target } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { CustomButton } from "@/components/ui/custom-button"
import { cn } from "@/lib/utils"

interface BlueprintModalProps {
  isOpen: boolean
  onClose: () => void
  markdownContent: string
}

const OpportunityBlueprintModal: React.FC<BlueprintModalProps> = ({ isOpen, onClose, markdownContent }) => {
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
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.removeEventListener("keydown", handleEsc)
      document.body.style.overflow = "auto"
    }
  }, [isOpen, onClose])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(markdownContent)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  const handleGetBlueprintClick = () => {
    onClose()
    const ctaButton = document.getElementById("opportunity-blueprint-cta")
    if (ctaButton) {
      ctaButton.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Process markdown content with our custom formatting
  const processMarkdown = (content: string): string => {
    // Process dollar amounts
    content = content.replace(/(\$\d[\d,.]*M?)/g, '<span class="text-primary-green">$1</span>');
    
    // Process percentages (savings/positive)
    content = content.replace(
      /(\d[\d,.]*%\s*(return|savings|identified|complete|CONFIDENCE|CONFIDENCE LEVEL))/gi,
      '<span class="text-primary-green">$1</span>'
    );
    
    // Process percentages (costs/negative or neutral)
    content = content.replace(
      /(\d[\d,.]*%\s*(downtime|waste|of production time))/gi,
      '<span class="text-accent-red">$1</span>'
    );
    
    // Process general percentages not caught above
    content = content.replace(
      /(\b\d[\d,.]*%)(?!<\/span>)/g,
      '<span class="text-text-secondary">$1</span>'
    );
    
    // Process status indicators
    content = content.replace(
      /✅/g,
      '<span class="text-primary-green inline-flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-check-circle mr-1"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></span>'
    );
    
    content = content.replace(
      /⚠️/g,
      '<span class="text-accent-gold inline-flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-alert-triangle mr-1"><path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" x2="12" y1="9" y2="13"/><line x1="12" x2="12.01" y1="17" y2="17"/></svg></span>'
    );
    
    content = content.replace(
      /❌/g,
      '<span class="text-accent-red inline-flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-x-circle mr-1"><circle cx="12" cy="12" r="10"/><line x1="15" x2="9" y1="9" y2="15"/><line x1="9" x2="15" y1="9" y2="15"/></svg></span>'
    );
    
    return content;
  };
  
  // Process the markdown content before passing it to ReactMarkdown
  const processedContent = processMarkdown(markdownContent);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 md:p-0"
          onClick={onClose}
          aria-modal="true"
          role="dialog"
        >
          <motion.div
            ref={modalRef}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-[#0A0A0A] border border-[#2A2A2A] rounded-[16px] w-full max-w-[900px] max-h-[90vh] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 md:p-8 border-b border-[#2A2A2A] flex-shrink-0">
              <div>
                <h2 className="text-xl md:text-[28px] font-bold text-white">Real Client AI Opportunity Blueprint</h2>
                <p className="text-sm md:text-base text-[#B0B0B0]">Confidential - Names Changed for Privacy</p>
              </div>
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="text-[#B0B0B0] hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Content Area (Scrollable) */}
            <div className="p-6 md:p-8 overflow-y-auto flex-grow">
              {/* Explanation Section */}
              <div className="bg-[#1A1A1A] border border-primary-green rounded-[12px] p-6 mb-6">
                <div className="flex items-start">
                  <Target size={28} className="text-primary-green mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-white mb-2 text-lg">🎯 Real Results, Real Client</h3>
                    <div className="text-[#B0B0B0] text-sm leading-relaxed space-y-2">
                      <p>
                        This is an actual AI Opportunity Blueprint delivered to a $75M manufacturing client in 2024.
                        We've anonymized company details but preserved all metrics and recommendations. This blueprint
                        was generated in 10 days and led to $3.2M in identified savings within 90 days of
                        implementation.
                      </p>
                      <p>What you're seeing:</p>
                      <ul className="list-disc list-inside pl-4">
                        <li>Exact format delivered to C-suite executives</li>
                        <li>Real ROI calculations and timelines</li>
                        <li>Actual automation opportunities identified</li>
                        <li>Implementation roadmap that was successfully executed</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Code Block Container */}
              <div className="bg-black border border-[#2A2A2A] rounded-lg relative group">
                <div className="p-6 font-mono text-sm text-[#E0E0E0] leading-relaxed overflow-x-auto">
                  <style jsx global>{`
                    .blueprint-markdown-preview strong, .blueprint-markdown-preview b { color: var(--accent-gold); }
                    .blueprint-markdown-preview ul, .blueprint-markdown-preview ol { color: #E0E0E0; margin-left: 1.5em; }
                    .blueprint-markdown-preview li { margin-bottom: 0.25em; }
                    .blueprint-markdown-preview p { margin-bottom: 0.5em; color: #B0B0B0; } /* Default p color */
                    .blueprint-markdown-preview code { background-color: #2a2a2a; padding: 0.2em 0.4em; border-radius: 3px; font-size: 85%; color: #E0E0E0; }
                    .blueprint-markdown-preview hr { border-color: #2A2A2A; margin-top: 1em; margin-bottom: 1em;}

                    /* Specific text styling */
                    .blueprint-markdown-preview .text-primary-green { color: var(--primary-green) !important; }
                    .blueprint-markdown-preview .text-accent-gold { color: var(--accent-gold) !important; }
                    .blueprint-markdown-preview .text-accent-red { color: #FF6B6B !important; } /* Red for costs/negative percentages */
                    .blueprint-markdown-preview .text-text-secondary { color: #B0B0B0 !important; } /* For general percentages or less emphasized text */
                  `}</style>
                  <div 
                    className="blueprint-markdown-preview" 
                    dangerouslySetInnerHTML={{ 
                      __html: processedContent 
                    }} 
                  />
                </div>
                <button
                  onClick={handleCopy}
                  className={cn(
                    "absolute top-3 right-3 bg-[#1A1A1A] border border-primary-green rounded-md px-3 py-2 text-xs md:text-sm font-semibold transition-all duration-200 ease-in-out",
                    "text-primary-green hover:bg-primary-green hover:text-black focus:outline-none focus:ring-2 focus:ring-primary-green focus:ring-offset-2 focus:ring-offset-black",
                    "opacity-0 group-hover:opacity-100 focus:opacity-100",
                  )}
                >
                  {isCopied ? (
                    <>
                      <Check size={16} className="inline mr-1" /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy size={16} className="inline mr-1" /> Copy Blueprint
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 md:p-8 border-t border-[#2A2A2A] flex-shrink-0 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-[#B0B0B0] text-xs md:text-sm text-center md:text-left">
                Results vary. Your blueprint will identify opportunities specific to your business.
              </p>
              <CustomButton variant="primary" size="default" onClick={handleGetBlueprintClick}>
                Get Your Custom Blueprint
              </CustomButton>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default OpportunityBlueprintModal
