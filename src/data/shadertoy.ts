const shaderIds = ['gradient-1'] as const

export type ShaderId = (typeof shaderIds)[number]

export const SHADER_SOURCES: Record<ShaderId, string> = {
	'gradient-1': `
	vec3 get_col(vec2 uv, float t) {
		float a = 0.0;
		float b = 0.0;
		float c = 0.0;

		for (float i = 0.0; i < 4.0; ++i) {
			a = sin(a*b - c*uv.x);
			b = cos(-c*a*b + t - b*uv.y);
			c = sin(cos(a*-b) - c);
		}

		vec3 col = vec3(a, b, 0);

		col = cos(1.5 * col);
		col *= sqrt(col.y);

		return col;
	}

	void mainImage(out vec4 fragColor, in vec2 fragCoord) {
		vec2 uv = (fragCoord * 2.0 - iResolution.xy) / min(iResolution.x, iResolution.y);
		float t = iTime * 0.3;

		fragColor = vec4(get_col(uv, t), 1.0);
	}
	`,
}
