import utils from '../utils/utils';

/**
 * Context
 * creates a new canvas element as an off/on screen element & its context
 * can clear the canvas
 * can render a buffer on the canvas
 */
export default class Context {
  constructor(config = {}) {
    this._canvas = utils.createCanvas(config);
    this._context = this._canvas.getContext('2d');
    this._context.imageSmoothingEnabled = false; // is this line going here???
  }

  clear() {
    this._context.clearRect(0, 0, this.width, this.height);
  }

  render(buffer) {
    setTimeout(() => {
      this._context.drawImage(
        buffer,
        0,
        0,
        buffer.width,
        buffer.height,
        0,
        0,
        buffer.width,
        buffer.height
      );
    }, 1000);
  }
}
