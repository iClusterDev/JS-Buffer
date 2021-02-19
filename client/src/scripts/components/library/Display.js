import Buffer from './Buffer';

class Display extends Buffer {
  /**
   * @param {Object} config config object
   * @param {Number} config.width width of the screen in px
   * @param {Number} config.height height of the screen in px
   * @param {Number} config.maxWidth maximum width extension in px
   * @param {Boolean} config.resizable allow resize to keep a constant aspect ration
   */
  constructor(config = {}) {
    const {
      width = 800,
      height = 600,
      maxWidth = 900,
      resizable = true,
    } = config;

    super({ width, height, onscreen: true });
    this._aspectRatio = height / width;
    this._resizable = resizable;
    this._maxWidth = maxWidth;

    this.init();
  }

  get aspectRatio() {
    return this._aspectRatio;
  }

  get resizable() {
    return this._resizable;
  }

  get maxWidth() {
    return this._maxWidth;
  }

  init() {
    if (this.resizable) window.addEventListener('resize', () => this.resize());
  }

  resize() {
    const { innerWidth: width, innerHeight: height } = window;
    if (height / width > this.aspectRatio) {
      this.width = width;
      this.height = width * this.aspectRatio;
    } else {
      this.width = height / this.aspectRatio;
      this.height = height;
    }
    if (this.width >= this.maxWidth) {
      this.width = this.maxWidth;
      this.height = this.maxWidth * this.aspectRatio;
    }
    this._context.imageSmoothingEnabled = false; // is this going here?
  }
}

export default Display;
