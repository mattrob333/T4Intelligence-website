"use client"

import { useEffect, useState, useRef } from "react"
import { X, Copy, Check, Target } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
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

  // Create a safe markdown renderer to handle React 19 compatibility
  const MarkdownRenderer = ({ content }: { content: string }) => {
    try {
      return (
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {content}
        </ReactMarkdown>
      );
    } catch (error) {
      console.error('Markdown rendering error:', error);
      return <div dangerouslySetInnerHTML={{ __html: content }} />;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-2 sm:p-4"
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
            className="bg-[#0A0A0A] border border-[#2A2A2A] rounded-[12px] sm:rounded-[16px] w-full max-w-[95vw] sm:max-w-[900px] max-h-[95vh] sm:max-h-[90vh] flex flex-col overflow-hidden"
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 md:p-8 border-b border-[#2A2A2A] flex-shrink-0">
              <div className="flex-1 min-w-0">
                <h2 className="text-lg sm:text-xl md:text-[28px] font-bold text-white truncate">Real Client Build Blueprint</h2>
                <p className="text-xs sm:text-sm md:text-base text-[#B0B0B0]">Confidential - Names Changed for Privacy</p>
              </div>
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="text-[#B0B0B0] hover:text-white transition-colors ml-2 flex-shrink-0"
              >
                <X size={20} className="sm:hidden" />
                <X size={24} className="hidden sm:block" />
              </button>
            </div>

            {/* Modal Content Area (Scrollable) */}
            <div className="p-4 sm:p-6 md:p-8 overflow-y-auto flex-grow">
              {/* Explanation Section */}
              <div className="bg-[#1A1A1A] border border-primary-green rounded-[8px] sm:rounded-[12px] p-4 sm:p-6 mb-4 sm:mb-6">
                <div className="flex items-start">
                  <Target size={24} className="text-primary-green mr-3 sm:mr-4 flex-shrink-0 mt-1 sm:w-7 sm:h-7" />
                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-white mb-2 text-base sm:text-lg">🎯 Real Results, Real Client</h3>
                    <div className="text-[#B0B0B0] text-xs sm:text-sm leading-relaxed space-y-2">
                      <p>
                        This is an actual Build Blueprint delivered to a $75M manufacturing client in 2024.
                        We've anonymized company details but preserved all metrics and recommendations. This blueprint
                        was generated in 10 days and led to $3.2M in identified savings within 90 days of
                        implementation.
                      </p>
                      <p>What you're seeing:</p>
                      <ul className="list-disc list-inside pl-2 sm:pl-4 space-y-1">
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
                <div className="p-3 sm:p-6 text-xs sm:text-sm text-[#E0E0E0] leading-relaxed overflow-x-auto">
                  <style jsx global>{`
                    .blueprint-markdown {
                      color: #E0E0E0;
                      line-height: 1.6;
                    }
                    .blueprint-markdown h1, 
                    .blueprint-markdown h2, 
                    .blueprint-markdown h3, 
                    .blueprint-markdown h4, 
                    .blueprint-markdown h5, 
                    .blueprint-markdown h6 {
                      color: white;
                      margin-top: 1.5em;
                      margin-bottom: 0.5em;
                      line-height: 1.2;
                    }
                    .blueprint-markdown h1 { font-size: 1.8em; }
                    .blueprint-markdown h2 { font-size: 1.5em; }
                    .blueprint-markdown h3 { font-size: 1.3em; }
                    .blueprint-markdown p {
                      margin-bottom: 1em;
                      color: #B0B0B0;
                    }
                    .blueprint-markdown ul, 
                    .blueprint-markdown ol {
                      margin-left: 1.5em;
                      margin-bottom: 1em;
                    }
                    .blueprint-markdown li {
                      margin-bottom: 0.5em;
                    }
                    .blueprint-markdown strong, 
                    .blueprint-markdown b {
                      color: var(--accent-gold);
                    }
                    .blueprint-markdown hr {
                      border: none;
                      border-top: 1px solid #2A2A2A;
                      margin: 2em 0;
                    }
                    .blueprint-markdown table {
                      width: 100%;
                      border-collapse: collapse;
                      margin: 1.5em 0;
                    }
                    .blueprint-markdown th,
                    .blueprint-markdown td {
                      border: 1px solid #2A2A2A;
                      padding: 0.5em 1em;
                      text-align: left;
                    }
                    .blueprint-markdown th {
                      background-color: #1A1A1A;
                    }
                    .blueprint-markdown code {
                      background-color: #2A2A2A;
                      padding: 0.2em 0.4em;
                      border-radius: 3px;
                      font-family: monospace;
                      font-size: 0.9em;
                    }
                    .blueprint-markdown pre {
                      background-color: #1A1A1A;
                      padding: 1em;
                      border-radius: 4px;
                      overflow-x: auto;
                    }
                    .blueprint-markdown pre code {
                      background: none;
                      padding: 0;
                    }
                  `}</style>
                  <div className="blueprint-markdown">
                    <MarkdownRenderer content={processedContent} />
                  </div>
                </div>
                <button
                  onClick={handleCopy}
                  className={cn(
                    "absolute top-2 right-2 sm:top-3 sm:right-3 bg-[#1A1A1A] border border-primary-green rounded-md px-2 py-1 sm:px-3 sm:py-2 text-xs font-semibold transition-all duration-200 ease-in-out",
                    "text-primary-green hover:bg-primary-green hover:text-black focus:outline-none focus:ring-2 focus:ring-primary-green focus:ring-offset-2 focus:ring-offset-black",
                    "opacity-0 group-hover:opacity-100 focus:opacity-100 sm:opacity-0",
                  )}
                >
                  {isCopied ? (
                    <>
                      <Check size={14} className="inline mr-1 sm:w-4 sm:h-4" /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy size={14} className="inline mr-1 sm:w-4 sm:h-4" /> Copy
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-6 md:p-8 border-t border-[#2A2A2A] flex-shrink-0 flex flex-col items-center justify-between gap-3 sm:gap-4 sm:flex-row">
              <p className="text-[#B0B0B0] text-xs sm:text-sm text-center sm:text-left order-2 sm:order-1">
                Results vary. Your blueprint will identify opportunities specific to your business.
              </p>
              <CustomButton 
                variant="primary" 
                size="default" 
                onClick={handleGetBlueprintClick}
                className="w-full sm:w-auto order-1 sm:order-2"
              >
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
