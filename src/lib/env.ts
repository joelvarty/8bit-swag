/* Strongly-typed environment variables with runtime validation */

function requireEnv(name: string): string {
  const value = process.env[name]
  if (!value || value.trim().length === 0) {
    throw new Error(`Missing required env var: ${name}`)
  }
  return value
}

export const env = {
  get AGILITY_GUID() {
    return requireEnv('AGILITY_GUID')
  },
  get AGILITY_API_FETCH_KEY() {
    return requireEnv('AGILITY_API_FETCH_KEY')
  },
  get AGILITY_API_PREVIEW_KEY() {
    return requireEnv('AGILITY_API_PREVIEW_KEY')
  },
  get NEXT_PUBLIC_SITE_URL() {
    return requireEnv('NEXT_PUBLIC_SITE_URL')
  },
}

export function getAll() {
  return {
    AGILITY_GUID: env.AGILITY_GUID,
    AGILITY_API_FETCH_KEY: env.AGILITY_API_FETCH_KEY,
    AGILITY_API_PREVIEW_KEY: env.AGILITY_API_PREVIEW_KEY,
    NEXT_PUBLIC_SITE_URL: env.NEXT_PUBLIC_SITE_URL,
  }
}
