"use client"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { CustomButton } from "@/components/ui/custom-button"

const expertiseAreas = [
  "AI Strategy",
  "Digital Transformation",
  "Process Automation",
  "Change Leadership",
  "Board Advisory",
  "Team Development",
  "Vendor Negotiation",
  "ROI Optimization",
]

const stats = [
  { value: "15+", label: "Years Leading Tech" },
  { value: "100+", label: "AI Transformations" },
  { value: "50+", label: "Companies Elevated" },
  { value: "$850M+", label: "Value Created" },
]

export default function CaoProfileSection() {
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
          Meet Your Future <span className="text-primary-green">AI Leader</span>
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  className="bg-card-bg p-4 rounded-lg border border-border-color text-center"
                >
                  <p className="text-4xl font-bold text-primary-green">{stat.value}</p>
                  <p className="text-sm text-text-secondary">{stat.label}</p>
                </motion.div>
              ))}
            </div>
            <h3 className="text-subsection font-bold text-text-primary mb-4">Expertise Areas</h3>
            <div className="flex flex-wrap gap-2">
              {expertiseAreas.map((area) => (
                <Badge
                  key={area}
                  variant="secondary"
                  className="bg-primary-green/10 text-primary-green border-primary-green/20"
                >
                  {area}
                </Badge>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="bg-card-bg p-6 rounded-lg border border-border-color"
            >
              <h4 className="text-xl font-bold text-text-primary mb-4">Typical Background:</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary-green mr-2">•</span>
                  <span className="text-text-secondary"><span className="font-semibold">Former VP/SVP of AI</span> at Fortune 500</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-green mr-2">•</span>
                  <span className="text-text-secondary"><span className="font-semibold">Led transformations</span> generating $50M+ annually</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-green mr-2">•</span>
                  <span className="text-text-secondary"><span className="font-semibold">Published thought leader</span> on enterprise AI</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-green mr-2">•</span>
                  <span className="text-text-secondary"><span className="font-semibold">Board advisor</span> to multiple tech companies</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="bg-card-bg p-6 rounded-lg border border-border-color"
            >
              <h4 className="text-xl font-bold text-text-primary mb-4">How They Engage:</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary-green mr-2">•</span>
                  <span className="text-text-secondary"><span className="font-semibold">Hands-on leadership</span> - not just strategy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-green mr-2">•</span>
                  <span className="text-text-secondary"><span className="font-semibold">Builds while teaching</span> - elevates your team</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-green mr-2">•</span>
                  <span className="text-text-secondary"><span className="font-semibold">Always accessible</span> for critical decisions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-green mr-2">•</span>
                  <span className="text-text-secondary"><span className="font-semibold">Your voice</span> in vendor negotiations</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
            >
              <CustomButton variant="primary" size="default" className="w-full">
                DISCUSS YOUR NEEDS →
              </CustomButton>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
