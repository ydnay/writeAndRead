// import celebrities array
const importedCeleb = require("./celebrities.js"); // ES2016 import does't work on backend without express, babel, etc
const celebrities = importedCeleb.exportCeleb();

// Select a random number
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// Select a random celebrity
function getCelebrity() {
  return celebrities[getRandomInt(celebrities.length)];
}

// Restarts counter
function getCounter() {
  let counter = 9;
  return counter;
}

// Starts the game
function startGame() {
  getCelebrity();
  getCounter();
}

// console.log(getCelebrity());