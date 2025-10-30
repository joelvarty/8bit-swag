'use client'
import { create } from 'zustand'
import type { Product } from '@/lib/types'

type CartItem = { slug: string; title: string; quantity: number; price?: number }

type CartState = {
	items: CartItem[]
	add: (product: Product) => void
	clear: () => void
}

export const useCartStore = create<CartState>((set) => ({
	items: [],
	add: (product) => set((s) => {
		const existing = s.items.find((i) => i.slug === product.slug)
		if (existing) {
			return { items: s.items.map((i) => (i.slug === product.slug ? { ...i, quantity: i.quantity + 1 } : i)) }
		}
		return { items: [...s.items, { slug: product.slug, title: product.title, price: product.priceFrom, quantity: 1 }] }
	}),
	clear: () => set({ items: [] }),
}))
