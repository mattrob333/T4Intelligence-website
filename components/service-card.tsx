"use client"
import { CustomButton } from "@/components/ui/custom-button"
import type { ElementType } from "react"
import { motion } from "framer-motion"

interface ServiceCardProps {
  icon: ElementType
  title: string
  tagline: string
  price?: string
  features: string[]
  ctaText: string
  ctaLink: string
  isMostPopular?: boolean
  isMaximumValue?: boolean
  stepNumber?: number
  bottomNote?: string
  className?: string
  bundleDiscountText?: string
}

export default function ServiceCard({
  icon: Icon,
  title,
  tagline,
  price,
  features,
  ctaText,
  ctaLink,
  isMostPopular = false,
  isMaximumValue = false,
  stepNumber,
  bottomNote,
  className = "",
  bundleDiscountText,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5, borderColor: isMaximumValue ? "var(--accent-gold)" : "var(--primary-green)" }}
      className={`bg-card-bg p-8 rounded-card border ${
        isMaximumValue 
          ? "border-accent-gold border-2 shadow-lg shadow-accent-gold/20" 
          : "border-border-color"
      } flex flex-col h-full relative overflow-hidden transition-all duration-300 ease-in-out ${className}`}
      style={isMaximumValue ? { 
        boxShadow: "0 0 30px rgba(255, 215, 0, 0.1), 0 10px 25px -5px rgba(0, 0, 0, 0.3)" 
      } : {}}
    >
      {/* Step Badge */}
      {stepNumber && (
        <div className="absolute top-4 left-4 bg-primary-green text-background text-xs font-bold px-3 py-1 rounded-full">
          STEP {stepNumber}
        </div>
      )}
      
      {/* Maximum Value Badge for CAO */}
      {isMaximumValue && (
        <div className="absolute top-4 right-4 bg-accent-gold text-secondary-black text-xs font-bold px-3 py-1 rounded-full">
          MAXIMUM VALUE
        </div>
      )}
      
      {bundleDiscountText && (
        <div className="absolute top-2 left-2 bg-primary-green text-background text-xs font-bold px-3 py-1 rounded-full shadow-md">
          {bundleDiscountText}
        </div>
      )}
      
      {isMostPopular && !isMaximumValue && (
        <div className="absolute top-4 right-4 bg-accent-gold text-secondary-black text-xs font-bold px-3 py-1 rounded-full">
          POPULAR
        </div>
      )}
      
      <div className="flex items-center mb-4 mt-8">
        <Icon className={`h-10 w-10 ${isMaximumValue ? "text-accent-gold" : "text-primary-green"} mr-4`} />
        <h3 className="text-subsection font-bold text-text-primary">{title}</h3>
      </div>
      <p className="text-text-secondary mb-1">{tagline}</p>
      {price && <p className="text-3xl font-extrabold text-primary-green mb-6">{price}</p>}

      <ul className="space-y-2 text-text-secondary mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className={`${isMaximumValue ? "text-accent-gold" : "text-primary-green"} mr-2`}>✓</span> {feature}
          </li>
        ))}
      </ul>
      
      {/* Bottom Note */}
      {bottomNote && (
        <p className="text-sm text-text-secondary mb-4 text-center italic">
          {bottomNote}
        </p>
      )}
      
      <CustomButton
        variant={isMaximumValue ? "primary" : "secondary"}
        size="secondary"
        className="w-full mt-auto"
        onClick={() => (window.location.href = ctaLink)}
      >
        {ctaText}
      </CustomButton>
    </motion.div>
  )
}
