import Link from 'next/link'
import Image from 'next/image'
import type { Product } from '@/lib/types'

export function ProductCard({ product }: { product: Product }) {
	const img = product.images?.[0]
	return (
		<Link href={`/products/${product.slug}`} className="block rounded border p-3 hover:shadow">
			{img?.url ? (
				<div className="aspect-square relative mb-2 overflow-hidden rounded">
					<Image src={img.url} alt={img.alt ?? product.title} fill sizes="(max-width:768px) 100vw, 25vw" className="object-cover" />
				</div>
			) : null}
			<div className="text-sm text-gray-700">{product.title}</div>
			{product.priceFrom != null ? <div className="text-base font-semibold">${product.priceFrom.toFixed(2)}</div> : null}
		</Link>
	)
}
