'use strict'

const canvas = document.querySelector('canvas')
if (!canvas) {
  throw new Error('Canvas element not found in the DOM.')
}

const ctx = canvas.getContext('2d')
if (!ctx) {
  throw new Error('2D context is not supported or canvas failed to initialize.')
}

const pixelSteps = [0, 2, 4, 6, 8, 6, 4, 2, 0] // Manual easing

const timers = {
  timer60: 0,
  timer60max: 59
}

ctx.imageSmoothingEnabled = false
