'use strict'

const digiPointer = new DigiPointer()
const scene = new Scene()

const updatePointerPosition = e => {
  e.preventDefault()
  const rect = canvas.getBoundingClientRect()
  const scaleX = canvas.width / rect.width
  const scaleY = canvas.height / rect.height

  const rawX = (e.clientX - rect.left) * scaleX
  const rawY = (e.clientY - rect.top) * scaleY

  digiPointer.pos.dx = Math.floor(Math.max(0, Math.min(rawX, canvas.width - 1)))
  digiPointer.pos.dy = Math.floor(Math.max(0, Math.min(rawY, canvas.height - 1)))
}

canvas.addEventListener('pointerdown', e => {
  digiPointer.pos.isTouching = true
  updatePointerPosition(e)
})

canvas.addEventListener('pointermove', e => {
  if (digiPointer.pos.isTouching) {
    updatePointerPosition(e)
  }
})

const clearPointerState = e => {
  e.preventDefault()
  digiPointer.pos.isTouching = false
  digiPointer.pos.dx = null
  digiPointer.pos.dy = null
}

canvas.addEventListener('pointerup', clearPointerState)
canvas.addEventListener('pointercancel', clearPointerState)
canvas.addEventListener('pointerout', clearPointerState)
