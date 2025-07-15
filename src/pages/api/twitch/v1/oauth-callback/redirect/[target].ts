import type { APIRoute } from 'astro'

import * as Twitch from '@/lib/twitch/auth'

export const GET: APIRoute = async ({ params, url }) => {
	try {
		const target = params.target
		if (!target) {
			return Response.json({ error: 'Missing target.' }, { status: 400 })
		}

		const parsedTarget = Twitch.parseTarget(target)
		if (parsedTarget === undefined) {
			return Response.json({ error: `Target <${target}> not supported.` }, { status: 400 })
		}

		const uriBuilder = Twitch.uriBuilders[parsedTarget!]
		const newURL = uriBuilder(url.searchParams.toString())

		return Response.redirect(newURL)
	} catch (error) {
		return Response.json({ error }, { status: 500 })
	}
}

// NOTE: prerender seems to be broken when using `Response.redirect`
export const prerender = false
// export const getStaticPaths = Twitch.getAllowedPaths;
