import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots (): MetadataRoute.Robots {
  const robots = process.env.ROBOTS
  const avoidIndex = typeof robots === 'string' && robots.includes('noindex')
  if (avoidIndex) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/'
      },
      sitemap: process.env.DOMAIN
    }
  }

  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },
    sitemap: process.env.DOMAIN
  }
}
