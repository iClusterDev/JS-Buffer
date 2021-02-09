import Context from './Context';

/**
 * Screen (singleton)
 * is a special type of context
 * always attached to the DOM when instantiated
 * can resize the canvas
 */
class Screen extends Context {
  constructor(config = {}) {
    if (Screen.instance) {
      return Screen.instance;
    } else {
      const { width = 800, height = 600, maxWidth = 910 } = config;
      super({ dom: true, width, height });
      Screen.instance = this;
      this._maxWidth = maxWidth;
      this._aspectRatio = height / width;
      return this;
    }
  }

  resize() {
    const { innerWidth: width, innerHeight: height } = window;
    if (height / width > this._aspectRatio) {
      this.width = width;
      this.height = width * this._aspectRatio;
    } else {
      this.width = height / this._aspectRatio;
      this.height = height;
    }
    if (this._maxWidth && this.width >= this._maxWidth) {
      this.width = this._maxWidth;
      this.height = this._maxWidth * this._aspectRatio;
    }
  }
}

export default Screen;
