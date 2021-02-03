// import Engine from './components/core/Engine';
// import Display from './components/core/Display';

// const display = new Display({
//   width: 600,
//   height: 400,
//   maxWidth: 900,
// });

// window.addEventListener('resize', () => display.resize());

// const engine = new Engine(handleUpdate, handleRender);

// function handleUpdate() {}

// function handleRender() {}

// window.addEventListener('load', () => {
//   display.resize();
//   engine.start();
// });

const createContext = (width, height) => {
  const canvas = document.createElement('canvas');
  canvas.height = height;
  canvas.width = width;
  document.body.appendChild(canvas);
  return canvas.getContext('2d');
};

const context = createContext(800, 600);

class Context {
  static context = context;

  static get canvas() {
    return this.context.canvas;
  }

  static get width() {
    return this.context.canvas.width;
  }

  static get height() {
    return this.context.canvas.height;
  }

  static set width(width) {
    this.context.canvas.width = width;
  }

  static set height(height) {
    this.context.canvas.height = height;
  }
}
console.log(
  'DEBUG ~ file: app.js ~ line 35 ~ Context ~ context',
  Context.context,
  Context.canvas,
  Context.height,
  Context.width
);
