'use strict'

class ColorModule {
  constructor(options) {
    this.id = options?.id ?? 0
    this.r = options?.r ?? 0
    this.g = options?.g ?? 0
    this.b = options?.b ?? 0
    
    // Cache Path2D objects to avoid creating them every frame
    this.pathColorLabel = new Path2D(`m ${(this.id % 2) * 160 + 5},141 v 2 h -4 v 2 h 2 v 2 h -2 v 12 h 2 v -2 h 2 v -2 h -2 v -2 h 2 v -2 h -2 v -2 h 2 v 2 h 2 v -2 h 4 v 4 h 2 v -6 h 4 v 2 h -2 v 6 h 2 v -2 h 2 v -8 h -4 v -2 h 4 v -2 h -8 v 2 h 2 v 2 h -2 v 2 h -2 v -2 h 2 v -2 h -4 v -2 z m 12,14 v 4 h 2 v -4 z m -2,0 h -2 v 2 h 2 z m -2,2 h -2 v 2 h 2 z m -2,-4 h -2 v 2 h 2 z m -2,2 h -2 v 2 h 2 z m -2,2 h -2 v 2 h 2 z m 0,-2 v -2 h -2 v 2 z m 0,-2 h 2 v -2 h -2 z m 18,-12 v 2 h 6 v 2 h -6 v -2 h -2 v 2 h -2 v 2 h 2 v 12 h 16 v -4 h -2 v 2 h -12 v -4 h 12 v -8 h -4 v -2 h 2 v -2 z m -20,4 h 2 v 2 h -2 z m 20,2 h 4 v 4 h -4 z m 6,0 h 4 v 4 h -4 z`)
    this.pathNumber1 = new Path2D(`m 48,142 v 2 h -2 v 2 h -2 v 2 h 4 v 6 h -4 v 4 h 12 v -4 h -4 v -12 z`)
    this.pathNumber2 = new Path2D(`m 206,142 v 2 h -2 v 4 2 h 4 v -2 h 2 v 2 h -1 -1 v 1 1 h -2 v 2 h -2 v 4 h 12 v -4 h -4 v -2 h 2 v -1 -1 h 2 v -2 -4 h -2 v -2 z`)
    
    // Cache rectangle coordinates
    this.outlineRect = {
      x: (this.id % 2) * 160 + 62,
      y: 142,
      width: 16,
      height: 16
    }
    this.colorRect = {
      x: (this.id % 2) * 160 + 64,
      y: 144,
      width: 12,
      height: 12
    }
  }

  render() {
    ctx.fillStyle = `rgb(38,50,56)` // gray
    ctx.fill(this.pathColorLabel)
    ctx.fill(this.id === 0 ? this.pathNumber1 : this.pathNumber2)
    ctx.fillRect(this.outlineRect.x, this.outlineRect.y, this.outlineRect.width, this.outlineRect.height) // current outline
    ctx.fillStyle = `rgb(${this.r},${this.g},${this.b})`
    ctx.fillRect(this.colorRect.x, this.colorRect.y, this.colorRect.width, this.colorRect.height) // current color
  }
}
