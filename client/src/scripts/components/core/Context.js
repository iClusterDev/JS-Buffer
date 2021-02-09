import Utils from './Utils';

class Context {
  /**
   * @param {Number} width width in px
   * @param {Number} height height in px
   * @param {Boolean} onscreen off/on screen canvas type
   */
  constructor(width = 800, height = 600, onscreen = false) {
    this._context = Utils.createContext(width, height, onscreen);
    this._context.imageSmoothingEnabled = false; // is this going here?
  }

  clear() {
    this._context.clearRect(
      0,
      0,
      this._context.canvas.width,
      this._context.canvas.height
    );
  }

  // render(buffer) {
  //   this._context.drawImage(
  //     buffer.data,
  //     buffer.positionX,
  //     buffer.positionY,
  //     buffer.width,
  //     buffer.height
  //   );
  render(
    bufferData,
    bufferPositionX,
    bufferPositionY,
    bufferWidth,
    bufferHeight
  ) {
    this._context.drawImage(
      buffer.data,
      buffer.positionX,
      buffer.positionY,
      buffer.width,
      buffer.height
    );
  }
}

export default Context;
