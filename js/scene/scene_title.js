class SceneTitle extends Scene {
  constructor() {
    super()
    this.countDown = 120
  }

  render() {
    ctx.fillStyle = 'rgb(200,200,200)'
    ctx.fillRect(0, 0, 320, 320)
    ctx.font = '40px FusionPixel'
    ctx.textAlign = 'center'
    ctx.fillStyle = 'rgb(10,10,10)'
    ctx.fillText('小鸡迷宫', 160, 160)
    ctx.font = '20px FusionPixel'
    ctx.fillText('标题徽标', 160, 200)
  }

  update(options) {
    if (this.countDown <= 0) {
      options.sceneManager.currentScene = 'main'
    } else {
      this.countDown--
    }
  }
}
