'use client'
import { useCartStore } from '@/lib/cart'
import type { Product } from '@/lib/types'

export function AddToCartButton({ product }: { product: Product }) {
	const add = useCartStore((s) => s.add)
	return (
		<button onClick={() => add(product)} className="rounded bg-black px-4 py-2 text-white hover:bg-gray-800">
			Add to cart
		</button>
	)
}
