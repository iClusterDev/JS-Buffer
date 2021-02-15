import Utils from './Utils';

class Buffer {
  constructor(config = {}) {
    const { width = 800, height = 600, onscreen = false } = config;
    this._context = Utils.createContext(width, height, onscreen);
  }

  get imageData() {
    return this._context.getImageData(0, 0, this.width, this.height);
  }

  get width() {
    return this._context.canvas.width;
  }

  get height() {
    return this._context.canvas.height;
  }

  set width(width) {
    this._context.canvas.width = width;
  }

  set height(height) {
    this._context.canvas.height = height;
  }

  clear() {
    this._context.clearRect(0, 0, this.width, this.height);
  }

  render(imageData, positionX = 0, positionY = 0) {
    this._context.putImageData(imageData, positionX, positionY);
  }
}

export default Buffer;
