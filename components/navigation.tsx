"use client"

import * as React from "react"
import Link from "next/link"
import { CustomButton } from "@/components/ui/custom-button"
import { Menu, X, ChevronDown } from "lucide-react"
import { trackCTAClick } from "@/components/google-analytics"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

const navItems = [
  {
    name: "Services",
    href: "#",
    dropdown: [
      { name: "FOUNDATION", href: "/business-dna" },
      { name: "THE BUILD", href: "/opportunity-blueprint" },
      { name: "YOUR CHIEF AI OFFICER", href: "/fractional-cao" },
    ],
  },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)
  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name)
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled || isOpen ? "bg-black/80 backdrop-blur-md shadow-lg" : "bg-transparent",
        "h-[80px]",
      )}
    >
      <div className="container mx-auto flex items-center justify-between h-full px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2">
          {" "}
          {/* Changed classes for alignment and spacing */}
          <Image
            src="/images/logo.png" // Using the "TIER" + "4 icon" image
            alt="Tier 4 Logo"
            width={90} // Adjusted width
            height={24} // Maintained height
            priority
            // Removed className="self-center" as items-center on Link handles it
          />
          <span className="font-sans font-thin text-text-primary text-lg tracking-wide">
            {" "}
            {/* Simplified span styling */}
            Intelligence
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) =>
            item.dropdown ? (
              <div key={item.name} className="relative">
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="flex items-center text-text-secondary hover:text-text-primary transition-colors"
                >
                  {item.name}
                  <ChevronDown
                    className={cn("ml-1 h-4 w-4 transition-transform", openDropdown === item.name ? "rotate-180" : "")}
                  />
                </button>
                <AnimatePresence>
                  {openDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-card-bg rounded-md shadow-xl py-2 border border-border-color"
                    >
                      {item.dropdown.map((dropItem) => (
                        <Link
                          key={dropItem.name}
                          href={dropItem.href}
                          className="block px-4 py-2 text-sm text-text-secondary hover:bg-secondary-black hover:text-primary-green"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {dropItem.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="text-text-secondary hover:text-text-primary transition-colors"
              >
                {item.name}
              </Link>
            ),
          )}
          <CustomButton 
            variant="primary" 
            size="default" 
            onClick={() => {
              trackCTAClick('Book a Call', 'navigation')
              window.location.href = "/book-call"
            }}
          >
            Get 5X ROI Assessment
          </CustomButton>
        </nav>

        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <X className="h-7 w-7 text-text-primary" /> : <Menu className="h-7 w-7 text-text-primary" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-[80px] left-0 right-0 bg-black/90 backdrop-blur-md shadow-lg"
          >
            <nav className="flex flex-col items-center py-4 space-y-4">
              {/* Home button for mobile */}
              <Link
                href="/"
                className="text-text-secondary hover:text-text-primary transition-colors py-2"
                onClick={toggleMenu}
              >
                Home
              </Link>
              {navItems.map((item) =>
                item.dropdown ? (
                  <div key={item.name} className="w-full text-center">
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center justify-center w-full py-2 text-text-secondary hover:text-text-primary transition-colors"
                    >
                      {item.name}
                      <ChevronDown
                        className={cn(
                          "ml-1 h-4 w-4 transition-transform",
                          openDropdown === item.name ? "rotate-180" : "",
                        )}
                      />
                    </button>
                    {openDropdown === item.name && (
                      <div className="bg-secondary-black/50 w-full">
                        {item.dropdown.map((dropItem) => (
                          <Link
                            key={dropItem.name}
                            href={dropItem.href}
                            className="block py-2 text-sm text-text-secondary hover:text-primary-green"
                            onClick={toggleMenu}
                          >
                            {dropItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-text-secondary hover:text-text-primary transition-colors py-2"
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </Link>
                ),
              )}
              <CustomButton
                variant="primary"
                size="default"
                className="w-11/12"
                onClick={() => {
                  trackCTAClick('Book a Call', 'mobile-navigation')
                  toggleMenu()
                  window.location.href = "/book-call"
                }}
              >
                Get 5X ROI Assessment
              </CustomButton>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
