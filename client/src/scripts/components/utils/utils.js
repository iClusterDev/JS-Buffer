export default {
  createCanvas: (config) => {
    const { dom = false, width = 800, height = 600 } = config;
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    if (dom) document.body.appendChild(canvas);
    return canvas;
  },
};
