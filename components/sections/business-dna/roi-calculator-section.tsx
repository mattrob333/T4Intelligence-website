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
          Calculate Your DNA Mapping <span className="text-primary-green">ROI</span>
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
            <div className="space-y-2">
              <Label htmlFor="revenue">Your annual revenue ($)</Label>
              <Input
                id="revenue"
                type="number"
                placeholder="e.g., 50000000"
                value={revenue}
                onChange={(e) => setRevenue(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="employees">Number of employees (#)</Label>
              <Input
                id="employees"
                type="number"
                placeholder="e.g., 250"
                value={employees}
                onChange={(e) => setEmployees(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="hours">Hours spent on repetitive tasks weekly (#)</Label>
              <Input
                id="hours"
                type="number"
                placeholder="e.g., 10"
                value={hours}
                onChange={(e) => setHours(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cost">Average employee hourly cost ($)</Label>
              <Input
                id="cost"
                type="number"
                placeholder="e.g., 45"
                value={cost}
                onChange={(e) => setCost(e.target.value)}
                required
              />
            </div>
            <CustomButton type="submit" variant="primary" size="default" className="w-full">
              Show My Savings
            </CustomButton>
          </motion.form>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bg-card-bg p-8 rounded-lg border border-border-color space-y-6 h-full flex flex-col justify-center"
          >
            {results ? (
              <>
                <div>
                  <p className="text-text-secondary">Potential Annual Savings</p>
                  <p className="text-4xl font-bold text-primary-green">
                    ${results.savings.toLocaleString("en-US", { maximumFractionDigits: 0 })}
                  </p>
                </div>
                <div>
                  <p className="text-text-secondary">ROI on $15k Investment (example)</p>
                  <p className="text-4xl font-bold text-primary-green">{results.roi.toFixed(0)}%</p>
                </div>
                <div>
                  <p className="text-text-secondary">Potential Efficiency Improvement</p>
                  <p className="text-4xl font-bold text-primary-green">{results.efficiency.toFixed(0)}%</p>
                </div>
                <CustomButton
                  variant="secondary"
                  size="secondary"
                  className="w-full"
                  onClick={() => console.log("Get Detailed Analysis clicked")}
                >
                  Get Your Detailed Analysis →
                </CustomButton>
              </>
            ) : (
              <div className="text-center text-text-secondary">
                <p>Fill out the form to see your potential savings.</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
