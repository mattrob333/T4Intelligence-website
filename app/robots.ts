import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/debug-form/',
        '/test-form/',
        '/private/',
        '/*?*', // Disallow pages with query parameters to avoid duplicate content
      ],
    },
    sitemap: 'https://tier4intelligence.com/sitemap.xml',
  }
}