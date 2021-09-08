let canvas,
  color_scheme;

let stars = []
function draw() {
  color_scheme === 'dark' ? canvas.bg(7, 11, 32) : canvas.bg(245, 245, 245)

  // Update translation -> parallax
  canvas.setTranslate(
    (300 * canvas.mouseX) / canvas.el.width,
    (300 * canvas.mouseY) / canvas.el.height
  )

  // Update stars and delete if needed (if lifespan overlived)
  for (let i = stars.length - 1; i > -1; i--) {
    color_scheme === 'dark' ? stars[i].render(canvas, 255) : stars[i].render(canvas, 0)

    stars[i].update()
    if (stars[i].life >= stars[i].lifespan) {
      stars.splice(i, 1)
    }
  }

  // Add more stars
  addStars(0, 3, 0.05)
  addShootingStars(0, 3, 0.05)

  requestAnimationFrame(draw)
}

function addStars(min, max, p) {
  let a = min
  for (let i = min; i < max; i++) {
    const r = Math.random()
    if (r < p) a++
  }

  for (let i = 0; i < a; i++) {
    const x = Math.random() * canvas.el.width - canvas.trans[0]
    const y = Math.random() * canvas.el.height - canvas.trans[1]
    const l = Math.random() * 500 + 100
    stars.push(new Star(x, y, l, 15))
  }
}

function addShootingStars(min, max, p) {
  let a = min
  for (let i = min; i < max; i++) {
    const r = Math.random()
    if (r < p) a++
  }

  for (let i = 0; i < a; i++) {
    const x = Math.random() * canvas.el.width - canvas.trans[0]
    const y = Math.random() * canvas.el.height - canvas.trans[1]
    const l = Math.random() * 25 + 15
    stars.push(new ShootingStar(x, y, l, 15))
  }
}
