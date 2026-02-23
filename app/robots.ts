import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/', '/_error', '/404', '/500'],
    },
    sitemap: 'https://abhilashsahu.github.io/abhilash-portfolio/sitemap.xml',
  }
}
