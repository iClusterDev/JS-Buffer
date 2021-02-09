import Context from './Context';
import Sprite from './Sprite';
import Utils from './Utils';

class StaticActor extends Context {
  /**
   * offscreen static buffer
   * @param {Image} config.image source image object
   * @param {Number} config.positionX buffer position x
   * @param {Number} config.positionY buffer position y
   * @param {String} config.color buffer color
   */
  constructor(config = {}) {
    const {
      image = null,
      positionX = 0,
      positionY = 0,
      color = 'transparent',
      lockAspectRatio = true,
    } = config;

    if (!image)
      throw new Error(
        `StaticActor ~ constructor: Actor Type needs an image obj!`
      );

    super(image.width, image.height, false);
    this._sprite = new Sprite({ image, lockAspectRatio });
    this._positionX = positionX;
    this._positionY = positionY;
    this._color = color;
    this.draw();
  }

  get buffer() {
    return Utils.outputBuffer(
      this._context.canvas,
      this._context.canvas.width,
      this._context.canvas.height,
      this._positionX,
      this._positionY
    );
  }

  draw() {
    if (this._color !== 'transparent') {
      this._context.fillStyle = this._color;
      this._context.fillRect(
        0,
        0,
        this._context.canvas.width,
        this._context.canvas.height
      );
    }
    this.render(this._sprite.buffer);
  }
}

export { StaticActor };
