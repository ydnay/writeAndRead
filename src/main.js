// import celebrities array
const importedCeleb = require("./celebrities.js"); // ES2016 import does't work on backend without express, babel, etc
const celebrities = importedCeleb.exportCeleb();
// import countries
const importedCountries = require("./countries.js");
const europeCountries = importedCountries.exportEuroCont();
const centralAmericanCountries = importedCountries.exportCentAmerCont();
const southAmericanCountries = importedCountries.exportSouthAmerCont();

// Select a random number
function getRandomInt(min, max) {
  return Math.floor((Math.random() * max) + min);
}

// Select a random celebrity
function getCelebrity() {
  return celebrities[getRandomInt(0, celebrities.length)];
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


// Finding an American country
// Check if Latin American
function isLatinAmerican(cel) {
  return cel.latinAmerica; // if false => is North America
}

// Finding a North American country
// Guess! Just 3 of them...

// Finding a Cental Amercian country
function isAnIsland(cel) {
  const country = cel.country;
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

function hasAtlantic(cel, continentArr) {
  const country = cel.country;
  let index = 0
  for (let i = 0; i < continentArr.length; i++) {
    if (continentArr[i].name === country) {
      return continentArr[index].coasts.includes('Atlantic');
    }
    index++;
  }
}

function hasPacific(cel, continentArr) {
  const country = cel.country;
  let index = 0
  for (let i = 0; i < continentArr.length; i++) {
    if (continentArr[i].name === country) {
      return continentArr[index].coasts.includes('Pacific');
    }
    index++;
  }
}

// Finding a South Amercian country
// Reuse isCoastal();
// Reuse hasAtlantic() and hasPacific();
// Language functions
function speakSpanish(cel) {
  const country = cel.country;
  let index = 0
  for (let i = 0; i <  southAmericanCountries.length; i++) {
    if (southAmericanCountries[i].name === country) {
      return  southAmericanCountries[index].language === 'Spanish';
    }

    index++;
  }
}

// Guess celebrity
function guessCelebrity(cel, name) {
  return cel.name === name;
}

// Guess country
function guessCountry(cel, country) {
  return cel.country === country;
}

// End of helper functions ***************************

// Game Phases
const riddle = getCelebrity();

// Timeline Phase 1
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

// Landmass Phase 2
const landmassQuest = {
  'Eurasia': isFromEurasia(riddle),
  'America': isFromAmerica(riddle),
  'Other landmass': isFromOtherLand(riddle),
}

// Continent Phase 3
const continentQuest = {
  'Europe': isEuropean(riddle),
  'Asia': isAsian(riddle),
  'North America': isNorthAmerican(riddle),
  'Central America': isCentralAmerican(riddle),
  'South America': isSouthAmerican(riddle),
  'Africa': isAfrican(riddle),
  'Oceania': isOceanian(riddle),
}

// Continental cases Phase 4
const europeQuest = {
  'Coastal': isCoastal(riddle),
  'Peninsular': isPeninsular(riddle),
  'Mediterranean': isMediterranean(riddle),
  'North': isNorth(riddle),
  'Baltic': isBaltic(riddle),
  'Black': isBlack(riddle),
  'Adriatic': isAdriatic(riddle),
  'Celtic': isCeltic(riddle),
  'Atlantic': hasAtlantic(riddle, europeCountries),
}

const centralAmeQuest = {
  'Isthmus': isAnIsthmus(riddle),
  'Atlantic': hasAtlantic(riddle, centralAmericanCountries),
  'Pacific': hasPacific(riddle, centralAmericanCountries),
  'Insular': isAnIsland(riddle),
  'Latinamerica': isLatinAmerican(riddle),
}

const southAmeQuest = {
  'Coastal': isCoastal(riddle),
  'Atlantic': hasAtlantic(riddle, southAmericanCountries),
  'Pacific': hasPacific(riddle, southAmericanCountries),
  'Spanish': speakSpanish(riddle),
}

// Game States
// S1 Initial State, Timeline
let counter = 9; // initial counter
let phase = 'timeline'; // initial phase
let answer = { // initial guessed celecrity
  centuries: [],
};
let s1Questions = Object.keys(timelineQuest);
let userQuestion = s1Questions[0];

function s1() {
  if (timelineQuest[userQuestion]) {
    userQuestion = s1Questions[1];
    if (timelineQuest[userQuestion]) {
      userQuestion = s1Questions[5]; // cent 19
      if (timelineQuest[userQuestion]) {
        answer.centuries.push(19);
      } else {
        counter--
        userQuestion = s1Questions[6]; // cent 20
        if (timelineQuest[userQuestion]) {
          answer.centuries.push(20);
        } else {
          counter--;
          answer.centuries.push(21);
        }
      }
    } else {
      counter--;
      userQuestion = s1Questions[2] // cent 16
      if (timelineQuest[userQuestion]) {
        answer.centuries.push(16);
      } else {
        counter--
        userQuestion = s1Questions[3]; // cent 17
        if (timelineQuest[userQuestion]) {
          answer.centuries.push(17);
        } else {
          counter--
          answer.centuries.push(18);
        }
      }
    }
  } else {
    counter --;
    console.log('old fox here');
  }

  if (answer.centuries.length > 0) {
    return s2(), 'Counter: ' + counter;
  }
}

// S2 landmass
function s2() {
  console.log('ready to start Phase 2');
}

console.log(s1());
console.log('Secret celebrity: ' + riddle.name);
console.log('Century: ' + answer.centuries[0]);
