"use client"
import { Card, CardContent } from "@/components/ui/card" // Using shadcn card for testimonials
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel" // Using shadcn carousel
import Autoplay from "embla-carousel-autoplay"
import { motion } from "framer-motion"

const testimonials = [
  {
    quote:
      "We spent $3M with Deloitte and got nothing but slides. Tier 4 delivered working AI in 90 days and we saw 5X ROI within 6 months.",
    author: "Sarah Chen",
    title: "CEO, TechCorp",
    companySize: "$200M Revenue",
  },
  {
    quote:
      "Finally, consultants who actually deliver. Our order processing is 89% automated and saves us $2.4M annually.",
    author: "Mike Torres",
    title: "CFO, GlobalParts Manufacturing",
    companySize: "$150M Revenue",
  },
  {
    quote:
      "The Business DNA mapping was eye-opening. We discovered $3M in automation opportunities we didn't know existed.",
    author: "Jennifer Wu",
    title: "COO, Regional Health System",
    companySize: "$300M Revenue",
  },
]

const clientLogos = [
  // Placeholder logos
  { name: "ClientLogo1", src: "/placeholder.svg?width=120&height=60", alt: "TechCorp Logo" },
  { name: "ClientLogo2", src: "/placeholder.svg?width=120&height=60", alt: "GlobalParts Manufacturing Logo" },
  { name: "ClientLogo3", src: "/placeholder.svg?width=120&height=60", alt: "Regional Health System Logo" },
  { name: "ClientLogo4", src: "/placeholder.svg?width=120&height=60", alt: "InnovateCo Logo" },
  { name: "ClientLogo5", src: "/placeholder.svg?width=120&height=60", alt: "FutureSolutions Logo" },
  { name: "ClientLogo6", src: "/placeholder.svg?width=120&height=60", alt: "Synergy Inc Logo" },
]

export default function SocialProofSection() {
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
          Join <span className="text-primary-green">50+ Mid-Market Leaders</span> Getting Real AI Results
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
            className="w-full max-w-4xl mx-auto mb-16 md:mb-24"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
                  {" "}
                  {/* Show one at a time */}
                  <div className="p-1">
                    <Card className="bg-card-bg border-border-color text-text-primary h-full flex flex-col justify-between">
                      <CardContent className="flex flex-col items-center justify-center p-6 md:p-10 text-center space-y-4">
                        <p className="text-body-large-mobile md:text-body-large italic">"{testimonial.quote}"</p>
                        <div>
                          <p className="font-bold text-primary-green">{testimonial.author}</p>
                          <p className="text-sm text-text-secondary">{testimonial.title}</p>
                          <p className="text-xs text-text-secondary/70">{testimonial.companySize}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-[-50px] text-primary-green bg-card-bg border-primary-green hover:bg-primary-green hover:text-card-bg" />
            <CarouselNext className="right-[-50px] text-primary-green bg-card-bg border-primary-green hover:bg-primary-green hover:text-card-bg" />
          </Carousel>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12"
        >
          <h3 className="text-center text-xl text-text-secondary mb-8">Trusted by industry leaders:</h3>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 md:gap-x-12">
            {clientLogos.map((logo) => (
              <motion.img
                key={logo.name}
                src={logo.src}
                alt={logo.alt}
                className="h-10 md:h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
