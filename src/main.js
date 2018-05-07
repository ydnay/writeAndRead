// import celebrities array
const importedCeleb = require("./celebrities.js"); // ES2016 import does't work on backend without express, babel, etc
const celebrities = importedCeleb.exportCeleb();

// Select a random number
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// Select a random celebrity
const getCelebrity = () => {
  return celebrities[getRandomInt(celebrities.length)];
}

// 
const isAfterMiddleAges = cel => {
  let res = false;
  cel.centuries.forEach(elem => {
    if(elem > 15) {
      res = true;
    }
  });

  return res;
};

const celebrity = getCelebrity();
console.log(celebrity.name, isAfterMiddleAges(celebrity));