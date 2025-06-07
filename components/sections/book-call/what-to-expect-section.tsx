"use client"
import { motion } from "framer-motion"
import { Star } from "lucide-react"

const timeline = [
  {
    stage: "Before the Call",
    points: ["You'll get a brief questionnaire", "We'll research your company", "We'll prepare initial insights"],
  },
  {
    stage: "During the Call",
    points: [
      "We listen to your challenges",
      "We share relevant solutions",
      "We answer your questions",
      "We discuss potential fit",
    ],
  },
  {
    stage: "After the Call",
    points: ["You get a summary email", "We send relevant resources", "You decide next steps", "No pushy follow-ups"],
  },
]

export default function WhatToExpectSection() {
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
          Here's <span className="text-primary-green">Exactly What Happens</span>
        </motion.h2>
        <div className="max-w-2xl mx-auto space-y-10">
          {timeline.map((item, index) => (
            <motion.div
              key={item.stage}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="bg-card-bg p-6 rounded-lg border border-border-color"
            >
              <h3 className="text-subsection-mobile font-bold text-primary-green mb-3">{item.stage}</h3>
              <ul className="space-y-2 text-text-secondary">
                {item.points.map((point) => (
                  <li key={point} className="flex items-start">
                    <span className="text-primary-green mr-2 mt-1">▸</span> {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center bg-primary-green/10 p-6 rounded-lg max-w-md mx-auto"
        >
          <div className="flex items-center justify-center mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-6 w-6 ${i < 4 ? "text-accent-gold" : "text-accent-gold/50"}`}
                fill="currentColor"
              />
            ))}
            <Star key={4} className={`h-6 w-6 text-accent-gold`} fill="currentColor" /> {/* 4.9 stars */}
          </div>
          <p className="font-semibold text-text-primary">Average call rating: 4.9/5 stars</p>
          <p className="text-sm text-text-secondary">(247 reviews)</p>
        </motion.div>
      </div>
    </section>
  )
}
