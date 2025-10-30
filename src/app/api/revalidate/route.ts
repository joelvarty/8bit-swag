import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
	try {
		const { tag } = await req.json()
		if (!tag) return NextResponse.json({ error: 'Missing tag' }, { status: 400 })
		// @ts-ignore: next/unstable
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		await (global as any).revalidateTag?.(tag)
		return NextResponse.json({ revalidated: true, tag })
	} catch (e: any) {
		return NextResponse.json({ error: e?.message ?? 'Error' }, { status: 500 })
	}
}
