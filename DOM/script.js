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
    return 1;
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

const rectanglesConstructor = function (where) {
  if (typeof where != "string") {
    console.log("Bad type in rectanglesConstructor");
    return 2;
  }

  for (const color in colors) {
    const element = document.createElement("p");
    const text = document.createElement("p");
    const container = document.createElement("div");
    element.setAttribute("class", "container");
    element.setAttribute("id", color);
    element.setAttribute("class", "rectangle");
    element.style.backgroundColor = colors[color];
    text.innerText = `${color} ${colors[color]}`;
    document.querySelector(where).appendChild(container);
    container.appendChild(element);
    container.appendChild(text);
  }
};

elementConstructor("h1", "Rectangles, just rectangles", "body");
elementConstructor("title", "Rectangles, just rectangles", "head");
elementConstructor(
  "h2",
  "Rectangles lot of them, I don't know why are you still here.",
  "body"
);

elementConstructor("div", null, "body", null, "rectangleWrapper");
const wrapperStyle = document.querySelector("#rectangleWrapper").style;
wrapperStyle.display = "flex";
wrapperStyle.width = "100%";
wrapperStyle.justifyContent = "space-between";
wrapperStyle.margin = "50px 10px 0";

rectanglesConstructor("#rectangleWrapper");
