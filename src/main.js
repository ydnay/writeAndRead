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

// Check if celebrity existed on 16th century
function is16Cent(cel) {
  let res = false;
  cel.centuries.forEach(elem => {
    if (elem === 16) {
      res = true;
    }
  });

  return res;
}

// Check if celebrity existed on 17th century
function is17Cent(cel) {
  let res = false;
  cel.centuries.forEach(elem => {
    if (elem === 17) {
      res = true;
    }
  });

  return res;
}

// Check if celebrity existed on 18th century
function is18Cent(cel) {
  let res = false;
  cel.centuries.forEach(elem => {
    if (elem === 18) {
      res = true;
    }
  });

  return res;
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

function isAsian(cel) {
  return cel.continent === 'Asia';
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

function isAdriatic(cel) {
  return cel.sea === 'Adriatic';
}

function isCeltic(cel) {
  return cel.sea === 'Celtic';
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
  const country = cel.country;
  console.log(country);
  let index = 0
  for (let i = 0; i < centralAmericanCountries.length; i++) {
    if (centralAmericanCountries[i].name === country) {
      return  centralAmericanCountries[index].isle;
    }

    index++;
  }
}

function isAnIsthmus(cel) {
  const country = cel.country;
  let index = 0
  for (let i = 0; i < centralAmericanCountries.length; i++) {
    if (centralAmericanCountries[i].name === country) {
      return  centralAmericanCountries[index].isthmus;
    }

    index++;
  }
}

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

// Finding a South Amercian country
// Reuse isCoastal();
// Reuse hasAtlantic() and hasPacific();

// Guess celebrity
function guessCelebrity(cel, name) {
  return cel.name === name;
}

// Guess country
function guessCountry(cel, country) {
  return cel.country === country;
}

const riddle = getCelebrity();

// Timeline questions
const timelineQuest = {
  'after Middle Ages?': isAfterMiddleAges(riddle),
  'after French Revolution?': isAfterFrenchRev(riddle),
  '16th Century': is16Cent(riddle),
  '17th Century': is17Cent(riddle),
  '18th Century': is18Cent(riddle),
  '19th Century': is19Cent(riddle),
  '20th Century': is20Cent(riddle),
  '21st Century': is21Cent(riddle),
}

// Landmass questions
const landmassQuest = {
  'Eurasia': isFromEurasia(riddle),
  'America': isFromAmerica(riddle),
  'Other landmass': isFromOtherLand(riddle),
}

// Continent questions
const continentQuest = {
  'Europe': isEuropean(riddle),
  'Asia': isAsian(riddle),
  'North America': isNorthAmerican(riddle),
  'Central America': isCentralAmerican(riddle),
  'South America': isSouthAmerican(riddle),
  'Africa': isAfrican(riddle),
  'Oceania': isOceanian(riddle),
}

// Continental cases
const europeQuest = {
  'Coastal country': isCoastal(riddle),
  'Peninsular': isPeninsular(riddle),
  'Mediterranean': isMediterranean(riddle),
  'North': isNorth(riddle),
  'Baltic': isBaltic(riddle),
  'Black': isBlack(riddle),
  'Adriatic': isAdriatic(riddle),
  'Celtic': isCeltic(riddle),
}

const centralAmeQuest = {
  1: 'Isthmus',
  2: 'Insular',
  3: 'Coasts',
  4: 'Latinamerica',
}

const southAmeQuest = {
  1: 'Coastal',
  2: 'Coasts',
  3: 'Language',
}

// Game Initial State
const phases = ['timeline', 'landmass', 'continent', 'continent cases', 'country', 'sex', 'field'];
let phasesIndex = 0;
let phase = phases[phasesIndex];
let counter = 9;


console.log(riddle.name, timelineQuest['after Middle Ages?'], timelineQuest['after French Revolution?']);
// console.log('16-17-18', timelineQuest['16th Century'], timelineQuest['17th Century'], timelineQuest['18th Century']);
// console.log('19-20-21', timelineQuest['19th Century'], timelineQuest['20th Century'], timelineQuest['21st Century']);
// console.log('Eura, Ame, Other',  landmassQuest['Eurasia'], landmassQuest['America'], landmassQuest['Other landmass'] )
// console.log('Euro, NA, CA, SA', continentQuest['Europe'], continentQuest['North America'], continentQuest['Central America'], continentQuest['South America']);
console.log('Isle', isAnIsland(riddle));
console.log('Isthmus', isAnIsthmus(riddle));