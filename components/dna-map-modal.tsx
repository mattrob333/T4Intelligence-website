"use client"

import React from "react"
import { useEffect, useState, useRef } from "react"
import { X, Users, Copy, Check } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { CustomButton } from "@/components/ui/custom-button"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { cn } from "@/lib/utils"

// Hardcoded foundation sample content
const foundationSampleContent = `# FOUNDATION™ INTELLIGENCE BLUEPRINT - GLOBAL PARTS MANUFACTURING INC.

---
title: "Foundation Intelligence Blueprint"
source: "Tier 4 Intelligence AI Executive Team"
owner: "intel@tier4.ai"
agent_scope: ["shared"]
created: "2025-06-18"
tags: ["foundation", "executive", "client-sample"]
---

## EXECUTIVE OVERVIEW

**ORGANIZATION:** Global Parts Manufacturing Inc.  
**ANNUAL REVENUE:** $150M  
**EMPLOYEES:** 450  
**FOUNDATION STATUS:** Demo Mode (14 Public Intel Files Active)  
**AI EXECUTIVE TEAM:** ATLAS • NAVIGATOR • MAESTRO • CATALYST  
**TIME TO FULL DEPLOYMENT:** 48 hours post-engagement

---

## 1. SHARED CONTEXT REPOSITORY
*Core intelligence accessible by all AI executives*

### 1.1 Organization Profile [✓ COMPLETE]
\`\`\`
├─ company_overview.md         → Market position, value proposition
├─ org_chart_executive.md      → C-suite structure from LinkedIn
├─ product_portfolio.md        → 12 product lines mapped
├─ public_financials.md        → Revenue estimates from Crunchbase
└─ industry_positioning.md     → Competitive landscape overview
\`\`\`

### 1.2 Pending Internal Context [ AWAITING ACCESS]
\`\`\`
├─ core_process_map.md         → Your actual workflows
├─ revenue_breakdown.md        → Product/region performance
├─ strategic_priorities.md     → Board-level objectives
└─ organizational_culture.md   → Team dynamics & values
\`\`\`

---

## 2. AI EXECUTIVE INTELLIGENCE MODULES

### 2.1 ATLAS - Strategic Intelligence Officer
*"I see opportunities your competitors miss"*

**CURRENT KNOWLEDGE BASE:**
\`\`\`
/ATLAS/
├─ market_landscape/
│  ├─ [✓] automotive_parts_trends_2025.md
│  ├─ [✓] supply_chain_disruption_analysis.md
│  └─ [✓] regulatory_changes_impact.md
├─ competitors/
│  ├─ [✓] top_5_competitor_analysis.md
│  ├─ [✓] pricing_strategy_comparison.md
│  └─ [✓] market_share_movements.md
└─ opportunities/
   ├─ [✓] emerging_markets_assessment.md
   └─ [✓] m&a_target_preliminary_list.md
\`\`\`

**SAMPLE INSIGHT:** "Based on competitor pricing movements and supply chain analysis, there's a 6-month window to capture 15% market share in the Southeast region before others adjust."

### 2.2 NAVIGATOR - Operations Excellence Officer
*"I optimize what you have before adding what you don't need"*

**CURRENT KNOWLEDGE BASE:**
\`\`\`
/NAVIGATOR/
├─ performance_metrics/
│  ├─ [✓] public_efficiency_benchmarks.md
│  ├─ [✓] glassdoor_operational_insights.md
│  └─ [ ] actual_kpi_dashboard.md [PENDING]
├─ growth_levers/
│  ├─ [✓] pricing_optimization_model.md
│  └─ [✓] customer_expansion_patterns.md
└─ process_intelligence/
   ├─ [✓] industry_best_practices.md
   └─ [ ] internal_sop_library.md [PENDING]
\`\`\`

**SAMPLE INSIGHT:** "Your job postings indicate 40% time spent on manual inventory reconciliation. Industry leaders automated this 18 months ago, saving $400K annually."

### 2.3 MAESTRO - Technology & Integration Officer
*"I connect your systems so they sing in harmony"*

**CURRENT KNOWLEDGE BASE:**
\`\`\`
/MAESTRO/
├─ tech_architecture/
│  ├─ [✓] public_tech_stack_analysis.md
│  ├─ [✓] integration_opportunities.md
│  └─ [ ] actual_system_diagram.md [PENDING]
├─ talent_intelligence/
│  ├─ [✓] skills_gap_assessment.md
│  ├─ [✓] hiring_pattern_analysis.md
│  └─ [✓] automation_readiness_score.md
└─ automation_candidates/
   ├─ [✓] top_10_quick_wins.md
   └─ [ ] detailed_automation_roadmap.md [PENDING]
\`\`\`

**SAMPLE INSIGHT:** "Your NetSuite-Salesforce integration gap costs 3 hours daily in duplicate entry. A simple API bridge returns $180K yearly in recovered productivity."

### 2.4 CATALYST - Change & Adoption Officer
*"I ensure your people embrace the future, not fear it"*

**CURRENT KNOWLEDGE BASE:**
\`\`\`
/CATALYST/
├─ market_perception/
│  ├─ [✓] customer_sentiment_analysis.md
│  ├─ [✓] employee_review_insights.md
│  └─ [✓] brand_perception_tracking.md
├─ change_readiness/
│  ├─ [✓] cultural_indicators.md
│  └─ [ ] team_readiness_assessment.md [PENDING]
└─ adoption_strategies/
   ├─ [✓] industry_change_benchmarks.md
   └─ [ ] custom_adoption_playbook.md [PENDING]
\`\`\`

**SAMPLE INSIGHT:** "Your Glassdoor reviews show 87% employee pride in product quality but frustration with 'outdated systems.' This is ideal soil for automation adoption - they want the tools."

---

## 3. IMMEDIATE DEMONSTRATION CAPABILITIES

**Ask Your AI Executives Today:**

**To ATLAS:** "What market opportunity should we pursue in the next 90 days?"
**To NAVIGATOR:** "Where are we leaving money on the table operationally?"
**To MAESTRO:** "What's our fastest path to automation ROI?"
**To CATALYST:** "How do we get our team excited about AI, not threatened?"

---

## 4. FOUNDATION ACTIVATION TIMELINE

### Pre-Engagement (NOW)
- ✓ 14 strategic intelligence files collected
- ✓ AI executives trained on public data
- ✓ Initial insights & recommendations ready
- ✓ Demo conversations available

### Week 1 Post-Engagement
- [ ] Internal data access granted
- [ ] 30-minute discovery calls with key leaders
- [ ] Tribal knowledge capture sessions
- [ ] Private Foundation repository created

### Week 2-4
- [ ] Full AI executive team activation
- [ ] First automation pilots launched
- [ ] Weekly strategic insights delivered
- [ ] ROI tracking dashboard live

---

## 5. EXPECTED OUTCOMES

### 90-Day Metrics
| Metric | Baseline | Target | Method |
|--------|----------|--------|---------|
| Strategic Clarity | Ad-hoc | Weekly AI insights | ATLAS reports |
| Process Efficiency | Unknown | +40% | NAVIGATOR optimization |
| System Integration | 3/10 connected | 8/10 connected | MAESTRO orchestration |
| Team Adoption | 0% | 85% | CATALYST programs |

### 12-Month Value Creation
- **Cost Savings:** $1.2M (automation + efficiency)
- **Revenue Growth:** $3.5M (new opportunities + optimization)
- **Time Saved:** 4,800 hours (returned to strategic work)
- **Competitive Edge:** 18-month advantage via AI executive team

---

## YOUR AI EXECUTIVE TEAM IS READY

This preview shows your AI executives operating at 20% capacity using only public intelligence.

**Imagine them at 100% with your full Foundation™ activated.**

Ready to give your AI executives the complete intelligence they need?

**[BUILD YOUR FOUNDATION →]**

---

*Note: This sample uses publicly available data. Your private Foundation™ will include proprietary intelligence, internal processes, and strategic plans accessible only to your organization.*`;

interface FoundationModalProps {
  isOpen: boolean
  onClose: () => void
  markdownContent?: string
}

const FoundationModal: React.FC<FoundationModalProps> = ({ 
  isOpen, 
  onClose, 
  markdownContent = foundationSampleContent // Use the hardcoded markdown as default
}) => {
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

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(markdownContent)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  const handleBuildFoundationClick = () => {
    onClose()
    const ctaButton = document.getElementById("main-cta-foundation")
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
          onClick={onClose}
        >
          <motion.div
            ref={modalRef}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-secondary-black border border-border-color rounded-card w-full max-w-[900px] max-h-[90vh] flex flex-col overflow-hidden md:rounded-[16px]"
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 md:p-8 border-b border-border-color flex-shrink-0">
              <h2 className="text-2xl md:text-[28px] font-bold text-text-primary">Foundation™ Intelligence Blueprint</h2>
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
                  <Users size={24} className="text-primary-green mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-text-primary mb-2 text-lg">🤖 Your AI Executive Team</h3>
                    <p className="text-text-secondary text-sm leading-relaxed whitespace-pre-line">
                      {`Your Foundation™ powers a team of four specialized AI executives who work 24/7 to transform your business. Each executive has their own intelligence repository, continuously learning and adapting to deliver targeted insights.

Meet your AI C-Suite:
• ATLAS - Strategic Intelligence Officer (market opportunities & threats)
• NAVIGATOR - Operations Excellence Officer (performance & optimization)  
• MAESTRO - Technology Integration Officer (systems & automation)
• CATALYST - Change & Adoption Officer (transformation & culture)

This blueprint shows how we organize your business intelligence to give these executives the context they need to drive real results.`}
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
                      code: ({ node, inline, className, children, ...props }: any) => {
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
            <div className="p-6 md:p-8 border-t border-border-color flex-shrink-0 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-text-secondary text-xs md:text-sm text-center md:text-left">
                This sample shows your AI executives at 20% capacity. Activate your full Foundation™ to unlock their complete potential.
              </p>
              <CustomButton variant="primary" size="default" onClick={handleBuildFoundationClick}>
                Build Your Foundation™
              </CustomButton>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default FoundationModal