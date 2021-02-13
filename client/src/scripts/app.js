import { Buffer, Context } from './components/core/Context';
import Engine from './components/core/Engine';

class Actor extends Buffer {
  constructor(config) {
    const { width = 50, height = 50, positionX = 0, positionY = 0 } = config;
    super(width, height, positionX, positionY);

    const { name, update, velocityX = 0, velocityY = 0 } = config;
    this._name = name;
    this._update = update;
    this._velocityX = velocityX;
    this._velocityY = velocityY;

    this._context.fillStyle = 'red';
    this._context.fillRect(
      0,
      0,
      this._context.canvas.width,
      this._context.canvas.height
    );
  }

  update(timestep) {
    this._update(timestep);
  }
}

const screen = new Context(800, 600, true);
const ball = new Actor({
  name: 'ball',
  width: 50,
  height: 50,
  positionX: 10,
  positionY: 20,
  velocityX: 0.5,
  velocityY: 0.5,
  update: function (timestep) {
    const minPositionX = 0;
    const maxPositionX =
      screen._context.canvas.width - this._context.canvas.width;
    const minPositionY = 0;
    const maxPositionY =
      screen._context.canvas.height - this._context.canvas.height;
    if (this._positionX > maxPositionX || this._positionX < minPositionX) {
      this._velocityX = -this._velocityX;
    }
    if (this._positionY > maxPositionY || this._positionY < minPositionY) {
      this._velocityY = -this._velocityY;
    }
    this._positionX += this._velocityX * timestep;
    this._positionY += this._velocityY * timestep;
  },
});

screen.render(ball.buffer);

const update = (timestep) => {
  screen.clear();
  ball.update(timestep);
};

const render = () => {
  screen.render(ball.buffer);
};

const engine = new Engine(update, render);

engine.start();

// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------

const test = {
  use: ['screen', 'controller'],
  name: 'testActor',
  props: {
    width: 100,
    height: 200,
    positionX: 10,
    positionY: 10,
    velocityX: 0.5,
    velocityY: 0.5,
    solid: false,
  },
  computed: {},
  methods: {
    update: (timestep) => {},
  },
  sprite: null,
  emit: [
    { name: 'bouncex', action: () => {} },
    { name: 'bouncex', action: () => {} },
  ],
};

class Config {
  constructor() {
    this.use = [];
    this.name = '';
    this.props = {
      width: null,
      height: null,
      positionX: null,
      positionY: null,
      velocityX: null,
      velocityY: null,
      solid: false,
      skin: null,
    };
    this.computed = {}; // getters and setters
    this.methods = {}; // prototype stuff
    this.emit = []; // events

    Object.seal(this);
  }
}

class Configurable {
  constructor(config = {}) {
    this.config = new Config();
    this.init(config);
    Object.seal(this);
  }

  init(config) {
    // id
    this.name = config.name;

    // properties
    Object.assign(this, config.props);

    // methods
    Object.assign(Configurable.prototype, config.methods);
  }
}

const configurable = new Configurable({
  name: 'congigme',
  solid: false,
  skin: null,

  properties: {
    width: 100,
    height: 200,
    positionX: 10,
    positionY: 10,
    velocityX: 0.5,
    velocityY: 0.5,
  },

  computed: {
    area: function () {
      return this.width * this.height;
    },
  },

  methods: {
    update1: function (timestep) {
      console.log(this.width);
    },
    update2: function () {
      console.log(this.height);
    },
    update3: function () {
      console.log(this.positionX);
    },
  },
});
configurable.update1();
configurable.update2();
configurable.update3();
// console.log('DEBUG ~ file: app.js ~ line 104 ~ configurable', configurable);
