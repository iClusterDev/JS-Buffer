import Display from './components/lib/Display';
import Engine from './components/lib/Engine';
import Buffer from './components/lib/Buffer';
import Loader from './components/lib/Loader';
import Actor from './components/lib/Actor';
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
      velocityX: 0.5,
      velocityY: 0.5,
      name: 'actor1',
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

    const actor2 = new Actor({
      positionX: 300,
      positionY: 150,
      image: squareImg,
      velocityX: 0.5,
      velocityY: 0.5,
      name: 'actor2',
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
        // actor1.update(timestep);
        // actor2.update(timestep);
        actor3.update(timestep);
      },
      () => {
        // screen.render(actor1.buffer, actor1.positionX, actor1.positionY);
        // screen.render(actor2.buffer, actor2.positionX, actor2.positionY);
        screen.render(actor3.buffer, actor3.positionX, actor3.positionY);
      }
    );

    engine.start();
  });
