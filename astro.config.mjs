import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel/serverless'

import icon from 'astro-icon'

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
		tailwind(),
		icon({
			iconDir: 'src/assets/icons',
			include: {
				cbi: ['github', 'mail-ru', 'mastodon'],
				'material-symbols': ['lab-profile-outline-rounded'],
			},
		}),
	],
})
