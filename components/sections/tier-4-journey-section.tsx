"use client"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const journeySteps = [
  { name: "Business DNA Map™", price: "$15K-$25K", link: "/business-dna" },
  { name: "AI Opportunity Blueprint™", price: "$30K-$50K with bundle discount", link: "/opportunity-blueprint" },
  { name: "Fractional CAO", price: "$8K-$15K/mo", link: "/fractional-cao" },
]

export default function Tier4JourneySection() {
  return (
    <section className="py-section-padding-mobile md:py-section-padding bg-background">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-section-headline-mobile md:text-section-headline text-text-primary mb-10 md:mb-12"
        >
          The <span className="text-primary-green">Tier 4 Journey</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-4 md:gap-2 mb-8"
        >
          {journeySteps.map((step, index) => (
            <div key={step.name} className="flex items-center">
              <a
                href={step.link}
                className="bg-card-bg p-4 rounded-lg border border-border-color hover:border-primary-green transition-colors flex-grow md:flex-1 flex flex-col justify-center items-center text-center min-w-[200px] md:min-w-0"
              >
                <h3 className="text-lg font-semibold text-primary-green">
                  {index + 1}. {step.name}
                </h3>
                <p className="text-text-secondary text-sm">{step.price}</p>
              </a>
              {index < journeySteps.length - 1 && (
                <ArrowRight className="h-8 w-8 text-primary-green my-2 md:my-0 md:self-center transform md:rotate-0 rotate-90" />
              )}
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-body-mobile md:text-body text-text-secondary max-w-2xl mx-auto"
        >
          Most clients start with DNA Mapping and save $10K on their complete transformation.
        </motion.p>
      </div>
    </section>
  )
}
