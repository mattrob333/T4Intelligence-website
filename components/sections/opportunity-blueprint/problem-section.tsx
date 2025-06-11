"use client"
import { motion } from "framer-motion"
import { CustomButton } from "@/components/ui/custom-button"

const problems = [
  {
    title: "The Pilot Graveyard",
    emoji: "⚰️",
    description: "37 Pilots, Zero Production",
    status: "Still Testing"
  },
  {
    title: "The Consultant Theater",
    emoji: "🎭",
    description: "$3M for Strategy Decks",
    status: "Still Planning"
  },
  {
    title: "The DIY Disaster",
    emoji: "🔥",
    description: "Random Tools Everywhere",
    status: "Still Broken"
  }
]

export default function ProblemSection() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-card-bg">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-text-primary mb-10 sm:mb-12 md:mb-16 px-2"
        >
          While Others Are Still In Meetings, We're Already Building
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary-black p-6 sm:p-6 md:p-8 rounded-lg border border-border-color text-center h-full flex flex-col"
            >
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{problem.emoji}</div>
              <h3 className="text-lg sm:text-xl font-bold text-primary-green mb-2">"{problem.title}"</h3>
              <p className="text-xl sm:text-2xl font-bold text-text-primary mb-2 sm:mb-3">{problem.description}</p>
              <p className="text-sm sm:text-base text-text-secondary italic mt-auto">Status: {problem.status}</p>
            </motion.div>
          ))}
        </div>
        <motion.p 
          className="text-center text-text-secondary mt-12 text-lg max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          We skip the BS and build working AI. Your first automation goes live in Week 2.
        </motion.p>
      </div>
    </section>
  )
}
