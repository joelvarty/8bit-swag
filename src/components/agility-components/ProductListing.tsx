import { getProducts } from '@/lib/cms/commerce'
import { ProductGrid } from './ProductGrid'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/8bit/card'

export default async function ProductListing() {
	const products = await getProducts()
	return (
		<section data-agility-component="ProductListing" className="container mx-auto px-4 py-8">
			<Card>
				<CardHeader>
					<CardTitle>Products</CardTitle>
				</CardHeader>
				<CardContent>
					<ProductGrid products={products} />
				</CardContent>
			</Card>
		</section>
	)
}
