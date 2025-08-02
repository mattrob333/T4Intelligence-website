"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface FormProgressProps {
  currentStep: number
  totalSteps: number
  stepLabels?: string[]
  className?: string
}

export default function FormProgress({ 
  currentStep, 
  totalSteps, 
  stepLabels,
  className 
}: FormProgressProps) {
  const progress = (currentStep / totalSteps) * 100

  return (
    <div className={cn("w-full mb-8", className)}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-text-secondary">
          Step {currentStep} of {totalSteps}
        </span>
        <span className="text-sm font-medium text-primary-green">
          {Math.round(progress)}% Complete
        </span>
      </div>
      
      <div className="w-full bg-neutral-700 rounded-full h-2 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-primary-green to-accent-gold transition-all duration-500 ease-out rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      {stepLabels && (
        <div className="flex justify-between mt-2">
          {stepLabels.map((label, index) => (
            <span 
              key={index}
              className={cn(
                "text-xs transition-colors",
                index < currentStep ? "text-primary-green" : 
                index === currentStep - 1 ? "text-text-primary" : 
                "text-text-muted"
              )}
            >
              {label}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

// Helper hook for form progress
export function useFormProgress(sections: string[]) {
  const [currentSection, setCurrentSection] = useState(0)
  
  const nextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1)
    }
  }
  
  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1)
    }
  }
  
  const goToSection = (index: number) => {
    if (index >= 0 && index < sections.length) {
      setCurrentSection(index)
    }
  }
  
  return {
    currentSection,
    totalSections: sections.length,
    nextSection,
    prevSection,
    goToSection,
    isFirstSection: currentSection === 0,
    isLastSection: currentSection === sections.length - 1,
    progress: ((currentSection + 1) / sections.length) * 100
  }
}