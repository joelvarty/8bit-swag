import { getApi } from '@agility/content-fetch'
import { env } from '@/lib/env'

export function getAgility() {
	return getApi({
		guid: env.AGILITY_GUID,
		apiKey: env.AGILITY_API_FETCH_KEY,
		isPreview: false,
	})
}

export function getAgilityPreview() {
	return getApi({
		guid: env.AGILITY_GUID,
		apiKey: env.AGILITY_API_PREVIEW_KEY,
		isPreview: true,
	})
}
