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
  return cel.land === 'America';
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
  return cel.coasts.includes('Mediterranean');
}

function isNorth(cel) {
  return cel.coasts.includes('North');
}

function isBaltic(cel) {
  return cel.coasts.includes('Baltic');
}

function isBlack(cel) {
  return cel.coasts.includes('Black');
}

function isAdriatic(cel) {
  return cel.coasts.includes('Adriatic');
}

function isCeltic(cel) {
  return cel.coasts.includes('Celtic');
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
  let index = 0;
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

  // check if state exit condition was reached
  if (answer.centuries.length > 0) {
    console.log('Counter after timeline: ' + counter, ', Century: ' + answer.centuries);
    s2();
  }
}

// S2, Landmass
let s2Questions = Object.keys(landmassQuest);
function s2() {
    if (landmassQuest[s2Questions[0]]) {
    answer.landmass = 'Eurasia';
  } else if (landmassQuest[s2Questions[1]]) {
    counter--;
    answer.landmass = 'America';
  } else {
    counter--;
    answer.landmass = 'Other';
  }

  // check if state exit condition was reached
  if (answer.landmass) {
    console.log('Counter after landmass: ' + counter, ', Landmass: ' + answer.landmass);
    s3();
  }
}

// S3, Continent
function s3() {
  if (answer.landmass === 'Eurasia') {
    if (continentQuest['Europe']) {
      answer.continent = 'Europe';
    } else {
      counter--;
      answer.continent = 'Asia';
    }
  } else if (answer.landmass === 'America') {
    if (continentQuest['North America']) {
      answer.continent = 'North America';
    } else if (continentQuest['South America']) {
      counter--;
      answer.continent = 'South America';
    } else {
      counter -= 2;
      answer.continent = 'Central America';
    }
  } else {
    if (continentQuest['Africa']) {
      answer.continent = 'Africa';
    } else {
      counter--;
      answer.continent = 'Oceania';
    }
  }

  // check if state exit condition was reached
  if (answer.continent) {
    console.log('Counter after continent: ' + counter, ', Continent: ' + answer.continent);
    s4();
  }
}

// S4, Continent Cases
function s4() {
  // Europe Cases
  if (answer.continent === 'Europe') {
    if (europeQuest['Coastal']) {
      answer.coastal = true;
      if (europeQuest['Mediterranean']) {
        answer.coasts = [];
        answer.coasts.push('Mediterranean');
        if (europeQuest['Peninsular']) {
          answer.peninsular = true;
          if (riddle.country === 'Spain') {
            answer.country = 'Spain';
          } else if (riddle.country === 'Italy') {
            counter--;
            answer.country = 'Italy';
          } else {
            counter -= 2;
            answer.country = 'Greece';
          }
        } else {
          counter--;
          answer.country = 'France';
        }
      } else {
        counter--;
        // Portugal, Germany, Netherlands, Belgium, Poland, Bulgary, Romania, Ukraine, Russia, Norway
        if (riddle.country === 'England') {
          answer.country = 'England';
        }
      }
    } else {
      counter--;
      // Switzerland, Austria, Hungary or Serbia
    }
  }

  // North America Cases
  if (answer.continent === 'North America') {
    if (riddle.country === 'United States') {
      answer.country = 'United States';
    } else if (riddle.country === 'Mexico') {
      counter--;
      answer.country = 'Mexico';
    } else {
      counter -= 2;
      answer.country = 'Canada';
    }
  }

  // Central America Cases
  if (answer.continent === 'Central America') {
    if (centralAmeQuest['Isthmus']) {
      // Bel, Gua, Hon, Sal, Nic, Costa R, Panama
    } else {
      counter--;
      if (centralAmeQuest['Latinamerica']) {
        if (riddle.country === 'Cuba') {
          answer.country = 'Cuba';
        } else if (riddle.country === 'Dominican Republic') {
          counter--;
          answer.country = 'Dominican Republic';
        } else {
          counter -= 2;
          answer.country = 'Haiti';
        }
      }
    }
  }

  //  South America Cases
  if (answer.continent === 'South America') {
    if (southAmeQuest['Coastal']) {
      answer.coastal = true;
      if (southAmeQuest['Spanish']) {
        answer.language = 'Spanish';
        if (southAmeQuest['Atlantic']) {
          answer.coasts = [];
          answer.coasts.push('Atlantic');
          if (riddle.country === 'Colombia') {
            answer.country = 'Colombia';
          } else if (riddle.country === 'Argentina') {
            counter--;
            answer.country = 'Argentina';
          } else if (riddle.country === 'Uruguay') {
            counter -= 2;
            answer.country = 'Uruguay';
          } else {
            counter -= 3;
            answer.country = 'Venezuela';
          }
        } else {
          counter--;
          // Chile, Peru, Ecuador
        }
      } else {
        counter--;
        // Brasil, Guyana, Suriname
      }
    } else {
      counter--;
      // Bolivia or Paraguay
    }
  }

  // check if state exit condition was reached
  if (answer.country) {
    console.log('Counter after continent cases: ' + counter, ', Country: ' + answer.country);
    s5();
  }
}

function s5() {
  console.log('Ready to start Phase 5');
}

s1();
console.log(riddle.name, answer.country);


