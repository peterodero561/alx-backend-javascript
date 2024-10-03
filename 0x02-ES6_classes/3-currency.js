export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    } else if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    } else {
      this._code = code;
      this._name = name;
    }
  }

  // getters of attibutes name && code
  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  // setters of attributes name && code
  set name(name) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  set code(code) {
    if (typeof code === 'string') {
      this._code = code;
    } else {
      throw new TypeError('Code must be a string');
    }
  }

  // additional methods
  displayFullCurrency() {
    const name = this._name;
    const code = this._code;
    return `${name} (${code})`;
  }

  toString() {
    return `${this._code} (${this._name})`;
  }
}
