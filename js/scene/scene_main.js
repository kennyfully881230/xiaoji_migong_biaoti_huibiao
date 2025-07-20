class SceneMain extends Scene {
  constructor() {
    super()

    this.titleLogo = new TitleLogo()
    this.howToUseMsg = new HowToUseMsg()

    // this.recordButton = new RecordButton()

    this.colorModules = [new ColorModule({ id: 0, r: 255, g: 171, b: 145 }), new ColorModule({ id: 1, r: 191, g: 54, b: 12 })]

    this.colorSliders = []

    for (let i = 0; i < 6; i++) this.colorSliders.push(new ColorSlider({ id: i }))
  }

  render(options) {
    const utilFunctions = options.utilFunctions

    this.titleLogo.render({ colorModules: this.colorModules, sine: utilFunctions.sine, sine2: utilFunctions.sine2 })
    this.howToUseMsg.render()
    this.colorModules.forEach(module => module.render({ sine: utilFunctions.sine }))
    this.colorSliders.forEach(slider => slider.render({ colorModules: this.colorModules, sine: utilFunctions.sine }))
    // this.recordButton.render()
  }

  update(options) {
    this.colorSliders.forEach(slider => slider.update({ colorModules: this.colorModules }))
    this.titleLogo.update()
    // this.recordButton.update()
  }
}
