# Fixture Maker

[![bot.png](https://i.postimg.cc/m23K4FVL/bot.png)](https://postimg.cc/4mdWbyrq)
<a href="https://www.freepik.com/free-photos-vectors/technology">Source</a>

## Installation

```javascript
npm i -D fixture-maker
```

## Usage

```javascript
const FixtureMaker = require("fixture-maker");
const fixtureMaker = new FixtureMaker();

const fixture = {
  firstName: fixtureMaker.populate().string({ chars: 10 }),
  lastName: fixtureMaker.populate().string({ chars: 12 }),
  numberOfCats: fixtureMaker.populate().randomNumber({ from: 1, to: 100 })
};

fixtureMaker.make({ shape: fixture });
```
