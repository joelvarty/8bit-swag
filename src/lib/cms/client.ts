import { getAgilitySDK } from '@agility/nextjs'
import { env } from '@/lib/env'

export function getAgility() {
	return getAgilitySDK({
		guid: env.AGILITY_GUID,
		apiKey: env.AGILITY_API_FETCH_KEY,
		isPreview: false,
	})
}

export function getAgilityPreview() {
	return getAgilitySDK({
		guid: env.AGILITY_GUID,
		apiKey: env.AGILITY_API_PREVIEW_KEY,
		isPreview: true,
	})
}
