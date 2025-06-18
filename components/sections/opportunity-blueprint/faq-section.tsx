"use client"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useState } from "react"
import { CustomButton } from "@/components/ui/custom-button"

const faqs = [
  {
    question: "How is this different from hiring consultants or a full-time AI executive?",
    answer: "Consultants give you PowerPoints and leave. A full-time Chief AI Officer costs $400K+ per year. Your Foundation™ gives you four specialized AI executives working 24/7, plus a Fractional CAO to guide them - all for 80% less than a single full-time hire. They start delivering insights before you even sign a contract."
  },
  {
    question: "What exactly are these AI executives?",
    answer: "ATLAS, NAVIGATOR, MAESTRO, and CATALYST are specialized AI agents trained on your specific business context. They're not generic chatbots - they're custom-built executives with deep knowledge of your industry, your processes, and your unique challenges. They work together as your virtual C-suite, available 24/7."
  },
  {
    question: "How quickly can we see real results?",
    answer: "Day 1: Your AI executives are already analyzing public data about your business. Week 1: They've identified your top automation opportunities. Week 4: First automations are live. Month 4: Full ROI realized. Most clients see payback in 90-120 days."
  },
  {
    question: "What if we don't have the technical resources to manage AI?",
    answer: "That's exactly why we include Fractional CAO services. You get expert AI leadership without the full-time cost. We handle the technical complexity while your team focuses on using the insights. Many clients start with heavy support and gradually build internal capabilities."
  },
  {
    question: "How do you guarantee ROI?",
    answer: "Before we even meet, your AI executives analyze your business and identify savings opportunities. If ATLAS, NAVIGATOR, MAESTRO, and CATALYST together can't find at least $500K in potential value, we'll refund 100% of your investment. We're that confident in our approach."
  },
  {
    question: "Is our data secure with the Foundation™?",
    answer: "Absolutely. Your Foundation™ lives in your own secure Google Workspace environment. You maintain complete control and ownership. We use enterprise-grade security, and your AI executives only access what you explicitly permit. Your competitive intelligence stays yours."
  },
  {
    question: "Can we customize which AI executives we need?",
    answer: "While all four executives work best as a team, we can adjust their focus based on your priorities. Need more strategic analysis? ATLAS takes the lead. Focusing on operations? NAVIGATOR drives the agenda. The Foundation™ adapts to your needs."
  },
  {
    question: "What happens after the initial Foundation™ is built?",
    answer: "Your AI executives keep learning and improving. They automatically ingest new data, adapt to changes in your business, and identify new opportunities. With our continuous support options, they evolve from helpful tools to indispensable members of your leadership team."
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
            Still have questions? Let's talk about your AI executives.
          </p>
        </motion.div>
      </div>
    </section>
  )
}