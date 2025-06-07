import { unwrap } from '../util'

export interface WebGL2CanvasProgramDrawProps {
	time: number
	delta: number
}

export interface WebGL2CanvasProgram {
	vertices: Float32Array
	vertexProgram: string
	fragmentProgram: string
	setup(gl: WebGL2RenderingContext, program: WebGLProgram): void
	draw(gl: WebGL2RenderingContext, props: WebGL2CanvasProgramDrawProps): void
	teardown(gl: WebGL2RenderingContext): void
}

export class WebGL2Canvas {
	private element?: HTMLCanvasElement
	private context?: WebGL2RenderingContext
	private program: WebGL2CanvasProgram

	private firstDrawTime: number = -1
	private lastDrawTime: number = -1

	private glProgram: WebGLProgram | undefined = undefined

	constructor(id: string, program: WebGL2CanvasProgram) {
		this.element = WebGL2Canvas.getElement(id)
		this.context = this.element?.getContext('webgl2') || undefined
		this.program = program

		window.addEventListener('resize', this.resize.bind(this))
	}

	public setup() {
		const gl = unwrap(this.context)

		let vertexShader: WebGLShader | undefined = undefined
		let fragmentShader: WebGLShader | undefined = undefined

		try {
			vertexShader = this.compileShader(gl.VERTEX_SHADER, this.program.vertexProgram)
			fragmentShader = this.compileShader(gl.FRAGMENT_SHADER, this.program.fragmentProgram)
			let program = this.createProgram(vertexShader, fragmentShader)

			gl.useProgram(program)

			this.program.setup(gl, program)
			this.resize()
		} catch (error) {
			console.error(`Error setting up canvas: ${error}`)

			if (this.glProgram) {
				gl.deleteProgram(this.glProgram)
				this.glProgram = undefined
			}

			if (vertexShader) {
				gl.deleteShader(vertexShader)
			}

			if (fragmentShader) {
				gl.deleteShader(fragmentShader)
			}

			this.program.teardown(gl)
		}
	}

	public draw() {
		const gl = unwrap(this.context)

		const now = Date.now()

		if (this.firstDrawTime < 0) {
			this.firstDrawTime = now
			this.lastDrawTime = now
		}

		const time = (now - this.firstDrawTime) / 1000
		const delta = (now - this.lastDrawTime) / 1000

		gl.viewport(0, 0, gl.canvas.width, gl.canvas.height)

		this.program.draw(gl, { time, delta })

		this.lastDrawTime = now
	}

	private compileShader(type: GLenum, source: string): WebGLShader {
		const gl = unwrap(this.context)

		let shader = gl.createShader(type)
		if (!shader) {
			throw new Error("couldn't create shader")
		}

		gl.shaderSource(shader, source)
		gl.compileShader(shader)

		if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
			const infoLog = gl.getShaderInfoLog(shader)
			gl.deleteShader(shader)
			throw new Error(`Shader compilation failed: ${infoLog}`)
		}

		return shader
	}

	private createProgram(vertexShader: WebGLShader, fragmentShader: WebGLShader): globalThis.WebGLProgram {
		const gl = unwrap(this.context)

		let program = gl.createProgram()
		gl.attachShader(program, vertexShader)
		gl.attachShader(program, fragmentShader)
		gl.linkProgram(program)

		if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
			const infoLog = gl.getProgramInfoLog(program)
			gl.deleteProgram(program)
			throw new Error(`Program creation failed: ${infoLog}`)
		}

		gl.validateProgram(program)
		if (!gl.getProgramParameter(program, gl.VALIDATE_STATUS)) {
			const infoLog = gl.getProgramInfoLog(program)
			gl.deleteProgram(program)
			throw new Error(`Program validation failed: ${infoLog}`)
		}

		return program
	}

	private resize() {
		const gl = unwrap(this.context)
		const canvas = unwrap(this.element)

		gl.canvas.width = canvas.width
		gl.canvas.height = canvas.height
		gl.viewport(0, 0, gl.canvas.width, gl.canvas.height)
	}

	private static getElement(id: string): HTMLCanvasElement | undefined {
		let element = document.getElementById(id)

		if (!element) {
			return undefined
		}

		return element as HTMLCanvasElement
	}
}
