"use client"
import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion" // Using shadcn accordion

const faqs = [
  {
    question: "Is this really free?",
    answer: "Yes. We only make money if we work together and deliver results.",
  },
  {
    question: "Will this be a sales pitch?",
    answer: "No. If we're not a fit, we'll tell you and recommend alternatives.",
  },
  {
    question: "What should I prepare?",
    answer: "Just bring your challenges. We'll handle the rest.",
  },
  {
    question: "Who will I talk to?",
    answer: "A senior strategist who's implemented 50+ AI transformations.",
  },
  {
    question: "What if I need to reschedule?",
    answer: "No problem. Life happens. Just use the link in your confirmation.",
  },
]

export default function FaqSection() {
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
          Common <span className="text-primary-green">Questions</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card-bg border border-border-color rounded-lg px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-text-primary hover:no-underline hover:text-primary-green">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-text-secondary pt-2 pb-4">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
