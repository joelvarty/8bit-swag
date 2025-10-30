import { getProducts } from '@/lib/cms/commerce'
import { ProductGrid } from './ProductGrid'

export default async function ProductListing() {
	const products = await getProducts()
	return (
		<section data-agility-component="ProductListing" className="container mx-auto px-4 py-8">
			<h1 className="mb-6 text-2xl font-bold">Products</h1>
			<ProductGrid products={products} />
		</section>
	)
}
