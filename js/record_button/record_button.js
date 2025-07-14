'use strict'

// This is an exprimental feature and it's WIP.
// 这是一个实验性的功能，目前仍在开发中。
class RecordButton {
  constructor() {
    this.state = { active: false }
    this.dx = 300
    this.dy = 0
    this.dw = 20
    this.dh = 20

    this.dx2 = 300 + 2
    this.dy2 = 0 + 2
    this.dw2 = 20 - 4
    this.dh2 = 20 - 4

    // Test webm
    this.stream = canvas.captureStream(12)
    this.options = { mimeType: 'video/webm; codecs=vp9' }
    this.recordedChunks = []

    this.mediaRecorder = new MediaRecorder(this.stream, this.options)
    this.mediaRecorder.ondataavailable = this.handleDataAvailable.bind(this)
  }

  download() {
    const blob = new Blob(this.recordedChunks, {
      type: 'video/webm'
    })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    document.body.appendChild(a)
    a.style = 'display: none'
    a.href = url
    a.download = 'test.webm'
    a.click()
    URL.revokeObjectURL(url)
  }

  handleDataAvailable(event) {
    console.log('data-available')
    if (event.data.size > 0) {
      console.log(this.recordedChunks)
      this.recordedChunks.push(event.data)
      console.log(this.recordedChunks)
      this.download()
    } else {
      // …
    }
  }

  async init() {
    console.log('recording...')
    this.mediaRecorder.start()

    setTimeout(() => {
      console.log('stopping')
      this.mediaRecorder.stop()
      this.state.active = false
    }, 3000)
  }

  render() {
    ctx.fillStyle = 'rgb(255,0,0)'
    ctx.fillRect(this.dx, this.dy, this.dw, this.dh)
    ctx.fillStyle = 'rgb(255,255,255)'
    ctx.fillRect(this.dx2, this.dy2, this.dw2, this.dh2)
  }

  update() {
    if (!this.state.active && digiPointer.pos.dx >= this.dx && digiPointer.pos.dx < this.dx + this.dw && digiPointer.pos.dy >= this.dy && digiPointer.pos.dy < this.dy + this.dh && digiPointer.pos.isTouching) {
      this.state.active = true
      this.init()
    }
  }
}
