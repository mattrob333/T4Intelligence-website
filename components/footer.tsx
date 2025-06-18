import Link from "next/link"
import Image from "next/image"
import { Linkedin, Mail, Phone } from "lucide-react"

const footerLinks = {
  services: [
    { name: "FOUNDATION", href: "/business-dna" },
    { name: "THE BUILD", href: "/opportunity-blueprint" },
    { name: "YOUR CHIEF AI OFFICER", href: "/fractional-cao" },
  ],
  connect: [
    { name: "Book a Call", href: "/book-call", icon: Phone },
    { name: "LinkedIn", href: "https://www.linkedin.com/company/tier-4-intelligence/", icon: Linkedin, external: true },
    { name: "info@tier4intelligence.com", href: "mailto:info@tier4intelligence.com", icon: Mail },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-secondary-black text-text-secondary py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Column 1: Services */}
          <div>
            <h5 className="text-lg font-semibold text-text-primary mb-4">Services</h5>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-primary-green transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Connect */}
          <div>
            <h5 className="text-lg font-semibold text-text-primary mb-4">Connect</h5>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center hover:text-primary-green transition-colors"
                    target={link.external ? "_blank" : "_self"}
                    rel={link.external ? "noopener noreferrer" : ""}
                  >
                    {link.icon && <link.icon className="h-4 w-4 mr-2 text-primary-green" />}
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border-color pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="mb-4 md:mb-0 flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/logo.png"
                alt="Tier 4 Logo"
                width={90}
                height={24}
                priority
              />
              <span className="font-sans font-thin text-text-primary text-lg tracking-wide">
                Intelligence
              </span>
            </Link>
          </div>
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} Tier 4 Intelligence |{" "}
            <Link href="/privacy-policy" className="hover:text-primary-green">
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link href="/terms-of-service" className="hover:text-primary-green">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
