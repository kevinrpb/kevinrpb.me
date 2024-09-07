/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				'ebony-clay': '#2a2c41',
				'space-cadet': '#2a2c41',
				manatee: '#8e9aaf',
				'alice-blue': '#ecf1f3',
				'imperial-red': '#ef253c',
				'amaranth-red': '#d70427',
				'blue-haze': '#c4c6d9',
				'cyber-lavender': '#e6e6ff'
			},
			fontSize: {
				'2xs': ['0.65rem', '0.8rem']
			},
			gridTemplateColumns: {
				'home-card': '2fr 5fr',
			},
			gridTemplateRows: {
				'home-card': 'auto 1fr 1fr auto',
			},
			screens: {
				xs: '400px',
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
