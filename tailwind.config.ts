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
					cyan: '#0E8784',
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
					salmon: '#FDD6BA',
					grey: '#2C343E'
				},
				grey: '#83888F',
			},
			fontFamily: { barlow: ['var(--font-barlow)'], fraunces: ['var(--font-fraunces)'] },
			backgroundImage: {
				'quality-bgD': "url('/assets/about/desktop/bg-quality.png')",
				'quality-bgT': "url('/assets/about/tablet/bg-quality.png')",
				'quality-bgM': "url('/assets/about/mobile/bg-quality.png')",
				
			  },
			  animation: {
				'rotate': 'rotate 0.5s linear',
			  },
			  keyframes: {
				rotate: {
				  '0%': { transform: 'rotate(0deg)' },
				  '100%': { transform: 'rotate(180deg)' },
				}
			  }
		},
	},
	plugins: [],
}
export default config
