import Utils from './Utils';

/**
 * /////////////////////////////////////////////////////
 * Buffer.js
 * /////////////////////////////////////////////////////
 */
class Buffer {
  #buffer;

  constructor(width, height, onscreen) {
    this.#buffer = Utils.createContext(width, height, onscreen);
  }

  get buffer() {
    return {
      data: this.#buffer.canvas,
      width: this.#buffer.canvas.width,
      height: this.#buffer.canvas.height,
    };
  }

  get width() {
    return this.#buffer.canvas.width;
  }

  get height() {
    return this.#buffer.canvas.height;
  }

  set width(width) {
    this.#buffer.canvas.width = width;
  }

  set height(height) {
    this.#buffer.canvas.height = height;
  }

  render(buffer, positionX = 0, positionY = 0) {
    this.#buffer.drawImage(
      buffer.data,
      positionX,
      positionY,
      buffer.width,
      buffer.height
    );
  }
}

export default Buffer;
