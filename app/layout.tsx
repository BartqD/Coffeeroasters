import type { Metadata } from 'next'
import { Fraunces, Barlow } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({ weight: ['400', '600', '700'], subsets: ['latin'], variable: '--font-fraunces' })
const barlow = Barlow({ weight: ['400', '600', '700'], subsets: ['latin'], variable: '--font-barlow' })

export const metadata: Metadata = {
	title: 'Coffeeroasters subscription site',
	description: 'Multi-page coffee subscription website',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' className={`${fraunces.variable} ${barlow.variable}`}>
			<body className='bg-light-cream'>{children}</body>
		</html>
	)
}
