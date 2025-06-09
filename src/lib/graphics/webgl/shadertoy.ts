import type { WebGL2CanvasProgram, WebGL2CanvasProgramDrawProps } from '.'
import { unwrap } from '../util'

const VERTEX_PROGRAM = `#version 300 es
    #ifdef GL_ES
    precision highp float;
    precision highp int;
    precision mediump sampler3D;
    #endif

    in vec2 vertexInPosition;

    void main() {
        gl_Position = vec4(vertexInPosition, 0.0, 1.0);
    }
`

const FRAGMENT_BASE = `#version 300 es
    #ifdef GL_ES
    precision highp float;
    precision highp int;
    precision mediump sampler3D;
    #endif

    #define texture2D texture

    uniform vec3 iResolution;
    uniform float iTime;
    uniform float iTimeDelta;
    uniform float iFrameRate;

    out vec4 frag_out_color;

    void mainImage(out vec4 fragColor, in vec2 fragCoord);

    void main(void)
    {
        vec4 color = vec4(0.0, 0.0, 0.0, 0.0);
        mainImage(color, gl_FragCoord.xy);
        frag_out_color = vec4(color);
    }
    `

const VERTICES = new Float32Array([-1.0, -1.0, 1.0, -1.0, -1.0, 1.0, 1.0, 1.0, -1.0, 1.0, 1.0, -1.0])

export class ShadertoyProgram implements WebGL2CanvasProgram {
	private source: string

	public vertices: Float32Array
	public vertexProgram: string
	public fragmentProgram: string

	private uniformLocations: Record<string, WebGLUniformLocation | null> = {}
	private attributeLocations: Record<string, GLint | null> = {}

	private glQuadBuffer: WebGLBuffer | undefined = undefined

	constructor(source: string) {
		this.source = source

		this.vertices = VERTICES
		this.vertexProgram = VERTEX_PROGRAM
		this.fragmentProgram = ShadertoyProgram.makeFragment(source)
	}

	setup(gl: WebGL2RenderingContext, program: WebGLProgram) {
		this.uniformLocations['iResolution'] = gl.getUniformLocation(program, 'iResolution')
		this.uniformLocations['iTime'] = gl.getUniformLocation(program, 'iTime')
		this.uniformLocations['iTimeDelta'] = gl.getUniformLocation(program, 'iTimeDelta')
		this.attributeLocations['vertexInPosition'] = gl.getAttribLocation(program, 'vertexInPosition')

		this.glQuadBuffer = gl.createBuffer()
		gl.bindBuffer(gl.ARRAY_BUFFER, this.glQuadBuffer)
		gl.bufferData(gl.ARRAY_BUFFER, this.vertices, gl.STATIC_DRAW)
	}

	draw(gl: WebGL2RenderingContext, props: WebGL2CanvasProgramDrawProps): void {
		const { time, delta } = props
		const vertexInPosition = unwrap(this.attributeLocations['vertexInPosition'])
		const quadBuffer = unwrap(this.glQuadBuffer)

		gl.uniform3f(this.uniformLocations['iResolution'], gl.canvas.width, gl.canvas.height, 1.0)
		gl.uniform1f(this.uniformLocations['iTime'], time)
		gl.uniform1f(this.uniformLocations['iTimeDelta'], delta)

		gl.bindBuffer(gl.ARRAY_BUFFER, quadBuffer)
		gl.vertexAttribPointer(vertexInPosition, 2, gl.FLOAT, false, 0, 0)
		gl.enableVertexAttribArray(vertexInPosition)

		// 'count' here is the count of vertices, not the length of the buffer.
		gl.drawArrays(gl.TRIANGLES, 0, this.vertices.length / 2)
	}

	teardown(gl: WebGL2RenderingContext) {
		this.uniformLocations = {}
		this.attributeLocations = {}

		if (this.glQuadBuffer) {
			gl.deleteBuffer(this.glQuadBuffer)
			this.glQuadBuffer = undefined
		}
	}

	private static makeFragment(source: string): string {
		return FRAGMENT_BASE + source
	}
}

export default ShadertoyProgram
