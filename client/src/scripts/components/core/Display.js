/**
 * iClusterDev 2021
 *
 * Display
 * static handling the context resize
 * based on a constant aspect ratio
 */

const createContext = (width, height) => {
  const canvas = document.createElement('canvas');
  canvas.height = height;
  canvas.width = width;
  document.body.appendChild(canvas);
  return canvas.getContext('2d');
};

class Display {
  constructor(config = {}) {
    if (Display.instance) {
      return Display.instance;
    } else {
      Display.instance = this;
      const { width = 800, height = 600, maxWidth = 920 } = config;
      this.context = createContext(width, height);
      this.maxWidth = maxWidth;
      this.aspectRatio = height / width;
      return Display.instance;
    }
  }

  get width() {
    return this.context.canvas.width;
  }

  set width(width) {
    this.context.canvas.width = width;
  }

  get height() {
    return this.context.canvas.height;
  }

  set height(height) {
    this.context.canvas.height = height;
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
    if (this.maxWidth && this.width >= this.maxWidth) {
      this.width = this.maxWidth;
      this.height = this.maxWidth * this.aspectRatio;
    }

    this.context.imageSmoothingEnabled = false;
  }
}

export default Display;
