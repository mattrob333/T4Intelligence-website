export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Tier 4 Intelligence",
    "url": "https://tier4intelligence.com",
    "logo": "https://tier4intelligence.com/images/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-XXX-XXX-XXXX",
      "contactType": "customer service",
      "email": "info@tier4intelligence.com"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Your City",
      "addressRegion": "Your State",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://www.linkedin.com/company/tier-4-intelligence/"
    ],
    "description": "Tier 4 Intelligence provides fractional Chief Automation Officer services with 5X ROI guarantee. We transform $10M-$100M businesses with AI automation that delivers measurable results in 90 days."
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Fractional Chief Automation Officer Services",
    "description": "Transform your $10M-$100M business with AI automation. 5X ROI guarantee or you don't pay. Working prototypes delivered in 5 days.",
    "provider": {
      "@type": "Organization",
      "name": "Tier 4 Intelligence",
      "url": "https://tier4intelligence.com"
    },
    "areaServed": "US",
    "serviceType": "AI Consulting and Business Automation",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "description": "Fractional CAO services with 5X ROI guarantee. Assessment starts at $40K-$60K with guaranteed returns or full refund."
    }
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://tier4intelligence.com"
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}