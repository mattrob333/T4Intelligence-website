"use client"
import { useState } from "react"
import type React from "react"

import { motion } from "framer-motion"
import { CustomButton } from "@/components/ui/custom-button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function RoiCalculatorSection() {
  const [revenue, setRevenue] = useState("")
  const [employees, setEmployees] = useState("")
  const [hours, setHours] = useState("")
  const [cost, setCost] = useState("")
  const [results, setResults] = useState<{ savings: number; roi: number; efficiency: number } | null>(null)

  const calculateRoi = (e: React.FormEvent) => {
    e.preventDefault()
    const numRevenue = Number.parseFloat(revenue)
    const numEmployees = Number.parseInt(employees)
    const numHours = Number.parseFloat(hours)
    const numCost = Number.parseFloat(cost)

    if (numRevenue > 0 && numEmployees > 0 && numHours > 0 && numCost > 0) {
      // Simplified calculation logic
      const weeklySavingsPerEmployee = numHours * numCost
      const totalWeeklySavings = weeklySavingsPerEmployee * numEmployees * 0.1 // Assume 10% of repetitive tasks can be automated
      const annualSavings = totalWeeklySavings * 52
      const investment = 15000 // DNA Map cost (using lower end of $15K-$25K range for example)
      const roi = ((annualSavings - investment) / investment) * 100
      const efficiency = 15 + Math.random() * 20 // Random efficiency between 15-35%

      setResults({
        savings: annualSavings,
        roi: roi,
        efficiency: efficiency,
      })
    }
  }

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
          Calculate Your <span className="text-primary-green">Foundation ROI</span>
        </motion.h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            onSubmit={calculateRoi}
            className="bg-card-bg p-8 rounded-lg border border-border-color space-y-6"
          >
            <div className="space-y-8">
              <div>
                <Label htmlFor="revenue" className="text-text-primary">
                  Your annual revenue ($)
                </Label>
                <Input
                  id="revenue"
                  type="number"
                  value={revenue}
                  onChange={(e) => setRevenue(e.target.value)}
                  placeholder="1,000,000"
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="employees" className="text-text-primary">
                  Number of employees (#)
                </Label>
                <Input
                  id="employees"
                  type="number"
                  value={employees}
                  onChange={(e) => setEmployees(e.target.value)}
                  placeholder="10"
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="hours" className="text-text-primary">
                  Hours spent on repetitive tasks weekly (#)
                </Label>
                <Input
                  id="hours"
                  type="number"
                  value={hours}
                  onChange={(e) => setHours(e.target.value)}
                  placeholder="20"
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="cost" className="text-text-primary">
                  Average employee hourly cost ($)
                </Label>
                <Input
                  id="cost"
                  type="number"
                  value={cost}
                  onChange={(e) => setCost(e.target.value)}
                  placeholder="50"
                  className="mt-2"
                />
              </div>
              <CustomButton type="submit" variant="primary" size="default" className="w-full">
                Show My Savings
              </CustomButton>
            </div>
          </motion.form>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bg-card-bg p-8 rounded-lg border border-border-color h-full"
          >
            <h3 className="text-xl font-bold text-text-primary mb-4">
              Your Foundation ROI
            </h3>
            <p className="text-text-secondary mb-6">
              Most businesses see 40%+ efficiency gains just from documenting their processes properly. The AI automation that follows typically delivers 5-10X returns.
            </p>
            {results ? (
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Annual Savings:</span>
                  <span className="text-2xl font-bold text-primary-green">
                    ${results.savings.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Efficiency Gain:</span>
                  <span className="text-xl font-bold text-primary-green">
                    {results.efficiency.toFixed(1)}%
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">ROI (1st Year):</span>
                  <span className="text-2xl font-bold text-primary-green">
                    {results.roi.toFixed(0)}%
                  </span>
                </div>
              </div>
            ) : (
              <p className="text-text-secondary">
                Enter your business details to see your potential ROI
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
