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
