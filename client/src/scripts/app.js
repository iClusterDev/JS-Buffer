// import { StaticActor } from './components/core/Actor';
import { Buffer, Context } from './components/core/Context';
import Engine from './components/core/Engine';
// import squareSrc from '../images/square.svg';
// import circleSrc from '../images/circle.svg';
// import triangleSrc from '../images/triangle.svg';

const screen = new Context(800, 600, true);
const actor = new Buffer(50, 50, 0, 0);
actor._context.fillStyle = 'green';
actor._context.fillRect(0, 0, actor.buffer.width, actor.buffer.height);

let dx = 2;
const update = () => {
  screen.clear();

  actor._positionX -= dx;

  console.log('DEBUG ~ file: app.js ~ line 16 ~ update ~ dx', dx);
};

const render = () => {
  screen.render(actor.buffer);
};

const engine = new Engine(update, render);

// engine.start();
