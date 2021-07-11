const typeCheck = function (checker) {
  switch (checker) {
    case "second":
    case "seconds":
      return true;

    case "minute":
    case "minutes":
      return true;

    case "hour":
    case "hours":
      return true;

    case "day":
    case "days":
      return true;

    default:
      return false;
  }
};

const timeAdder = function (timeOne, typeOne, timeTwo, typeTwo) {
  typeCheck(typeOne);
  typeCheck(typeTwo);
  if (typeCheck(typeOne) === false) {
    console.log(`This is invalid because the first argument is the wrong type`);
  } else if (typeCheck(typeTwo) === false) {
    console.log(
      `This is invalid because the second argument is the wrong type`
    );
  }
};
