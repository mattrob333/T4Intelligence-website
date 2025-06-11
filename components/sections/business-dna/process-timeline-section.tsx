"use client"
import { Search, Network, Power } from "lucide-react"
import { motion } from "framer-motion"
import { CustomButton } from "@/components/ui/custom-button"

const timelineSteps = [
  {
    title: "WEEK 1-2: Deep Discovery",
    subtitle: "Intelligence Gathering",
    details: [
      "Interview your experts",
      "Map current workflows",
      "Document tribal knowledge",
      "Audit all systems",
      "Capture the \"why\" behind the \"how\""
    ],
    icon: Search,
  },
  {
    title: "WEEK 3: Build Your Foundation",
    subtitle: "Asset Creation",
    details: [
      "Create AI instruction sets",
      "Build knowledge graphs",
      "Connect process maps",
      "Design automation blueprints",
      "Structure for AI consumption"
    ],
    icon: Network,
  },
  {
    title: "WEEK 4: Activate Your AI",
    subtitle: "Intelligence Deployment",
    details: [
      "Test with AI models",
      "Validate comprehension",
      "Refine instructions",
      "Create AI playbooks",
      "Deploy first use cases"
    ],
    icon: Power,
  },
]

export default function ProcessTimelineSection() {
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
          From Chaos to Clarity in <span className="text-primary-green">30 Days</span>
        </motion.h2>
        <div className="relative">
          {/* Dotted line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-border-color -translate-y-1/2"></div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
            {timelineSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-card-bg p-6 rounded-lg border border-border-color text-center flex flex-col items-center"
              >
                <div className="bg-primary-green/10 p-4 rounded-full mb-4">
                  <step.icon className="h-8 w-8 text-primary-green" />
                </div>
                <h3 className="text-subsection-mobile font-bold text-text-primary">{step.title}</h3>
                <p className="text-primary-green font-medium mb-2">{step.subtitle}</p>
                <ul className="text-text-secondary text-sm space-y-1 list-inside list-disc text-left">
                  {step.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <CustomButton
            variant="secondary"
            size="secondary"
            onClick={() => console.log("See Process in Action clicked")}
          >
            SEE THE PROCESS IN ACTION →
          </CustomButton>
        </motion.div>
      </div>
    </section>
  )
}
