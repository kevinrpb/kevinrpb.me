import { defineConfig } from 'astro/config'

import icon from 'astro-icon'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel/serverless'

// https://astro.build/config
export default defineConfig({
	site: 'https://kevinrpb.me',
	output: 'hybrid',
	adapter: vercel({
		webAnalytics: {
			enabled: true,
		},
	}),
	integrations: [
		icon({
			iconDir: 'src/assets/icons',
			include: {
				cbi: ['github', 'mail-ru', 'mastodon'],
				'material-symbols': ['lab-profile-outline-rounded'],
			},
		}),
		react(),
		tailwind(),
	],
})
