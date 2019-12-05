const uuid = require('uuid');

const ID = uuid();

const RANDOM_NUMBER = 'RANDOM_NUMBER';

function isObject(item) {
  return typeof item === 'object' && !Array.isArray(item) && item !== null;
}

function handleOurOwn(value) {
  let result;
  switch (value[0]) {
    case RANDOM_NUMBER:
      result = 23;
      break;

    default:
      break;
  }
  return result;
}

function handleNonObject(value) {
  if (Array.isArray(value) && value[1] === ID) {
    return handleOurOwn(value);
  }
  return value;
}

function randomNumber() {
  return [RANDOM_NUMBER, ID];
}

function handlePropNonObject(result, key, prop, body) {
  if (result[prop]) {
    result[prop][key] = body[key];
  } else {
    result[prop] = { [key]: handleNonObject(body[key]) };
  }
}

function recursiveFunction(body, result, prop) {
  console.log('TCL: recursiveFunction -> prop', prop);
  const keys = Object.keys(body);
  keys.forEach(key => {
    console.log('TCL: recursiveFunction -> key', key);
    switch (true) {
      case isObject(body[key]):
        recursiveFunction(body[key], result, key);
        break;

      case prop !== null:
        handlePropNonObject(result, key, prop, body);
        break;

      default:
        result[key] = handleNonObject(body[key]);
        break;
    }
  });
}

function orchestrator(body) {
  const result = {};
  recursiveFunction(body, result, null);
  return result;
}

module.exports = {
  orchestrator,
  randomNumber,
};
