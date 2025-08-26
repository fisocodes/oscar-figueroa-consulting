import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots (): MetadataRoute.Robots {
  if (process.env.ROBOTS?.includes('noindex') !== true) {
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
