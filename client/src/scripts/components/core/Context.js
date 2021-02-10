import Utils from './Utils';

class Context {
  /**
   * Off/On screen Rendering context 2D
   * @param {Number} width width in px
   * @param {Number} height height in px
   * @param {Boolean} onscreen off/on screen canvas type
   */
  constructor(width = 800, height = 600, onscreen = false) {
    this._context = Utils.createContext(width, height, onscreen);
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
  /**
   * Off screen rendering context 2D
   * @param {Number} width width in px
   * @param {Number} height height in px
   * @param {Number} positionX position x coordinate
   * @param {Number} positionY position y coordinate
   */
  constructor(width = 50, height = 50, positionX = 0, positionY = 0) {
    super(width, height, false);
    this._positionX = positionX;
    this._positionY = positionY;
  }

  get buffer() {
    return {
      data: this._context.canvas,
      width: this._context.canvas.width,
      height: this._context.canvas.height,
      positionX: this._positionX,
      positionY: this._positionY,
    };
  }
}

export { Context, Buffer };
