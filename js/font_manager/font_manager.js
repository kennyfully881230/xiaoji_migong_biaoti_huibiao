'use strict'

class FontManager {
  constructor() {
    this.loadedFonts = new Map()
  }

  /**
   * Loads a font and makes it available for use.
   * @param {string} fontName The name to register the font with (e.g., 'FusionPixel').
   * @param {string} fontPath The path to the font file (e.g., './fonts/myfont.ttf').
   * @param {object} [fontFaceDescriptors={}] Optional FontFace descriptors (e.g., { style: 'normal', weight: '400' }).
   * @returns {Promise<FontFace>} A promise that resolves with the loaded FontFace object.
   */
  async loadFont(fontName, fontPath, fontFaceDescriptors = {}) {
    if (this.loadedFonts.has(fontName)) {
      console.warn(`Font "${fontName}" is already loaded.`)
      return this.loadedFonts.get(fontName)
    }

    try {
      const fontFace = new FontFace(fontName, `url(${fontPath})`, fontFaceDescriptors)
      await fontFace.load()
      document.fonts.add(fontFace)
      this.loadedFonts.set(fontName, fontFace)
      console.log(`Font "${fontName}" loaded successfully from ${fontPath}.`)
      return fontFace
    } catch (error) {
      console.error(`Failed to load font "${fontName}" from ${fontPath}:`, error)
      throw error // Re-throw to allow further error handling
    }
  }

  /**
   * Checks if a font has been loaded.
   * @param {string} fontName The name of the font to check.
   * @returns {boolean} True if the font is loaded, false otherwise.
   */
  isFontLoaded(fontName) {
    return this.loadedFonts.has(fontName)
  }

  /**
   * Gets a loaded FontFace object.
   * @param {string} fontName The name of the font to retrieve.
   * @returns {FontFace|undefined} The FontFace object if found, otherwise undefined.
   */
  getFont(fontName) {
    return this.loadedFonts.get(fontName)
  }
}
