"use strict";

const primeCheck = function (number) {
  for (let j = 2; j <= number; j++) {
    if (number % j === 0 && number != j) {
      return false;
    }
  }
  return true;
};

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else if (primeCheck(i) && i != 1) {
    console.log("Prime");
  } else {
    console.log(i);
  }
}
