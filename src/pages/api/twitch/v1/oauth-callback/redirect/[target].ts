import type { APIRoute } from 'astro'

const targetNames = ['web', 'app.twitch-chat', 'app.twitch-chat-lite'] as const
type Target = (typeof targetNames)[number]

const parseTarget = (target: string): Target | undefined => targetNames.find((name) => name === target)

const uriBuilders: Record<Target, (queryString: string) => string> = {
	web: (queryString: string) => {
		return `https://kevinrpb.me/twitch/v1/oauth-callback?${queryString}`
	},
	'app.twitch-chat': (queryString: string) => {
		return `me.kevinrpb.TwitchChat://oauth-callback?${queryString}`
	},
	'app.twitch-chat-lite': (queryString: string) => {
		return `me.kevinrpb.TwitchChatLite://oauth-callback?${queryString}`
	},
}

export const GET: APIRoute = async ({ params, url }) => {
	try {
		const target = params.target
		if (!target) {
			return Response.json({ error: 'Missing target.' }, { status: 400 })
		}

		const parsedTarget = parseTarget(target)
		if (parsedTarget === undefined) {
			return Response.json({ error: `Target <${target}> not supported.` }, { status: 400 })
		}

		const uriBuilder = uriBuilders[parsedTarget!]
		const newURL = uriBuilder(url.searchParams.toString())

		return Response.redirect(newURL)
	} catch (error) {
		return Response.json({ error }, { status: 500 })
	}
}

export const getStaticPaths = () =>
	targetNames.map((name) => ({
		params: {
			target: name,
		},
	}))

export const prerender = true
