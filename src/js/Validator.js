export default class AllValidators {
  constructor(input) {
    this.input = input;
  }

  validatorLuna() {
    const ccnS = this.input.toString();
    let sum = 0;
    const parity = ccnS.length % 2;
    for (let i = 0; i < ccnS.length; i += 1) {
      let digit = Number(ccnS[i]);
      if (i % 2 === parity) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }
      sum += digit;
    }
    return Number(sum % 10) === 0;
  }

  validatorCard() {
    if (/^220[0-4]\d{12,15}$/.test(this.input)) {
      return "mir";
    }
    if (/^4\d{15}$|^4\d{12}$|^4\d{18}$/.test(this.input)) {
      return "visa";
    }
    if (/^5[1-5]\d{14}$/.test(this.input)) {
      return "mastercard";
    } else {
      return false;
    }
  }
}
