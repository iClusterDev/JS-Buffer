import Context from './components/core/Context';
import Engine from './components/core/Engine';
import src from '../images/triangle.png';

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

// const screen = new Screen({
//   width: 800,
//   height: 600,
//   maxWidth: 910,
// });

/**
 * Buffer
 * special type of context
 * never attached to the DOM (always offscreen)
 * can render another buffer into itself
 */
class Buffer extends Context {
  constructor(config) {
    const { width, height } = config.image;
    super({ dom: false, width, height });
    this._image = image;
    this._context.fillStyle = 'green';
    this._context.fillRect(0, 0, this._canvas.width, this._canvas.height);
    this._context.drawImage(this._image, 0, 0);
  }

  get image() {
    return this._canvas;
  }
}

const image = new Image();
image.src = src;

image.onload = function () {
  const buffer = new Buffer({
    image: image,
  });

  const screen = new Screen({
    width: 800,
    height: 600,
    maxWidth: 910,
  });
  window.addEventListener('resize', () => {
    screen.resize();
    // screen.render(buffer.image);
  });

  const engine = new Engine(
    () => {},
    () => {
      screen.render(buffer.image);
    }
  );

  engine.start();
};
