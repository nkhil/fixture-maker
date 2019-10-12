const chai = require('chai');
const FixtureMaker = require('../index');

const { expect } = chai;

describe('FixtureMaker', () => {
  describe('FixtureMaker', () => {
    it('should return a string with length 5', () => {
      const fixtureMaker = new FixtureMaker();
      const result = fixtureMaker.__handleString([5]);
      expect(result.length).to.equal(5);
    });
  });
});
