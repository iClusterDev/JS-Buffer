import { StaticActor } from './components/core/Actor';
import Context from './components/core/Context';
import Engine from './components/core/Engine';
import squareSrc from '../images/square.svg';
import circleSrc from '../images/circle.svg';
import triangleSrc from '../images/triangle.svg';

const context = new Context(800, 600, true);
const circleImg = new Image(25, 25);
circleImg.src = circleSrc;
circleImg.onload = () => {
  // actors
  const actor1 = new StaticActor({
    image: circleImg,
    positionX: 100,
    positionY: 100,
  });

  // engine
  const engine = new Engine(
    function () {
      context.clear();
    },
    function () {
      context.render(actor1.buffer);
    }
  );

  engine.start();
};

