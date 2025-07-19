'use strict'

class TitleLogo {
  constructor() {
    this.gradientMode = {
      active: false,
      type: 'linear'
    }
    this.STATIC_PATH_SHADOW = new Path2D(`m 26,0 v 44 h -8 v 10 h 20 v -10 -44 z m 66,0 v 4 h -30 v 12 h 12 v 6 h -2 v -4 h -10 v 10 h 4 v 4 h 4 v 4 h -4 v 8 h -4 v 10 h 10 v -4 h 4 v -4 h 20 v 4 4 h 14 v -4 h 4 v -4 -10 -4 -6 h -4 v -2 -8 -12 h -8 v -4 z m -82,14 v 12 h -4 v 6 10 h 10 v -10 h 4 v -18 z m 34,0 v 14 h 4 v 14 h 10 v -14 -6 h -4 v -8 z m 50,10 h 2 v 2 h -2 z m -14,8 h 4 v 4 h -4 z m -74,34 v 4 6 h 4 v 4 h 10 v -4 -6 h -4 v -4 z m 30,0 v 4 4 h -4 v -4 h -10 v 6 4 h 4 v 2 h -20 v 10 h 8 v 2 2 6 2 h -4 v 2 2 h -4 v 6 4 h 10 v -4 h 6 v 4 h 36 v -4 -6 h -12 v -2 -4 h 2 v 4 h 10 v -4 -6 h -4 v -2 h 4 v -2 -10 h -4 v -2 h 4 v -4 -2 -4 h -10 v 4 h -2 v -4 -4 z m 44,0 v 4 h -18 v 10 14 h 10 v -14 h 2 v 6 4 6 h -4 v 10 2 10 h 36 v -10 -2 -10 h -4 v -6 -4 -6 h 2 v 14 h 10 v -14 -10 h -16 v -4 z m 2,20 h 12 v 4 h -12 z m -58,8 h 2 v 2 h -2 z m 8,8 h 4 v 4 2 h -8 v -2 h 4 z m 48,4 h 16 v 2 h -16 z`)
    this.STATIC_PATH_OUTLINE = new Path2D(`m 22,0 v 44 h -8 v 10 h 20 v -10 -44 z m 66,0 v 4 h -30 v 12 h 12 v 6 h -2 v -4 h -10 v 10 h 4 v 4 h 4 v 4 h -4 v 8 h -4 v 10 h 10 v -4 h 4 v -4 h 20 v 4 4 h 14 v -4 h 4 v -4 -10 -4 -6 h -4 v -2 -8 -12 h -8 v -4 z m -82,14 v 12 h -4 v 6 10 h 10 v -10 h 4 v -18 z m 34,0 v 14 h 4 v 14 h 10 v -14 -6 h -4 v -8 z m 50,10 h 2 v 2 h -2 z m -14,8 h 4 v 4 h -4 z m -74,34 v 4 6 h 4 v 4 h 10 v -4 -6 h -4 v -4 z m 30,0 v 4 4 h -4 v -4 h -10 v 6 4 h 4 v 2 h -20 v 10 h 8 v 2 2 6 2 h -4 v 2 2 h -4 v 6 4 h 10 v -4 h 6 v 4 h 36 v -4 -6 h -12 v -2 -4 h 2 v 4 h 10 v -4 -6 h -4 v -2 h 4 v -2 -10 h -4 v -2 h 4 v -4 -2 -4 h -10 v 4 h -2 v -4 -4 z m 44,0 v 4 h -18 v 10 14 h 10 v -14 h 2 v 6 4 6 h -4 v 10 2 10 h 36 v -10 -2 -10 h -4 v -6 -4 -6 h 2 v 14 h 10 v -14 -10 h -16 v -4 z m 2,20 h 12 v 4 h -12 z m -58,8 h 2 v 2 h -2 z m 8,8 h 4 v 4 2 h -8 v -2 h 4 z m 48,4 h 16 v 2 h -16 z`)
    this.STATIC_PATH_BODY = new Path2D(`m 24,2 v 44 h -8 v 6 h 8 8 v -50 z m 66,0 v 4 h -8 v 8 20 h 6 14 v 12 h -8 v 6 h 10 v -4 h 4 v -14 -6 h -20 v -14 h 10 v 6 h -2 v -4 h -6 v 6 h 4 v 4 h 4 6 v -12 -8 h -8 v -4 z m -30,4 v 8 h 12 v 14 h -2 v -4 h -4 v -4 h -6 v 6 h 4 v 4 h 4 v 8 h -4 v 8 h -4 v 6 h 6 v -4 h 4 v -8 h 2 v 4 h 6 v -6 h -4 v -8 h 4 v -16 -8 z m -52,10 v 12 h -4 v 12 h 6 v -10 h 4 v -14 z m 34,0 v 10 h 4 v 14 h 6 v -16 h -4 v -8 z m 40,22 v 6 h 18 v -6 z m -78,30 v 6 h 4 v 4 h 6 v -6 h -4 v -4 z m 30,0 v 16 h -14 v 8 h 10 v 2 h -6 v 4 h -4 v 6 h 6 v -4 h 6 v -4 h 2 v 12 h 6 v -16 h 12 v -8 h -12 v -16 z m 44,0 v 4 h -18 v 6 14 h 6 v -14 h 36 v 14 h 6 v -14 -6 h -16 v -4 z m -58,4 v 6 h 4 v 4 h 8 v -6 h -6 v -4 z m 26,0 v 4 h -4 v 6 h 6 v -4 h 4 v -6 z m 26,8 v 4 8 4 h 24 v -4 -8 -4 z m -68,4 v 6 h 8 v 16 h -4 v 4 h -4 v 6 h 6 v -4 h 4 v -4 h 2 v 4 h 4 v 4 h 32 v -6 h -30 v -4 h -4 v -16 -6 z m 72,0 h 16 v 8 h -16 z m -34,10 v 6 h 4 v 4 h 6 v -6 h -4 v -4 z m 26,4 v 6 6 6 h 32 v -6 -6 -6 z m 6,6 h 20 v 6 h -20 z`)
    this.STATIC_PATH_HIGHLIGHT = new Path2D(`m 24,2 v 2 42 h -8 v 2 4 h 2 v -4 h 6 2 v -44 h 6 v -2 z m 66,0 v 2 2 h -8 v 2 26 h 2 v -26 h 8 v -2 -2 h 4 v -2 z m -30,4 v 2 6 h 2 v -6 h 16 v -2 z m 36,0 v 2 h 8 v -2 z m -24,8 v 14 h -2 v 2 h 2 2 v -16 z m -2,16 h -2 v 8 h -4 v 2 6 h -4 v 2 4 h 2 v -4 h 2 2 v -8 h 2 2 z m 28,-16 v 6 h -2 v 2 h 2 2 v -8 z m -2,8 h -2 v 4 h 2 z m -88,-6 v 2 10 h -4 v 2 10 h 2 v -10 h 2 2 v -12 h 4 v -2 z m 34,0 v 2 8 h 2 v -8 h 4 v -2 z m 48,0 v 2 4 h 2 v -4 h 4 v -2 z m -30,4 v 2 4 h 2 v -4 h 4 v -2 z m -12,4 v 2 h 4 v -2 z m 0,2 h -2 v 14 h 2 z m 18,-2 v 2 h 4 v -2 z m 0,2 h -2 v 4 h 2 z m 22,2 v 2 h 20 v -2 z m 14,6 v 12 h -8 v 2 4 h 2 v -4 h 6 2 v -14 z m -28,4 v 2 h 4 v -2 z m 0,2 h -2 v 4 h 2 z m 8,-2 v 2 4 h 2 v -4 h 16 v -2 z m -78,30 v 2 4 h 2 v -4 h 4 v -2 z m 30,0 v 2 14 h -14 v 2 6 h 2 v -6 h 12 2 v -16 h 4 v -2 z m 44,0 v 2 2 h -18 v 2 18 h 2 v -18 h 16 2 v -4 h 12 v -2 z m -68,4 v 2 h 4 v -2 z m 0,2 h -2 v 4 h 2 z m 10,-2 v 2 4 h 2 v -4 h 4 v -2 z m 26,0 v 2 2 h -4 v 2 4 h 2 v -4 h 2 2 v -4 h 4 v -2 z m 46,0 v 2 h 16 v -2 z m -66,4 v 2 h 6 v -2 z m 0,2 h -2 v 4 h 2 z m 76,0 v 14 h 2 v -14 z m -30,2 v 2 14 h 2 v -14 h 22 v -2 z m -68,4 v 2 4 h 2 v -4 h 12 v -2 z m 36,0 v 2 h 12 v -2 z m 52,0 v 8 h -16 v 2 h 16 2 v -10 z m -80,6 v 16 h -4 v 2 2 h -4 v 2 4 h 2 v -4 h 2 2 v -4 h 2 2 v -18 z m 18,2 v 2 h 2 v -2 z m 0,2 h -6 v 2 2 h -4 v 2 4 h 2 v -4 h 2 2 v -4 h 4 z m 12,0 v 2 4 h 2 v -4 h 4 v -2 z m -8,2 v 12 h 2 v -12 z m 14,2 v 2 h 4 v -2 z m 0,2 h -2 v 4 h 2 z m 20,-2 v 2 16 h 2 v -16 h 30 v -2 z m 26,6 v 6 h -20 v 2 h 22 v -2 -6 z m -76,2 v 2 h 4 v -2 z m 0,2 h -2 v 4 h 2 z m 4,2 v 2 h 30 v -2 z m 0,2 h -2 v 4 h 2 z`)

    this.lastSineResult = -1
    this.cachedGradient = null
    this.lastGradientTime = -1
  }

  render(options) {
    const sine = options.sine
    const sine2 = options.sine2
    const moduleSets = options.colorModules
    const moduleSet0 = moduleSets[0]
    const moduleSet1 = moduleSets[1]
    const sineResult = sine(0, 4, timers.timer60 / timers.timer60max)

    if (this.gradientMode.active && (this.lastGradientTime !== timers.timer60 || !this.cachedGradient)) {
      this.cachedGradient = ctx.createLinearGradient(0, 0, 120, 120)
      this.cachedGradient.addColorStop(0, `rgb(0,${sine2(127, 0, timers.timer60 / timers.timer60max)},0)`)
      this.cachedGradient.addColorStop(1, `rgb(0,${sine2(127, 255, timers.timer60 / timers.timer60max)},0)`)
      this.lastGradientTime = timers.timer60
    }

    ctx.fillStyle = `rgb(${moduleSet1.r},${moduleSet1.g},${moduleSet1.b})`
    ctx.fill(this.STATIC_PATH_SHADOW)

    if (this.lastSineResult !== sineResult) this.lastSineResult = sineResult

    ctx.translate(this.lastSineResult, 0)
    ctx.fill(this.STATIC_PATH_OUTLINE)
    ctx.fillStyle = this.gradientMode.active ? this.cachedGradient : `rgb(${moduleSet0.r},${moduleSet0.g},${moduleSet0.b})`
    ctx.fill(this.STATIC_PATH_BODY)
    ctx.fillStyle = 'rgb(255,255,255)'
    ctx.fill(this.STATIC_PATH_HIGHLIGHT)
    ctx.translate(-this.lastSineResult, 0)
  }

  update() {
    if (digiPointer.pos.dx >= 0 && digiPointer.pos.dx < 120 && digiPointer.pos.dy >= 0 && digiPointer.pos.dy < 120 && digiPointer.pos.isTouching) {
      this.gradientMode.active = !this.gradientMode.active
    }
  }
}
