"use strict";

let activePlayer = 1;
let round = 0;
let streakCount = 0;
let whoWon = "";
let boxes = ["", "", "", "", "", "", "", "", ""];

const activeBoxes = document.getElementsByClassName("active");
const gameLog = document.querySelector(".window");
const overlay = document.querySelector(".overlay");
const winner = document.getElementById("label-winner");
const streak = document.getElementById("label-streak");
const reset = document.querySelector("#reset");
const getBox = document.getElementsByClassName("box");

const gameLogic = function () {
  for (let box of activeBoxes) {
    box.addEventListener("click", function () {
      if (box.classList.contains("active")) {
        console.log(box);
        const boxId = box.id;
        const boxNumber = Number(boxId.slice(3));
        addSymbol(boxId, boxNumber);
        if (round >= 5) {
          const gameOver = checkWinner();
          if (gameOver) {
            gameLog.classList.remove("hidden");
            overlay.classList.remove("hidden");
          }
        }
      }
    });
  }
};

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

const winMessage = (win) => {
  if (win === whoWon) {
    streakCount++;
    streak.innerHTML = `${win} have now ${streakCount} streak💪`;
  } else {
    streakCount = 1;
    streak.innerHTML = `Streak one keep up👍`;
  }
  whoWon = win;
  winner.innerHTML = `${win} has won🎉`;
};

const checkWinner = function () {
  if (boxes[0] != "" && boxes[0] === boxes[1] && boxes[0] === boxes[2]) {
    winMessage(boxes[0]);
    return true;
  } else if (boxes[3] != "" && boxes[3] === boxes[4] && boxes[3] === boxes[5]) {
    winMessage(boxes[3]);
    return true;
  } else if (boxes[6] != "" && boxes[6] === boxes[7] && boxes[6] === boxes[8]) {
    winMessage(boxes[6]);
    return true;
  } else if (boxes[0] != "" && boxes[0] === boxes[3] && boxes[0] === boxes[6]) {
    winMessage(boxes[0]);

    return true;
  } else if (boxes[1] != "" && boxes[1] === boxes[4] && boxes[1] === boxes[7]) {
    winMessage(boxes[1]);

    return true;
  } else if (boxes[2] != "" && boxes[2] === boxes[5] && boxes[2] === boxes[8]) {
    winMessage(boxes[2]);

    return true;
  } else if (boxes[0] != "" && boxes[0] === boxes[4] && boxes[0] === boxes[8]) {
    winMessage(boxes[0]);

    return true;
  } else if (boxes[6] != "" && boxes[6] === boxes[4] && boxes[6] === boxes[2]) {
    winMessage(boxes[6]);

    return true;
  } else if (round === 9) {
    streakCount = 0;
    streak.innerHTML = `No one have streak😕`;
    winner.innerHTML = "Cats game🐈";
    whoWon = "";
    return true;
  } else {
    return false;
  }
};

const resetGame = function () {
  activePlayer = 1;
  for (const i of getBox) {
    i.innerHTML = "";
    i.classList.add("active");
    i.classList.remove("unactive");
  }
  boxes = ["", "", "", "", "", "", "", "", ""];
  round = 0;
  gameLog.classList.add("hidden");
  overlay.classList.add("hidden");
};

gameLogic();
reset.addEventListener("click", resetGame);
