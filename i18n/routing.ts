import { defineRouting } from 'next-intl/routing'

const isDev = process.env.NODE_ENV === 'development'
const requiredEnvironmentVariables = {
  EN_AU_DOMAIN: process.env.EN_AU_DOMAIN,
  EN_AU_LOCAL: process.env.EN_AU_LOCAL,
  ES_MX_DOMAIN: process.env.ES_MX_DOMAIN,
  ES_MX_LOCAL: process.env.ES_MX_LOCAL
}

for (const [key, value] of Object.entries(requiredEnvironmentVariables)) {
  if (value === undefined || value === '') { throw new Error(`${key} environment variable is missing`) }
}

const {
  EN_AU_DOMAIN: enAUDomain,
  EN_AU_LOCAL: enAULocal,
  ES_MX_DOMAIN: esMXDomain,
  ES_MX_LOCAL: esMXLocal
} = requiredEnvironmentVariables as Record<string, string>

export const routing = defineRouting({
  localePrefix: 'never',
  locales: ['en-AU', 'es-MX'],
  defaultLocale: 'en-AU',
  domains: [
    {
      domain: isDev ? enAULocal : enAUDomain,
      defaultLocale: 'en-AU',
      locales: ['en-AU']
    }, {
      domain: isDev ? esMXLocal : esMXDomain,
      defaultLocale: 'es-MX',
      locales: ['es-MX']
    }
  ]
})
