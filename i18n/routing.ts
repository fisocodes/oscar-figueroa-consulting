import { defineRouting } from 'next-intl/routing'

const requiredEnvironmentVariables = {
  EN_AU_DOMAIN: process.env.EN_AU_DOMAIN,
  ES_MX_DOMAIN: process.env.ES_MX_DOMAIN
}

for (const [key, value] of Object.entries(requiredEnvironmentVariables)) {
  if (value === undefined || value === '') { throw new Error(`${key} environment variable is missing`) }
}

const {
  EN_AU_DOMAIN: enAUDomain,
  ES_MX_DOMAIN: esMXDomain
} = requiredEnvironmentVariables as Record<string, string>

export const routing = defineRouting({
  localePrefix: 'never',
  locales: ['es-MX', 'en-AU'],
  defaultLocale: 'en-AU',
  domains: [
    {
      domain: enAUDomain,
      defaultLocale: 'en-AU',
      locales: ['en-AU']
    },
    {
      domain: esMXDomain,
      defaultLocale: 'es-MX',
      locales: ['es-MX']
    }
  ]
})
