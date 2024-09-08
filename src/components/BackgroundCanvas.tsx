'use client'

import React from 'react'

import Canvas from '@/lib/graphics/canvas'
import { createShootingStars, createStars, getColorScheme } from '@/lib/graphics/util'
import { ShootingStar, Star } from '@/lib/graphics/stars'

const BackgroundCanvas: React.FC<React.HTMLProps<HTMLCanvasElement>> = (props) => {
	const canvasRef = React.useRef(null)

	React.useEffect(() => {
		if (!canvasRef.current) {
			return
		}

		// Setup the canvas & variables
		const canvas = new Canvas(canvasRef.current)
		let stars: (Star | ShootingStar)[] = []
		let colorScheme = getColorScheme()

		// Set default values
		stars.push(...createStars(canvas, 0, 3, 0.05))
		stars.push(...createShootingStars(canvas, 0, 3, 0.05))
		canvas.element.width = window.innerWidth
		canvas.element.height = window.innerHeight

		canvas.mouseX = window.innerWidth / 2
		canvas.mouseY = window.innerHeight / 2

		// Then setup listeners
		window
			.matchMedia('(prefers-color-scheme: dark)')
			.addEventListener('change', (e) => e.matches && (colorScheme = 'dark'))
		window
			.matchMedia('(prefers-color-scheme: light)')
			.addEventListener('change', (e) => e.matches && (colorScheme = 'light'))

		let resizeTimer: NodeJS.Timeout
		window.addEventListener('resize', function () {
			clearTimeout(resizeTimer)
			resizeTimer = setTimeout(function () {
				canvas.element.width = window.innerWidth
				canvas.element.height = window.innerHeight
			}, 200)
		})

		document.addEventListener('mousemove', function (e) {
			canvas.mouseX = e.clientX
			canvas.mouseY = e.clientY
		})
		document.addEventListener('mouseenter', function (e) {
			canvas.mouseX = e.clientX
			canvas.mouseY = e.clientY
		})

		// Our drawing functions
		const _draw = () => {
			// Set canvas background
			colorScheme === 'dark'
				? canvas.background([42, 44, 65]) // Space Cadet
				: canvas.background([236, 241, 243]) // Alice Blue

			// Update translation -> parallax
			canvas.setTranslate((300 * canvas.mouseX) / canvas.element.width, (300 * canvas.mouseY) / canvas.element.height)

			// For each star
			const starColor: [number] = colorScheme === 'dark' ? [255] : [0]
			stars.forEach((star) => star.render(canvas, starColor))
		}

		const _update = () => {
			let updatedStars = stars
			// Needs to be done backwards for the splice to work correctly
			for (let i = stars.length - 1; i > -1; i--) {
				stars[i].update()

				if (stars[i].life >= stars[i].lifespan) {
					updatedStars.splice(i, 1)
				}
			}

			// Create new stars
			const newStars = createStars(canvas, 0, 3, 0.05)
			const newShootingStars = createShootingStars(canvas, 0, 3, 0.05)

			// Update the stars
			const allStars = updatedStars.concat(newStars, newShootingStars)
			stars = allStars
		}

		// Now loop and draw
		let animationFrameId: number
		const loop = () => {
			// Draw and update
			_draw()
			_update()

			// Request next animation
			animationFrameId = window.requestAnimationFrame(loop)
		}
		loop()

		return () => {
			window.cancelAnimationFrame(animationFrameId)
		}
	}, [canvasRef])

	return <canvas ref={canvasRef} {...props}></canvas>
}

export default BackgroundCanvas
