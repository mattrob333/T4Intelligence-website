"use client"

import React, { useEffect, useState, useRef } from "react"
import { X, Copy, Check, Target } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { CustomButton } from "@/components/ui/custom-button"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
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

  // Custom renderers for ReactMarkdown
  const renderers = {
    h1: ({ node, ...props }: any) => <h1 className="text-primary-green mb-2 mt-4 text-2xl font-bold" {...props} />,
    h2: ({ node, ...props }: any) => <h2 className="text-primary-green mb-2 mt-4 text-xl font-bold" {...props} />,
    h3: ({ node, ...props }: any) => <h3 className="text-primary-green mb-1 mt-3 text-lg font-semibold" {...props} />,
    strong: ({ node, ...props }: any) => <strong className="text-accent-gold" {...props} />,
    p: ({ node, children, ...props }: any) => {
      const processChildren = (childArray: React.ReactNode[]): React.ReactNode[] => {
        return childArray.map((child, index) => {
          if (typeof child === "string") {
            let processedString = child
            // Dollar amounts
            processedString = processedString.replace(/(\$\d[\d,.]*M?)/g, '<span class="text-primary-green">$1</span>')
            // Percentages (savings/positive)
            processedString = processedString.replace(
              /(\d[\d,.]*%\s*(return|savings|identified|complete|CONFIDENCE|CONFIDENCE LEVEL))/gi,
              '<span class="text-primary-green">$1</span>',
            )
            // Percentages (costs/negative or neutral)
            processedString = processedString.replace(
              /(\d[\d,.]*%\s*(downtime|waste|of production time))/gi,
              '<span class="text-accent-red">$1</span>',
            )
            // General percentages not caught above
            processedString = processedString.replace(
              /(\b\d[\d,.]*%)(?!<\/span>)/g,
              '<span class="text-text-secondary">$1</span>',
            )

            // Status indicators
            processedString = processedString.replace(
              /✅/g,
              '<span class="text-primary-green inline-flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-check-circle mr-1"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></span>',
            )
            processedString = processedString.replace(
              /⚠️/g,
              '<span class="text-accent-gold inline-flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-alert-triangle mr-1"><path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" x2="12" y1="9" y2="13"/><line x1="12" x2="12.01" y1="17" y2="17"/></svg></span>',
            )
            processedString = processedString.replace(
              /❌/g,
              '<span class="text-accent-red inline-flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-x-circle mr-1"><circle cx="12" cy="12" r="10"/><line x1="15" x2="9" y1="9" y2="15"/><line x1="9" x2="15" y1="9" y2="15"/></svg></span>',
            )

            return <span key={index} dangerouslySetInnerHTML={{ __html: processedString }} />
          }
          if (React.isValidElement(child) && child.props && child.props.children) {
            // @ts-ignore
            return React.cloneElement(child, {
              ...child.props,
              children: processChildren(React.Children.toArray(child.props.children)),
            })
          }
          return child
        })
      }
      return (
        <p className="mb-2 text-text-secondary" {...props}>
          {processChildren(React.Children.toArray(children))}
        </p>
      )
    },
    li: ({ node, ...props }: any) => <li className="mb-1 ml-4 text-text-secondary" {...props} />,
    ul: ({ node, ...props }: any) => <ul className="list-disc list-inside mb-2" {...props} />,
    ol: ({ node, ...props }: any) => <ol className="list-decimal list-inside mb-2" {...props} />,
    code: ({ node, inline, className, children, ...props }: any) => {
      const match = /language-(\w+)/.exec(className || "")
      return !inline && match ? (
        // This part is for fenced code blocks, which we don't have in the sample.
        // Keeping it for completeness but it won't be used for this markdown.
        <pre className="bg-black p-4 rounded-md overflow-x-auto" {...props}>
          <code className={cn(className, "text-sm")}>{String(children).replace(/\n$/, "")}</code>
        </pre>
      ) : (
        <code className="bg-neutral-700 text-neutral-300 px-1 py-0.5 rounded text-sm" {...props}>
          {children}
        </code>
      )
    },
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
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    className="blueprint-markdown-preview"
                    components={renderers}
                  >
                    {markdownContent}
                  </ReactMarkdown>
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
