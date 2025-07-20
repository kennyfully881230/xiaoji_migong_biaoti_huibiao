'use strict'

// Declare digiPointer and sceneManager globally or in a scope accessible
// to your event listeners and initialization function.
let digiPointer
let sceneManager

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

const clearPointerState = e => {
  e.preventDefault()
  digiPointer.pos.isTouching = false
  digiPointer.pos.dx = null
  digiPointer.pos.dy = null
}

// Asynchronous initialization function for your application
const initApplication = async () => {
  // Ensure canvas, ctx, and timers are defined globally or passed around
  // For example, assuming `canvas` is a global variable from `index.html`:
  // const canvas = document.getElementById('yourCanvasId');
  // const ctx = canvas.getContext('2d');
  // window.timers = { timer60: 0, timer60max: 60 }; // Example if timers is a global object

  digiPointer = new DigiPointer()
  sceneManager = new SceneManager()

  // IMPORTANT: Call the async initialize method on sceneManager
  // This will handle the font loading and then start the rendering loop.
  try {
    await sceneManager.initialize()
    console.log('Application fully initialized and rendering loop started!')

    // Attach event listeners ONLY after digiPointer is initialized
    canvas.addEventListener('pointerdown', e => {
      digiPointer.pos.isTouching = true
      updatePointerPosition(e)
    })

    canvas.addEventListener('pointermove', e => {
      if (digiPointer.pos.isTouching) {
        updatePointerPosition(e)
      }
    })

    canvas.addEventListener('pointerup', clearPointerState)
    canvas.addEventListener('pointercancel', clearPointerState)
    canvas.addEventListener('pointerout', clearPointerState)
  } catch (error) {
    console.error('Failed to initialize application:', error)
    // Display an error message to the user if critical initialization fails
  }
}

// Attach the initialization function to the DOMContentLoaded event
// This ensures that the HTML is fully parsed before script execution that
// might try to access elements like 'canvas'.
document.addEventListener('DOMContentLoaded', initApplication)
