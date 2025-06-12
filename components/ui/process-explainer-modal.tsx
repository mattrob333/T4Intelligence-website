"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, ArrowRight, CheckCircle, Layers, GitBranch, Database, BrainCircuit, Code2, ShieldCheck, Target, Lightbulb, Cog, BookOpen } from "lucide-react";
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
  icon?: React.ElementType; // Optional icon for tech highlights
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
        Three Phases to <span className="text-primary-green">AI That Knows Your Business</span>
      </h2>
      <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
        We don't build generic AI and hope it works. We engineer a custom intelligence system that understands your industry, your processes, and your unique operational DNA before it ever touches your business.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
      <StepCard
        number="01"
        title="DEEP INTELLIGENCE GATHERING"
        timeline="Week 1-4"
        description="We conduct comprehensive reconnaissance of your business ecosystem - not just surface-level analysis, but deep industry intelligence gathering that maps your competitive landscape, market dynamics, and operational context."
        highlights={[
          "Multi-source data aggregation across industry databases",
          "Competitive intelligence and market trend analysis",
          "Social sentiment and digital footprint mapping",
          "Identification of relevant real-time data feeds",
          "Business process archaeology and tribal knowledge extraction",
        ]}
      />
      <StepCard
        number="02"
        title="AGENT ARCHITECTURE DESIGN"
        timeline="Week 5-8"
        description="We engineer four specialized AI agents with complex meta-prompts, each calibrated to your industry and equipped with the mental models needed to elevate your business to the next operational level."
        highlights={[
          "Custom agent personas with industry-specific expertise",
          "Hierarchical intelligence from macro strategy to micro execution",
          "Integration with team communications and workflows",
          "Advanced prompt engineering with contextual awareness",
          "Real-time collaborative intelligence extraction",
        ]}
      />
      <StepCard
        number="03"
        title="CONTEXT GRAPH CONSTRUCTION"
        timeline="Week 9-12"
        description="We build your proprietary Context Graph™ - a dynamic knowledge repository that becomes an invaluable company asset, storing your processes, insights, and AI-ready prompts for continuous business intelligence."
        highlights={[
          "Proprietary knowledge graph construction",
          "Automated bottleneck identification and resolution",
          "Custom automation recommendations and implementation",
          "Enterprise-grade AI prompt library development",
          "Continuous learning and adaptation mechanisms",
        ]}
      />
    </div>
  </div>
);

const ArchitectureTabContent = () => (
  <div className="space-y-10">
    <div className="text-center max-w-3xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
        The <span className="text-primary-green">Context Graph™</span> Technical Foundation
      </h2>
      <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
        Built on enterprise-grade knowledge graph architecture, our Context Graph™ creates a dynamic, semantic understanding of your business that evolves with your operations.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      <StepCard
        number="KG"
        title="Knowledge Graph Core"
        timeline="Data Foundation"
        description="Utilizes Neo4j for robust, scalable graph data storage, enabling complex relationship modeling and high-performance querying of your business DNA."
        highlights={[
          "Schema-flexible data modeling",
          "ACID transactions for data integrity",
          "Cypher query language for intuitive data traversal",
          "High availability and fault tolerance",
        ]}
        icon={Database}
      />
      <StepCard
        number="VE"
        title="Vector Embeddings"
        timeline="Semantic Understanding"
        description="Leverages Sentence Transformers and FAISS for converting textual data into dense vector representations, enabling semantic search and similarity analysis."
        highlights={[
          "State-of-the-art embedding models",
          "Efficient similarity search (ANN)",
          "Scalable indexing for large datasets",
          "Contextual understanding of unstructured data",
        ]}
        icon={GitBranch}
      />
      <StepCard
        number="API"
        title="API & Integration Layer"
        timeline="Seamless Connectivity"
        description="Built with FastAPI (Python) for high-performance, asynchronous API endpoints, ensuring smooth integration with your existing systems and workflows."
        highlights={[
          "RESTful and GraphQL API options",
          "Automatic data validation and serialization",
          "OAuth2 and JWT for secure authentication",
          "Interactive API documentation (Swagger/OpenAPI)",
        ]}
        icon={Code2}
      />
      <StepCard
        number="LLM"
        title="LLM Orchestration"
        timeline="Intelligent Processing"
        description="Integrates with LangChain and major LLM providers (OpenAI, Anthropic) for sophisticated prompt engineering, agentic workflows, and content generation."
        highlights={[
          "Modular chain construction",
          "Memory management for contextual conversations",
          "Access to diverse foundation models",
          "Tool usage and function calling capabilities",
        ]}
        icon={BrainCircuit}
      />
      <StepCard
        number="CI/CD"
        title="Deployment & MLOps"
        timeline="Reliable Operations"
        description="Employs Docker for containerization, Kubernetes for orchestration, and GitHub Actions for CI/CD, ensuring robust deployment and operational excellence."
        highlights={[
          "Reproducible build environments",
          "Automated testing and deployment pipelines",
          "Scalable infrastructure management",
          "Monitoring and logging with Prometheus & Grafana",
        ]}
        icon={Layers}
      />
       <StepCard
        number="SEC"
        title="Security & Compliance"
        timeline="Data Protection"
        description="Implements end-to-end encryption, role-based access control (RBAC), and regular security audits to protect your sensitive data and ensure compliance."
        highlights={[
          "Data encryption at rest and in transit",
          "Principle of least privilege access",
          "Compliance with GDPR, SOC 2 (as applicable)",
          "Vulnerability scanning and penetration testing",
        ]}
        icon={ShieldCheck}
      />
    </div>
  </div>
);

const AgentsTabContent = () => (
  <div className="space-y-10">
    <div className="text-center max-w-3xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
        Meet Your <span className="text-primary-green">Tier 4 AI Agent Team</span>
      </h2>
      <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
        Our specialized AI agents are engineered with distinct cognitive models and industry expertise, forming a virtual executive team to drive strategic transformation and operational excellence.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
      <StepCard
        number="🎯"
        title="ATLAS"
        timeline="The Visionary Architect"
        description="Strategic intelligence with market analysis and trend forecasting."
        highlights={[
          "SWOT/PESTEL analysis automation",
          "Scenario planning and risk assessment",
          "New market entry evaluation",
          "Innovation and R&D prioritization",
        ]}
        icon={Target}
      />
      <StepCard
        number="🧭"
        title="NAVIGATOR"
        timeline="The Process Optimizer"
        description="Operational planning with gap analysis and resource optimization."
        highlights={[
          "Business process modeling (BPMN)",
          "Root cause analysis of inefficiencies",
          "Workflow automation design (RPA)",
          "Supply chain optimization",
        ]}
        icon={Cog}
      />
      <StepCard
        number="🎼"
        title="MAESTRO"
        timeline="The Corporate Brain"
        description="Integration orchestration with workflow automation."
        highlights={[
          "Internal knowledge base management",
          "Competitive intelligence monitoring",
          "Employee skill gap analysis",
          "Best practice dissemination",
        ]}
        icon={Lightbulb}
      />
      <StepCard
        number="⚡"
        title="CATALYST"
        timeline="The Guardian of Standards"
        description="Execution engine with task automation and ROI measurement."
        highlights={[
          "Regulatory change tracking",
          "Automated compliance checks",
          "Policy document management",
          "Ethical AI framework enforcement",
        ]}
        icon={BookOpen}
      />
    </div>
  </div>
);


const tabsConfig = [
  { id: "process", label: "The Process", component: ProcessTabContent },
  { id: "architecture", label: "Technical Architecture", component: ArchitectureTabContent },
  { id: "agents", label: "Agent Intelligence", component: AgentsTabContent },
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
      // Calculate dynamic height for tab content
      if (modalRef.current && headerRef.current && footerRef.current) {
        const modalHeight = modalRef.current.clientHeight;
        const headerHeight = headerRef.current.offsetHeight;
        const footerHeight = footerRef.current.offsetHeight;
        // Consider padding/margins if any on the modal-content container itself
        const availableHeight = modalHeight - headerHeight - footerHeight - (2 * 1); // Assuming 1px for borders or minimal padding
        setContentHeight(Math.max(200, availableHeight - 80)); // 80px for tab buttons and some breathing room
      }
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  
  // Recalculate on window resize
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
                  Under the Hood
                </span>
              </h1>
              <p className="text-sm sm:text-base text-gray-300">
                How We Engineer AI That Actually Understands Your Business
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
                href="/contact?service=ai-strategy-call"
                className="w-full sm:w-auto flex items-center justify-center px-5 py-3 bg-gradient-to-r from-primary-green to-[#00cc6a] text-black font-semibold rounded-lg hover:opacity-90 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-primary-green focus:ring-offset-2 focus:ring-offset-[#1a1a1a]"
              >
                <Phone size={18} className="mr-2" />
                Book a Free AI Strategy Call
              </a>
              <a
                href="/about/our-process"
                className="w-full sm:w-auto flex items-center justify-center px-5 py-3 border-2 border-primary-green text-primary-green font-semibold rounded-lg hover:bg-primary-green hover:text-black transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-green focus:ring-offset-2 focus:ring-offset-[#1a1a1a]"
              >
                Learn More About Our Process
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
