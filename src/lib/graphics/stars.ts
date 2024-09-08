import Canvas, { type OpaqueColor } from './canvas'
import { Particle } from './particle'
import { map } from './util'

export interface StarProps {
	x: number
	y: number
	lifespan: number
}

export class Star {
	life: number
	lifespan: number
	particle: Particle

	constructor({ x, y, lifespan }: StarProps) {
		this.lifespan = lifespan
		this.life = 0

		const s = Math.random() * 2 + 1
		const a = Math.random() * 2 * Math.PI
		const f = Math.random() * 0.5 + 0.5

		this.particle = new Particle({ x, y, w: s, h: s, a, f })
	}

	update() {
		if (this.life >= this.lifespan) return

		this.particle.update()
		this.life += 1
	}

	render(canvas: Canvas, color: OpaqueColor) {
		const lived = this.life / this.lifespan
		const alpha = map(lived, 0, 1, 1, 0)

		this.particle.render(canvas, [...color, alpha])
	}
}

export interface ShootingStarProps extends StarProps {
	n: number
}

export class ShootingStar {
	life: number
	lifespan: number
	particles: Particle[]

	constructor({ x, y, lifespan, n }: ShootingStarProps) {
		this.lifespan = lifespan
		this.life = 0
		this.particles = []

		let a = (Math.PI * 6) / 8

		const maxS = 2
		const minS = 0.1

		for (let i = 0; i < n; i++) {
			this.particles.push(new Particle({ x, y, w: map(i, 0, n, maxS, minS), h: map(i, 0, n, maxS, minS), a }))
		}
	}

	update() {
		if (this.life >= this.lifespan) return

		for (let i = this.particles.length - 1; i > -1; i--) {
			if (i === 0) {
				this.particles[i].update()
			} else if (this.life + this.particles.length >= this.lifespan) {
				this.particles.pop()
			} else {
				if (this.life >= i) this.particles[i].update()
			}
		}

		this.life += 1
	}

	render(canvas: Canvas, color: OpaqueColor) {
		const lived = this.life / this.lifespan

		for (let i = this.particles.length - 1; i > -1; i--) {
			const alpha = map(i, 0, this.particles.length, 1, 0)

			this.particles[i].render(canvas, [...color, alpha * (1 - lived)])
		}
	}
}
