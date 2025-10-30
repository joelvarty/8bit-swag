'use client'
import { useCartStore } from '@/lib/cart'
import type { Product } from '@/lib/types'
import { Button } from '@/components/ui/8bit/button'

export function AddToCartButton({ product }: { product: Product }) {
	const add = useCartStore((s) => s.add)
	return (
        <Button onClick={() => add(product)} size="sm" className="px-4">
            Add to cart
        </Button>
	)
}
