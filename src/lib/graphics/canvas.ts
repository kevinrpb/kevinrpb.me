export type Color =
  | [number]
  | [number, number]
  | [number, number, number]
  | [number, number, number, number]

export type OpaqueColor = [number] | [number, number, number]

export default class Canvas {
  element: HTMLCanvasElement
  context: CanvasRenderingContext2D
  translation: [number, number] = [0, 0]
  mouseX: number = 0
  mouseY: number = 0

  constructor(element: HTMLCanvasElement) {
    this.element = element

    const context = this.element.getContext('2d')

    if (!context) {
      throw new Error(`Could not initialize canvas context`)
    }

    this.context = context
  }

  fill(color: Color = [0]) {
    let c: string | undefined

    switch (color.length) {
      case 1:
        c = `rgb(${color[0]}, ${color[0]}, ${color[0]})`
        break
      case 2:
        c = `rgba(${color[0]}, ${color[0]}, ${color[0]}, ${color[1]})`
        break
      case 3:
        c = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
        break
      case 4:
        c = `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${color[3]})`
        break
      default:
        // Error?
        break
    }

    if (c) {
      this.context.fillStyle = c
    }
  }

  background(color: Color) {
    this.fill(color)
    this.context.fillRect(0, 0, this.element.width, this.element.height)
  }

  rect(x: number, y: number, w: number, h: number) {
    this.context.fillRect(x + this.translation[0], y + this.translation[1], w, h)
  }

  ellipse(x: number, y: number, w: number, h: number) {
    this.context.beginPath()
    this.context.ellipse(x + this.translation[0], y + this.translation[1], w, h, 0, 0, 2 * Math.PI)
    this.context.fill()
  }

  translate(x: number, y: number) {
    this.translation[0] += x
    this.translation[1] += y
  }

  setTranslate(x: number, y: number) {
    this.translation = [x, y]
  }
}
