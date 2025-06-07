"use client"
import { motion } from "framer-motion"
import { CustomButton } from "@/components/ui/custom-button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import type React from "react"

export default function RoiEvidenceSection() {
  const [revenue, setRevenue] = useState("")
  const [investment, setInvestment] = useState("")
  const [pkg, setPkg] = useState("")
  const [results, setResults] = useState<{ roi: number; breakeven: number; value: number } | null>(null)

  const calculateRoi = (e: React.FormEvent) => {
    e.preventDefault()
    const numRevenue = Number.parseFloat(revenue)
    const numInvestment = Number.parseFloat(investment)
    let monthlyCost = 0
    if (pkg === "starter") monthlyCost = 6000
    if (pkg === "growth") monthlyCost = 12000
    if (pkg === "transform") monthlyCost = 20000

    if (numRevenue > 0 && monthlyCost > 0) {
      // Simplified calculation
      const annualCost = monthlyCost * 12
      const firstYearSavings = numRevenue * 0.05 // Assume 5% revenue uplift/savings
      const roi = ((firstYearSavings - annualCost) / annualCost) * 100
      const breakeven = annualCost / (firstYearSavings / 12)
      const value = firstYearSavings * 3

      setResults({ roi, breakeven, value })
    }
  }

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
          The <span className="text-primary-green">Numbers Speak</span> for Themselves
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="bg-card-bg p-8 rounded-lg border border-border-color"
          >
            <h3 className="text-subsection font-bold text-text-primary mb-4">ROI Calculator</h3>
            <form onSubmit={calculateRoi} className="space-y-4">
              <div>
                <Label htmlFor="revenue-roi">Your Annual Revenue</Label>
                <Input
                  id="revenue-roi"
                  type="number"
                  placeholder="50000000"
                  value={revenue}
                  onChange={(e) => setRevenue(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="investment-roi">Current AI Investment</Label>
                <Input
                  id="investment-roi"
                  type="number"
                  placeholder="100000"
                  value={investment}
                  onChange={(e) => setInvestment(e.target.value)}
                />
              </div>
              <div>
                <Label>Fractional CAO Package</Label>
                <Select onValueChange={setPkg} value={pkg}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a package" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="starter">Starter ($6k/mo)</SelectItem>
                    <SelectItem value="growth">Growth ($12k/mo)</SelectItem>
                    <SelectItem value="transform">Transform ($20k/mo)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <CustomButton type="submit" variant="secondary" size="secondary" className="w-full">
                Calculate ROI
              </CustomButton>
            </form>
            {results && (
              <div className="mt-6 space-y-2">
                <p>
                  Expected First Year ROI:{" "}
                  <span className="font-bold text-primary-green">{results.roi.toFixed(0)}%</span>
                </p>
                <p>
                  Breakeven Timeline:{" "}
                  <span className="font-bold text-primary-green">{results.breakeven.toFixed(1)} months</span>
                </p>
                <p>
                  3-Year Value Creation:{" "}
                  <span className="font-bold text-primary-green">${results.value.toLocaleString()}</span>
                </p>
              </div>
            )}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="bg-primary-green/10 p-8 rounded-lg border border-primary-green"
          >
            <h3 className="text-subsection font-bold text-text-primary mb-4">TechCorp's Fractional CAO ROI</h3>
            <div className="space-y-2 mb-4">
              <p>
                Investment: <span className="font-bold text-text-primary">$12K/month</span>
              </p>
              <p>
                First Year Savings: <span className="font-bold text-text-primary">$2.4M</span>
              </p>
              <p>
                ROI: <span className="font-bold text-text-primary">1,567%</span>
              </p>
              <p>
                Time to First Win: <span className="font-bold text-text-primary">37 days</span>
              </p>
            </div>
            <blockquote className="italic text-text-secondary border-l-2 border-primary-green pl-4">
              "Best $12K/month we ever spent. Our CAO delivered more in 90 days than our last consultant did in 2
              years."
              <cite className="block not-italic mt-2 font-semibold text-text-primary">- Sarah Chen, CEO</cite>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
