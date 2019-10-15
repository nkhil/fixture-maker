# Fixture Maker

[![bot.png](https://i.postimg.cc/m23K4FVL/bot.png)](https://postimg.cc/4mdWbyrq)

[Source](https://www.freepik.com/free-photos-vectors/technology)

## Installation

```javascript
npm i -D fixture-maker
```

## Usage

```javascript
// 1. Require the package
const FixtureMaker = require("fixture-maker");
const fixtureMaker = new FixtureMaker();

// 2. Define the shape of your fixture
const fixtureBody = {
  firstName: fixtureMaker.string({ chars: 10 }),
  phones: fixtureMaker.randomNumber({ between: 100, and: 500 }),
  id: fixtureMaker.uuid(),
  date: fixtureMaker.randomDate({ between: "01-01-1980", and: "01-09-2019" })
};

// 3. Create your fixture file
fixtureMaker.make({
  body: fixtureBody,
  numberOfCopies: 100,
  filename: "helloworld"
});
```
