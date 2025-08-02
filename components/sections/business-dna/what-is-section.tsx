"use client"
import { CheckCircle, Share2 } from "lucide-react"
import { motion } from "framer-motion"
import OptimizedImage from "@/components/ui/optimized-image"

const points = [
  "How work actually flows (not the org chart version)",
  "The shortcuts your best people use",
  "Tribal knowledge that took years to build",
  "Which systems talk (and which just pretend to)",
  "The unwritten rules that make everything work"
]

export default function WhatIsSection() {
  return (
    <section className="py-section-padding-mobile md:py-section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-section-headline-mobile md:text-section-headline text-center text-text-primary mb-12 md:mb-16"
        >
          Like a <span className="text-primary-green">Data Room</span> for the AI Era
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-body-large text-text-secondary mb-6">We decode what makes your business unique:</p>
            <ul className="space-y-4 mb-8">
              {points.map((point, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary-green mr-3 mt-1 flex-shrink-0" />
                  <span className="text-body text-text-primary">{point}</span>
                </li>
              ))}
            </ul>
            <div className="bg-card-bg p-6 rounded-lg border border-border-color">
              <p className="text-lg font-bold text-text-primary">Your Foundation Becomes Your Competitive Moat</p>
              <p className="text-text-secondary">Growing organizational knowledge for processes, systems, people, and AI that compounds in value over time.</p>
              <p className="mt-4 font-medium text-text-primary">In 30 days your business has a playbook any AI can use.</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative h-96 bg-card-bg rounded-lg border border-border-color overflow-hidden hidden md:block"
          >
            <OptimizedImage 
              src="/images/what-is-foundation.png"
              alt="Diagram explaining what a business AI Foundation is"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={75}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
