// js/scene_manager/scene_manager.js

// Assuming FontManager is either imported (if using ES Modules)
// or globally available (if not using modules).
// If using ES Modules:
// import { FontManager } from '../font_manager/font_manager.js';

class SceneManager {
  constructor() {
    this.fontManager = new FontManager() // FontManager instance
    this.scenes = {} // Initialize as empty, populate after font load
    this.currentScene = 'title'
    this.utilFunctions = new UtilFunctions()
    // Do NOT call render() here directly if you want to wait for async operations
    // Call an async init method instead.
  }

  async initialize() {
    try {
      // Load your font here using the instance
      await this.fontManager.loadFont('FusionPixel', './fonts/fusion_pixel_10px_monospaced_zh_hans.ttf', {
        // Optional: Add font descriptors if needed (e.g., display, style, weight)
        // display: 'swap' // Recommended for better user experience
      })
      console.log('All fonts loaded, initializing scenes...')

      // Now that the font is loaded, you can safely initialize scenes that might use it.
      this.scenes = {
        about: new SceneAbout(),
        main: new SceneMain(),
        title: new SceneTitle()
      }

      // Start rendering loop only after everything is ready
      this.render()
    } catch (error) {
      console.error('Failed to initialize SceneManager due to font loading error:', error)
      // Handle error, e.g., display a message to the user, load fallback font.
    }
  }

  render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    // Ensure scenes are initialized before trying to render them
    if (this.scenes[this.currentScene]) {
      this.scenes[this.currentScene].render({ sceneManager: this, utilFunctions: this.utilFunctions })
    }
    digiPointer.render()
    this.update()
  }

  update() {
    // Ensure scenes are initialized before trying to update them
    if (this.scenes[this.currentScene]) {
      this.scenes[this.currentScene].update({ sceneManager: this, utilFunctions: this.utilFunctions })
    }

    if (timers.timer60 >= timers.timer60max) {
      timers.timer60 = 0
    } else {
      timers.timer60++
    }

    requestAnimationFrame(() => this.render())
  }
}
