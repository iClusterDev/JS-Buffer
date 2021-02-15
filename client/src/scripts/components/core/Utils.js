class Utils {
  /**
   * Utins.createCanvas
   * To create an off/on screen canvas element
   * @param {Number} width width in px
   * @param {Number} height height in px
   * @param {Boolean} onscreen off/on screen canvas type
   */
  static createCanvas(width = 800, height = 600, onscreen = true) {
    if (onscreen) {
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      if (onscreen) document.body.appendChild(canvas);
      return canvas;
    } else {
      return new OffscreenCanvas(width, height);
    }
  }

  /**
   * Utils.createContext
   * To create an off/on screen rendering context
   * @param {Number} width width in px
   * @param {Number} height height in px
   * @param {Boolean} onscreen off/on screen canvas type
   */
  static createContext(width = 800, height = 600, onscreen = false) {
    return this.createCanvas(width, height, onscreen).getContext('2d');
  }
}

export default Utils;
