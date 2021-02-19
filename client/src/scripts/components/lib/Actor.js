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
      update = null,
      background = 'transparent',
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
      this._update = update;
      this._background = background;
      this._buffer = new Buffer({
        width: image.width,
        height: image.height,
        onscreen: false,
        background: background,
      });

      this.init();
    }
  }

  // getters
  get buffer() {
    return this._buffer.buffer; // really buffer.buffer?
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

  get velocityX() {
    return this._velocityX;
  }

  get velocityY() {
    return this._velocityY;
  }

  // setters
  set width(width) {
    this._buffer.width = width;
  }

  set height(height) {
    this._buffer.height = height;
  }

  set positionX(positionX) {
    this._positionX = positionX;
  }

  set positionY(positionY) {
    this._positionY = positionY;
  }

  set velocityX(velocityX) {
    this._velocityX = velocityX;
  }

  set velocityY(velocityY) {
    this._velocityY = velocityY;
  }

  init() {
    const context = this._buffer._context;
    if (this._background !== 'transparent') {
      context.fillStyle = this._background;
      context.fillRect(0, 0, this.width, this.height);
    }
    context.drawImage(this._image, 0, 0, this.width, this.height);
  }

  update(timestep) {
    if (this._update) {
      this._update(timestep);
    }
  }
}

export default Actor;
