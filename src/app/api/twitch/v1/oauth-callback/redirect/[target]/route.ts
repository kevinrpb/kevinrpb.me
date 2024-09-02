import { type NextRequest } from "next/server";

const uriBuilders: Record<string, (queryString: string) => string> = {
  // web: (queryString: string) => {
  //   return `https://kevinrpb.me/twitch/v1/oauth-callback?${queryString}`;
  // },
  app: (queryString: string) => {
    return `me.kevinrpb.TwitchChat://oauth-callback?${queryString}`;
  },
};

export async function GET(
  request: NextRequest,
  { params }: { params: { target: string | null } }
) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const target = params.target;

    if (!target) {
      return Response.json({ error: "Missing target." }, { status: 400 });
    }

    const uriBuilder = uriBuilders[target];

    if (!uriBuilders[target]) {
      return Response.json(
        { error: `Target <${target}> not supported.` },
        { status: 400 }
      );
    }

    const newURL = uriBuilder(searchParams.toString());

    return Response.redirect(newURL);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
