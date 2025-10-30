import Link from 'next/link'

export default function HomePage() {
	return (
		<main className="container mx-auto px-4 py-10">
			<h1 className="mb-4 text-3xl font-bold">8-bit Swag</h1>
			<p className="mb-6 text-gray-700">Retro merch powered by Agility CMS.</p>
			<Link href="/products" className="rounded bg-black px-4 py-2 text-white hover:bg-gray-800">Shop products</Link>
		</main>
	)
}
