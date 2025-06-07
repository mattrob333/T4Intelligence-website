import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider" // Assuming this exists for dark mode logic

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Tier 4 Intelligence - AI That Actually Works",
  description: "We teach AI your business in 90 days. Guaranteed Results or You Don't Pay.",
  // Add Open Graph tags and other SEO metadata as per spec later
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-inter antialiased", inter.variable)}>
        {/* ThemeProvider might not be strictly necessary if only dark mode is used, 
          but good practice if theme toggling might be added later.
          For now, we're hardcoding dark theme via globals.css and tailwind.config.ts.
      */}
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Navigation />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
