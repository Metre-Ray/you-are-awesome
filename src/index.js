

const createEnumerableProperty = (name) => { name };

const createNotEnumerableProperty = (name) => {
  Object.defineProperty(Object.prototype, name, {value: 'value', enumerable: false});
  return name;
};

const createProtoMagicObject = () => {
  let obj = function() {};
  obj.prototype = obj.__proto__;
  return obj;
};

let start = 0;
const incrementor = () => {
     start ++;
     incrementor.valueOf = () => start;
     return incrementor;
 };

let count = 0;
const asyncIncrementor = () => {
  count++;
  return count;
};

const createIncrementer = () => {
  let obj = {
    current: 0,
    next() {
        this.current++;
        return {
          done: false,
          value: this.current
        };
    },
    [Symbol.iterator]() {
      return this;
    }
  };
  return obj;
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (arg) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(arg), 1000);
  });
};

const getDeepPropertiesCount = (obj) => {
  let count = 0;
  let objects = [obj];
  for (let j = 0; j < objects.length; j++) {
    for (let attr in objects[j]) {
      count += 1;
      if (typeof objects[j][attr] === 'object') {
        objects.push(objects[j][attr]);
      }
    }
  }
  return count;
};

const createSerializedObject = () => {
  return null;
};

const toBuffer = () => {};

const sortByProto = (arg) => {      // I don't know why this works
  return arg.sort();
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;
