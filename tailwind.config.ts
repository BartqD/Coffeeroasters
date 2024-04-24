import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		screens: {
			sm: '376px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		extend: {
			colors: {
				dark: {
					cyan: '#0A615F',
					grey: '#333D4B',
				},
				pale: {
					orange: '#FDD6BA',
					gray: '#E2DEDB',
				},
				light: {
					cream: '#FEFCF7',
					cyan: '#66D2CF',
					yellow: '#F4F1EB',
					salmon: 'FDD6BA',
				},
				grey: '#83888F',
			},
			fontFamily: { barlow: ['var(--font-barlow)'], fraunces: ['var(--font-fraunces)'] },
		},
	},
	plugins: [],
}
export default config
