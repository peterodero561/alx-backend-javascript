export default class Airport {
  constructor(name, code) {
    if (typeof name !== 'string') {
      throw new TypeError('name must be string');
    } else if (typeof code !== 'string') {
      throw new TypeError('code must be string');
    } else {
      this._name = name;
      this._code = code;
    }
  }

  // default string
  toString() {
    return `[object ${this._code}]`;
  }
}
