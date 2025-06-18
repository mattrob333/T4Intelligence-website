"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, ArrowRight, CheckCircle, Layers, GitBranch, Database, BrainCircuit, Code2, ShieldCheck, Target, Lightbulb, Cog, BookOpen, TrendingUp, BarChart3, Cpu, Users } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProcessExplainerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface TabButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const TabButton = ({ label, isActive, onClick }: TabButtonProps) => (
  <button
    onClick={onClick}
    className={cn(
      "px-6 py-4 text-sm sm:text-base font-medium border-b-2 transition-colors duration-200 ease-in-out focus:outline-none",
      isActive
        ? "border-primary-green text-primary-green"
        : "border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-500"
    )}
  >
    {label}
  </button>
);

interface StepCardProps {
  number: string;
  title: string;
  timeline: string;
  description: string;
  highlights: string[];
  icon?: React.ElementType;
}

const StepCard = ({ number, title, timeline, description, highlights, icon: HighlightIcon }: StepCardProps) => (
  <div className="bg-gradient-to-br from-[#2a2a2a] to-[#1e1e1e] border border-[#333] rounded-xl p-6 sm:p-8 transition-all duration-300 hover:border-primary-green hover:shadow-lg hover:shadow-primary-green/10 hover:-translate-y-1">
    <div className="flex items-center mb-5">
      <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-green to-[#00cc6a] text-black text-xl sm:text-2xl font-extrabold rounded-lg mr-4">
        {number}
      </div>
      <div>
        <h3 className="text-lg sm:text-xl font-bold text-white">{title}</h3>
        <div className="text-xs sm:text-sm text-primary-green font-semibold mt-1">{timeline}</div>
      </div>
    </div>
    <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-5">{description}</p>
    <ul className="space-y-2">
      {highlights.map((highlight, index) => (
        <li key={index} className="flex items-start text-xs sm:text-sm text-gray-400">
          {HighlightIcon ? (
            <HighlightIcon className="w-4 h-4 mr-2 mt-0.5 text-primary-green flex-shrink-0" />
          ) : (
            <span className="text-primary-green mr-2 mt-0.5 flex-shrink-0">▶</span>
          )}
          {highlight}
        </li>
      ))}
    </ul>
  </div>
);

const ProcessTabContent = () => (
  <div className="space-y-10">
    <div className="text-center max-w-3xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
        Building Your <span className="text-primary-green">Foundation™</span> in Three Phases
      </h2>
      <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
        We don't deploy generic AI. We build a Foundation™ - a living intelligence system powered by four specialized AI executives who understand your unique business context, processes, and strategic objectives.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
      <StepCard
        number="01"
        title="PUBLIC INTELLIGENCE COLLECTION"
        timeline="Pre-Engagement"
        description="Before our first meeting, your AI executives begin studying your business. We gather public intelligence across multiple sources, building an initial knowledge base that demonstrates immediate value."
        highlights={[
          "Company data from Crunchbase, LinkedIn, and web presence",
          "Competitor analysis and market positioning research",
          "Industry trends and regulatory landscape mapping",
          "Technology stack analysis using BuiltWith and similar tools",
          "Customer sentiment from reviews and social media",
        ]}
      />
      <StepCard
        number="02"
        title="AI EXECUTIVE ACTIVATION"
        timeline="Week 1-2"
        description="Your four AI executives - ATLAS, NAVIGATOR, MAESTRO, and CATALYST - are trained on your business context. They generate targeted questions and identify the specific internal knowledge they need to maximize their effectiveness."
        highlights={[
          "Agent-specific knowledge repositories created",
          "AI-generated discovery questions for key stakeholders",
          "Initial strategic insights from public data analysis",
          "Workflow integration points identified",
          "Quick-win automation opportunities spotted",
        ]}
      />
      <StepCard
        number="03"
        title="FOUNDATION™ CONSTRUCTION"
        timeline="Week 3-4"
        description="We combine public intelligence with your internal knowledge to build your complete Foundation™. This becomes your proprietary asset - a dynamic intelligence system that continuously learns and adapts to drive your business forward."
        highlights={[
          "Internal process documentation captured",
          "Tribal knowledge codified and preserved",
          "Custom automation workflows deployed",
          "Real-time intelligence feeds established",
          "Continuous learning mechanisms activated",
        ]}
      />
    </div>
  </div>
);

const ArchitectureTabContent = () => (
  <div className="space-y-10">
    <div className="text-center max-w-3xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
        The <span className="text-primary-green">Foundation™</span> Technical Architecture
      </h2>
      <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
        Your Foundation™ is built on a modular, Google Drive-based architecture that's simple to maintain yet powerful enough to support sophisticated AI operations. No complex infrastructure required.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      <StepCard
        number="KB"
        title="Knowledge Base Structure"
        timeline="Core Repository"
        description="Organized Google Drive folders mirror your four AI executives' domains, with markdown files for easy editing and version control through Drive's native history."
        highlights={[
          "shared_context/ for company-wide intelligence",
          "ATLAS/ for strategic and market data",
          "NAVIGATOR/ for operational metrics",
          "MAESTRO/ for technical documentation",
          "CATALYST/ for change management assets",
        ]}
        icon={Database}
      />
      <StepCard
        number="AI"
        title="Agent Intelligence Layer"
        timeline="AI Processing"
        description="Each AI executive has specialized prompts and retrieval mechanisms, accessing their dedicated knowledge folders while sharing common context for holistic understanding."
        highlights={[
          "Agent-specific meta-prompts and personas",
          "YAML frontmatter for intelligent filtering",
          "Contextual retrieval based on agent scope",
          "Cross-agent collaboration protocols",
        ]}
        icon={BrainCircuit}
      />
      <StepCard
        number="INT"
        title="Integration Framework"
        timeline="Data Flow"
        description="Simple yet powerful integrations connect your Foundation™ to live data sources, ensuring your AI executives always have current intelligence."
        highlights={[
          "RSS feeds for market intelligence",
          "API connections to business systems",
          "Meeting transcription pipelines",
          "Document upload workflows",
        ]}
        icon={GitBranch}
      />
      <StepCard
        number="SEC"
        title="Security & Access"
        timeline="Data Protection"
        description="Leverages Google Workspace's enterprise security while maintaining granular access controls for different stakeholders and data sensitivity levels."
        highlights={[
          "Google Workspace security compliance",
          "Folder-level access permissions",
          "Audit trails and version history",
          "Encrypted data at rest and in transit",
        ]}
        icon={ShieldCheck}
      />
      <StepCard
        number="EVO"
        title="Evolution Engine"
        timeline="Continuous Learning"
        description="Your Foundation™ grows smarter over time through automated updates, new document ingestion, and feedback loops from your AI executives' interactions."
        highlights={[
          "Weekly intelligence updates",
          "Automated document classification",
          "Performance metric tracking",
          "Knowledge gap identification",
        ]}
        icon={Layers}
      />
      <StepCard
        number="API"
        title="Access & Interfaces"
        timeline="User Interaction"
        description="Multiple ways to interact with your AI executives, from simple chat interfaces to sophisticated workflow automations."
        highlights={[
          "Natural language query interface",
          "Scheduled report generation",
          "Slack/Teams integration options",
          "Custom dashboard creation",
        ]}
        icon={Code2}
      />
    </div>
  </div>
);

const AgentsTabContent = () => (
  <div className="space-y-10">
    <div className="text-center max-w-3xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
        Your <span className="text-primary-green">AI Executive Team</span>
      </h2>
      <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
        Four specialized AI executives work together as your virtual C-suite, each bringing unique expertise and perspective to transform your business. They collaborate, share insights, and drive coordinated action across all levels of your organization.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
      <StepCard
        number="🎯"
        title="ATLAS"
        timeline="Strategic Intelligence Officer"
        description="Your 30,000-foot strategist who spots opportunities others miss. ATLAS synthesizes market intelligence, competitive dynamics, and industry trends to guide transformative decisions."
        highlights={[
          "Market opportunity identification and sizing",
          "Competitive threat analysis and response strategies",
          "Industry trend forecasting and scenario planning",
          "M&A target identification and evaluation",
          "Strategic risk assessment and mitigation",
        ]}
        icon={TrendingUp}
      />
      <StepCard
        number="🧭"
        title="NAVIGATOR"
        timeline="Operations Excellence Officer"
        description="Your operational architect who turns vision into measurable outcomes. NAVIGATOR analyzes performance, identifies bottlenecks, and charts the course to operational excellence."
        highlights={[
          "KPI analysis and performance optimization",
          "Process efficiency mapping and improvement",
          "Resource allocation and capacity planning",
          "Go-to-market strategy refinement",
          "Revenue optimization and cost reduction",
        ]}
        icon={BarChart3}
      />
      <StepCard
        number="🎼"
        title="MAESTRO"
        timeline="Technology Integration Officer"
        description="Your systems orchestrator who makes everything work in harmony. MAESTRO identifies automation opportunities, manages technical integration, and ensures your tech stack sings."
        highlights={[
          "System integration and workflow automation",
          "Technical debt identification and resolution",
          "AI/ML opportunity assessment and deployment",
          "Data pipeline optimization and governance",
          "Technology roadmap development",
        ]}
        icon={Cpu}
      />
      <StepCard
        number="⚡"
        title="CATALYST"
        timeline="Change & Adoption Officer"
        description="Your transformation champion who ensures ideas become reality. CATALYST drives adoption, manages change, and maintains momentum throughout your AI journey."
        highlights={[
          "Change readiness assessment and planning",
          "Stakeholder engagement and communication",
          "Training program development and delivery",
          "Adoption metrics tracking and optimization",
          "Cultural transformation facilitation",
        ]}
        icon={Users}
      />
    </div>
  </div>
);

const tabsConfig = [
  { id: "process", label: "Building Your Foundation", component: ProcessTabContent },
  { id: "architecture", label: "Technical Architecture", component: ArchitectureTabContent },
  { id: "agents", label: "Your AI Executives", component: AgentsTabContent },
];

export const ProcessExplainerModal = ({ isOpen, onClose }: ProcessExplainerModalProps) => {
  const [activeTab, setActiveTab] = useState(tabsConfig[0].id);
  const modalRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<string | number>("auto");

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      if (modalRef.current && headerRef.current && footerRef.current) {
        const modalHeight = modalRef.current.clientHeight;
        const headerHeight = headerRef.current.offsetHeight;
        const footerHeight = footerRef.current.offsetHeight;
        const availableHeight = modalHeight - headerHeight - footerHeight - 2;
        setContentHeight(Math.max(200, availableHeight - 80));
      }
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  
  useEffect(() => {
    const calculateHeight = () => {
      if (isOpen && modalRef.current && headerRef.current && footerRef.current) {
        const modalHeight = modalRef.current.clientHeight;
        const headerHeight = headerRef.current.offsetHeight;
        const footerHeight = footerRef.current.offsetHeight;
        const availableHeight = modalHeight - headerHeight - footerHeight - 2; 
        setContentHeight(Math.max(200, availableHeight - 80));
      }
    };
    window.addEventListener('resize', calculateHeight);
    return () => window.removeEventListener('resize', calculateHeight);
  }, [isOpen]);

  if (!isOpen) return null;

  const ActiveTabContent = tabsConfig.find(tab => tab.id === activeTab)?.component || (() => null);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-2 sm:p-4">
        <motion.div
          ref={modalRef}
          initial={{ scale: 0.9, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 50 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] border border-[#333] rounded-2xl w-full max-w-4xl lg:max-w-6xl h-[95vh] sm:h-[90vh] flex flex-col overflow-hidden shadow-2xl shadow-primary-green/20"
        >
          {/* Header */}
          <div ref={headerRef} className="flex items-start justify-between p-5 sm:p-6 border-b border-[#333]">
            <div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1">
                <span className="bg-gradient-to-r from-primary-green to-[#00cc6a] text-transparent bg-clip-text">
                  How Your Foundation™ Works
                </span>
              </h1>
              <p className="text-sm sm:text-base text-gray-300">
                From Public Intelligence to Your AI Executive Team in 30 Days
              </p>
            </div>
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-2 rounded-lg text-gray-400 hover:bg-[#333] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary-green"
            >
              <X size={20} />
            </button>
          </div>

          {/* Tabs */}
          <div className="border-b border-[#333] bg-[#1e1e1e]/50">
            <nav className="flex space-x-1 px-2 sm:px-4 overflow-x-auto no-scrollbar">
              {tabsConfig.map((tab) => (
                <TabButton
                  key={tab.id}
                  label={tab.label}
                  isActive={activeTab === tab.id}
                  onClick={() => setActiveTab(tab.id)}
                />
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="flex-grow p-5 sm:p-6 md:p-8 overflow-y-auto" style={{ height: contentHeight }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.25 }}
              >
                <ActiveTabContent />
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Footer CTA */}
          <div ref={footerRef} className="p-5 sm:p-6 border-t border-[#333] bg-[#1e1e1e]/50">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
              <a
                href="/contact?service=foundation-demo"
                className="w-full sm:w-auto flex items-center justify-center px-5 py-3 bg-gradient-to-r from-primary-green to-[#00cc6a] text-black font-semibold rounded-lg hover:opacity-90 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-primary-green focus:ring-offset-2 focus:ring-offset-[#1a1a1a]"
              >
                <Phone size={18} className="mr-2" />
                See Your AI Executives in Action
              </a>
              <a
                href="/foundation"
                className="w-full sm:w-auto flex items-center justify-center px-5 py-3 border-2 border-primary-green text-primary-green font-semibold rounded-lg hover:bg-primary-green hover:text-black transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-green focus:ring-offset-2 focus:ring-offset-[#1a1a1a]"
              >
                Learn More About Foundation™
                <ArrowRight size={18} className="ml-2" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProcessExplainerModal;