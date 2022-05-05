import React, { useRef, useEffect } from 'react'

import { createCanvas, createShootingStars, createStars, getColorScheme } from '@lib/particles/util'

const BackgroundCanvas = (props) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    // Setup the canvas & variables
    const canvas = createCanvas(canvasRef.current)
    let stars = []
    let colorScheme = getColorScheme()

    // Set default values
    const newStars = createStars(canvas, 0, 3, 0.05)
    const newShootingStars = createShootingStars(canvas, 0, 3, 0.05)
    stars = newStars.concat(newShootingStars)

    canvas.el.width = window.innerWidth
    canvas.el.height = window.innerHeight

    canvas.mouseX = window.innerWidth / 2
    canvas.mouseY = window.innerHeight / 2

    // Then setup listeners
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (e) => e.matches && (colorScheme = 'dark'))
    window
      .matchMedia('(prefers-color-scheme: light)')
      .addEventListener('change', (e) => e.matches && (colorScheme = 'light'))

    let resizeTimer
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(function () {
        canvas.el.width = window.innerWidth
        canvas.el.height = window.innerHeight
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
        ? canvas.bg(42, 44, 65) // Space Cadet
        : canvas.bg(236, 241, 243) // Alice Blue

      // Update translation -> parallax
      canvas.setTranslate(
        (300 * canvas.mouseX) / canvas.el.width,
        (300 * canvas.mouseY) / canvas.el.height
      )

      // For each star
      const starColor = colorScheme === 'dark' ? 255 : 0
      stars.forEach((star) => star.render(canvas, starColor))
    }

    const _update = () => {
      // Update stars and check if they need to be removed
      let updatedStars = stars
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
    let animationFrameId
    const loop = () => {
      // Draw and update
      _draw(canvas, stars, colorScheme)
      _update(canvas, stars)

      // Request next animation
      animationFrameId = window.requestAnimationFrame(loop)
    }
    loop()

    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} {...props} className='background-canvas'></canvas>
}

export default BackgroundCanvas
