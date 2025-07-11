'use strict'

class ColorSlider {
  constructor(options) {
    this.id = options?.id ?? 0 // id should be between 0 and 5
    this.id < 3 ? (this.colorModuleSet = 0) : (this.colorModuleSet = 1)
    this.dx = options?.dx ?? 0
    this.dy = options?.dy ?? 0
    this.dw = options?.dw ?? 50 // this only applies to the slider bar
    this.dh = options?.dh ?? 10 // this only applies to the slider bar
    this.STATIC_PATH_R = new Path2D('m 6,2 v 2 h -2 v 2 12 h 4 v -4 h 2 v 2 h 2 v 2 h 4 v -2 -2 h -2 v -2 h 2 v -6 -2 h -2 v -2 z m 2,4 h 4 v 4 h -4 z')
    this.STATIC_PATH_G = new Path2D('m 6,2 v 2 h -2 v 12 h 2 v 2 h 8 v -2 h 2 v -4 -4 h -6 v 4 h 2 v 2 h -4 v -8 h 8 v -4 z')
    this.STATIC_PATH_B = new Path2D('m 4,2 v 4 12 h 4 6 v -2 h 2 v -2 -2 h -2 v -2 h 2 v -6 h -2 v -2 z m 4,4 h 4 v 2 h -4 z m 0,6 h 4 v 2 h -4 z')
    this.STATIC_PATH_SLIDER = new Path2D('m 2,0 v 2 h -2 v 16 h 2 v 2 h 2 v -2 h 2 v -16 h -2 v -2 z')
  }

  render(options) {
    const moduleSet = options.colorModules[this.colorModuleSet]
    const sliderType = moduleSet[this.id % 3 === 0 ? 'r' : this.id % 3 === 1 ? 'g' : 'b']

    ctx.save()
    ctx.translate((Math.floor(this.id / 3) % 2) * 160, (this.id % 3) * 40 + 180)

    if (this.id % 3 === 0) {
      ctx.fillStyle = 'rgb(191,54,12)'
      ctx.fill(this.STATIC_PATH_R)
    } else if (this.id % 3 === 1) {
      ctx.fillStyle = 'rgb(51,105,30)'
      ctx.fill(this.STATIC_PATH_G)
    } else {
      ctx.fillStyle = 'rgb(1,87,155)'
      ctx.fill(this.STATIC_PATH_B)
    }

    ctx.restore()
    ctx.fillStyle = `rgb(${moduleSet.r},${moduleSet.g},${moduleSet.b})`
    ctx.fillRect((Math.floor(this.id / 3) % 2) * 160 + 20, (this.id % 3) * 40 + 188, 100, 4) // slider bars

    ctx.save()
    ctx.translate((Math.floor(this.id / 3) % 2) * 160 + 20 + Math.floor((sliderType / 255) * 99) - 2, (this.id % 3) * 40 + 180)

    ctx.fillStyle = 'rgb(38,50,56)'
    ctx.fill(this.STATIC_PATH_SLIDER)
    ctx.fillStyle = 'rgb(255,255,255)'
    ctx.fillRect(2, 2, 2, 16)
    ctx.restore()
  }

  update(options) {
    const moduleSet = options.colorModules[this.colorModuleSet]
    const digiPointerPOS = digiPointer.pos
    const hitBoxDX = (Math.floor(this.id / 3) % 2) * 160 + 20
    const hitBoxDY = (this.id % 3) * 40 + 180
    const hitBoxDW = 100
    const hitBoxDH = 20

    if (digiPointer.pos.dx >= hitBoxDX && digiPointer.pos.dx < hitBoxDX + hitBoxDW && digiPointer.pos.dy >= hitBoxDY && digiPointer.pos.dy < hitBoxDY + hitBoxDH && digiPointer.pos.isTouching) {
      // posX - hitBoxX = normalize
      ctx.fillStyle = 'rgba(0,0,0,0.25)'
      ctx.fillRect((Math.floor(this.id / 3) % 2) * 160 + 20, (this.id % 3) * 40 + 180, 100, 20) // slider bars
      const rawValue = ((digiPointerPOS.dx - hitBoxDX) / 99) * 255
      // SECURITY FIX
      const clampedValue = Math.round(Math.max(0, Math.min(rawValue, 255)))
      moduleSet[this.id % 3 === 0 ? 'r' : this.id % 3 === 1 ? 'g' : 'b'] = clampedValue
    }
  }
}
