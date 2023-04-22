import Canvas, { Color } from './canvas'

export type Coordinate = [number, number]

export interface ParticleProps {
  x?: number
  y?: number
  w?: number
  h?: number
  a?: number
  f?: number
}

export class Particle {
  x: number
  y: number
  w: number
  h: number
  a: number
  f: number

  constructor({ x, y, w, h, a, f }: ParticleProps) {
    this.x = x ?? 0
    this.y = y ?? 0
    this.w = w ?? 1
    this.h = h ?? 1

    this.a = a ?? 0
    this.f = f ?? 2.3
  }

  coords() {
    return [this.x, this.y]
  }

  size() {
    return [this.w, this.h]
  }

  update(coords: Coordinate | undefined = undefined) {
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

  render(canvas: Canvas, color: Color | undefined = undefined) {
    if (color) canvas.fill(color)
    canvas.ellipse(this.x, this.y, this.w, this.h)
  }
}
