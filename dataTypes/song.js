"use strict";

const maskOff = {
  name: "Mask Off",
  artists: ["Future", "Kendrick Lamar"],
  genre: "rap",
  durationInSeconds: 204,
  releaseYear: 2017,
  isItGood: true,
};

console.log(
  `Song: ${maskOff.name} by ${maskOff.artists[0]} feat. ${maskOff.artists[1]} released in ${maskOff.releaseYear} genre ${maskOff.genre} long ${maskOff.durationInSeconds} seconds. Is it good? ${maskOff.isItGood}.`
);
