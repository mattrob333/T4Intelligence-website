import Link from "next/link"
import Image from "next/image"
import { Linkedin, Mail, Phone } from "lucide-react"

const footerLinks = {
  company: [
    { name: "About Tier 4", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Business DNA Map", href: "/business-dna" },
    { name: "AI Opportunity Blueprint", href: "/opportunity-blueprint" },
    { name: "Fractional CAO", href: "/fractional-cao" },
    { name: "Resources", href: "/resources" },
  ],
  industries: [
    { name: "Manufacturing", href: "/industries/manufacturing" },
    { name: "Healthcare", href: "/industries/healthcare" },
    { name: "Financial Services", href: "/industries/financial-services" },
    { name: "Technology", href: "/industries/technology" },
  ],
  connect: [
    { name: "Book a Call", href: "/book-call", icon: Phone },
    { name: "LinkedIn", href: "https://linkedin.com/company/tier4ai", icon: Linkedin, external: true },
    { name: "success@tier4.ai", href: "mailto:success@tier4.ai", icon: Mail },
    { name: "1-800-TIER4AI", href: "tel:1-800-843-7424", icon: Phone },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-secondary-black text-text-secondary py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Company */}
          <div>
            <h5 className="text-lg font-semibold text-text-primary mb-4">Company</h5>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-primary-green transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Services */}
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

          {/* Column 3: Industries */}
          <div>
            <h5 className="text-lg font-semibold text-text-primary mb-4">Industries</h5>
            <ul className="space-y-2">
              {footerLinks.industries.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-primary-green transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Connect */}
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
          <div className="mb-4 md:mb-0">
            <Link href="/">
              <Image
                src="/images/tier-logo-light.svg" // Updated to new SVG logo
                alt="Tier 4 Logo" // Updated alt text for accuracy
                width={134} // Adjusted width for aspect ratio 87:26, maintaining height ~40px
                height={40} // Maintained height
              />
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
