const uuid = require('uuid/v4');

class Populator {
  
  constructor() {
    this.verificationKey = uuid();
  }

  uuid() {
    return [this.verificationKey, 'UUID'];
  }

  string({ chars }) {
    return [this.verificationKey, 'STRING', chars];
  }

  randomNumber(num1 = 0, num2 = 1) {
    return [this.verificationKey, 'NUMBER', [num1, num2] ];
  }

  randomDate(dateOne, dateTwo) {
    return [this.verificationKey, 'DATE', [dateOne, dateTwo]];
  }

  verification() {
    return this.verificationKey;
  }
}

class FixtureMaker {
  
  constructor(populate) {
    this.populator = new Populator();
  }

  make({ shape }) {
    const result = {};
    Object.keys(shape).map(x => {
      const valueIsArray = Array.isArray(shape[x]);
      if (valueIsArray) {
        if(shape[x][0] === this.verificationCode() ) { 
          console.log(x); 
          console.log('BOOM!'); 
        }
      }
    });
  }

  verificationCode() {
    return this.populator.verification();
  }

  populate() {
    return this.populator;
  }
  
}

const fixtureMaker = new FixtureMaker();
const a = fixtureMaker.populate().uuid();
const b = fixtureMaker.populate().string({ chars: 23 });
const c = fixtureMaker.populate().randomNumber(10, 100);

// Testing...
const stub = { one: 'hello', two: fixtureMaker.populate().uuid() };
fixtureMaker.make({ shape: stub });