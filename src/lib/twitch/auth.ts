const targetNames = [
	'web:kevinrpb.me',
	'app:me.kevinrpb.TwitchChat',
	'app:me.kevinrpb.TwitchChatLite',
	'app:me.kevinrpb.SillyStreamThingy',
] as const
export type Target = (typeof targetNames)[number]

export const parseTarget = (target: string): Target | undefined => targetNames.find((name) => name === target)

export const uriBuilders: Record<Target, (queryString: string) => string> = {
	'web:kevinrpb.me': (queryString: string) => {
		return `https://kevinrpb.me/twitch/v1/oauth-callback?${queryString}`
	},
	'app:me.kevinrpb.TwitchChat': (queryString: string) => {
		return `me.kevinrpb.TwitchChat://oauth-callback?${queryString}`
	},
	'app:me.kevinrpb.TwitchChatLite': (queryString: string) => {
		return `me.kevinrpb.TwitchChatLite://oauth-callback?${queryString}`
	},
	// This one is technically an app, but it runs an http server to get the request because
	'app:me.kevinrpb.SillyStreamThingy': (queryString: string) => {
		return `http://localhost:32123/oauth-callback?${queryString}`
	},
}

export const getAllowedPaths = () =>
	targetNames.map((name) => ({
		params: {
			target: name,
		},
	}))
