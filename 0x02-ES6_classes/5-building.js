export default class Building {
  constructor(sqft) {
    if (new.target === Building) {
      throw new Error('Cannot instantiate abstract class Building directly');
    } else if (typeof sqft !== 'number') {
      throw new TypeError('sqft must be a number');
    } else {
      this._sqft = sqft;
    }
  }

  // getter for sqft
  get sqft() { return this._sqft; }

  // abstract method
  static evacuationWarningMessage() {
    throw new Error('Method evacuationWarningMessage must be implemented');
  }
}
