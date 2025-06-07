"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  X,
  Dna,
  Target,
  Bot,
  Clipboard,
  Search,
  BrainCircuit,
  ShieldCheck,
  TrendingUp,
  Users,
  FileText,
  CalendarClock,
  BarChart3,
  CheckCircle,
  Phone,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { CustomButton } from "@/components/ui/custom-button"

interface ProcessExplainerModalProps {
  isOpen: boolean
  onClose: () => void
}

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "phase1", label: "Phase 1: DNA Mapping" },
  { id: "phase2", label: "Phase 2: Goldmine" },
  { id: "phase3", label: "Phase 3: AI Team" },
  { id: "results", label: "Results & Guarantee" },
]

const SectionHeader = ({ children }: { children: React.ReactNode }) => (
  <h3 className="pl-5 text-2xl md:text-3xl font-bold text-white border-l-4 border-primary-green mb-4">{children}</h3>
)

const WeekBlock = ({
  week,
  title,
  icon: Icon,
  children,
}: {
  week: string
  title: string
  icon: React.ElementType
  children: React.ReactNode
}) => (
  <div className="bg-[#151515] border border-border-color rounded-xl p-6 mb-5">
    <div className="flex items-center mb-3">
      <Icon className="h-6 w-6 text-primary-green mr-3" />
      <h4 className="text-xl font-semibold text-primary-green">
        {week}: {title}
      </h4>
    </div>
    {children}
  </div>
)

const WhatYouGet = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-[#1A1A1A] border-l-4 border-accent-gold rounded-r-lg p-4 my-4">
    <p className="font-semibold text-white mb-2">What You Get:</p>
    <div className="text-text-secondary text-sm space-y-1">{children}</div>
  </div>
)

const RealExample = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-primary-green/5 border border-primary-green/20 rounded-lg p-4 my-4">
    <p className="italic text-primary-green/80 text-sm">{children}</p>
  </div>
)

const OverviewTab = () => (
  <div className="space-y-8">
    <SectionHeader>How We Turn Business Chaos Into AI-Powered Clarity</SectionHeader>
    <p className="text-body-large text-text-secondary">
      The exact methodology we use to guarantee your AI actually makes money. While others guess, we map. While others
      hope, we measure. While others disappoint, we deliver.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      <div className="bg-[#151515] border border-border-color rounded-xl p-6">
        <Dna className="h-8 w-8 text-primary-green mb-3" />
        <h4 className="text-xl font-bold text-white mb-2">Business DNA Map™ Technology</h4>
        <p className="text-text-secondary">
          Your AI doesn't just know about AI - it knows about YOUR business. Your Business DNA Map™ captures tribal
          knowledge, understands your specific processes, and continuously learns.
        </p>
      </div>
      <div className="bg-[#151515] border border-border-color rounded-xl p-6">
        <Search className="h-8 w-8 text-primary-green mb-3" />
        <h4 className="text-xl font-bold text-white mb-2">AI-Guided Discovery</h4>
        <p className="text-text-secondary">
          We don't guess what questions to ask - our AI tells us. No generic frameworks, just targeted questions for
          faster, deeper insights.
        </p>
      </div>
      <div className="bg-[#151515] border border-border-color rounded-xl p-6">
        <BarChart3 className="h-8 w-8 text-primary-green mb-3" />
        <h4 className="text-xl font-bold text-white mb-2">ROI-First Approach</h4>
        <p className="text-text-secondary">
          Every recommendation comes with math to prove it. We model financial impact, calculate risk-adjusted ROI, and
          provide clear payback timelines.
        </p>
      </div>
      <div className="bg-[#151515] border border-border-color rounded-xl p-6">
        <CalendarClock className="h-8 w-8 text-primary-green mb-3" />
        <h4 className="text-xl font-bold text-white mb-2">Rapid Implementation</h4>
        <p className="text-text-secondary">
          From insight to implementation in 90 days, not 18 months. We use pre-built frameworks and proven change
          management to accelerate delivery.
        </p>
      </div>
    </div>
  </div>
)

const Phase1Tab = () => (
  <div className="space-y-4">
    <SectionHeader>Phase 1: MAP YOUR BUSINESS DNA (Weeks 1-4)</SectionHeader>
    <p className="text-text-secondary text-lg -mt-3 mb-6 pl-6">
      We study your business like scholars preparing for a dissertation.
    </p>
    <WeekBlock week="Week 1" title="The Deep Dive Discovery" icon={Search}>
      <ul className="list-disc list-inside text-text-secondary space-y-2">
        <li>
          <span className="font-semibold text-white">Strategic Assessment:</span> We study everything public about your
          business before we even meet.
        </li>
        <li>
          <span className="font-semibold text-white">Stakeholder Interviews:</span> AI-guided conversations with your
          key people (30 mins each).
        </li>
        <li>
          <span className="font-semibold text-white">Shadow Key Processes:</span> We observe how work actually flows,
          not the org chart version.
        </li>
        <li>
          <span className="font-semibold text-white">System Audit:</span> Map every software, integration, and data
          source.
        </li>
      </ul>
      <WhatYouGet>
        <p>Current state analysis with bottleneck identification.</p>
        <p>Process flow documentation that captures "how things really work".</p>
        <p>System integration map showing what talks to what (and what doesn't).</p>
      </WhatYouGet>
      <RealExample>
        "We discovered a $150M manufacturer was losing $340K annually because their 'integrated' ERP and inventory
        systems weren't actually talking to each other. Orders were being double-entered manually across 3 systems."
      </RealExample>
    </WeekBlock>
    <WeekBlock week="Week 2" title="Tribal Knowledge Capture" icon={Users}>
      <ul className="list-disc list-inside text-text-secondary space-y-2">
        <li>
          <span className="font-semibold text-white">Knowledge Extraction:</span> Document the unwritten rules that make
          everything work.
        </li>
        <li>
          <span className="font-semibold text-white">Relationship Mapping:</span> Who knows what, who talks to whom,
          where expertise really lives.
        </li>
        <li>
          <span className="font-semibold text-white">Risk Assessment:</span> Identify knowledge that walks out the door
          when people retire.
        </li>
      </ul>
      <WhatYouGet>
        <p>A searchable tribal knowledge database.</p>
        <p>A risk assessment for critical knowledge gaps.</p>
      </WhatYouGet>
    </WeekBlock>
    <WeekBlock week="Week 3" title="Data & Systems Intelligence" icon={FileText}>
      <ul className="list-disc list-inside text-text-secondary space-y-2">
        <li>
          <span className="font-semibold text-white">Data Flow Analysis:</span> Where data lives, how it moves, where it
          gets stuck.
        </li>
        <li>
          <span className="font-semibold text-white">Integration Assessment:</span> What systems can connect, what needs
          bridges.
        </li>
        <li>
          <span className="font-semibold text-white">Performance Baseline:</span> Current metrics for everything we plan
          to improve.
        </li>
      </ul>
      <WhatYouGet>
        <p>A complete data architecture map.</p>
        <p>An integration readiness assessment and baseline metrics dashboard.</p>
      </WhatYouGet>
    </WeekBlock>
    <WeekBlock week="Week 4" title="Business DNA Map™ Construction" icon={BrainCircuit}>
      <ul className="list-disc list-inside text-text-secondary space-y-2">
        <li>
          <span className="font-semibold text-white">AI Knowledge Building:</span> All insights compiled into your
          Business DNA Map™.
        </li>
        <li>
          <span className="font-semibold text-white">Validation Sessions:</span> You review and confirm our
          understanding.
        </li>
        <li>
          <span className="font-semibold text-white">Opportunity Ranking:</span> Prioritized list of automation
          opportunities with ROI projections.
        </li>
      </ul>
      <WhatYouGet>
        <p className="font-bold">Your complete Business DNA Map™.</p>
      </WhatYouGet>
    </WeekBlock>
  </div>
)

const Phase2Tab = () => (
  <div className="space-y-4">
    <SectionHeader>Phase 2: FIND YOUR GOLDMINE (Weeks 5-8)</SectionHeader>
    <p className="text-text-secondary text-lg -mt-3 mb-6 pl-6">We identify exactly where AI will make you millions.</p>
    <WeekBlock week="Week 5" title="Automation Opportunity Analysis" icon={TrendingUp}>
      <ul className="list-disc list-inside text-text-secondary space-y-2">
        <li>
          <span className="font-semibold text-white">ROI Modeling:</span> Calculate exact savings for each automation
          opportunity.
        </li>
        <li>
          <span className="font-semibold text-white">Effort vs. Impact Matrix:</span> Quick wins vs. transformational
          projects.
        </li>
        <li>
          <span className="font-semibold text-white">Business Case Development:</span> Financial justification for each
          initiative.
        </li>
      </ul>
      <WhatYouGet>
        <p>Ranked list of opportunities with projected ROI.</p>
        <p>Implementation effort estimates and risk assessments.</p>
      </WhatYouGet>
      <RealExample>
        "For a $75M parts manufacturer, we identified 23 automation opportunities worth $3.2M annually. The top 5
        initiatives alone would pay for the entire engagement in 7.2 months."
      </RealExample>
    </WeekBlock>
    <WeekBlock week="Week 8" title="Implementation Blueprint Creation" icon={Clipboard}>
      <ul className="list-disc list-inside text-text-secondary space-y-2">
        <li>
          <span className="font-semibold text-white">Project Roadmap:</span> 90-day implementation timeline with
          milestones.
        </li>
        <li>
          <span className="font-semibold text-white">Business Case Finalization:</span> Complete ROI projections and
          risk mitigation.
        </li>
        <li>
          <span className="font-semibold text-white">Quick Wins Identification:</span> 30-day wins to build momentum.
        </li>
      </ul>
      <WhatYouGet>
        <p className="font-bold">Your AI Opportunity Blueprint with guaranteed ROI projections.</p>
      </WhatYouGet>
    </WeekBlock>
  </div>
)

const Phase3Tab = () => (
  <div className="space-y-4">
    <SectionHeader>Phase 3: DEPLOY YOUR AI TEAM (Weeks 9-12)</SectionHeader>
    <p className="text-text-secondary text-lg -mt-3 mb-6 pl-6">
      Launch AI that speaks your language and delivers results from day one.
    </p>
    <WeekBlock week="Week 9" title="AI System Configuration" icon={Bot}>
      <ul className="list-disc list-inside text-text-secondary space-y-2">
        <li>
          <span className="font-semibold text-white">System Integration:</span> Connect AI to your existing tools and
          workflows.
        </li>
        <li>
          <span className="font-semibold text-white">Quick Win Implementation:</span> Deploy first automation projects.
        </li>
        <li>
          <span className="font-semibold text-white">Dashboard Setup:</span> Real-time monitoring of AI performance and
          ROI.
        </li>
      </ul>
      <WhatYouGet>
        <p>Live AI advisory team trained on your business.</p>
        <p>First automation projects operational.</p>
      </WhatYouGet>
    </WeekBlock>
    <WeekBlock week="Week 12" title="Transition to Ongoing Success" icon={CheckCircle}>
      <ul className="list-disc list-inside text-text-secondary space-y-2">
        <li>
          <span className="font-semibold text-white">Success Validation:</span> Confirm achievement of projected
          outcomes.
        </li>
        <li>
          <span className="font-semibold text-white">Handoff to Internal Team:</span> Full ownership transfer with
          ongoing support plan.
        </li>
        <li>
          <span className="font-semibold text-white">Strategic Review Schedule:</span> Quarterly assessments and
          expansion planning.
        </li>
      </ul>
      <WhatYouGet>
        <p className="font-bold">A fully operational AI team + transition to an ongoing partnership.</p>
      </WhatYouGet>
    </WeekBlock>
  </div>
)

const ResultsTab = () => (
  <div className="space-y-8">
    <SectionHeader>Results & Guarantee</SectionHeader>
    <div className="relative bg-gradient-to-br from-primary-green/10 to-secondary-black border-2 border-primary-green rounded-2xl p-8 text-center">
      <div className="absolute top-4 right-4 bg-primary-green text-background text-xs font-bold px-3 py-1 rounded-full shadow-md">
        GUARANTEED
      </div>
      <ShieldCheck className="h-12 w-12 text-primary-green mx-auto mb-4" />
      <h4 className="text-2xl font-bold text-white mb-2">We're So Confident, We Guarantee Results</h4>
      <p className="text-text-secondary max-w-2xl mx-auto">
        If your AI implementation doesn't achieve the projected ROI within 12 months, we'll continue working at no
        charge until it does.
      </p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
      <div className="bg-[#151515] p-4 rounded-lg">
        <p className="text-3xl font-bold text-primary-green">4.2</p>
        <p className="text-sm text-text-secondary">Months to First ROI</p>
      </div>
      <div className="bg-[#151515] p-4 rounded-lg">
        <p className="text-3xl font-bold text-primary-green">94%</p>
        <p className="text-sm text-text-secondary">Exceed Projected Savings</p>
      </div>
      <div className="bg-[#151515] p-4 rounded-lg">
        <p className="text-3xl font-bold text-primary-green">100%</p>
        <p className="text-sm text-text-secondary">Pilot to Production Rate</p>
      </div>
      <div className="bg-[#151515] p-4 rounded-lg">
        <p className="text-3xl font-bold text-primary-green">847%</p>
        <p className="text-sm text-text-secondary">Average Year 1 ROI</p>
      </div>
    </div>

    <h4 className="text-2xl font-bold text-white pt-4">Real Results from Real Clients</h4>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-[#1A1A1A] border border-border-color rounded-xl p-6 hover:border-primary-green hover:-translate-y-1 transition-all">
        <p className="font-semibold text-primary-green mb-2">Manufacturing Client - $150M Revenue</p>
        <p className="text-text-secondary">
          <span className="text-red-400 font-medium">Challenge:</span> Manual processes consuming 2,300 hours/month.
        </p>
        <p className="text-text-secondary">
          <span className="text-teal-400 font-medium">Solution:</span> 8 AI automation implementations.
        </p>
        <p className="text-text-secondary">
          <span className="text-accent-gold font-medium">Result:</span> $2.8M annual savings, 67% process time
          reduction.
        </p>
      </div>
      <div className="bg-[#1A1A1A] border border-border-color rounded-xl p-6 hover:border-primary-green hover:-translate-y-1 transition-all">
        <p className="font-semibold text-primary-green mb-2">Financial Services - $85M AUM</p>
        <p className="text-text-secondary">
          <span className="text-red-400 font-medium">Challenge:</span> Client onboarding taking 14 days average.
        </p>
        <p className="text-text-secondary">
          <span className="text-teal-400 font-medium">Solution:</span> AI-powered document processing and workflow
          automation.
        </p>
        <p className="text-text-secondary">
          <span className="text-accent-gold font-medium">Result:</span> Onboarding reduced to 2.3 days, 34% client
          satisfaction increase.
        </p>
      </div>
    </div>
  </div>
)

export default function ProcessExplainerModal({ isOpen, onClose }: ProcessExplainerModalProps) {
  const [activeTab, setActiveTab] = useState(tabs[0].id)
  const modalRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
    }
    document.addEventListener("keydown", handleEsc)
    return () => document.removeEventListener("keydown", handleEsc)
  }, [onClose])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId)
    if (contentRef.current) {
      contentRef.current.scrollTop = 0
    }
  }

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return <OverviewTab />
      case "phase1":
        return <Phase1Tab />
      case "phase2":
        return <Phase2Tab />
      case "phase3":
        return <Phase3Tab />
      case "results":
        return <ResultsTab />
      default:
        return null
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
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
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-secondary-black border border-border-color rounded-2xl w-full max-w-6xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl shadow-primary-green/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 md:p-6 border-b border-border-color flex-shrink-0 bg-[#1A1A1A]">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-white">Our Proven 12-Week Process</h2>
                <p className="text-sm text-text-secondary hidden md:block">
                  How We Turn Business Chaos Into AI-Powered Clarity
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

            {/* Tabs */}
            <div className="flex-shrink-0 border-b border-border-color bg-[#151515] px-4 md:px-6 overflow-x-auto">
              <nav className="flex space-x-1 md:space-x-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => handleTabClick(tab.id)}
                    className={cn(
                      "px-3 py-4 text-sm font-medium transition-colors whitespace-nowrap",
                      activeTab === tab.id
                        ? "text-background bg-primary-green shadow-md shadow-primary-green/20"
                        : "text-text-secondary hover:bg-border-color hover:text-white",
                      "rounded-t-md",
                    )}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Content */}
            <div ref={contentRef} className="p-6 md:p-8 overflow-y-auto flex-grow">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {renderContent()}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Footer */}
            <div className="flex-shrink-0 p-4 md:p-6 border-t border-border-color bg-[#151515] flex flex-col md:flex-row items-center justify-center gap-4">
              <CustomButton
                variant="primary"
                size="default"
                onClick={() => {
                  onClose()
                  window.location.href = "/book-call"
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
                  window.location.href = "/book-call"
                }}
              >
                <Phone className="mr-2 h-5 w-5" />
                Schedule Strategic Consultation
              </CustomButton>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
