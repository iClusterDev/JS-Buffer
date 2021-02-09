class Utils {
  static createCanvas(width = 800, height = 600, onscreen = false) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    if (onscreen) document.body.appendChild(canvas);
    return canvas;
  }

  static createContext(width = 800, height = 600, onscreen = false) {
    const canvas = this.createCanvas(width, height, onscreen);
    return canvas.getContext('2d');
  }

  static outputBuffer(data, width, height, positionX, positionY) {
    return {
      data,
      width,
      height,
      positionX,
      positionY,
    };
  }
}

export default Utils;
