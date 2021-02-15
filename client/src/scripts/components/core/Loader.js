class Loader {
  constructor() {
    this._ready = false;
    this._images = [];
  }

  getImage(name = '') {
    if (this._ready && name.length > 0) {
      const storedImage = this._images.find((image) => {
        return image.name === name;
      });
      return storedImage.image;
    }
  }

  loadImages(sources = []) {
    const promises = sources.map((source) => {
      return new Promise((resolve, reject) => {
        const image = new Image();
        image.src = source.src;
        image.onload = function () {
          resolve({ name: source.name, image });
        };
      });
    });
    return Promise.all(promises).then((images) => {
      this._images = images;
      this._ready = true;
      return true;
    });
  }
}

export default Loader;
