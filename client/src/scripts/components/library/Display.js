import Buffer from './Buffer';

/**
 * /////////////////////////////////////////////////////
 * Display.js
 * /////////////////////////////////////////////////////
 */
class Display extends Buffer {
  #aspectRatio;
  #onResize;
  #maxWidth;

  constructor(config = {}) {
    if (Display.instance) {
      return Display.instance;
    } else {
      const { width = 800, height = 600, onResize = () => {} } = config;

      super(width, height, true);
      this.#aspectRatio = height / width;
      this.#onResize = onResize;
      this.#maxWidth = width;

      this.init();
      this.resize();

      Display.instance = this;
      return Display.instance;
    }
  }

  init() {
    window.addEventListener('resize', (e) => {
      e.preventDefault();
      this.resize();
    });
  }

  resize() {
    const { innerWidth: width, innerHeight: height } = window;
    let newWidth,
      newHeight = 0;
    if (height / width >= this.#aspectRatio) {
      newWidth = width;
      newHeight = width * this.#aspectRatio;
    } else {
      newWidth = height / this.#aspectRatio;
      newHeight = height;
    }

    if (newWidth >= this.#maxWidth) {
      this.width = this.#maxWidth;
      this.height = this.#maxWidth * this.#aspectRatio;
    } else {
      this.width = newWidth;
      this.height = newHeight;
    }

    this.#onResize(this.width, this.height);
  }
}

export default Display;
