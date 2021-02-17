import triangle from '../../../images/triangle.svg';

export default {
  name: 'actor1',
  assets: [triangle],
  positionX: 10,
  positionY: 10,
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
};
