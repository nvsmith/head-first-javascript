// Addition
function addBy(x) {
  return function sum(y) {
    return y + x;
  };
}

let add4 = addBy(4);
console.log(add4(8)); // 12

// Subtraction
function subtractBy(x) {
  return function difference(y) {
    return y - x;
  };
}

let subtract5 = subtractBy(5);
console.log(subtract5(20)); // 15

// Multiplication
function multiplyBy(x) {
  return function product(y) {
    return y * x;
  };
}

let double = multiplyBy(2);
console.log(double(4)); // 8

// Division
function divideBy(x) {
  return function quotient(y) {
    return y / x;
  };
}

let halve = divideBy(2);
console.log(halve(10)); // 5
