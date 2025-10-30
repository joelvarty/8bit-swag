import '../styles/globals.css'
import type { ReactNode } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/8bit/button'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="retro dark min-h-screen bg-background text-foreground">
        <div className="grid min-h-screen grid-cols-1 md:grid-cols-[240px_1fr]">
          <aside className="hidden md:block border-r bg-card">
            <div className="p-4 border-b">
              <Link href="/" className="inline-flex items-center gap-2 font-bold">
                <span className="text-xl">8bit swag</span>
              </Link>
            </div>
            <nav className="p-3 space-y-5">
              <Button asChild size="sm" className="w-full justify-center">
                <Link href="/">Home</Link>
              </Button>
              <Button asChild size="sm" className="w-full justify-center">
                <Link href="/products">Products</Link>
              </Button>
              <Button asChild size="sm" className="w-full justify-center">
                <Link href="/cart">Cart</Link>
              </Button>
            </nav>
          </aside>
          <div className="flex min-h-screen flex-col">
            <main className="flex-1 p-4 md:p-6">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}
