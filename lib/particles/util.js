import { Star, ShootingStar } from '@lib/particles/stars'

function map(val, min1, max1, min2, max2) {
  return ((val - min1) / (max1 - min1)) * (max2 - min2) + min2
}

function getColorScheme() {
  return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function createCanvas(element) {
  const ctx = element.getContext('2d')

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
    ctx.fillRect(0, 0, element.width, element.height)
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
    el: element,
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

function createStars(canvas, min, max, p) {
  let stars = []

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

  return stars
}

function createShootingStars(canvas, min, max, p) {
  let stars = []

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

  return stars
}

export { createCanvas, map, createStars, createShootingStars, getColorScheme }
