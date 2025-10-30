import type { NextRequest } from 'next/server'

export function middleware(_req: NextRequest) {
	// Minimal pass-through for now. Add preview/i18n/redirects later.
	return
}

export const config = {
	matcher: ['/((?!_next|.*\\.\n(?:.*)).*)'],
}
