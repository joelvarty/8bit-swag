import ProductDetails from '@/components/agility-components/ProductDetails'

type Props = { params: { slug: string } }

export default function ProductDetailsPage({ params }: Props) {
	return <ProductDetails slug={params.slug} />
}
