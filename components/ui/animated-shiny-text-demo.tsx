"use client"

import { cn } from "@/lib/utils"
import { AnimatedShinyText } from "./animated-shiny-text"

export function AnimatedShinyTextDemo() {
  return (
    <div className="z-10 flex items-center justify-center mb-6">
      <div
        className={cn(
          "group rounded-full border border-amber-500/20 bg-gradient-to-r from-amber-500/10 to-amber-600/10 px-4 py-1.5 text-sm font-medium text-amber-600 transition-all duration-300 ease-out hover:bg-amber-500/20 dark:text-amber-400 dark:from-amber-500/5 dark:to-amber-600/5 dark:hover:bg-amber-500/10"
        )}
      >
        <AnimatedShinyText 
          shimmerWidth={120}
          className="inline-flex items-center justify-center gap-1.5 font-semibold tracking-tight"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500"></span>
          </span>
          <span>4 Spots Left for Q3 2025</span>
        </AnimatedShinyText>
      </div>
    </div>
  )
}
