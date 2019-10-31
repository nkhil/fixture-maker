# Fixture Maker

[![bot2.png](https://i.postimg.cc/L8sBwN16/bot2.png)](https://postimg.cc/HVfy70zf)

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

**Note:** Currently, `fixture-maker` only supports objects without any nested objects in.

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

## Nested Objects

### Usage

```javascript
const FixtureMaker = require("fixture-maker");

const fixtureMaker = new FixtureMaker();

const fixtureBody = {
  firstName: fixtureMaker.string({ chars: 10 }),
  lastname: "Jones",
  information: {
    licenseNumber: fixtureMaker.uuid(),
    phoneNumber: fixtureMaker.randomNumber({ between: 1000, and: 2000 }),
    cool: true,
    boo: false,
    dateOfBirth: fixtureMaker.randomDate({
      between: "01-01-2018",
      and: "12-31-2019"
    })
  }
};

fixtureMaker.make({
  body: fixtureBody,
  numberOfCopies: 5,
  filename: "helloworld"
});
```

```json
// helloworld.json


	{
		"firstName": "lClqiZ76D0",
		"lastname": "Jones",
		"information": {
			"licenseNumber": "40a8cfb5-64bb-4d69-a9fc-76757ea20fdd",
			"phoneNumber": 1777,
			"cool": true,
			"boo": false,
			"dateOfBirth": "2018-09-01T23:00:00.000Z"
		}
	},
	{
		"firstName": "8vp1USXpKz",
		"lastname": "Jones",
		"information": {
			"licenseNumber": "c73975c4-c83a-4355-b573-64fd7599b39c",
			"phoneNumber": 1884,
			"cool": true,
			"boo": false,
			"dateOfBirth": "2019-11-28T00:00:00.000Z"
		}
	},
	{
		"firstName": "SON0qdCgqH",
		"lastname": "Jones",
		"information": {
			"licenseNumber": "c160ee59-095e-42ca-947e-f01bc0c8d77a",
			"phoneNumber": 1004,
			"cool": true,
			"boo": false,
			"dateOfBirth": "2019-04-24T23:00:00.000Z"
		}
	},
	{
		"firstName": "0t84UmDAgA",
		"lastname": "Jones",
		"information": {
			"licenseNumber": "dd159301-9906-4df3-aaa1-e2af3e50f13e",
			"phoneNumber": 1054,
			"cool": true,
			"boo": false,
			"dateOfBirth": "2018-04-02T23:00:00.000Z"
		}
	},
	{
		"firstName": "zxd9AkBN9j",
		"lastname": "Jones",
		"information": {
			"licenseNumber": "a00f7bd0-d53a-4e10-8747-796a34f986d2",
			"phoneNumber": 1451,
			"cool": true,
			"boo": false,
			"dateOfBirth": "2018-07-07T23:00:00.000Z"
		}
	}
]

```

## Contribute

I'd love any contributors helping me with this. Please [read this doc for more information](./Contribute/README.md)

## License

[The MIT License (MIT)](https://github.com/all-contributors/all-contributors/blob/master/LICENSE)
