'use strict'

// The color test and how to use message
class HowToUseMsg {
  constructor() {
    // 颜色测试
    this.STATIC_PATH_COLOR_TEST_ZH = new Path2D('m 5,1 v 2 h -4 v 2 h 2 v 2 h -2 v 12 h 2 v -2 h 2 v -2 h -2 v -2 h 2 v -2 h -2 v -2 h 2 v 2 h 2 v -2 h 4 v 4 h 2 v -6 h 4 v 2 h -2 v 6 h 2 v -2 h 2 v -8 h -4 v -2 h 4 v -2 h -8 v 2 h 2 v 2 h -2 v 2 h -2 v -2 h 2 v -2 h -4 v -2 z m 12,14 v 4 h 2 v -4 z m -2,0 h -2 v 2 h 2 z m -2,2 h -2 v 2 h 2 z m -2,-4 h -2 v 2 h 2 z m -2,2 h -2 v 2 h 2 z m -2,2 h -2 v 2 h 2 z m 0,-2 v -2 h -2 v 2 z m 0,-2 h 2 v -2 h -2 z m 18,-12 v 2 h 6 v 2 h -6 v -2 h -2 v 2 h -2 v 2 h 2 v 12 h 16 v -4 h -2 v 2 h -12 v -4 h 12 v -8 h -4 v -2 h 2 v -2 z m 16,0 v 2 h 2 v -2 z m 2,2 v 2 h 2 v -2 z m 4,-2 v 12 h 2 v -10 h 4 v 6 h -2 v 6 h 2 v -2 h 2 v -12 z m 6,14 v 4 h 2 v -4 z m -2,0 h -2 v 2 h 2 z m -2,2 h -2 v 2 h 2 z m 8,-16 v 18 h 2 v -18 z m 4,0 v 2 h 2 v -2 z m 2,2 v 2 h 2 v -2 z m 10,-2 v 4 h -6 v 2 h 6 v 2 h -6 v 2 h 2 v 6 h -2 v 2 h 6 v -2 h -2 v -6 h 4 v -4 h 4 v -6 h -2 v 4 h -2 v -4 z m 2,10 v 6 h 2 v -6 z m 2,6 v 2 h 2 v -2 z m -10,0 v -2 h -2 v -8 h -4 v 2 h 2 v 10 h 2 v -2 z m -62,-12 h 2 v 2 h -2 z m 20,2 h 4 v 4 h -4 z m 6,0 h 4 v 4 h -4 z m 10,0 v 2 h 2 v -2 z m 2,2 v 2 h 2 v -2 z m 0,6 v 2 h 2 v -2 z m 0,2 h -2 v 2 h 2 z')

    // 作者：肯尼·富利
    this.STATIC_PATH_BY_KENNY_ZH = new Path2D('m 5,1 v 4 h 2 v -4 z m 2,4 v 4 h 2 v -4 z m 2,0 h 2 v 14 h 2 v -4 h 6 v -2 h -6 v -4 h 6 v -2 h -6 v -2 h 6 v -2 h -8 v -2 h -2 z m -4,0 h -2 v 2 h -2 v 2 h 2 v 10 h 2 z m 22,-4 v 2 h -4 v 2 h 4 v 4 h -6 v 2 h 4 v 2 h -2 v 2 h 2 v 4 h 12 v -8 h 2 v -2 h -6 v -2 h -2 v 2 h -2 v -4 h 4 v -2 h -4 v -2 z m 6,4 v 2 h 2 v -2 z m 2,0 h 2 v -2 h -2 z m -12,10 h -2 v 2 h 2 z m 46,-14 v 6 h -4 v -4 h -2 v 4 h -2 v 2 h 2 v 10 h 2 v -2 h 10 v 2 h 2 v -10 h 2 v -2 h -8 v -2 h 6 v -2 h -6 v -2 z m 14,0 v 12 h 2 v -6 h 2 v 12 h 12 v -4 h -2 v 2 h -8 v -4 h 4 v -2 h -4 v -4 h 10 v -6 z m 10,10 h 4 v -2 h -4 z m -10,2 h -2 v 4 h 2 z m -40,-10 v 4 h 4 v -4 z m 42,0 h 12 v 2 h -12 z m -20,6 h 10 v 2 h -10 z m -38,2 h 8 v 2 h -8 z m 16,2 v 4 h 4 v -4 z m 22,0 h 10 v 2 h -10 z m -38,2 h 8 v 2 h -8 z')

    // 如何使用
    this.STATIC_PATH_HOW_TO_USE_ZH = new Path2D('m 5,1 v 4 h -4 v 2 h 2 v 4 h 2 v -4 h 2 v 8 h 2 v -10 h -2 v -4 z m 2,14 h -2 v 2 h 2 z m 0,2 v 2 h 2 v -2 z m -2,0 h -4 v 2 h 4 z m 0,-2 v -2 h -2 v 2 z m -2,-2 v -2 h -2 v 2 z m 22,-12 v 4 h 2 v -4 z m 2,4 v 10 h 6 v -10 z m -2,0 h -2 v 2 h -2 v 2 h 2 v 10 h 2 z m 4,-4 v 2 h 6 v 14 h -2 v 2 h 4 v -16 h 2 v -2 z m 16,0 v 4 h 8 v 2 h -6 v 6 h 2 v 2 h 2 v -2 h 2 v 2 h -2 v 2 h 4 v -4 h 4 v -6 h -4 v -2 h 4 v -2 h -4 v -2 h -2 v 2 h -6 v -2 z m 10,16 v 2 h 4 v -2 z m -4,0 h -4 v 2 h 4 z m -6,-12 h -2 v 2 h -2 v 2 h 2 v 10 h 2 z m 18,-4 v 16 h 2 v -4 h 4 v 6 h 2 v -6 h 6 v 4 h -2 v 2 h 4 v -18 z m 0,16 h -2 v 2 h 2 z m -52,-14 v 14 h 8 v -14 z m 54,0 h 4 v 2 h -4 z m 6,0 h 6 v 2 h -6 z m -58,2 h 4 v 10 h -4 z m 16,2 h 2 v 6 h -2 z m 36,0 h 4 v 4 h -4 z m 6,0 h 6 v 4 h -6 z m -22,2 h 4 v 2 h -4 z m 6,0 h 2 v 2 h -2 z')

    // 调整滑块来改变颜色。
    this.STATIC_PATH_INSTRUCTIONS_ZH = new Path2D('m 3,1 v 2 h 2 v -2 z m 2,2 v 2 h 2 v 10 h 2 v 4 h 6 v -6 h -6 v -2 h 8 v 8 h 2 v -18 h -12 v 2 z m 2,12 h -2 v -8 h -4 v 2 h 2 v 10 h 2 v -2 h 2 z m 18,-14 v 2 h -4 v 2 h 4 v 2 h -4 v 4 h 2 v -2 h 2 v 2 h -2 v 2 h 2 v 2 h 2 v -2 h 2 v 4 h -4 v -2 h -2 v 2 h -2 v 2 h 18 v -2 h -8 v -2 h 8 v -2 h -8 v -2 h 4 v -2 h -4 v -2 h -4 v -2 h 4 v 2 h 2 v -2 h 4 v 2 h 2 v -4 h -4 v -2 h -2 v 2 h -6 v -2 z m 12,6 h -2 v 2 h 2 z m 0,2 v 2 h 2 v -2 z m 4,-8 v 2 h 2 v -2 z m 2,2 v 2 h 2 v -2 z m 4,-2 v 6 h -2 v 2 h 12 v 2 h 2 v -4 h -4 v -2 h -4 v 2 h -2 v -4 h 6 v 2 h 2 v -4 z m 10,10 h -10 v 8 h 2 v -2 h 6 v 2 h 2 z m -12,-2 h -2 v 2 h 2 z m -2,0 v -2 h -2 v 2 z m 20,-8 v 4 h -2 v 2 h 2 v 6 h -2 v 2 h 6 v -2 h -2 v -6 h 2 v -2 h -2 v -4 z m 4,12 h 4 v 2 h 2 v -2 h 6 v -2 h -2 v -6 h -4 v -4 h -2 v 4 h -2 v 2 h 2 v 4 h -4 z m 6,2 v 2 h 2 v -2 z m 2,2 v 2 h 4 v -2 z m -4,-2 h -2 v 2 h 2 z m -2,2 h -4 v 2 h 4 z m 20,-16 v 2 h -6 v 2 h 6 v 4 h -2 v -2 h -2 v 2 h -4 v 2 h 6 v 2 h 2 v 6 h 2 v -6 h 2 v -2 h 6 v -2 h -4 v -2 h -2 v 2 h -2 v -4 h 6 v -2 h -6 v -2 z m 4,12 v 2 h 2 v -2 z m 2,2 v 2 h 2 v -2 z m 2,2 v 2 h 2 v -2 z m -10,-4 h -2 v 2 h 2 z m -2,2 h -2 v 2 h 2 z m -2,2 h -2 v 2 h 2 z m 26,-16 v 6 h 2 v -2 h 4 v 8 h 2 v -8 h 2 v -2 h -8 v -2 z m 6,12 h -2 v 2 h -2 v 2 h 4 z m 0,4 v 2 h 4 v -2 z m -4,0 h -4 v 2 h 4 z m -4,0 v -4 h -2 v 2 h -2 v -4 h 4 v -2 h 2 v -2 h -2 v -4 h -6 v 2 h 4 v 4 h -4 v 8 z m 6,-4 v -4 h -2 v 4 z m 16,-12 v 2 h -8 v 2 h 6 v 6 h -4 v 2 h 2 v 2 h 2 v -2 h 6 v 2 h 2 v -2 h 2 v -2 h -4 v -6 h 6 v -2 h -8 v -2 z m 8,10 h 2 v -2 h -2 z m 0,-2 v -2 h -2 v 2 z m -4,6 h -6 v 2 h 6 z m 0,2 v 2 h 6 v -2 z m -6,0 h -6 v 2 h 6 z m -4,-6 v -2 h -2 v 2 z m 0,-2 h 2 v -2 h -2 z m 22,-8 v 2 h -4 v 2 h 2 v 2 h -2 v 12 h 2 v -2 h 2 v -2 h -2 v -2 h 2 v -2 h -2 v -2 h 2 v 2 h 2 v -2 h 4 v 4 h 2 v -6 h 4 v 2 h -2 v 6 h 2 v -2 h 2 v -8 h -4 v -2 h 4 v -2 h -8 v 2 h 2 v 2 h -2 v 2 h -2 v -2 h 2 v -2 h -4 v -2 z m 12,14 v 4 h 2 v -4 z m -2,0 h -2 v 2 h 2 z m -2,2 h -2 v 2 h 2 z m -2,-4 h -2 v 2 h 2 z m -2,2 h -2 v 2 h 2 z m -2,2 h -2 v 2 h 2 z m 0,-2 v -2 h -2 v 2 z m 0,-2 h 2 v -2 h -2 z m 18,-12 v 2 h 6 v 2 h -6 v -2 h -2 v 2 h -2 v 2 h 2 v 12 h 16 v -4 h -2 v 2 h -12 v -4 h 12 v -8 h -4 v -2 h 2 v -2 z m -156,2 h 2 v 2 h -2 z m 4,0 h 4 v 2 h -4 z m 116,2 h 2 v 6 h -2 z m 16,0 h 2 v 2 h -2 z m -136,2 h 2 v 2 h -2 z m 4,0 h 4 v 2 h -4 z m 60,0 h 2 v 4 h -2 z m 92,0 h 4 v 4 h -4 z m 6,0 h 4 v 4 h -4 z m -144,2 h 2 v 2 h -2 z m 156,2 v 2 h 4 v -2 z m 4,2 v 4 h 2 v -4 z m 0,4 h -4 v 2 h 4 z m -4,0 v -4 h -2 v 4 z m -134,-4 h 6 v 2 h -6 z m -38,2 h 2 v 2 h -2 z m 32,0 v 2 h 2 v -2 z m 0,2 h -2 v 2 h 2 z')
  }

  render() {
    ctx.save()
    ctx.fillStyle = 'rgb(0,0,0)'

    // 颜色测试
    ctx.translate(120, 0)
    ctx.fill(this.STATIC_PATH_COLOR_TEST_ZH)

    // 作者：肯尼·富利
    ctx.translate(0, 20)
    ctx.fill(this.STATIC_PATH_BY_KENNY_ZH)

    // 如何使用
    ctx.translate(0, 40)
    ctx.fill(this.STATIC_PATH_HOW_TO_USE_ZH)

    // 调整滑块来改变颜色。
    ctx.translate(0, 20)
    ctx.fill(this.STATIC_PATH_INSTRUCTIONS_ZH)

    ctx.restore()
  }
}
