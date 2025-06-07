"use client"
import { motion } from "framer-motion"
import { CustomButton } from "@/components/ui/custom-button"

const problems = [
  { title: "Chatbot Nobody Uses", cost: "$50K", roi: "-100%" },
  { title: '"AI-Enabled" CRM', cost: "$200K", roi: "0%" },
  { title: "Random Process Automation", cost: "$150K", roi: "Maybe 50%" },
]

export default function ProblemSection() {
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
          Most Companies Automate the <span className="text-primary-green">Wrong Things</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card-bg p-6 rounded-lg border border-border-color text-center"
            >
              <h3 className="text-subsection-mobile font-bold text-text-primary mb-2">{problem.title}</h3>
              <p className="text-text-secondary">Typical Cost: {problem.cost}</p>
              <p className="text-2xl font-bold text-error mt-2">Typical ROI: {problem.roi}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-body-large text-text-secondary mb-8">
            What if you're leaving millions on the table by automating the wrong things while ignoring your biggest
            opportunities?
          </p>
          <CustomButton
            variant="secondary"
            size="secondary"
            onClick={() => console.log("See What You're Missing clicked")}
          >
            See What You're Missing →
          </CustomButton>
        </motion.div>
      </div>
    </section>
  )
}
