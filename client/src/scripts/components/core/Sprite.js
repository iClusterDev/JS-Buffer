import Utils from './Utils';

class Sprite {
  constructor(config = {}) {
    const { image = null, lockAspectRatio = true } = config;
    if (!image)
      throw new Error(`Sprite ~ constructor: Sprite Type needs an image obj!`);
    this._image = image;
    this._aspectRatio = this._image.height / this._image.width;
    this._lockAspectRatio = lockAspectRatio;
  }

  get image() {
    return this._image;
  }

  get width() {
    return this._image.width;
  }

  set width(width) {
    this._image.width = width;
    if (this._lockAspectRatio) {
      this._image.height = this._aspectRatio * this._image.width;
    }
  }

  get height() {
    return this._image.height;
  }

  set height(height) {
    this._image.height = height;
    if (this._lockAspectRatio) {
      this._image.width = this._image.height / this._aspectRatio;
    }
  }

  get buffer() {
    return Utils.outputBuffer(this.image, this.width, this.height, 0, 0);
  }
}

export default Sprite;
