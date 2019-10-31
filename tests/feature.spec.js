const chai = require('chai');
const fs = require('fs');
const FixtureMaker = require('../index');

chai.use(require('chai-uuid'));

const { expect } = chai;

describe('FixtureMaker', () => {
  describe('FixtureMaker', () => {
    it('should return a string with length 5', () => {
      const fixtureMaker = new FixtureMaker();
      const result = fixtureMaker.__handleString([5]);
      expect(result.length).to.equal(5);
    });

    it('should be able process a nested object 1 level deep', () => {
      const fixtureMaker = new FixtureMaker();
      const fixtureBody = {
        firstName: 'John',
        information: {
          licenseNumber: fixtureMaker.uuid(),
        },
      };
      fixtureMaker.make({
        body: fixtureBody,
        numberOfCopies: 1,
        filename: 'john',
      });
      const fileContents = JSON.parse(fs.readFileSync('john.json', 'utf8'));
      expect(fileContents[0].firstName).to.equal('John');
      expect(fileContents[0].information.licenseNumber).to.be.a.uuid('v4');
    });
  });
});
