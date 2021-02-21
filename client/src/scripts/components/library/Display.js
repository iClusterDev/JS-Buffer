import store from '../store';
import Buffer from './Buffer';

class Display extends Buffer {
  /**
   * Singleton onscreen context
   * @param {Object} store.state store.state object
   * @param {Number} store.state.width width of the screen in px
   * @param {Number} store.state.height height of the screen in px
   * @param {Number} store.state.maxWidth maximum width extension in px
   * @param {Boolean} store.state.resizable allow resize to keep a constant aspect ration
   */
  constructor() {
    const {
      width = 800,
      height = 600,
      maxWidth = 900,
      resizable = true,
    } = store.state.display;

    super({ width, height, onscreen: true });
    this._aspectRatio = height / width;
    this._resizable = resizable;
    this._maxWidth = maxWidth;
    this.init();
  }

  get aspectRatio() {
    return this._aspectRatio;
  }

  get resizable() {
    return this._resizable;
  }

  get maxWidth() {
    return this._maxWidth;
  }

  init() {
    const self = this;
    self.resize();
    if (self.resizable) {
      window.addEventListener('resize', (e) => {
        e.preventDefault();
        self.resize();
      });
    }
  }

  resize() {
    /**
     * FIXME
     * trigger / dispatch only when the size has changed
     * debounce needed for this?
     * rescale scene?
     */
    if (this.resizable) {
      const { innerWidth: width, innerHeight: height } = window;
      let newWidth = 0;
      let newHeight = 0;
      if (height / width >= this.aspectRatio) {
        newWidth = width;
        newHeight = width * this.aspectRatio;
      } else {
        newWidth = height / this.aspectRatio;
        newHeight = height;
      }

      if (newWidth >= this.maxWidth) {
        this.width = this.maxWidth;
        this.height = this.maxWidth * this.aspectRatio;
      } else {
        this.width = newWidth;
        this.height = newHeight;
      }

      store.dispatch('setDisplay', {
        width: this.width,
        height: this.height,
      });
    }
  }
}

export default Display;
