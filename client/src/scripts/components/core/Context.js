import Utils from './Utils';

class Context {
  /**
   * @param {Number} width width in px
   * @param {Number} height height in px
   * @param {Boolean} onscreen off/on screen canvas type
   */
  constructor(width = 800, height = 600, onscreen = false) {
    this._context = Utils.createContext(width, height, onscreen);
  }

  get buffer() {
    return {
      data: this._context.canvas,
      width: this._context.canvas.width,
      height: this._context.canvas.height,
      positionX: this._positionX || 0,
      positionY: this._positionY || 0,
    };
  }

  clear() {
    this._context.clearRect(
      0,
      0,
      this._context.canvas.width,
      this._context.canvas.height
    );
  }

  render(buffer) {
    this._context.drawImage(
      buffer.data,
      buffer.positionX,
      buffer.positionY,
      buffer.width,
      buffer.height
    );
  }
}

class Buffer extends Context {
  constructor(width = 800, height = 600, positionX = 0, positionY = 0) {
    super(width, height, false);
    this._positionX = positionX;
    this._positionY = positionY;
  }
}

export { Context, Buffer };
