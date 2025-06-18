"use client"
import { useState, useMemo } from "react"
import { cn } from "@/lib/utils"
import { Folder, CheckCircle2, Circle } from "lucide-react"

// --- TYPES & CONSTANTS ---

const AGENTS = [
  {
    name: "ATLAS",
    title: "Strategic Intelligence",
    description: "Spots market opportunities and competitive threats",
  },
  {
    name: "NAVIGATOR",
    title: "Operational Excellence",
    description: "Optimizes operations and tracks performance",
  },
  {
    name: "MAESTRO",
    title: "Technology Integration",
    description: "Orchestrates systems and automation",
  },
  {
    name: "CATALYST",
    title: "Change Management",
    description: "Drives adoption and manages change",
  },
] as const

type AgentName = (typeof AGENTS)[number]["name"]

const FILE_TREES: Record<AgentName, string> = {
  ATLAS: `
/ATLAS/
├─ market_landscape/
│  ├─ [✓] industry_value_chain.md
│  ├─ [✓] key_trends_2025.md
│  └─ [✓] regulation_watchlist.md
├─ competitors/
│  ├─ [✓] top_competitors_list.md
│  └─ [✓] feature_benchmarks.md
├─ finance/
│  ├─ [ ] last_3_annual_reports.md
│  └─ [ ] quarterly_earnings_summary.md
└─ strategic_plans/
  └─ [ ] board_strategy_deck.md`,
  NAVIGATOR: `
/NAVIGATOR/
├─ ops_metrics/
│  ├─ [✓] kpi_snapshot_public.md
│  └─ [ ] internal_kpi_dashboard.md
├─ sales_marketing/
│  ├─ [✓] public_pricing_scrape.md
│  └─ [ ] CAC_LTV_report.md
└─ process_docs/
  └─ [ ] SOP_library_index.md`,
  MAESTRO: `
/MAESTRO/
├─ tech_stack/
│  ├─ [✓] public_tech_stack.md
│  └─ [ ] system_architecture.md
├─ talent/
│  ├─ [✓] hiring_trends.md
│  ├─ [✓] skill_gap_heatmap.md
│  └─ [ ] full_skills_matrix.md
└─ workflow_opportunities/
  └─ [ ] automation_candidates.md`,
  CATALYST: `
/CATALYST/
├─ sentiment/
│  ├─ [✓] news_mentions.md
│  └─ [✓] customer_reviews.md
├─ change_assets/
│  ├─ [ ] change_management_plan.md
│  └─ [ ] training_materials_index.md
└─ performance/
  └─ [ ] adoption_metrics_dashboard.md`,
}

interface ProcessedFileNode {
  id: string
  prefix: string // Tree structure like "│  ├─ "
  statusText?: "[✓]" | "[ ]"
  name: string // "industry_value_chain" or "sentiment/"
  extension?: string // ".md"
  isFolder: boolean
  isCompleted?: boolean
}

// --- HELPER FUNCTION FOR PROCESSING FILE TREE ---
const processFileTreeLine = (line: string, index: number): ProcessedFileNode => {
  let prefix = ""
  let statusText: ProcessedFileNode["statusText"]
  let name = ""
  let extension: string | undefined
  let isFolder = false
  let isCompleted: boolean | undefined

  const prefixMatch = line.match(/^(\s*(?:[│└├]\s*)*[└├│─]?\s*)/)
  prefix = prefixMatch ? prefixMatch[0] : ""

  let remainingLine = line.substring(prefix.length)

  const statusMatch = remainingLine.match(/^(\[✓\]|\[ \])\s*/)
  if (statusMatch) {
    statusText = statusMatch[1] as ProcessedFileNode["statusText"]
    isCompleted = statusText === "[✓]"
    remainingLine = remainingLine.substring(statusMatch[0].length)
  }

  if (remainingLine.endsWith("/")) {
    isFolder = true
    name = remainingLine // Keep trailing slash for folder names
  } else {
    const lastDotIndex = remainingLine.lastIndexOf(".")
    if (
      lastDotIndex > 0 &&
      lastDotIndex < remainingLine.length - 1 &&
      !remainingLine.substring(lastDotIndex + 1).includes(" ")
    ) {
      // basic extension check
      name = remainingLine.substring(0, lastDotIndex)
      extension = remainingLine.substring(lastDotIndex)
    } else {
      name = remainingLine
    }
  }

  // Handle root folder case (e.g., /ATLAS/)
  if (line.startsWith("/") && line.endsWith("/")) {
    isFolder = true
    name = line
    prefix = "" // No prefix for root folder
  }

  return {
    id: `line-${index}-${line}`,
    prefix,
    statusText,
    name,
    extension,
    isFolder,
    isCompleted,
  }
}

// --- COMPONENT ---
export default function Tier4AgentFileTree() {
  const [selectedAgent, setSelectedAgent] = useState<AgentName>("ATLAS")

  const processedTree = useMemo(() => {
    const treeString = FILE_TREES[selectedAgent]
    return treeString.trim().split("\n").map(processFileTreeLine)
  }, [selectedAgent])

  return (
    <div className="bg-[#111113] border border-neutral-800 rounded-lg text-neutral-300 flex h-[430px] max-w-4xl mx-auto">
      {/* Left Sidebar */}
      <div className="w-[280px] flex-shrink-0 bg-[#1e1e1e] border-r border-neutral-800 md:flex flex-col hidden overflow-y-auto">
        <div className="p-2 space-y-1">
          {AGENTS.map((agent) => {
            const isActive = selectedAgent === agent.name
            return (
              <button
                key={agent.name}
                onClick={() => setSelectedAgent(agent.name)}
                aria-pressed={isActive}
                className={cn(
                  "w-full text-left rounded-md transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 font-sans", // Inter is default sans
                  "py-4 pl-3.5 pr-4", // 12px vertical, 16px horizontal
                  isActive
                    ? "bg-[#2a2a2a] border-l-4 border-green-500 text-white"
                    : "text-neutral-400 hover:bg-neutral-700/30 hover:text-neutral-200 border-l-4 border-transparent",
                )}
              >
                <p className="font-semibold text-base">{agent.name}</p>
                <p className="text-sm text-neutral-500 mt-1">{agent.description}</p>
              </button>
            )
          })}
        </div>
      </div>

      {/* Mobile Tab Selector */}
      <div className="md:hidden w-full border-b border-neutral-800 bg-[#1e1e1e] p-2">
        <div className="flex space-x-1 overflow-x-auto whitespace-nowrap">
          {AGENTS.map((agent) => {
            const isActive = selectedAgent === agent.name
            return (
              <button
                key={`${agent.name}-mobile`}
                onClick={() => setSelectedAgent(agent.name)}
                aria-pressed={isActive}
                className={cn(
                  "flex-shrink-0 text-left p-2.5 rounded-md transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 font-sans",
                  isActive ? "bg-[#2a2a2a] text-white" : "bg-neutral-700/50 text-neutral-300 hover:bg-neutral-700",
                )}
              >
                <p className="font-semibold text-xs">{agent.name}</p>
              </button>
            )
          })}
        </div>
      </div>

      {/* Right Content Area */}
      <div className="flex-1 bg-neutral-900 rounded-r-lg flex flex-col overflow-hidden">
        <div className="p-3 font-mono text-xs text-neutral-500 border-b border-neutral-800 flex-shrink-0">
          // {selectedAgent} file tree
        </div>
        <div className="px-4 py-2 overflow-y-auto flex-1">
          <div className="font-mono text-base leading-[1.6]">
            {" "}
            {/* 16px font, line-height 1.6 */}
            {processedTree.map((node) => (
              <div
                key={node.id}
                className={cn(
                  "flex items-center group hover:bg-neutral-800/50 rounded-sm transition-colors duration-100 -ml-1 pl-1 -mr-1 pr-1", // Slight negative margin for hover full bleed
                )}
              >
                <span className="text-neutral-600 select-none whitespace-pre">
                  {node.prefix.replace(/ /g, "\u00A0")}
                </span>
                {node.statusText === "[✓]" && <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mx-1" />}
                {node.statusText === "[ ]" && <Circle className="w-4 h-4 text-neutral-600 flex-shrink-0 mx-1" />}
                {node.isFolder && !node.statusText && <Folder className="w-4 h-4 text-purple-400 flex-shrink-0 mx-1" />}

                <span
                  className={cn(
                    { "text-purple-400": node.isFolder },
                    { "text-green-400": node.isCompleted === true },
                    { "text-neutral-500": node.isCompleted === false },
                    { "text-neutral-300": node.isCompleted === undefined && !node.isFolder }, // Default for non-status, non-folder items
                  )}
                >
                  {node.name}
                </span>
                {node.extension && <span className="text-neutral-600">{node.extension}</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
