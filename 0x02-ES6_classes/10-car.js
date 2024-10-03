export default class Car {
  constructor(brand, motor, color) {
    if (typeof brand !== 'string') {
      throw new TypeError('brand must be a string');
    } else if (typeof motor !== 'string') {
      throw new TypeError('motor must be a string');
    } else if (typeof color !== 'string') {
      throw new TypeError('color must be a string');
    } else {
      this._brand = brand;
      this._motor = motor;
      this._color = color;
    }
  }

  // Additinal methods
  cloneCar() {
    return new this.constructor(this._brand, this._motor, this._color);
  }
}
