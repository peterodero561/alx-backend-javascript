import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    } else if (!(currency instanceof Currency)) {
      throw new Error('currency must be an instance of Currency');
    } else {
      this._amount = amount;
      this._currency = currency;
    }
  }

  // getters of amount && currency
  get amount() { return this._amount; }

  get currency() { return this._currency; }

  // setters of amount and currency
  set amount(amount) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    } else { this._amount = amount; }
  }

  set currency(currency) {
    if (!(currency instanceof Currency)) {
      throw new Error('currency must be an instance of Currency');
    } else { this._currency = currency; }
  }

  // Additional methods
  displayFullPrice() {
    return `${this._amount} ${this._currency}`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    } else if (typeof conversionRate !== 'number') {
      throw new TypeError('amount must be a number');
    } else { return amount * conversionRate; }
  }
}
