import Link from 'next/link'
import Image from 'next/image'
import type { Product } from '@/lib/types'
import { Card, CardContent } from '@/components/ui/8bit/card'
import { Badge } from '@/components/ui/8bit/badge'
import { AsciiArt } from './AsciiArt'

export function ProductCard({ product }: { product: Product }) {
	const img = product.images?.[0]
	return (
		<Link href={`/products/${product.slug}`} className="block">
			<Card>
				<CardContent className="p-3">
					{img?.url ? (
						<div className="aspect-square relative mb-2 overflow-hidden rounded">
							<Image src={img.url} alt={img.alt ?? product.title} fill sizes="(max-width:768px) 100vw, 25vw" className="object-cover" />
						</div>
					) : product.asciiArt ? (
						<div className="aspect-square mb-2 overflow-hidden rounded">
							<AsciiArt art={product.asciiArt} className="p-2" baseFontPx={10} baseLineHeightPx={10} />
						</div>
					) : null}
					<div className="mb-1 text-sm text-gray-900">{product.title}</div>
					{product.priceFrom != null ? (
						<Badge variant="secondary">${product.priceFrom.toFixed(2)}</Badge>
					) : null}
				</CardContent>
			</Card>
		</Link>
	)
}
