const uuid = require('uuid/v4');

class Populator {
  constructor() {
    this.verificationKey = uuid();
  }

  uuid() {
    return [this.verificationKey, 'UUID'];
  }

  string({ chars }) {
    return [this.verificationKey, 'STRING', [chars]];
  }

  randomNumber({ from, to }) {
    return [this.verificationKey, 'NUMBER', [from, to]];
  }

  randomDate({ between, and }) {
    return [this.verificationKey, 'DATE', [between, and]];
  }

  getVerificationKey() {
    return this.verificationKey;
  }
}

class FixtureMaker {
  constructor(populate) {
    this.populator = populate || new Populator();
  }

  make({ shape }) {
    const result = {};
    Object.keys(shape).map(key => {
      const valueIsArray = Array.isArray(shape[key]);
      const valueVerifiedAsFixtureRequest =
        shape[key][0] === this.verificationCode();
      if (valueIsArray && valueVerifiedAsFixtureRequest) {
        result[key] = this.processRequest(shape[key]);
      } else {
        result[key] = shape[key];
      }
    });
    return result;
  }

  processRequest(requestArray) {
    const type = requestArray[1];
    const args = requestArray[2];
    let result;
    switch (type) {
      case 'STRING':
        result = this.__handleString(args);
        break;
      case 'UUID':
        result = this.handleUUID();
        break;
      case 'NUMBER':
        result = this.handleNumber(args);
        break;
      case 'DATE':
        result = this.handleDate(args);
        break;
      default:
        throw new Error(`Error: Unknown or unsupported type: ${type}`);
    }
    return result;
  }

  // eslint-disable-next-line class-methods-use-this
  __handleString(array) {
    const length = array[0];
    let result = '';
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  verificationCode() {
    return this.populator.getVerificationKey();
  }

  populate() {
    return this.populator;
  }
}

module.exports = FixtureMaker;
