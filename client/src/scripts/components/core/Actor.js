import Buffer from './Buffer';

class Actor {
  constructor(config = {}) {
    const {
      positionX = 0,
      positionY = 0,
      velocityX = 0,
      velocityY = 0,
      friction = 0,
      weight = 0,
      solid = false,
      image = null,
      name = 'actor',
      color = 'transparent',
      update = null,
    } = config;

    if (!image) {
      throw new Error(`Actor ${name} requires an image`);
    } else {
      this._positionX = positionX;
      this._positionY = positionY;
      this._velocityX = velocityX;
      this._velocityY = velocityY;
      this._friction = friction;
      this._weight = weight;
      this._solid = solid;
      this._image = image;
      this._name = name;
      this._color = color;
      this._update = update;
      this._buffer = new Buffer({
        width: image.width,
        height: image.height,
        onscreen: false,
      });

      this.init();
    }
  }

  get imageData() {
    return this._buffer.imageData;
  }

  get width() {
    return this._buffer.width;
  }

  get height() {
    return this._buffer.height;
  }

  get positionX() {
    return this._positionX;
  }

  get positionY() {
    return this._positionY;
  }

  init() {
    const context = this._buffer._context;
    if (this._color !== 'transparent') {
      context.fillStyle = this._color;
      context.fillRect(0, 0, this.width, this.height);
    }
    context.drawImage(this._image, 0, 0, this.width, this.height);
  }

  update(timestep) {
    if (this._update) {
      this._update();
    }
  }
}

export default Actor;
