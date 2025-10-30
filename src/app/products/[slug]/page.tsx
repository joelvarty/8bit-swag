import ProductDetails from '@/components/agility-components/ProductDetails'

type Props = { params: Promise<{ slug: string }> }

export default async function ProductDetailsPage({ params }: Props) {
	const { slug } = await params
	return <ProductDetails slug={slug} />
}
