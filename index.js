/* eslint-disable no-shadow */
/* eslint-disable class-methods-use-this */
const uuid = require('uuid/v4');
const fs = require('fs');

class FixtureMaker {
  constructor() {
    this.verificationKey = uuid();
  }

  uuid() {
    return [this.verificationKey, 'UUID'];
  }

  string({ chars }) {
    return [this.verificationKey, 'STRING', [chars]];
  }

  randomNumber({ between, and }) {
    return [this.verificationKey, 'RANDOM_NUMBER', [between, and]];
  }

  randomDate({ between, and }) {
    return [this.verificationKey, 'DATE', [between, and]];
  }

  getVerificationKey() {
    return this.verificationKey;
  }

  make({ body, numberOfCopies, filename }) {
    const result = [];
    for (let index = 0; index < numberOfCopies; index++) {
      const resultObject = this.handleCreateObject(body);
      result.push(resultObject);
    }
    fs.writeFileSync(`./${filename}.json`, JSON.stringify(result, null, '\t'));
  }

  isObject(item) {
    return typeof item === 'object' && !Array.isArray(item) && item !== null;
  }

  handleCreateObject(body) {
    const transformed = {};
    const result = {};
    Object.keys(body).forEach(key => {
      transformed[key] = this.createResult(body[key]);
    });
    const entries = Object.entries(transformed);
    entries.forEach(entry => {
      const key = entry[0];
      result[key] = this.transform(entry[1]);
    });
    return result;
  }

  createResult(value) {
    if (this.isObject(value)) {
      return this.createResultObject(value);
    }
    if (this.isArray(value) && this.isVerifiedAsFixtureRequest(value)) {
      return this.createArrayObject(value);
    }
    return value;
  }

  transform(value) {
    if (this.isArray(value)) {
      const a = this.processRequest(value);
      return a;
    }
    if (this.isObject(value)) {
      const result = {};
      Object.keys(value).forEach(key => {
        if (this.isArray(value[key])) {
          result[key] = this.processRequest(value[key]);
        } else {
          result[key] = value[key];
        }
      });
      return result;
    }
    return value;
  }

  isArray(value) {
    return Array.isArray(value);
  }

  isVerifiedAsFixtureRequest(value) {
    return value === this.getVerificationKey();
  }

  createResultObject(obj) {
    return obj;
  }

  createArrayObject(arr) {
    return this.processRequest(arr);
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
        result = this.__handleUUID();
        break;
      case 'RANDOM_NUMBER':
        result = this.__handleNumber(args);
        break;
      case 'DATE':
        result = this.__handleDate(args);
        break;
      default:
        throw new Error(`Error: Unknown or unsupported type: ${type}`);
    }
    return result;
  }

  __handleString(array) {
    const length = array[0];
    let result = '';
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  __handleUUID() {
    return uuid();
  }

  __handleNumber(argumentArray) {
    const [between, and] = argumentArray;
    return Math.floor(Math.random() * (and - between) + between);
  }

  __handleDate(argumentArray) {
    const [between, and] = argumentArray;
    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }
    let date1 = between;
    let date2 = and;
    date1 = new Date(date1).getTime();
    date2 = new Date(date2).getTime();
    if (date1 > date2) {
      const result = new Date(getRandomArbitrary(date2, date1)).toLocaleDateString();
      return new Date(result).toISOString();
    }
    const result = new Date(getRandomArbitrary(date1, date2)).toLocaleDateString();
    return new Date(result).toISOString();
  }
}

module.exports = FixtureMaker;
