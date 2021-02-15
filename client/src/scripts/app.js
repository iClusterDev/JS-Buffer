import Buffer from './components/core/Buffer';
import Loader from './components/core/Loader';
import Actor from './components/core/Actor';
import src1 from '../images/circle.svg';
import src2 from '../images/square.svg';
import src3 from '../images/triangle.svg';

const loader = new Loader();
loader
  .loadImages([
    { name: 'circle', src: src1 },
    { name: 'square', src: src2 },
    { name: 'triangle', src: src3 },
  ])
  .then(() => {
    const treangleImg = loader.getImage('triangle');
    const squareImg = loader.getImage('square');
    const circleImg = loader.getImage('circle');

    const screen = new Buffer({ onscreen: true });

    const actor1 = new Actor({
      positionX: 10,
      positionY: 10,
      image: treangleImg,
      name: 'actor1',
      update: function () {
        console.log(screen.width, screen.height);
      },
    });

    const actor2 = new Actor({
      positionX: 300,
      positionY: 150,
      image: squareImg,
      name: 'actor2',
    });

    const actor3 = new Actor({
      positionX: 500,
      positionY: 200,
      image: circleImg,
      name: 'actor3',
    });

    actor1.update();

    screen.render(actor1.imageData, actor1.positionX, actor1.positionY);
    screen.render(actor2.imageData, actor2.positionX, actor2.positionY);
    screen.render(actor3.imageData, actor3.positionX, actor3.positionY);
  });
