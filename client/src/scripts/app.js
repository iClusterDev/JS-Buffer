import Display from './components/library/Display';
import Engine from './components/library/Engine';
import Buffer from './components/library/Buffer';
import Loader from './components/library/Loader';
import Actor from './components/library/Actor';
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
    const circleImg = loader.getImage('circle');

    const screen = new Buffer({ onscreen: true });

    const actor3 = new Actor({
      name: 'actor3',
      image: circleImg,
      positionX: 500,
      positionY: 200,
      velocityX: 0.5,
      velocityY: 0.5,
      update: function (timestep) {
        const minPositionX = 0,
          maxPositionX = screen.width - this.width;
        const minPositionY = 0,
          maxPositionY = screen.height - this.height;

        if (this.positionX <= minPositionX || this.positionX >= maxPositionX)
          this.velocityX = -this.velocityX;
        if (this.positionY <= minPositionY || this.positionY >= maxPositionY)
          this.velocityY = -this.velocityY;

        this.positionX += timestep * this.velocityX;
        this.positionY += timestep * this.velocityY;
      },
    });

    const engine = new Engine(
      (timestep) => {
        screen.clear();
        actor3.update(timestep);
      },
      () => {
        screen.render(actor3.buffer, actor3.positionX, actor3.positionY);
      }
    );

    engine.start();
  });
