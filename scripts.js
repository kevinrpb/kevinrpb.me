// From http://www.jottings.com/obfuscator/
const mail_coded = 'S8BWu@S8BWuCNY.w8'
const mail_key = 'v2CoGMhaPySm3EtKQBHO6FXxiAJ1wUg9l0InZcsbdWep5zRrD4VfuLjkY7T8Nq'
const mail_shift = mail_coded.length

let mail_link = ''
let mail_ltr = ''

for (let i = 0; i < mail_coded.length; i++) {
  if (mail_key.indexOf(mail_coded.charAt(i)) == -1) {
    mail_ltr = mail_coded.charAt(i)
    mail_link += mail_ltr
  } else {
    mail_ltr =
      (mail_key.indexOf(mail_coded.charAt(i)) - mail_shift + mail_key.length) % mail_key.length
    mail_link += mail_key.charAt(mail_ltr)
  }
}

function createCanvas(id) {
  const el = document.getElementById(id)
  const ctx = el.getContext('2d')

  // Sets fillStyle
  const fill = function (...color) {
    let c

    if (color.length === 1) {
      c = `rgb(${color[0]}, ${color[0]}, ${color[0]})`
    } else if (color.length === 3) {
      c = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
    } else if (color.length === 2) {
      c = `rgba(${color[0]}, ${color[0]}, ${color[0]}, ${color[1]})`
    } else if (color.length === 4) {
      c = `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${color[3]})`
    } else {
      //error
    }

    if (c) {
      ctx.fillStyle = c
    }
  }

  // Sets fillStyle and draws a rect
  const background = function (...color) {
    fill(...color)
    ctx.fillRect(0, 0, el.width, el.height)
  }

  // Draws a rect
  const rect = function (x, y, w, h) {
    ctx.fillRect(x, y, w, h)
  }

  // Draws an ellipse
  const ellipse = function (x, y, w, h) {
    ctx.beginPath()
    ctx.ellipse(x + this.trans[0], y + this.trans[1], w, h, 0, 0, 2 * Math.PI)
    ctx.fill()
  }

  const translate = function (x, y) {
    this.trans[0] += x
    this.trans[1] += y
  }

  const setTranslate = function (x, y) {
    this.trans = [x, y]
  }

  return {
    el: el,
    ctx: ctx,
    trans: [0, 0],
    fill: fill,
    bg: background,
    rect: rect,
    ellipse: ellipse,
    translate: translate,
    setTranslate: setTranslate,
    mouseX: 0,
    mouseY: 0,
  }
}

function map(val, min1, max1, min2, max2) {
  return ((val - min1) / (max1 - min1)) * (max2 - min2) + min2
}

class Particle {
  constructor(x, y, w, h, a, f) {
    this.x = x || 0
    this.y = y || 0
    this.w = w || 1
    this.h = h || 1

    this.a = a || 0
    this.f = f || 2.3
  }

  coords() {
    return [this.x, this.y]
  }

  size() {
    return [this.w, this.h]
  }

  update(coords) {
    if (!coords) {
      const newX = this.x + this.f * Math.cos(this.a)
      const newY = this.y + this.f * Math.sin(this.a)

      this.x = newX
      this.y = newY
    } else {
      this.x = coords[0]
      this.y = coords[1]
    }
  }

  render(canvas, ...color) {
    if (color) canvas.fill(...color)
    canvas.ellipse(this.x, this.y, this.w, this.h)
  }
}

class Star {
  constructor(x, y, lifespan) {
    this.lifespan = lifespan
    this.life = 0

    const s = Math.random() * 2 + 1
    const a = Math.random() * 2 * Math.PI
    const f = Math.random() * 0.5 + 0.5

    this.particle = new Particle(x, y, s, s, a, f)
  }

  update() {
    if (this.life >= this.lifespan) return

    this.particle.update()
    this.life += 1
  }

  render(canvas, ...color) {
    const lived = this.life / this.lifespan
    const alpha = map(lived, 0, 1, 1, 0)

    this.particle.render(canvas, ...color, alpha)
  }
}

class ShootingStar {
  constructor(x, y, lifespan, n) {
    this.lifespan = lifespan
    this.life = 0
    this.particles = []

    let a = (Math.PI * 6) / 8

    const maxS = 2
    const minS = 0.1

    for (let i = 0; i < n; i++) {
      this.particles.push(new Particle(x, y, map(i, 0, n, maxS, minS), map(i, 0, n, maxS, minS), a))
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

  render(canvas, ...color) {
    for (let i = this.particles.length - 1; i > -1; i--) {
      const lived = this.life / this.lifespan

      const alpha = map(i, 0, this.particles.length, 1, 0)

      this.particles[i].render(canvas, ...color, alpha * (1 - lived))
    }
  }
}

let canvas,
  color_scheme = 'dark'

function init() {
  // Check initial color scheme
  if (matchMedia('(prefers-color-scheme: light)').matches) {
    color_scheme = 'light'
  }
  // Add listeners for color scheme
  window.matchMedia('(prefers-color-scheme: light)').addListener((e) => {
    if (e.matches) color_scheme = 'light'
  })

  window.matchMedia('(prefers-color-scheme: dark)').addListener((e) => {
    if (e.matches) color_scheme = 'dark'
  })

  window.matchMedia('(prefers-color-scheme: no-preference)').addListener((e) => {
    if (e.matches) color_scheme = 'dark'
  })

  // Init canvas
  canvas = createCanvas('canvas')

  // Set canvas full screen
  let resizeTimer
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer)
    resizeTimer = setTimeout(function () {
      canvas.el.width = window.innerWidth
      canvas.el.height = window.innerHeight
    }, 200)
  })
  canvas.el.width = window.innerWidth
  canvas.el.height = window.innerHeight

  // Translate on mouse move
  document.addEventListener('mousemove', function (e) {
    canvas.mouseX = e.clientX
    canvas.mouseY = e.clientY
  })
  document.addEventListener('mouseenter', function (e) {
    canvas.mouseX = e.clientX
    canvas.mouseY = e.clientY
  })
  canvas.mouseX = window.innerWidth / 2
  canvas.mouseY = window.innerHeight / 2

  // Add initial stars
  addStars(20, 30, 0.2)

  // Start animation
  requestAnimationFrame(draw)

  // Setup mail
  document.getElementById('mail_anchor').href = `mailto:${mail_link}`

  // Show card
  setTimeout(function () {
    document.getElementById('card').classList.remove('hide')
  }, 400)
}

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
