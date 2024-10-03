export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number') {
      throw new TypeError('size must be a number');
    } else if (typeof location !== 'string') {
      throw new TypeError('location must be a string');
    } else {
      this._size = size;
      this._location = location;
    }
  }

  // oviriding methods toString and valueOf
  toString() { return this._location; }

  valueOf() { return this._size; }
}
