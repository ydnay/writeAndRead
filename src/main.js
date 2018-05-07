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

// Timeline functions
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
// End of Timeline functions

// Geographic 
// Landmass functions
// Check if celebrity is from Eurasia
const isFromEurasia = cel => {
  return cel.land === 'Eurasia'
}

// Check if celebrity is from America
const isFromAmerica = cel => {
  return cel.land === 'America'
}

// Check if celebrity is different from Eurasia or America
const isFromOtherLand = cel => {
  return cel.land !== 'Eurasia' && cel.land !== 'America';
}

// Finding Continent functions
const isEuropean = cel => {
  return cel.continent === 'Europe';
}

const isNorthAmerican = cel => {
  return cel.continent === 'North America';
}

const isSouthAmerican = cel => {
  return cel.continent === 'South America';
}

const isCentralAmerican = cel => {
  return cel.continent === 'Central America and the Caribbean';
}

const isAfrican = cel => {
  return cel.continent === 'Africa';
}

const isAsian = cel => {
  return cel.continent === 'Asia';
}

const isOceanian = cel => {
  return cel.continent === 'Oceania';
}

// Finding an European country
// Check if coastal
const isCoastal = cel => {
  return cel.coasts;
}

// Find sea
const isMediterranean = cel => {
  return cel.sea === 'Mediterranean';
}

const isNorth = cel => {
  return cel.sea === 'North';
}

const isBaltic = cel => {
  return cel.sea === 'Baltic';
}

const isBlack = cel => {
  return cel.sea === 'Black';
}

// Check if peninsular


const celebrity = getCelebrity();
console.log(celebrity.name, isMediterranean(celebrity));