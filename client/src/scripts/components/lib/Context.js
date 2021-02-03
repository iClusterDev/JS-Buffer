/**
 * iClusterDev 2021
 *
 * Context
 * singleton instance holding a reference to
 * the document canvas and its context 2D
 * ultimately everything will be rendered here
 */
const createContext = (width, height) => {
  const canvas = document.createElement('canvas');
  canvas.height = height;
  canvas.width = width;
  document.body.appendChild(canvas);
  return canvas.getContext('2d');
};

class Context {
  constructor(width = 800, height = 600) {
    if (Context.instance) {
      return Context.instance;
    } else {
      Context.instance = this;
      this._instance = createContext(width, height);
      return Context.instance;
    }
  }

  get instance() {
    return this._instance;
  }

  get canvas() {
    return this._instance.canvas;
  }

  get width() {
    return this._instance.canvas.width;
  }

  get height() {
    return this._instance.canvas.height;
  }

  set width(width) {
    this._instance.canvas.width = width;
  }

  set height(height) {
    this._instance.canvas.height = height;
  }

  // clear() {
  //   this.instance.clearRect(0, 0, this.width, this.height);
  // }

  // draw(buffer) {
  //   this.instance.save();
  //   if (buffer.angle) {
  //     this.instance.translate(
  //       buffer.posX + 0.5 * buffer.width,
  //       buffer.posY + 0.5 * buffer.height
  //     );
  //     this.instance.rotate((Math.PI / 180) * buffer.angle);
  //     this.instance.translate(
  //       -(buffer.posX + 0.5 * buffer.width),
  //       -(buffer.posY + 0.5 * buffer.height)
  //     );
  //   }
  //   this.instance.drawImage(
  //     buffer.buffer.canvas,
  //     buffer.posX,
  //     buffer.posY,
  //     buffer.width,
  //     buffer.height,
  //     buffer.posX,
  //     buffer.posY,
  //     buffer.width,
  //     buffer.height
  //   );
  //   this.instance.restore();
  // }
}

export default Context;
