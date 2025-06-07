import Canvas from './canvas'
import { Star, ShootingStar } from './stars'

export const map = (val: number, min1: number, max1: number, min2: number, max2: number): number => {
	return ((val - min1) / (max1 - min1)) * (max2 - min2) + min2
}

export const getColorScheme = (): 'dark' | 'light' => {
	return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export const createStars = (canvas: Canvas, min: number, max: number, p: number): Star[] => {
	let stars: Star[] = []

	let a = min
	for (let i = min; i < max; i++) {
		const r = Math.random()
		if (r < p) a++
	}

	for (let i = 0; i < a; i++) {
		const x = Math.random() * canvas.element.width - canvas.translation[0]
		const y = Math.random() * canvas.element.height - canvas.translation[1]
		const lifespan = Math.random() * 500 + 100
		stars.push(new Star({ x, y, lifespan }))
	}

	return stars
}

export const createShootingStars = (canvas: Canvas, min: number, max: number, p: number): ShootingStar[] => {
	let stars: ShootingStar[] = []

	let a = min
	for (let i = min; i < max; i++) {
		const r = Math.random()
		if (r < p) a++
	}

	for (let i = 0; i < a; i++) {
		const x = Math.random() * canvas.element.width - canvas.translation[0]
		const y = Math.random() * canvas.element.height - canvas.translation[1]
		const lifespan = Math.random() * 25 + 15
		stars.push(new ShootingStar({ x, y, lifespan, n: 15 }))
	}

	return stars
}

export const unwrap = <T>(maybeT: T | undefined | null): T => {
	if (maybeT === null || maybeT === undefined) {
		throw new Error('invalid instance')
	}

	return maybeT
}
