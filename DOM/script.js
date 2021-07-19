"use strict";

// Colors for rectangles
const colors = {
  yellow: "hsl(63, 100%, 50%)",
  blue: "hsl(223, 100%, 50%)",
  pink: "hsl(311, 100%, 50%)",
  red: "hsl(0, 100%, 50%)",
  purple: "hsl(279, 100%, 50%)",
  cyan: "hsl(185, 100%, 50%)",
  lime: "hsl(128, 100%, 50%)",
  green: "hsl(117, 100%, 35%)",
  orange: "hsl(43, 100%, 50%)",
  brown: "hsl(26, 53%, 49%)",
};

const elementConstructor = function (
  what = "p",
  text = null,
  where = "body",
  elementClass = null,
  elementId = null
) {
  if (typeof what != "string" || typeof where != "string") {
    console.log("You pass in elementConstructor bad type!");
    return 0;
  }

  const element = document.createElement(what);

  //checking for value
  if (typeof text === "string") {
    element.innerHTML = text;
  }

  const lisener = document.querySelector(where);
  lisener.appendChild(element);

  //checking for value
  if (typeof elementClass === "string") {
    element.setAttribute("class", elementClass);
  }

  //checking for value
  if (typeof elementId === "string") {
    element.setAttribute("id", elementId);
  }
};

elementConstructor("h1", "Rectangles, just rectangles", "body");
elementConstructor("title", "Rectangles, just rectangles", "head");
elementConstructor(
  "h2",
  "Rectangles lot of them, I don't know why are you still here.",
  "body"
);
