'use client'
import { useCartStore } from '@/lib/cart'

export default function CartPage() {
	const items = useCartStore((s) => s.items)
	const clear = useCartStore((s) => s.clear)
	const total = items.reduce((sum, i) => sum + (i.price ?? 0) * i.quantity, 0)
	return (
		<div className="container mx-auto max-w-2xl px-4 py-8">
			<h1 className="mb-6 text-2xl font-bold">Cart</h1>
			{items.length === 0 ? (
				<div>Your cart is empty.</div>
			) : (
				<>
					<ul className="divide-y">
						{items.map((i) => (
							<li key={i.slug} className="flex items-center justify-between py-3">
								<div>
									<div className="font-medium">{i.title}</div>
									<div className="text-sm text-gray-600">x{i.quantity}</div>
								</div>
								<div>${((i.price ?? 0) * i.quantity).toFixed(2)}</div>
							</li>
						))}
					</ul>
					<div className="mt-6 flex items-center justify-between">
						<div className="text-lg font-semibold">Total</div>
						<div className="text-lg font-semibold">${total.toFixed(2)}</div>
					</div>
					<button onClick={clear} className="mt-6 rounded bg-black px-4 py-2 text-white hover:bg-gray-800">Clear</button>
				</>
			)}
		</div>
	)
}
