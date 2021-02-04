/**
 * Canvas
 * creates a new canvas element
 * as an off/on screen element
 */
class Canvas {
  constructor(config = {}) {
    const { dom = false, width = 800, height = 600 } = config;
    this._canvas = document.createElement('canvas');
    this._canvas.width = width;
    this._canvas.height = height;
    if (dom) document.body.appendChild(this._canvas);
  }
}

/**
 * Context extends Canvas
 * can clear the canvas
 * can render a buffer on the canvas
 */
class Context extends Canvas {
  constructor(config = {}) {
    super(config);
    this._context = this._canvas.getContext('2d');
    this._context.imageSmoothingEnabled = false; // is this line going here???
  }

  clear() {
    this._context.clearRect(0, 0, this.width, this.height);
  }

  render(buffer) {
    console.log('render!!!');
    // renderImage(buffer)
  }
}

/**
 * Buffer
 * special type of context
 * never attached to the DOM (always offscreen)
 * can render another buffer into itself
 * has a readonly image property
 */
class Buffer extends Context {
  constructor(config) {
    const { width, height } = config;
    super({ dom: false, width, height });
  }

  get image() {
    return this._canvas;
  }
}

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
      const { width, height, maxWidth = 910 } = config;
      super({ dom: true, width, height });
      Screen.instance = this;
      this._maxWidth = maxWidth;
      this._aspectRatio = height / width;
      return this;
    }
  }

  get width() {
    return this._canvas.width;
  }

  set width(width) {
    this._canvas.width = width;
  }

  get height() {
    return this._canvas.height;
  }

  set height(height) {
    this._canvas.height = height;
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

const screen = new Screen({
  width: 800,
  height: 600,
  maxWidth: 910,
});
console.log('DEBUG ~ file: app.js ~ line 114 ~ screen', screen);

window.addEventListener('resize', () => screen.resize());
