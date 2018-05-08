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
// End of landmass.

// Finding Continent functions, filtering landmass.
const isEuropean = cel => {
  return cel.continent === 'Europe'; // if false => is Asian
}

// Check if Latin American
const isLatinAmerican = cel => {
  return cel.latinAmerica; // if false => is North America
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

const isOceanian = cel => {
  return cel.continent === 'Oceania';
}

// Finding an European country
// Check if coastal
const isCoastal = cel => {
  return cel.coasts; // filter posible country list
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
const isPeninsular = cel => {
  return cel.peninsular;
}
// End of Europe

// Finding a North American country
// Guess! Just 3 of them...

// Finding a Cental Amercian Country
const isAnIsland = cel => {
  return cel.island; // if false => Isthmian Central America
}

// Finding a South Amercian Country
// Reuse isCoastal();

// Finding coast to ocean
const hasAtlantic = cel => {
  let res = false;
  cel.oceans.forEach(oce => {
    if(oce === 'Atlantic') {
      res = true;
    }
  });

  return res;
}

const hasPacific = cel => {
  let res = false;
  cel.oceans.forEach(oce => {
    if(oce === 'Pacific') {
      res = true;
    }
  });

  return res;
}

// Guess country
const guessCountry = (cel, country) => {
  return cel.country === country;
}

const celebrity = getCelebrity();
console.log(celebrity.name, hasPacific(celebrity));