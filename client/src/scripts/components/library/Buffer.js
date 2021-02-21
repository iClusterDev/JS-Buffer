import Utils from './Utils';

class Buffer {
  constructor(config = {}) {
    const { width = 800, height = 600 } = config;
    this._context = Utils.createContext(width, height, onscreen);
  }

  get buffer() {
    return {
      data: this._context.canvas,
      width: this._context.canvas.width,
      height: this._context.canvas.height,
    };
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

  render(buffer, positionX = 0, positionY = 0) {
    this._context.drawImage(
      buffer.data,
      positionX,
      positionY,
      buffer.width,
      buffer.height
    );
  }
}

export default Buffer;
