import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap (): MetadataRoute.Sitemap {
  return [
    {
      url: process.env.DOMAIN ?? '',
      lastModified: new Date(),
      alternates: {
        languages: {
          'es-MX': process.env.ES_MX_DOMAIN,
          'en-AU': process.env.EN_AU_DOMAIN
        }
      }
    }
  ]
}
