// import { StaticActor } from './components/core/Actor';
import { Buffer, Context } from './components/core/Context';
// import Engine from './components/core/Engine';
// import squareSrc from '../images/square.svg';
// import circleSrc from '../images/circle.svg';
// import triangleSrc from '../images/triangle.svg';

const context = new Context(300, 400, true);

const buffer1 = new Buffer(50, 50, 100, 200);
buffer1._context.fillStyle = 'blue';
buffer1._context.fillRect(0, 0, 50, 50);

context.render(buffer1.buffer);
