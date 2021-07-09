"use strict";

const menAreMortal = true;
const menAreImortal = false;
const socrates = "Socrates";
const men = ["Tom", "Brad", "Plato", "Socrates"];

const stringCheck = (string) => {
  if (typeof string === "string") {
    return true;
  } else return false;
};

const isMortal = function (name, mortal = false) {
  const filter = men.filter(function (filterName) {
    return name === filterName;
  });
  if (mortal && stringCheck(name) === true && filter.length > 0) {
    console.log("He is mortal.");
  } else if (filter.length < 1) {
    console.log("He isn't a man!!");
  } else if (mortal === false && filter.length > 0) {
    console.log("He can't die!!!");
  }
};

isMortal(men[1]);
isMortal("Tom", menAreMortal);
isMortal(654645, menAreImortal);
isMortal("Mark", menAreMortal);
isMortal("Socrates", menAreImortal);
