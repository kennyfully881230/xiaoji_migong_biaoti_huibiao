'use strict'

class UtilFunctions {
  sine = (a, b, t) => {
    t = Math.min(Math.max(t, 0), 1) // Clamp between 0 and 1
    const index = Math.floor(t * (pixelSteps.length - 1)) // Ensure index is in bounds
    return pixelSteps[index]
  }

  sine2 = (a, b, t) => {
    return a + (b - a) * Math.sin(Math.PI * (t * 2))
  }
}
