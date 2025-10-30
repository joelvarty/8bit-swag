import Image from 'next/image'
import { getProductBySlug } from '@/lib/cms/commerce'
import { AddToCartButton } from '@/components/ui/AddToCartButton'
import { Card, CardContent } from '@/components/ui/8bit/card'
import { AsciiArt } from './AsciiArt'

export default async function ProductDetails({ slug }: { slug: string }) {
	const product = await getProductBySlug(slug)
	if (!product) return <div className="container mx-auto px-4 py-8">Product not found.</div>
	const img = product.images?.[0]
	return (
		<section data-agility-component="ProductDetails" className="container mx-auto grid gap-8 px-4 py-8 md:grid-cols-2">
			{img?.url ? (
				<Card>
					<CardContent className="p-0">
						<div className="aspect-square relative overflow-hidden rounded">
							<Image src={img.url} alt={img.alt ?? product.title} fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
						</div>
					</CardContent>
				</Card>
			) : product.asciiArt ? (
				<Card>
					<CardContent className="p-0">
						<div className="aspect-square overflow-hidden rounded">
							<AsciiArt art={product.asciiArt} className="p-4" baseFontPx={12} baseLineHeightPx={12} />
						</div>
					</CardContent>
				</Card>
			) : null}
			<Card>
				<CardContent className="p-6">
					<h1 className="mb-2 text-3xl font-bold">{product.title}</h1>
					{product.priceFrom != null ? <div className="mb-4 text-xl font-semibold">${product.priceFrom.toFixed(2)}</div> : null}
					{product.description ? <p className="mb-6 text-foreground">{product.description}</p> : null}
					<AddToCartButton product={product} />
				</CardContent>
			</Card>
		</section>
	)
}
