"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"

const roles = [
  "CEO/President",
  "COO/Operations VP",
  "CTO/Technology VP",
  "CFO/Finance VP",
  "Other C-Suite",
  "VP/Director Level",
  "Manager Level",
  "Other",
] as const

const revenueRanges = [
  "Under $10M",
  "$10M - $25M",
  "$25M - $50M",
  "$50M - $100M",
  "$100M - $250M",
  "$250M+",
  "Prefer not to say",
] as const

const employeeRanges = ["Under 25", "25-50", "51-100", "101-250", "251-500", "500+"] as const

const industries = [
  "Manufacturing",
  "Technology/Software",
  "Financial Services",
  "Healthcare",
  "Professional Services",
  "Private Equity/Investment",
  "Real Estate",
  "Retail/E-commerce",
  "Other",
] as const

const aiStatusOptions = [
  { id: "getting_started", label: "We're just getting started with AI" },
  { id: "basic_automation", label: "We have some basic automation in place" },
  { id: "struggled_implementation", label: "We've tried AI projects but struggled with implementation" },
  { id: "successful_expanding", label: "We have successful AI initiatives but want to expand" },
  { id: "advanced_guidance", label: "We're advanced but need strategic guidance" },
] as const

const challenges = [
  "Manual processes eating up time",
  "Data scattered across too many systems",
  "Inconsistent quality/errors",
  "Scaling operations efficiently",
  "Customer service bottlenecks",
  "Inventory/supply chain issues",
  "Reporting and analytics gaps",
  "Team productivity concerns",
  "Other",
] as const

const interestTriggers = [
  { id: "competitors_ai", label: "Competitors gaining advantage with AI" },
  { id: "board_pressure", label: "Board/investor pressure to modernize" },
  { id: "reduce_costs", label: "Need to reduce operational costs" },
  { id: "scale_headcount", label: "Struggling to scale without adding headcount" },
  { id: "quality_issues", label: "Quality/consistency issues" },
  { id: "customer_demands", label: "Customer demands for faster service" },
  { id: "access_insights", label: "Difficulty accessing business insights" },
  { id: "manual_unsustainable", label: "Recent growth making manual processes unsustainable" },
  { id: "other_trigger", label: "Other" },
] as const

const implementationTimelines = [
  { id: "immediate", label: "Immediate (within 30 days)" },
  { id: "near_term", label: "Near-term (1-3 months)" },
  { id: "this_quarter", label: "This quarter (within 90 days)" },
  { id: "next_6_months", label: "Next 6 months" },
  { id: "next_year", label: "Next year" },
  { id: "exploring", label: "Just exploring options" },
] as const

const budgetRanges = [
  "Under $50K",
  "$50K - $100K",
  "$100K - $250K",
  "$250K - $500K",
  "$500K+",
  "Need help determining budget",
] as const

const decisionProcesses = [
  { id: "final_decision", label: "I make the final decision" },
  { id: "recommend_approve", label: "I recommend, others approve" },
  { id: "committee_team", label: "Committee/team decision" },
  { id: "board_approval", label: "Board approval required" },
  { id: "determining_process", label: "Still determining process" },
] as const

const specificInterests = [
  { id: "ai_blueprint", label: "AI Opportunity Blueprint ($40K-$60K assessment)" },
  { id: "dna_mapping", label: "Business DNA Mapping for comprehensive AI strategy" },
  { id: "fractional_cao", label: "Fractional Chief Automation Officer services" },
  { id: "specific_automation", label: "Specific automation project implementation" },
  { id: "general_consultation", label: "General AI strategy consultation" },
  { id: "competitive_analysis", label: "Competitive analysis and positioning" },
] as const

const meetingFormats = [
  { id: "video", label: "Video call (Zoom/Teams)" },
  { id: "phone", label: "Phone call" },
  { id: "in_person", label: "In-person (if geographically feasible)" },
  { id: "no_preference", label: "No preference" },
] as const

const preferredTimes = [
  { id: "early_morning", label: "Early morning (8-10 AM)" },
  { id: "mid_morning", label: "Mid-morning (10 AM-12 PM)" },
  { id: "early_afternoon", label: "Early afternoon (12-2 PM)" },
  { id: "mid_afternoon", label: "Mid-afternoon (2-4 PM)" },
  { id: "late_afternoon", label: "Late afternoon (4-6 PM)" },
  { id: "flexible_time", label: "Flexible" },
] as const

const timeZones = [
  "America/New_York (ET)",
  "America/Chicago (CT)",
  "America/Denver (MT)",
  "America/Los_Angeles (PT)",
  "Europe/London (GMT)",
  "Europe/Berlin (CET)",
  "Asia/Tokyo (JST)",
  "Australia/Sydney (AEST)",
  "Other",
] as const

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  companyName: z.string().min(2, { message: "Company name must be at least 2 characters." }),
  role: z.enum(roles),
  phone: z.string().optional(),
  annualRevenue: z.enum(revenueRanges),
  numEmployees: z.enum(employeeRanges),
  industry: z.enum(industries),
  aiStatus: z.enum(aiStatusOptions.map((o) => o.id) as [string, ...string[]]),
  biggestChallenge: z.enum(challenges),
  interestTriggers: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one interest trigger.",
  }),
  implementationTimeline: z.enum(implementationTimelines.map((o) => o.id) as [string, ...string[]]),
  budgetRange: z.enum(budgetRanges),
  decisionProcess: z.enum(decisionProcesses.map((o) => o.id) as [string, ...string[]]),
  specificInterests: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one specific interest.",
  }),
  meetingFormat: z.enum(meetingFormats.map((o) => o.id) as [string, ...string[]]),
  biggestOpportunity: z.string().optional(),
  questions: z.string().optional(),
  preferredTimes: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one preferred time.",
  }),
  timeZone: z.enum(timeZones),
})

export type BookCallFormValues = z.infer<typeof formSchema>

const StyledFormLabel = ({ children }: { children: React.ReactNode }) => (
  <FormLabel className="text-text-primary font-medium">
    {children}
    <span className="text-primary-green ml-1">*</span>
  </FormLabel>
)

const OptionalFormLabel = ({ children }: { children: React.ReactNode }) => (
  <FormLabel className="text-text-primary font-medium">{children}</FormLabel>
)

export function BookCallForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  
  useEffect(() => {
    setIsMounted(true)
  }, [])
  
  const form = useForm<BookCallFormValues>({
    resolver: zodResolver(formSchema),
    mode: "onBlur", // Validate on blur for better UX
    defaultValues: {
      fullName: "",
      email: "",
      companyName: "",
      phone: "",
      interestTriggers: [],
      specificInterests: [],
      biggestOpportunity: "",
      questions: "",
      preferredTimes: [],
    },
  })

  async function onSubmit(data: BookCallFormValues) {
    if (isSubmitting) return // Prevent double submission
    
    setIsSubmitting(true)
    try {
      console.log("=== Form Submission Debug ===")
      console.log("Form data being sent:", JSON.stringify(data, null, 2))
      console.log("Submission URL:", '/api/book-call')
      
      // Add validation check
      const isValid = await form.trigger()
      if (!isValid) {
        console.log("Form validation failed")
        toast({
          title: "Please Complete All Required Fields",
          description: "Make sure all required fields (marked with *) are filled out correctly.",
          variant: "destructive",
        })
        setIsSubmitting(false)
        return
      }
      
      console.log("Form validation passed, sending request...")
      const response = await fetch('/api/book-call', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      console.log("Response status:", response.status)
      const result = await response.json()
      console.log("Response data:", result)

      if (!response.ok) {
        // Check if it's a configuration error
        if (result.missingVars) {
          console.error('Airtable configuration error:', result)
          throw new Error('Form submission is not configured yet. Please contact us directly at contact@t4intelligence.com')
        }
        throw new Error(result.error || `Server error: ${response.status}`)
      }

      toast({
        title: "🎉 Consultation Request Sent!",
        description:
          "We've received your details and will be in touch shortly to confirm your strategic AI consultation.",
        variant: "default",
      })
      
      form.reset()
    } catch (error) {
      console.error('Form submission error:', error)
      toast({
        title: "❌ Submission Failed",
        description: error instanceof Error ? error.message : "There was an error submitting your request. Please try again or contact us directly.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const SectionHeader = ({ title }: { title: string }) => (
    <h2 className="text-2xl font-semibold text-text-primary border-b-2 border-primary-green pb-3 mb-8">{title}</h2>
  )

  const inputClasses =
    "bg-neutral-800 border-neutral-700 hover:border-primary-green focus:border-primary-green focus:ring-primary-green text-text-primary placeholder:text-neutral-500 rounded-md"
  const selectTriggerClasses = inputClasses
  const selectContentClasses = "bg-neutral-900 border-neutral-700 text-text-primary shadow-2xl rounded-md"
  const selectItemClasses =
    "focus:bg-primary-green focus:text-text-primary data-[highlighted]:bg-primary-green data-[highlighted]:text-text-primary rounded-[3px]"

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-12 bg-neutral-900 p-6 md:p-10 rounded-xl shadow-2xl"
      >
        {/* Section 1: Your Contact Information */}
        <section className="space-y-6">
          <SectionHeader title="1. Your Contact Information" />
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <StyledFormLabel>Full Name</StyledFormLabel>
                <FormControl>
                  <Input placeholder="e.g., John Smith" {...field} className={inputClasses} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <StyledFormLabel>Email Address</StyledFormLabel>
                <FormControl>
                  <Input type="email" placeholder="e.g., john@company.com" {...field} className={inputClasses} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <StyledFormLabel>Company Name</StyledFormLabel>
                <FormControl>
                  <Input placeholder="e.g., Acme Manufacturing Corp" {...field} className={inputClasses} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <StyledFormLabel>Your Role</StyledFormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className={selectTriggerClasses}>
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className={selectContentClasses}>
                    {roles.map((role) => (
                      <SelectItem key={role} value={role} className={selectItemClasses}>
                        {role}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <OptionalFormLabel>Phone Number</OptionalFormLabel>
                <FormControl>
                  <Input placeholder="(555) 123-4567 (Optional)" {...field} className={inputClasses} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </section>

        {/* Section 2: About Your Company */}
        <section className="space-y-6">
          <SectionHeader title="2. About Your Company" />
          <FormField
            control={form.control}
            name="annualRevenue"
            render={({ field }) => (
              <FormItem>
                <StyledFormLabel>Annual Revenue</StyledFormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className={selectTriggerClasses}>
                      <SelectValue placeholder="Select annual revenue" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className={selectContentClasses}>
                    {revenueRanges.map((range) => (
                      <SelectItem key={range} value={range} className={selectItemClasses}>
                        {range}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="numEmployees"
            render={({ field }) => (
              <FormItem>
                <StyledFormLabel>Number of Employees</StyledFormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className={selectTriggerClasses}>
                      <SelectValue placeholder="Select number of employees" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className={selectContentClasses}>
                    {employeeRanges.map((range) => (
                      <SelectItem key={range} value={range} className={selectItemClasses}>
                        {range}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="industry"
            render={({ field }) => (
              <FormItem>
                <StyledFormLabel>Industry</StyledFormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className={selectTriggerClasses}>
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className={selectContentClasses}>
                    {industries.map((industry) => (
                      <SelectItem key={industry} value={industry} className={selectItemClasses}>
                        {industry}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </section>

        {/* Section 3: Your AI & Automation Journey */}
        <section className="space-y-6">
          <SectionHeader title="3. Your AI & Automation Journey" />
          <FormField
            control={form.control}
            name="aiStatus"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <StyledFormLabel>Current AI/Automation Status</StyledFormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-2 pt-1"
                  >
                    {aiStatusOptions.map((option) => (
                      <FormItem key={option.id} className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem
                            value={option.id}
                            className="border-neutral-600 text-primary-green focus:ring-primary-green"
                          />
                        </FormControl>
                        <FormLabel className="font-normal text-text-secondary hover:text-text-primary cursor-pointer">
                          {option.label}
                        </FormLabel>
                      </FormItem>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="biggestChallenge"
            render={({ field }) => (
              <FormItem>
                <StyledFormLabel>Biggest Operational Challenge</StyledFormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className={selectTriggerClasses}>
                      <SelectValue placeholder="Select your biggest challenge" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className={selectContentClasses}>
                    {challenges.map((challenge) => (
                      <SelectItem key={challenge} value={challenge} className={selectItemClasses}>
                        {challenge}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="interestTriggers"
            render={() => (
              <FormItem>
                <div className="mb-2">
                  <StyledFormLabel>What Triggered Your Interest in AI Transformation?</StyledFormLabel>
                  <FormDescription className="text-neutral-400">Select all that apply.</FormDescription>
                </div>
                <div className="space-y-2 pt-1">
                  {interestTriggers.map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name="interestTriggers"
                      render={({ field }) => {
                        return (
                          <FormItem key={item.id} className="flex flex-row items-center space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...(field.value || []), item.id])
                                    : field.onChange((field.value || []).filter((value) => value !== item.id))
                                }}
                                className="border-neutral-600 data-[state=checked]:bg-primary-green data-[state=checked]:border-primary-green data-[state=checked]:text-white"
                              />
                            </FormControl>
                            <FormLabel className="font-normal text-text-secondary hover:text-text-primary cursor-pointer">
                              {item.label}
                            </FormLabel>
                          </FormItem>
                        )
                      }}
                    />
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </section>

        {/* Section 4: Project Details & Timeline */}
        <section className="space-y-6">
          <SectionHeader title="4. Project Details & Timeline" />
          <FormField
            control={form.control}
            name="implementationTimeline"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <StyledFormLabel>Timeline for Implementation</StyledFormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-2 pt-1"
                  >
                    {implementationTimelines.map((option) => (
                      <FormItem key={option.id} className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem
                            value={option.id}
                            className="border-neutral-600 text-primary-green focus:ring-primary-green"
                          />
                        </FormControl>
                        <FormLabel className="font-normal text-text-secondary hover:text-text-primary cursor-pointer">
                          {option.label}
                        </FormLabel>
                      </FormItem>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="budgetRange"
            render={({ field }) => (
              <FormItem>
                <StyledFormLabel>Budget Range for AI/Automation Initiative</StyledFormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className={selectTriggerClasses}>
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className={selectContentClasses}>
                    {budgetRanges.map((range) => (
                      <SelectItem key={range} value={range} className={selectItemClasses}>
                        {range}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="decisionProcess"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <StyledFormLabel>Decision-Making Process</StyledFormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-2 pt-1"
                  >
                    {decisionProcesses.map((option) => (
                      <FormItem key={option.id} className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem
                            value={option.id}
                            className="border-neutral-600 text-primary-green focus:ring-primary-green"
                          />
                        </FormControl>
                        <FormLabel className="font-normal text-text-secondary hover:text-text-primary cursor-pointer">
                          {option.label}
                        </FormLabel>
                      </FormItem>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </section>

        {/* Section 5: What Are You Interested In? */}
        <section className="space-y-6">
          <SectionHeader title="5. What Are You Interested In?" />
          <FormField
            control={form.control}
            name="specificInterests"
            render={() => (
              <FormItem>
                <div className="mb-2">
                  <StyledFormLabel>Primary Areas of Interest</StyledFormLabel>
                  <FormDescription className="text-neutral-400">Select all that apply.</FormDescription>
                </div>
                <div className="space-y-2 pt-1">
                  {specificInterests.map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name="specificInterests"
                      render={({ field }) => {
                        return (
                          <FormItem key={item.id} className="flex flex-row items-center space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...(field.value || []), item.id])
                                    : field.onChange((field.value || []).filter((value) => value !== item.id))
                                }}
                                className="border-neutral-600 data-[state=checked]:bg-primary-green data-[state=checked]:border-primary-green data-[state=checked]:text-white"
                              />
                            </FormControl>
                            <FormLabel className="font-normal text-text-secondary hover:text-text-primary cursor-pointer">
                              {item.label}
                            </FormLabel>
                          </FormItem>
                        )
                      }}
                    />
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="meetingFormat"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <StyledFormLabel>Preferred Meeting Format</StyledFormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-2 pt-1"
                  >
                    {meetingFormats.map((option) => (
                      <FormItem key={option.id} className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem
                            value={option.id}
                            className="border-neutral-600 text-primary-green focus:ring-primary-green"
                          />
                        </FormControl>
                        <FormLabel className="font-normal text-text-secondary hover:text-text-primary cursor-pointer">
                          {option.label}
                        </FormLabel>
                      </FormItem>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </section>

        {/* Section 6: Additional Details */}
        <section className="space-y-6">
          <SectionHeader title="6. Additional Details" />
          <FormField
            control={form.control}
            name="biggestOpportunity"
            render={({ field }) => (
              <FormItem>
                <OptionalFormLabel>Tell us about your biggest automation opportunity</OptionalFormLabel>
                <FormControl>
                  <Textarea
                    placeholder="What process, if automated, would have the biggest impact on your business? (e.g., 'Our order processing takes 6 hours and involves 4 different people...')"
                    className={`resize-none ${inputClasses}`}
                    rows={4}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="questions"
            render={({ field }) => (
              <FormItem>
                <OptionalFormLabel>Questions for our call?</OptionalFormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Anything specific you'd like us to address during our conversation?"
                    className={`resize-none ${inputClasses}`}
                    rows={3}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </section>

        {/* Section 7: Preferred Scheduling */}
        <section className="space-y-6">
          <SectionHeader title="7. Preferred Scheduling" />
          <FormField
            control={form.control}
            name="preferredTimes"
            render={() => (
              <FormItem>
                <div className="mb-2">
                  <StyledFormLabel>Preferred Time of Day</StyledFormLabel>
                  <FormDescription className="text-neutral-400">
                    Select all that apply. (Your local time)
                  </FormDescription>
                </div>
                <div className="space-y-2 pt-1">
                  {preferredTimes.map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name="preferredTimes"
                      render={({ field }) => {
                        return (
                          <FormItem key={item.id} className="flex flex-row items-center space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...(field.value || []), item.id])
                                    : field.onChange((field.value || []).filter((value) => value !== item.id))
                                }}
                                className="border-neutral-600 data-[state=checked]:bg-primary-green data-[state=checked]:border-primary-green data-[state=checked]:text-white"
                              />
                            </FormControl>
                            <FormLabel className="font-normal text-text-secondary hover:text-text-primary cursor-pointer">
                              {item.label}
                            </FormLabel>
                          </FormItem>
                        )
                      }}
                    />
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="timeZone"
            render={({ field }) => (
              <FormItem>
                <StyledFormLabel>Time Zone</StyledFormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className={selectTriggerClasses}>
                      <SelectValue placeholder="Select your time zone" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className={selectContentClasses}>
                    {timeZones.map((tz) => (
                      <SelectItem key={tz} value={tz} className={selectItemClasses}>
                        {tz}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormDescription className="text-neutral-400">
                  We'll try to auto-detect, but please confirm.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </section>

        {/* Form Footer */}
        <footer className="space-y-8 pt-10 border-t-2 border-primary-green">
          <div>
            <h3 className="font-semibold text-text-secondary mb-2">Privacy Notice:</h3>
            <p className="text-sm text-neutral-400">
              We respect your privacy. Your information will only be used to prepare for and conduct our conversation.
              We never sell or share contact information.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-text-secondary mb-2">What Happens Next:</h3>
            <ul className="list-disc list-inside text-sm text-neutral-400 space-y-1">
              <li>Within 2 business hours: Calendar invite with confirmed time</li>
              <li>24 hours before call: Agenda and prep materials</li>
              <li>During call: Strategic discussion tailored to your situation</li>
              <li>After call: Summary with recommended next steps</li>
            </ul>
          </div>
          <Button
            type="submit"
            className="w-full bg-accent-gold hover:bg-accent-gold/90 text-secondary-black font-bold py-3 px-6 text-lg rounded-button shadow-md hover:shadow-lg transition-all duration-300 ease-in-out hover:translate-y-[-2px] focus-visible:ring-2 focus-visible:ring-yellow-300 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            disabled={isSubmitting}
          >
            {isSubmitting && isMounted ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 border-2 border-secondary-black border-t-transparent rounded-full animate-spin"></div>
                <span>Scheduling...</span>
              </div>
            ) : (
              "Schedule My Strategic AI Consultation"
            )}
          </Button>
        </footer>
      </form>
    </Form>
  )
}
