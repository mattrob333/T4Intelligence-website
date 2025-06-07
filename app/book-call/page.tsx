import type { Metadata } from "next"
import { BookCallForm } from "@/components/book-call-form" // Corrected import

export const metadata: Metadata = {
  title: "Book a Call | Tier 4 Intelligence",
  description:
    "Let's explore your AI transformation opportunity. Complete this form for a 30-minute strategic conversation.",
}

export default function BookCallPage() {
  return (
    <div className="bg-black text-text-primary py-12 md:py-20">
      {" "}
      {/* Reduced top/bottom padding slightly */}
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        {" "}
        {/* Slightly reduced max-width for better form readability */}
        <div className="text-center mb-10 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Let's Explore Your AI Transformation Opportunity
          </h1>
          <p className="text-md md:text-lg text-text-secondary">
            30-minute strategic conversation to identify your biggest automation wins
          </p>
        </div>
        <BookCallForm />
      </div>
    </div>
  )
}
