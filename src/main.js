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

// Check if celebrity existed after middle ages
const isAfterMiddleAges = cel => {
  let res = false;
  cel.centuries.forEach(elem => {
    if (elem > 15) {
      res = true;
    }
  });

  return res;
};

// Check if celebrity existed after French Revolution
const isAfterFrenchRev = cel => {
  return cel.born > 1789;
}

// Check if celebrity existed on 19th century
const is19Cent = cel => {
  let res = false;
  cel.centuries.forEach(elem => {
    if (elem === 19) {
      res = true;
    }
  });

  return res;
}

// Check if celebrity existed on 20th century
const is20Cent = cel => {
  let res = false;
  cel.centuries.forEach(elem => {
    if (elem === 20) {
      res = true;
    }
  });

  return res;
}

// Check if celebrity existed on 21st century
const is21Cent = cel => {
  let res = false;
  cel.centuries.forEach(elem => {
    if (elem === 21) {
      res = true;
    }
  });

  return res;
}

const celebrity = getCelebrity();
console.log(celebrity.name, is19Cent(celebrity), is20Cent(celebrity), is21Cent(celebrity));