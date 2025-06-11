"use client"
import { motion } from "framer-motion"

const timeline = [
  {
    title: "MONTH 0: Foundation Strategy",
    tasks: [
      "AI maturity assessment",
      "Quick win identification",
      "90-day sprint planning",
      "Team alignment sessions",
    ],
  },
  {
    title: "MONTH 1-3: Launch & Build",
    tasks: [
      "First automations live",
      "Team training programs",
      "Process optimization",
      "ROI tracking setup"
    ],
  },
  {
    title: "MONTH 4-6: Scale & Optimize",
    tasks: [
      "Department-wide rollouts",
      "Advanced automations",
      "Performance optimization",
      "Next phase planning"
    ],
  },
  {
    title: "ONGOING: Leadership & Growth",
    tasks: [
      "Strategic oversight",
      "Continuous innovation",
      "Competitive analysis",
      "Board reporting"
    ],
  },
]

export default function WhatCaoDoesSection() {
  return (
    <section className="py-section-padding-mobile md:py-section-padding bg-secondary-black">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-section-headline-mobile md:text-section-headline text-center text-text-primary mb-12 md:mb-16"
        >
          Your AI Transformation, <span className="text-primary-green">Expertly Led</span>
        </motion.h2>
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-border-color -translate-x-1/2"></div>
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className="relative pl-12 md:pl-0 mb-12"
            >
              <div className="md:flex items-center">
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:order-2"}`}>
                  <div className="absolute left-4 md:left-1/2 top-0 -translate-x-1/2">
                    <div className="w-4 h-4 bg-primary-green rounded-full border-4 border-secondary-black"></div>
                  </div>
                  <h3 className="text-subsection-mobile font-bold text-primary-green mb-2">{item.title}</h3>
                  <ul className="text-text-secondary text-sm space-y-1">
                    {item.tasks.map((task) => (
                      <li key={task}>- {task}</li>
                    ))}
                  </ul>
                </div>
                <div className="md:w-1/2"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
