class OnScreenContext {
  #context;

  constructor(width = 0, height = 0) {
    // this.#context = document.createElement('canvas').getContext('2d');
  }
}

class OffScreenContext {
  #context;

  constructor(width = 0, height = 0) {
    this.#context = new OffscreenCanvas(width, height).getContext('2d');
  }

  get image() {
    return this.#context.canvas;
  }

  get width() {
    return this.#context.canvas.width;
  }

  get height() {
    return this.#context.canvas.height;
  }

  set width(width) {
    this.#context.canvas.width = width;
  }

  set height(height) {
    this.#context.canvas.height = height;
  }
}

class Buffer extends OffScreenContext {
  #positionX;
  #positionY;

  constructor(width = 0, height = 0, positionX = 0, positionY = 0) {
    super(width, height);
    this.#positionX = positionX;
    this.#positionY = positionY;
  }

  get buffer() {
    return {
      image: this.image,
      positionX: this.positionX,
      positionY: this.positionY,
    };
  }

  get positionX() {
    return this.#positionX;
  }

  get positionY() {
    return this.#positionY;
  }

  set positionX(positionX) {
    this.#positionX = positionX;
  }

  set positionY(positionY) {
    this.#positionY = positionY;
  }
}

const buffer = new Buffer(50, 50, 0, 0);
console.log('DEBUG ~ file: app.js ~ line 40 ~ buffer', buffer);

// import Display from './components/library/Display';
// import Engine from './components/library/Engine';
// import Loader from './components/library/Loader';
// import Actor from './components/library/Actor';
// import src1 from '../images/circle.svg';
// import src2 from '../images/square.svg';
// import src3 from '../images/triangle.svg';
// import store from './components/store';

// const loader = new Loader();
// loader.loadImages([{ name: 'circle', src: src1 }]).then(() => {
//   const circleImg = loader.getImage('circle');

//   const display = new Display();

//   const actor3 = new Actor({
//     name: 'actor3',
//     image: circleImg,
//     positionX: 1,
//     positionY: 1,
//     velocityX: 0.5,
//     velocityY: 0.5,
//     update: function (timestep) {
//       const minPositionX = 0,
//         maxPositionX = store.state.display.width - this.width;
//       const minPositionY = 0,
//         maxPositionY = store.state.display.height - this.height;
//       if (this.positionX <= minPositionX || this.positionX >= maxPositionX)
//         this.velocityX = -this.velocityX;
//       if (this.positionY <= minPositionY || this.positionY >= maxPositionY)
//         this.velocityY = -this.velocityY;

//       this.positionX += timestep * this.velocityX;
//       this.positionY += timestep * this.velocityY;
//     },
//   });

//   const engine = new Engine(
//     (timestep) => {
//       display.clear();
//       actor3.update(timestep);
//     },
//     () => {
//       display.render(actor3.buffer, actor3.positionX, actor3.positionY);
//     }
//   );

//   engine.start();
// });
