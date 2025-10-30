"use client"

import { useEffect, useMemo, useRef, useState } from 'react'

type AsciiArtProps = {
	art: string
	/** Optional extra classes for the outer container */
	className?: string
	/** Font size in px before scaling is applied */
	baseFontPx?: number
	/** Line height in px before scaling is applied */
	baseLineHeightPx?: number
}

export function AsciiArt({ art, className, baseFontPx = 10, baseLineHeightPx = 10 }: AsciiArtProps) {
	const containerRef = useRef<HTMLDivElement | null>(null)
	const measureRef = useRef<HTMLPreElement | null>(null)
	const [scale, setScale] = useState(1)

	const lines = useMemo(() => art.split('\n'), [art])

	useEffect(() => {
		if (!containerRef.current || !measureRef.current) return

		const container = containerRef.current
		const content = measureRef.current

		const resize = () => {
			// Measure available size
			const cw = container.clientWidth
			const ch = container.clientHeight
			// Reset scale to 1 to measure intrinsic content size
			content.style.transform = 'scale(1)'
			const iw = content.scrollWidth
			const ih = content.scrollHeight
			if (iw === 0 || ih === 0 || cw === 0 || ch === 0) {
				setScale(1)
				return
			}
			const next = Math.min(cw / iw, ch / ih, 1)
			setScale(next)
		}

		resize()
		const ro = new ResizeObserver(resize)
		ro.observe(container)
		ro.observe(document.documentElement)
		return () => ro.disconnect()
	}, [art])

	return (
		<div ref={containerRef} className={['relative flex h-full w-full items-center justify-center overflow-hidden bg-black', className].filter(Boolean).join(' ')}>
			<pre
				ref={measureRef}
				className="m-0 inline-block whitespace-pre font-mono text-green-400"
				style={{
					fontSize: `${baseFontPx}px`,
					lineHeight: `${baseLineHeightPx}px`,
					transform: `scale(${scale})`,
					transformOrigin: 'center center',
				}}
			>
				{lines.join('\n')}
			</pre>
		</div>
	)
}


