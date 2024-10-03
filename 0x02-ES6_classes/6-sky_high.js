import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    if (typeof floors !== 'number') {
      throw new TypeError('floors must be a number');
    } else {
      this._floors = floors;
    }
  }

  // getter for floors and sqft
  get floors() { return this._floors; }

  get sqft() { return super.sqft; }

  // additional methods
  evacuationWarningMessage() { return `Evacuate slowly the ${this._floors} floors`; }
}
