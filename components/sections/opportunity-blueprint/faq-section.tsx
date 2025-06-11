"use client"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useState } from "react"
import { CustomButton } from "@/components/ui/custom-button"

const faqs = [
  {
    question: "How is this different from a consulting report?",
    answer: "Most consulting reports gather dust on a shelf. The Blueprint is an executable plan with clear ROI calculations, specific AI tools needed, and a 90-day action plan. We don't just tell you what to do - we show you exactly how to do it with your existing team and tech stack."
  },
  {
    question: "What if we don't have technical resources?",
    answer: "No problem. We can connect you with our vetted implementation partners or help you build an internal AI team. Many clients start with our managed services and transition to in-house as they build capabilities."
  },
  {
    question: "How do you guarantee $500K in savings?",
    answer: "We analyze your P&L, operational metrics, and industry benchmarks to identify inefficiencies. If we can't find at least $500K in potential savings, we'll refund 100% of your investment. It's that simple."
  },
  {
    question: "What's the typical implementation timeline?",
    answer: "Most clients see their first results within 30 days and full implementation in 90-120 days. We focus on quick wins first to fund the rest of your transformation."
  },
  {
    question: "Can we customize the engagement?",
    answer: "Absolutely. While we have a proven framework, every engagement is tailored to your specific business needs, tech stack, and team capabilities."
  }
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-secondary-black">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-text-primary mb-10 sm:mb-12 md:mb-16 px-2"
        >
          Your <span className="text-primary-green">Questions</span>, Answered
        </motion.h2>
        
        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="border border-border-color rounded-lg overflow-hidden"
            >
              <button
                className={`w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex justify-between items-center ${
                  openIndex === index ? 'bg-card-bg' : 'bg-card-bg/50'
                }`}
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-${index}`}
              >
                <span className="text-base sm:text-lg font-semibold text-text-primary text-left pr-2">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-4 h-4 sm:w-5 sm:h-5 text-primary-green flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>
              {openIndex === index && (
                <motion.div
                  id={`faq-${index}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-4 sm:px-6 py-3 sm:py-4 bg-card-bg/30"
                  role="region"
                >
                  <p className="text-sm sm:text-base text-text-secondary">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-text-secondary mb-6">
            Still have questions? We've got answers.
          </p>
          <CustomButton 
            variant="primary" 
            size="default"
            onClick={() => console.log("Schedule a Call")}
            className="mx-auto"
          >
            Schedule a Call
          </CustomButton>
        </motion.div>
      </div>
    </section>
  )
}
