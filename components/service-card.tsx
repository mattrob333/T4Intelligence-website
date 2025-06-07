"use client"
import { CustomButton } from "@/components/ui/custom-button"
import type { LucideIcon } from "lucide-react"
import { motion } from "framer-motion"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  tagline: string
  price: string
  features: string[]
  ctaText: string
  ctaLink: string
  isMostPopular?: boolean
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
  className = "",
  bundleDiscountText,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5, borderColor: "var(--primary-green)" }}
      className={`bg-card-bg p-8 rounded-card border border-color flex flex-col h-full relative overflow-hidden transition-all duration-300 ease-in-out ${className}`}
    >
      {bundleDiscountText && (
        <div className="absolute top-2 left-2 bg-primary-green text-background text-xs font-bold px-3 py-1 rounded-full shadow-md">
          {bundleDiscountText}
        </div>
      )}
      {isMostPopular && (
        <div className="absolute top-0 right-0 bg-accent-gold text-secondary-black text-xs font-bold px-4 py-1 transform translate-x-1/4 -translate-y-1/4 rotate-45">
          Most Popular
        </div>
      )}
      <div className="flex items-center mb-4">
        <Icon className="h-10 w-10 text-primary-green mr-4" />
        <h3 className="text-subsection font-bold text-text-primary">{title}</h3>
      </div>
      <p className="text-text-secondary mb-1">{tagline}</p>
      <p className="text-3xl font-extrabold text-primary-green mb-6">{price}</p>

      <ul className="space-y-2 text-text-secondary mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-primary-green mr-2">✓</span> {feature}
          </li>
        ))}
      </ul>
      <CustomButton
        variant="secondary"
        size="secondary"
        className="w-full mt-auto"
        onClick={() => (window.location.href = ctaLink)}
      >
        {ctaText}
      </CustomButton>
    </motion.div>
  )
}
