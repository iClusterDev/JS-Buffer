import Engine from './components/core/Engine';
import Context from './components/lib/Context';

const context = new Context();
context.height = 600;
context.width = 800;

class Buffer {
  constructor() {
    this.context = new Context();
    this.buffer = document.createElement('canvas').getContext('2d');
    // this.buffer.canvas.height = context.height;
    // this.buffer.canvas.width = context.width;
  }
}

class StaticAsset extends Buffer {
  constructor(config = {}) {
    super();
    this.height = config.height || 20;
    this.width = config.width || 20;
    this.angle = config.angle || 0;
    this.posX = config.posX || 0;
    this.posY = config.posY || 0;
  }

  draw() {
    this.buffer.fillStyle = 'red';
    this.buffer.fillRect(this.posX, this.posY, this.width, this.height);
    this.context.draw(this);
  }

  update() {
    // this.posX += 0;
    // this.posY += 0;
    this.angle += 4;
  }
}

const brick = new StaticAsset({
  posX: 100,
  posY: 100,
  height: 20,
  width: 20,
  angle: 0,
});
const engine = new Engine(handleUpdate, handleRender);

function handleUpdate() {
  brick.update();
}

function handleRender() {
  context.clear();
  brick.draw();
}

engine.start();
