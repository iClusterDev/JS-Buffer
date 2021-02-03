/**
 * iClusterDev 2021
 *
 * Display
 * singleton handling the context resize
 * based on a constant aspect ratio
 */
import Context from '../lib/Context';

class Display {
  constructor(config = {}) {
    if (Display.instance) {
      return Display.instance;
    } else {
      Display.instance = this;
      const { width = 800, height = 600, maxWidth = 900 } = config;
      this._context = new Context(width, height);
      this._maxWidth = maxWidth;
      this._aspectRatio = height / width;
      return Display.instance;
    }
  }

  resize() {
    const { innerWidth: width, innerHeight: height } = window;

    if (height / width > this._aspectRatio) {
      this._context.width = width;
      this._context.height = width * this._aspectRatio;
    } else {
      this._context.width = height / this._aspectRatio;
      this._context.height = height;
    }

    if (this._maxWidth && this._context.width >= this._maxWidth) {
      this._context.width = this._maxWidth;
      this._context.height = this._maxWidth * this._aspectRatio;
    }

    this._context.instance.imageSmoothingEnabled = false;
  }
}

export default Display;
