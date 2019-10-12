/* eslint-disable prettier/prettier */
const chai = require('chai');
const FixtureMaker = require('../index');

const { expect } = chai;

describe('FixtureMaker', () => {
  describe('FixtureMaker => __handleString should return string with the right length', () => {
    it('should return a string with length 5', () => {
      const fixtureMaker = new FixtureMaker();
      const result = fixtureMaker.__handleString([5]);
      expect(result.length).to.equal(5);
    });

    it('should return a string with length 20', () => {
      const fixtureMaker = new FixtureMaker();
      const result = fixtureMaker.__handleString([20]);
      expect(result.length).to.equal(20);
    });

    it('should return an empty string', () => {
      const fixtureMaker = new FixtureMaker();
      expect(fixtureMaker.__handleString([-20])).to.equal('');
    });
  });

  describe('FixtureMaker => __handleNumber should return a random number', () => {
    
    it('should return a random number', () => {
      const fixtureMaker = new FixtureMaker();
      const randomNumber = fixtureMaker.__handleNumber([10, 20]);
      const numberChecker = (number, lowerLimit, upperLimit) =>
        number > lowerLimit && number < upperLimit;
      const result = numberChecker(randomNumber, 11, 21);
      // eslint-disable-next-line no-unused-expressions
      expect(result).to.be.true;
    });

  });
});
