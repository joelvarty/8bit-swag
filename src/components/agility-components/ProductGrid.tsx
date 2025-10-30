import type { Product } from '@/lib/types'
import { ProductCard } from './ProductCard'

export function ProductGrid({ products }: { products: Product[] }) {
	return (
		<div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
			{products.map((p) => (
				<ProductCard key={p.slug} product={p} />
			))}
		</div>
	)
}
