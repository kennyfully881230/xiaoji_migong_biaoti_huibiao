'use strict'

class Scene {
  constructor() {
    this.utilFunctions = new UtilFunctions()
    this.titleLogo = new TitleLogo()
    this.howToUseMsg = new HowToUseMsg()

    this.colorModules = [new ColorModule({ id: 0, r: 255, g: 171, b: 145 }), new ColorModule({ id: 1, r: 191, g: 54, b: 12 })]

    this.colorSliders = []

    for (let i = 0; i < 6; i++) this.colorSliders.push(new ColorSlider({ id: i }))

    this.render()
  }

  render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    this.titleLogo.render({ colorModules: this.colorModules, sine: this.utilFunctions.sine, sine2: this.utilFunctions.sine2 })
    this.howToUseMsg.render()
    this.colorModules.forEach(module => module.render({ sine: this.utilFunctions.sine }))
    this.colorSliders.forEach(slider => slider.render({ colorModules: this.colorModules, sine: this.utilFunctions.sine }))
    digiPointer.render()
    this.update()
  }

  update() {
    this.colorSliders.forEach(slider => slider.update({ colorModules: this.colorModules }))
    this.titleLogo.update()

    if (timers.timer60 >= timers.timer60max) {
      timers.timer60 = 0
    } else {
      timers.timer60++
    }

    requestAnimationFrame(() => this.render())
  }
}
