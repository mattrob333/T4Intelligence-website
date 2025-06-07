"use client"
import { motion } from "framer-motion"
import { CustomButton } from "@/components/ui/custom-button"

const packages = [
  {
    name: "Starter",
    hours: "Approx. 20-25 hours/month", // Adjusted description for clarity
    price: "$8,000/month", // UPDATED
    perfectFor: "Initial AI pilots & strategy",
    includes: ["Strategic oversight", "Monthly board updates", "Team guidance", "Pilot project leadership"],
  },
  {
    name: "Growth",
    hours: "Approx. 35-40 hours/month", // Adjusted description
    price: "$12,000/month", // UPDATED (Kept within new range)
    perfectFor: "Scaling AI initiatives",
    isMostPopular: true,
    includes: ["Everything in Starter", "Weekly team meetings", "Direct implementation support", "Vendor negotiations"],
  },
  {
    name: "Transform",
    hours: "Approx. 50-60 hours/month", // Adjusted description
    price: "$15,000/month", // UPDATED
    perfectFor: "Full transformation leadership",
    includes: [
      "Everything in Growth",
      "Deeper operational involvement",
      "Complete AI program ownership",
      "Board advisory option",
    ],
  },
]

export default function EngagementPackagesSection() {
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
          Choose Your <span className="text-primary-green">Leadership Level</span>
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-card-bg p-8 rounded-lg border flex flex-col relative ${pkg.isMostPopular ? "border-primary-green" : "border-border-color"}`}
            >
              {pkg.isMostPopular && (
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-primary-green text-background font-bold text-sm px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="text-subsection font-bold text-text-primary text-center">{pkg.name}</h3>
              <p className="text-center text-text-secondary mb-4">{pkg.perfectFor}</p>
              <p className="text-4xl font-extrabold text-primary-green text-center my-4">{pkg.price}</p>
              <p className="text-center text-text-secondary mb-6">{pkg.hours}</p>
              <ul className="space-y-2 text-text-secondary mb-8 flex-grow">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="text-primary-green mr-2 mt-1">✓</span> {item}
                  </li>
                ))}
              </ul>
              <CustomButton
                variant={pkg.isMostPopular ? "primary" : "secondary"}
                size="default"
                className="w-full mt-auto"
              >
                Select {pkg.name}
              </CustomButton>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center bg-card-bg p-8 rounded-lg border border-border-color"
        >
          <h3 className="text-subsection font-bold text-text-primary">Custom Package</h3>
          <p className="text-text-secondary mb-4">Perfect for unique needs</p>
          <CustomButton variant="secondary" size="secondary">
            Let's Talk
          </CustomButton>
        </motion.div>
      </div>
    </section>
  )
}
