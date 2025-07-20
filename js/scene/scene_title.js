class SceneTitle extends Scene {
  constructor() {
    super()
    this.countDown = 120
  }

  render() {
    ctx.font = '40px FusionPixel'
    ctx.textAlign = 'center'
    ctx.fillText('小鸡迷宫', 160, 160)
  }

  update(options) {
    if (this.countDown <= 0) {
      options.sceneManager.currentScene = 'main'
    } else {
      this.countDown--
    }
  }
}
