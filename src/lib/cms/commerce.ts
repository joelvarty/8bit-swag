import { getContentList } from '@/lib/cms/getContentList'
import type { Product } from '@/lib/types'

const PRODUCTS_CONTAINER = 'products'

export async function getProducts(): Promise<Product[]> {
	const { items } = await getContentList<any>({ referenceName: PRODUCTS_CONTAINER, take: 50, locale: 'en-us' })
	return items.map(mapProduct)
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
	const { items } = await getContentList<any>({ referenceName: PRODUCTS_CONTAINER, filterString: `fields.slug[eq]"${slug}"`, take: 1, locale: 'en-us' })
	if (!items?.length) return null
	return mapProduct(items[0])
}

function mapProduct(item: any): Product {
	const f = item?.fields ?? {}
	return {
		title: f.title ?? '',
		slug: f.slug ?? '',
		description: f.description ?? '',
        asciiArt: f.asciiArt ?? undefined,
		priceFrom: f.priceFrom != null && f.priceFrom !== '' ? Number(f.priceFrom) : undefined,
		categories: (f.categories_text?.split(',') ?? []).filter(Boolean),
		sizes: (f.sizes_text?.split(',') ?? []).filter(Boolean),
		images: Array.isArray(f.images) ? f.images.map((img: any) => ({ url: img.url, width: img.width, height: img.height, alt: img.label })) : [],
		variants: Array.isArray(f.variants) ? f.variants.map((v: any) => ({ sku: v.fields?.sku, price: Number(v.fields?.price ?? 0), sizeLabel: v.fields?.sizeRef_text, image: v.fields?.image ? { url: v.fields.image.url, width: v.fields.image.width, height: v.fields.image.height, alt: v.fields.image.label } : undefined, stock: v.fields?.stock })) : [],
	}
}
