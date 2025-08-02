"use client"
import { motion } from "framer-motion"
import { CalendarDays } from "lucide-react"

const callOptions = [
  {
    title: "Executive AI Assessment",
    duration: "30 minutes",
    bestFor: "Senior leaders evaluating AI strategy",
    discussionPoints: ["Review your highest-impact opportunities", "See our proprietary analysis methodology", "Discuss implementation timelines", "Determine next steps"],
  },
  {
    title: "Technical Validation Session",
    duration: "45 minutes",
    bestFor: "Ready to see working prototypes",
    discussionPoints: ["Live prototype demonstration", "Detailed ROI projections", "Technical architecture review", "Implementation roadmap & quotes"],
  },
]

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 bg-secondary-black overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-hero-headline-mobile md:text-hero-headline text-text-primary mb-6">
            Get Your <span className="text-primary-green">AI Opportunity Assessment</span> This Week
          </h1>
          <p className="text-body-large-mobile md:text-body-large text-text-secondary max-w-3xl mx-auto mb-12">
            See exactly where AI will impact your operations. No theoretical roadmaps—get a working prototype and precise implementation plan in 5 days.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-8">
          {callOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="bg-card-bg p-8 rounded-lg border border-border-color text-left flex flex-col"
            >
              <h2 className="text-subsection font-bold text-primary-green mb-2">{option.title}</h2>
              <p className="text-text-secondary text-sm mb-1">Duration: {option.duration}</p>
              <p className="text-text-secondary text-sm mb-4">Best for: {option.bestFor}</p>
              <p className="text-text-primary font-semibold mb-2">
                {option.title === "Strategy Call" ? "What we'll discuss:" : "What you'll get:"}
              </p>
              <ul className="space-y-1 text-text-secondary text-sm mb-6">
                {option.discussionPoints.map((point) => (
                  <li key={point}>✓ {point}</li>
                ))}
              </ul>
              <div className="mt-auto bg-secondary-black/50 p-6 rounded-md border border-border-color/50 flex flex-col items-center justify-center min-h-[200px]">
                <CalendarDays className="h-12 w-12 text-primary-green mb-2" />
                <p className="text-text-secondary text-sm">Calendly Embed Placeholder</p>
                <p className="text-xs text-text-secondary/70">(Integration for {option.title})</p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-text-secondary text-sm"
        >
          Note: 100% free. 0% sales pressure.
        </motion.p>
      </div>
    </section>
  )
}
