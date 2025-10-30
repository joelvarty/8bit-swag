export type Image = { url: string; width?: number; height?: number; alt?: string }

export type ProductVariant = {
	sku: string
	price: number
	sizeLabel?: string
	image?: Image
	stock?: number
}

export type Product = {
	title: string
	slug: string
	description?: string
	priceFrom?: number
	categories?: string[]
	sizes?: string[]
	images?: Image[]
	variants?: ProductVariant[]
}
