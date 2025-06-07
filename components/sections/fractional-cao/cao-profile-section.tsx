"use client"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { CustomButton } from "@/components/ui/custom-button"

const expertiseAreas = [
  "AI Strategy",
  "Machine Learning",
  "Process Automation",
  "Change Management",
  "Board Governance",
  "Team Building",
  "Vendor Management",
  "Financial Planning",
]

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "100+", label: "Implementations Led" },
  { value: "50+", label: "Companies Transformed" },
  { value: "850%", label: "Average ROI Delivered" },
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
              <p className="text-sm text-text-secondary">CAO Profile 1</p>
              <h4 className="text-xl font-bold text-text-primary">Available Upon Engagement</h4>
              <p className="text-text-secondary">
                <span className="font-semibold">Background:</span> Former VP of AI at Fortune 500
              </p>
              <p className="text-text-secondary">
                <span className="font-semibold">Specialty:</span> Manufacturing & Supply Chain
              </p>
              <p className="text-primary-green">
                <span className="font-semibold">Notable Win:</span> $47M savings at global manufacturer
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="bg-card-bg p-6 rounded-lg border border-border-color"
            >
              <p className="text-sm text-text-secondary">CAO Profile 2</p>
              <h4 className="text-xl font-bold text-text-primary">Available Upon Engagement</h4>
              <p className="text-text-secondary">
                <span className="font-semibold">Background:</span> 3x AI Startup Founder
              </p>
              <p className="text-text-secondary">
                <span className="font-semibold">Specialty:</span> Healthcare & Life Sciences
              </p>
              <p className="text-primary-green">
                <span className="font-semibold">Notable Win:</span> 90% automation of clinical workflows
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
            >
              <CustomButton variant="primary" size="default" className="w-full">
                Schedule CAO Matching Call →
              </CustomButton>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
