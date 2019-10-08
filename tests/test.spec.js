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
    
  });
});
