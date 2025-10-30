import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/8bit/card'
import { Button } from '@/components/ui/8bit/button'

export default function HomePage() {
	return (
		<div className="space-y-6">
			<div className="grid gap-4 md:grid-cols-3">
				{/* Chart 1: Creativity Boost (bar chart) */}
				<Card>
					<CardHeader>
						<CardTitle>Creativity Boost</CardTitle>
					</CardHeader>
					<CardContent>
						<svg viewBox="0 0 120 80" className="w-full" aria-label="Bar chart showing higher creativity with retro thinking">
							<rect x="8" y="10" width="20" height="60" className="fill-secondary animate-bar" style={{ animationDelay: '100ms' }} />
							<rect x="46" y="25" width="20" height="45" className="fill-accent animate-bar" style={{ animationDelay: '250ms' }} />
							<rect x="84" y="5" width="20" height="70" className="fill-primary animate-bar" style={{ animationDelay: '400ms' }} />
						</svg>
						<p className="mt-2 text-xs text-muted-foreground">Retro constraints inspire bigger ideas.</p>
					</CardContent>
				</Card>

				{/* Chart 2: Nostalgia Engagement (sparkline/step chart) */}
				<Card>
					<CardHeader>
						<CardTitle>Nostalgia Engagement</CardTitle>
					</CardHeader>
					<CardContent>
						<svg viewBox="0 0 120 80" className="w-full" aria-label="Line chart showing strong engagement for retro">
							<polyline
								points="0,60 20,55 40,50 60,35 80,25 100,20 120,18"
								className="fill-none stroke-primary animate-line"
								strokeWidth="3"
								style={{ ['--dash' as any]: 300 }}
							/>
							{/* pixel markers */}
							{[0,20,40,60,80,100,120].map((x, i) => (
								<rect
									key={i}
									x={x - 1.5}
									y={60 - i * 7}
									width="3"
									height="3"
									className={(i % 2 === 0 ? "fill-accent" : "fill-secondary") + " animate-pixel"}
									style={{ animationDelay: `${i * 80}ms` }}
								/>
							))}
						</svg>
						<p className="mt-2 text-xs text-muted-foreground">Familiar vibes increase time-on-page.</p>
					</CardContent>
				</Card>

				{/* Chart 3: Maintainability Clarity (donut-like grid) */}
				<Card>
					<CardHeader>
						<CardTitle>Maintainability Clarity</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="grid grid-cols-6 gap-1">
							{Array.from({ length: 30 }).map((_, i) => (
								<div
									key={i}
									style={{ animationDelay: `${(i % 10) * 60}ms` }}
									className={
										(i % 7 === 0 ? "h-3 w-3 bg-primary" : i % 5 === 0 ? "h-3 w-3 bg-accent" : "h-3 w-3 bg-muted") + " animate-pixel"
									}
								/>
							))}
						</div>
						<p className="mt-2 text-xs text-muted-foreground">Simple primitives = simpler long-term code.</p>
					</CardContent>
				</Card>
			</div>
			<Card>
				<CardHeader>
					<CardTitle>Get Started</CardTitle>
				</CardHeader>
				<CardContent>
					<p className="mb-4">Explore our retro merch and products.</p>
					<Link href="/products">
						<Button variant="default">Shop products</Button>
					</Link>
				</CardContent>
			</Card>
		</div>
	)
}
