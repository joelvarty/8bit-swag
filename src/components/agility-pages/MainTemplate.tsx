import type { ReactNode } from 'react'
import { ModuleRegistry } from '../agility/registry'

export default async function MainTemplate({ children }: { children?: ReactNode }) {
	// Placeholder for sitemap-driven rendering via Agility.
	// We'll wire ContentZone and modules after importing CMS models.
	return (
		<div data-app="8-bit-swag">
			{children}
		</div>
	)
}
