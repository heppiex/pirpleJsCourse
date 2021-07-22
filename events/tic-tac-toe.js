"use strict";

let activePlayer = 1;
let round = 0;
let streakCount = 0;
let whoWon;
let boxes = ["", "", "", "", "", "", "", "", ""];
const activeBoxes = document.getElementsByClassName("active");
const hidden = document.querySelector(".hidden");
const winner = document.getElementById("label-winner");
const reset = document.getElementById("reset");
const streak = document.getElementById("label-streak");

const addSymbol = function (id, number) {
  const selectedBox = document.getElementById(id);
  if (activePlayer === 1) {
    selectedBox.innerHTML = "x";
    boxes[number] = "x";
    round++;
    activePlayer = 2;
  } else {
    selectedBox.innerHTML = "o";
    boxes[number] = "o";
    round++;
    activePlayer = 1;
  }
  selectedBox.classList.add("unactive");
  selectedBox.classList.remove("active");
};

const checkWinner = function () {
  if (boxes[0] != "" && boxes[0] === boxes[1] && boxes[0] === boxes[2]) {
    if (boxes[0] === "x") {
    } else {
    }
  } else if (boxes[3] != "" && boxes[3] === boxes[4] && boxes[3] === boxes[5]) {
  } else if (boxes[6] != "" && boxes[6] === boxes[7] && boxes[6] === boxes[8]) {
  } else if (boxes[0] != "" && boxes[0] === boxes[3] && boxes[0] === boxes[6]) {
  } else if (boxes[1] != "" && boxes[1] === boxes[4] && boxes[1] === boxes[7]) {
  } else if (boxes[2] != "" && boxes[2] === boxes[5] && boxes[2] === boxes[8]) {
  } else if (boxes[0] != "" && boxes[0] === boxes[4] && boxes[0] === boxes[8]) {
  } else if (boxes[6] != "" && boxes[6] === boxes[4] && boxes[6] === boxes[2]) {
  } else if (round === 8) {
  } else {
    return;
  }
};

const resetGame = function () {};

for (let box of activeBoxes) {
  box.addEventListener("click", function () {
    const boxId = box.id;
    const boxNumber = Number(boxId.slice(3));
    addSymbol(boxId, boxNumber);
    if (round >= 5) checkWinner();
  });
}
