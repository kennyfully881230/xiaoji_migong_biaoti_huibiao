'use strict'

class ColorModule {
  constructor(options) {
    this.id = options?.id ?? 0
    this.r = options?.r ?? 0
    this.g = options?.g ?? 0
    this.b = options?.b ?? 0
  }

  render() {
    const pathColorLabel = new Path2D(`m ${(this.id % 2) * 160 + 5},141 v 2 h -4 v 2 h 2 v 2 h -2 v 12 h 2 v -2 h 2 v -2 h -2 v -2 h 2 v -2 h -2 v -2 h 2 v 2 h 2 v -2 h 4 v 4 h 2 v -6 h 4 v 2 h -2 v 6 h 2 v -2 h 2 v -8 h -4 v -2 h 4 v -2 h -8 v 2 h 2 v 2 h -2 v 2 h -2 v -2 h 2 v -2 h -4 v -2 z m 12,14 v 4 h 2 v -4 z m -2,0 h -2 v 2 h 2 z m -2,2 h -2 v 2 h 2 z m -2,-4 h -2 v 2 h 2 z m -2,2 h -2 v 2 h 2 z m -2,2 h -2 v 2 h 2 z m 0,-2 v -2 h -2 v 2 z m 0,-2 h 2 v -2 h -2 z m 18,-12 v 2 h 6 v 2 h -6 v -2 h -2 v 2 h -2 v 2 h 2 v 12 h 16 v -4 h -2 v 2 h -12 v -4 h 12 v -8 h -4 v -2 h 2 v -2 z m -20,4 h 2 v 2 h -2 z m 20,2 h 4 v 4 h -4 z m 6,0 h 4 v 4 h -4 z`)
    const pathNumber1 = new Path2D(`m 48,142 v 2 h -2 v 2 h -2 v 2 h 4 v 6 h -4 v 4 h 12 v -4 h -4 v -12 z`)
    const pathNumber2 = new Path2D(`m 206,142 v 2 h -2 v 4 2 h 4 v -2 h 2 v 2 h -1 -1 v 1 1 h -2 v 2 h -2 v 4 h 12 v -4 h -4 v -2 h 2 v -1 -1 h 2 v -2 -4 h -2 v -2 z`)

    ctx.fillStyle = `rgb(38,50,56)` // gray
    ctx.fill(pathColorLabel)
    this.id === 0 ? ctx.fill(pathNumber1) : ctx.fill(pathNumber2)
    ctx.fillRect((this.id % 2) * 160 + 62, 142, 16, 16) // current outline
    ctx.fillStyle = `rgb(${this.r},${this.g},${this.b})`
    ctx.fillRect((this.id % 2) * 160 + 64, 144, 12, 12) // current color
  }
}
