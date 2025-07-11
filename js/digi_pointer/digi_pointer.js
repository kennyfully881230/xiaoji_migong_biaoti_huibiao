'use strict'

class DigiPointer {
  constructor() {
    this.pos = {
      isTouching: false,
      dx: null,
      dy: null
    }
  }

  render() {
    if (this.pos.dx !== null && this.pos.dy !== null) {
      ctx.fillStyle = 'rgba(0,0,0, 0.5)'
      ctx.fillRect(this.pos.dx, this.pos.dy, 1, 1)
    }
  }
}
