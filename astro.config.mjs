import { defineConfig } from 'astro/config'

import icon from 'astro-icon'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel/serverless'

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
    site: 'https://kevinrpb.me',
    output: 'static',
    trailingSlash: 'never',
    adapter: vercel({
        webAnalytics: {
            enabled: true,
        },
    }),
    integrations: [icon({
        iconDir: 'src/assets/icons',
        include: {
            cbi: ['github', 'mail-ru', 'mastodon'],
            'material-symbols': [
                'link',
                'lab-profile-outline-rounded',
                'alternate-email-rounded',
                'globe',
                'download',
                'arrow-left-alt-rounded',
            ],
            mdi: ['briefcase-outline', 'academic-cap-outline', 'heart-outline'],
        },
		}), react(), tailwind(), mdx()],
})
