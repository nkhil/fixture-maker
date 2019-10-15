# Fixture Maker

[![bot.png](https://i.postimg.cc/m23K4FVL/bot.png)](https://postimg.cc/4mdWbyrq)

[Source](https://www.freepik.com/free-photos-vectors/technology)

FixtureMaker is a simple package made to help you create fixture files (for testing, creating sample data etc). Currently, the fixtures are only made in `json` format.

FixtureMaker is made using vanilla JavaScript.

## Installation

This is available as an [npm package](https://npmjs.com/package/fixture-maker).

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

## Sample of fixture file generated

```json
// helloworld.json
[
  {
    "firstName": "f7n9pCjrYF",
    "phones": 274,
    "id": "de16912a-b078-43ca-b12f-97def6d8d474",
    "date": "1992-03-03T00:00:00.000Z"
  },
  {
    "firstName": "PNVuOWtTyF",
    "phones": 434,
    "id": "a3e480a1-6f4c-4051-80bc-b3454a1b3c7b",
    "date": "2017-12-29T00:00:00.000Z"
  },
  {
    "firstName": "SI0z18DYE6",
    "phones": 466,
    "id": "5fae809b-f2f3-49b3-b866-bc4f08096fad",
    "date": "1993-11-07T00:00:00.000Z"
  },
  {
    "firstName": "GVcMG7uDV0",
    "phones": 286,
    "id": "233a5b95-01ae-49ab-9c2c-ca805225bae6",
    "date": "2011-05-15T23:00:00.000Z"
  },
  {
    "firstName": "tNzFO7FTW3",
    "phones": 386,
    "id": "d0c6c313-b565-4796-bfed-a372ef680d3e",
    "date": "2000-05-24T23:00:00.000Z"
  }
]
```

## License

The MIT License (MIT)

Copyright (c) 2019 Nikhil Vijayan

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
