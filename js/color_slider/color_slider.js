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
    
    // Cache transform coordinates
    this.transformX = (Math.floor(this.id / 3) % 2) * 160
    this.transformY = (this.id % 3) * 40 + 180
    
    // Cache hit box coordinates for performance
    this.hitBox = {
      x: this.transformX + 20,
      y: this.transformY,
      width: 100,
      height: 20
    }
  }

  render(options) {
    const moduleSet = options.colorModules[this.colorModuleSet]
    const sliderType = moduleSet[this.id % 3 === 0 ? 'r' : this.id % 3 === 1 ? 'g' : 'b']

    ctx.save()
    ctx.translate(this.transformX, this.transformY)

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

    // slider bars
    ctx.fillStyle = 'rgba(0,0,0,0.1)'
    ctx.fillRect(20, 8, 100, 4)

    // slider amount
    ctx.fillStyle = `rgb(${this.id % 3 === 0 ? sliderType : 32},${this.id % 3 === 1 ? sliderType : 32},${this.id % 3 === 2 ? sliderType : 32})`
    ctx.fillRect(20, 8, (sliderType / 255) * 100, 4)

    // slider handle
    ctx.translate((sliderType / 255) * 99 + 20, 0)
    ctx.fillStyle = 'rgb(255,255,255)'
    ctx.fill(this.STATIC_PATH_SLIDER)

    ctx.restore()
  }

  update(options) {
    const moduleSet = options.colorModules[this.colorModuleSet]
    
    if (digiPointer.pos.dx >= this.hitBox.x && digiPointer.pos.dx < this.hitBox.x + this.hitBox.width && 
        digiPointer.pos.dy >= this.hitBox.y && digiPointer.pos.dy < this.hitBox.y + this.hitBox.height && 
        digiPointer.pos.isTouching) {
      
      // posX - hitBoxX = normalize
      ctx.fillStyle = 'rgba(0,0,0,0.25)'
      ctx.fillRect(this.hitBox.x, this.hitBox.y, this.hitBox.width, this.hitBox.height) // slider bars
      const rawValue = ((digiPointer.pos.dx - this.hitBox.x) / 99) * 255
      // SECURITY FIX
      const clampedValue = Math.round(Math.max(0, Math.min(rawValue, 255)))
      moduleSet[this.id % 3 === 0 ? 'r' : this.id % 3 === 1 ? 'g' : 'b'] = clampedValue
    }
  }
}
