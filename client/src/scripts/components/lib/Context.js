/**
 * iClusterDev 2021
 *
 * Context
 * singleton instance holding a reference to
 * the document canvas and its context 2D
 * ultimately everything will be rendered here
 */
class Context {
  constructor() {
    if (Context.instance) return Context.instance;
    Context.instance = this;
    this.canvas = document.querySelector('canvas');
    this.instance = this.canvas.getContext('2d');
    return this;
  }

  get width() {
    return this.canvas.width;
  }

  get height() {
    return this.canvas.height;
  }

  set width(width) {
    this.canvas.width = width;
  }

  set height(height) {
    this.canvas.height = height;
  }

  clear() {
    this.instance.clearRect(0, 0, this.width, this.height);
  }

  draw(buffer) {
    this.instance.save();
    if (buffer.angle) {
      this.instance.translate(
        buffer.posX + 0.5 * buffer.width,
        buffer.posY + 0.5 * buffer.height
      );
      this.instance.rotate((Math.PI / 180) * buffer.angle);
      this.instance.translate(
        -(buffer.posX + 0.5 * buffer.width),
        -(buffer.posY + 0.5 * buffer.height)
      );
    }
    this.instance.drawImage(
      buffer.buffer.canvas,
      buffer.posX,
      buffer.posY,
      buffer.width,
      buffer.height,
      buffer.posX,
      buffer.posY,
      buffer.width,
      buffer.height
    );
    this.instance.restore();
  }
}

export default Context;
