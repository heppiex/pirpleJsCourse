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

const numberCheck = (number) => {
  if (typeof number === "number") {
    return true;
  } else return false;
};

const convert = function (time, type) {
  if (type === "minute" || type === "minutes") {
    return time * 60;
  } else if (type === "hour" || type === "hours") {
    return time * 3600;
  } else if (type === "day" || type === "days") {
    return time * 86400;
  } else {
    return time;
  }
};

const timeAdder = function (timeOne, typeOne, timeTwo, typeTwo) {
  if (arguments.length < 4) {
    return console.log(
      `This is invalid because you need to pass 4 arguments not ${arguments.length}`
    );
  } else if (typeCheck(typeOne) === false) {
    return console.log(
      `This is invalid because the first argument is the wrong type`
    );
  } else if (typeCheck(typeTwo) === false) {
    return console.log(
      `This is invalid because the second argument is the wrong type`
    );
  } else if (numberCheck(timeOne) === false) {
    returnconsole.log(
      ` This is invalid because the first argument is the wrong type`
    );
  } else if (numberCheck(timeTwo) === false) {
    return console.log(
      ` This is invalid because the trird argument is the wrong type`
    );
  } else if (
    timeOne > 1 &&
    (typeOne === "second" ||
      typeOne === "minute" ||
      typeOne === "hour" ||
      typeOne === "day")
  ) {
    return console.log(
      `This is impossible because "${typeOne}" is singular and ${timeOne} is plural`
    );
  } else if (
    timeTwo > 1 &&
    (typeTwo === "second" ||
      typeTwo === "minute" ||
      typeTwo === "hour" ||
      typeTwo === "day")
  ) {
    return console.log(
      `This is impossible because "${typeTwo}" is singular and ${timeTwo} is plural`
    );
  }
  let converted = convert(timeOne, typeOne) + convert(timeTwo, typeTwo);
};
