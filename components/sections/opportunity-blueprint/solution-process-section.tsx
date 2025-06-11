"use client"
import { motion } from "framer-motion"

interface TimelineItem {
  week: string;
  title: string;
  subtitle: string;
  icon: string;
  items: string[];
}

const timeline: TimelineItem[] = [
  {
    week: "WEEK 1-3",
    title: "Quick Win Builds",
    subtitle: "Instant ROI Automations",
    icon: "⚡",
    items: [
      "Build your #1 ROI automation",
      "Deploy to production environment",
      "Train your team live",
      "Measure immediate savings",
      "Celebrate first win"
    ]
  },
  {
    week: "WEEK 4-6",
    title: "Core System Builds",
    subtitle: "Transform Major Workflows",
    icon: "🏗️",
    items: [
      "Automate core business processes",
      "Integrate with existing systems",
      "Build custom AI agents",
      "Create intelligent workflows",
      "Scale successful patterns"
    ]
  },
  {
    week: "WEEK 7-9",
    title: "Department Rollouts",
    subtitle: "AI Across Your Business",
    icon: "🌐",
    items: [
      "Deploy to all departments",
      "Customize for each team",
      "Build specialized agents",
      "Connect all systems",
      "Create unified intelligence"
    ]
  },
  {
    week: "WEEK 10-12",
    title: "Optimization & Scale",
    subtitle: "Lock In Your Gains",
    icon: "🚀",
    items: [
      "Fine-tune all automations",
      "Build monitoring dashboards",
      "Document everything",
      "Train power users",
      "Plan next phase"
    ]
  }
]

export default function SolutionProcessSection() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-secondary-black">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-text-primary mb-10 sm:mb-12 md:mb-16 px-2"
        >
          The <span className="text-primary-green">90-Day Build Sprint</span>
        </motion.h2>
        <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">
          {timeline.map((item: TimelineItem, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card-bg p-6 sm:p-8 rounded-xl border border-border-color"
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                <div className="md:w-1/3">
                  <div className="flex items-center gap-4 mb-3 sm:mb-4">
                    <div className="text-4xl">{item.icon}</div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-primary-green">
                        {item.week}
                      </h3>
                      <h4 className="text-lg sm:text-xl font-bold text-text-primary">
                        {item.title}
                      </h4>
                      <p className="text-sm sm:text-base text-text-secondary">{item.subtitle}</p>
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <ul className="space-y-2 sm:space-y-3">
                    {item.items.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary-green mr-2 mt-1">✓</span>
                        <span className="text-sm sm:text-base text-text-secondary">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
