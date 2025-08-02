import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import StructuredData from "@/components/structured-data"
import { ThemeProvider } from "@/components/theme-provider"
import GoogleAnalytics from "@/components/google-analytics"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Tier 4 Intelligence - AI That Actually Works | 5X ROI Guarantee | Fractional CAO",
  description: "Transform your $10M-$100M business with AI automation. 5X ROI guarantee or you don't pay. Working prototypes in 5 days. Join 200+ executives who've automated their operations.",
  keywords: "fractional chief automation officer, AI consulting, business automation, AI ROI guarantee, fractional CAO, AI business transformation, automation consulting",
  authors: [{ name: "Tier 4 Intelligence" }],
  creator: "Tier 4 Intelligence",
  publisher: "Tier 4 Intelligence",
  metadataBase: new URL('https://tier4intelligence.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Tier 4 Intelligence - AI That Actually Works | Fractional CAO Services",
    description: "Transform your $10M-$100M business with AI automation in 90 days. World-class fractional CAO services. 5X ROI guarantee or you don't pay.",
    url: 'https://tier4intelligence.com',
    siteName: 'Tier 4 Intelligence',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Tier 4 Intelligence - Fractional Chief Automation Officer Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Tier 4 Intelligence - AI That Actually Works | Fractional CAO Services",
    description: "Transform your $10M-$100M business with AI automation in 90 days. 5X ROI guarantee or you don't pay.",
    images: ['/images/twitter-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="/images/Property%201=color.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" href="/images/what-is-foundation.png" as="image" type="image/png" />
        <meta name="theme-color" content="#00d084" />
        <StructuredData />
        <GoogleAnalytics />
      </head>
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
