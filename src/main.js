// import celebrities array
const importedCeleb = require("./celebrities.js"); // ES2016 import does't work on backend without express, babel, etc
const celebrities = importedCeleb.exportCeleb();
// import countries
const importedCountries = require("./countries.js");
const europeCountries = importedCountries.exportEuroCont();
const centralAmericanCountries = importedCountries.exportCentAmerCont();
const southAmericanCountries = importedCountries.exportSouthAmerCont();

// Select a random number
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// Select a random celebrity
function getCelebrity() {
  return celebrities[getRandomInt(celebrities.length)];
}

// Timeline functions 
// Check if celebrity existed after middle ages
function isAfterMiddleAges(cel) {
  let res = false;
  cel.centuries.forEach(elem => {
    if (elem > 15) {
      res = true;
    }
  });

  return res;
};

// Check if celebrity existed after French Revolution
function isAfterFrenchRev(cel) {
  return cel.born > 1789;
}

// Check if celebrity existed on 19th century
function is19Cent(cel) {
  let res = false;
  cel.centuries.forEach(elem => {
    if (elem === 19) {
      res = true;
    }
  });

  return res;
}

// Check if celebrity existed on 20th century
function is20Cent(cel) {
  let res = false;
  cel.centuries.forEach(elem => {
    if (elem === 20) {
      res = true;
    }
  });

  return res;
}

// Check if celebrity existed on 21st century
function is21Cent(cel) {
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
function isFromEurasia(cel) {
  return cel.land === 'Eurasia'
}

// Check if celebrity is from America
function isFromAmerica(cel) {
  return cel.land === 'America'
}

// Check if celebrity is different from Eurasia or America
function isFromOtherLand(cel) {
  return cel.land !== 'Eurasia' && cel.land !== 'America';
}
// End of landmass.

// Finding Continent functions, filtering landmass.
function isEuropean(cel) {
  return cel.continent === 'Europe'; // if false => is Asian
}

// Check if Latin American
function isLatinAmerican(cel) {
  return cel.latinAmerica; // if false => is North America
}

function isNorthAmerican(cel) {
  return cel.continent === 'North America';
}

function isSouthAmerican(cel) {
  return cel.continent === 'South America';
}

function isCentralAmerican(cel) {
  return cel.continent === 'Central America and the Caribbean';
}

function isAfrican(cel) {
  return cel.continent === 'Africa';
}

function isOceanian(cel) {
  return cel.continent === 'Oceania';
}

// Finding an European country
// Check if coastal
function isCoastal(cel) {
  return cel.coasts; // filter posible country list
}

// Find sea 
function isMediterranean(cel) {
  return cel.sea === 'Mediterranean';
}

function isNorth(cel) {
  return cel.sea === 'North';
}

function isBaltic(cel) {
  return cel.sea === 'Baltic';
}

function isBlack(cel) {
  return cel.sea === 'Black';
}

// Check if peninsular
function isPeninsular(cel) {
  return cel.peninsular;
}
// End of Europe

// Finding a North American country
// Guess! Just 3 of them...

// Finding a Cental Amercian country
function isAnIsland(cel) {
  return cel.island; // if false => Isthmian Central America
}

// Finding a South Amercian country
// Reuse isCoastal();

// Finding coast to ocean
function hasAtlantic(cel) {
  let res = false;
  cel.oceans.forEach(oce => {
    if(oce === 'Atlantic') {
      res = true;
    }
  });

  return res;
}

function hasPacific(cel) {
  let res = false;
  cel.oceans.forEach(oce => {
    if(oce === 'Pacific') {
      res = true;
    }
  });

  return res;
}

// Finding an African country
// Check if subSaharan
function isSubSaharan(cel) {
  return cel.subSaharan; // filter posible country list
}
// Rsuse isCoastal();
// Reuse hasAtlantic();

// Guess celebrity
function guessCelebrity(cel, name) {
  return cel.name === name;
}

// Guess country
function guessCountry(cel, country) {
  return cel.country === country;
}

// Game Initial State
let state = {
  phase: 'timeline',
  counter: 9,
  gameOver: false,
  won: false,
}

