// // import celebrities array
// const importedCeleb = require("./celebrities.js"); // ES2016 import does't work on backend without express, babel, etc
// const celebrities = importedCeleb.exportCeleb();
// // import countries
// const importedCountries = require("./countries.js");
// const europeCountries = importedCountries.exportEuroCont();
// const centralAmericanCountries = importedCountries.exportCentAmerCont();
// const southAmericanCountries = importedCountries.exportSouthAmerCont();

// Celebrities list
const celebrities = [
  {
    name: 'Isaac Newton',
    fictional: false,
    born: 1643,
    died: 1727,
    centuries: [17, 18],
    sex: 'male',
    land: 'Eurasia',
    continent: 'Europe',
    country:'England',
    language: 'English',
    coastal: true,
    peninsular: false,
    coasts: ['North'],
    mainField: 'science',
    fields: ['mathematician', 'astronomer', 'theologian', 'author', 'physicist'],
    akas: ['Isaac Newton', 'Newton'],
  },
  {
    name: 'Abraham Lincoln',
    fictional: false,
    born: 1809,
    died: 1865,
    centuries: [19],
    sex: 'male',
    land: 'America',
    latinAmerica: false,
    continent: 'North America',
    country:'United States',
    language: 'English',
    coastal: true,
    coasts: ['Pacific', 'Atlantic'],
    mainField: 'politics',
    fields: ['lawyer', 'politician'],
    akas: ['Abraham Lincoln', 'Lincoln'],
  },
  {
    name: 'Mario Benedetti',
    fictional: false,
    born: 1920,
    died: 2009,
    centuries: [20, 21],
    sex: 'male',
    land: 'America',
    latinAmerica: true,
    continent: 'South America',
    country:'Uruguay',
    language: 'Spanish',
    coastal: true,
    coasts: ['Atlantic'],
    mainField: 'arts',
    plasticArts: false,
    performing: false,
    music: false,
    literature: true,
    dance: false,
    fields: ['journalist', 'novelist', 'poet', 'writer'],
    akas: ['Mario Benedetti', 'Benedetti'],
  },
  {
    name: 'Mercedes Sosa',
    fictional: false,
    born: 1935,
    died: 2009,
    centuries: [20, 21],
    sex: 'female',
    land: 'America',
    latinAmerica: true,
    continent: 'South America',
    country:'Argentina',
    language: 'Spanish',
    coastal: true,
    coasts: ['Atlantic'],
    mainField: 'arts',
    plasticArts: false,
    performing: false,
    music: true,
    literature: false,
    dance: false,
    fields: ['singer', 'musician'],
    akas: ['Mercedes Sosa', 'La Negra'],
  },
  {
    name: 'Gabriel Garcia Marquez',
    fictional: false,
    born: 1927,
    died: 2014,
    centuries: [20, 21],
    sex: 'male',
    land: 'America',
    latinAmerica: true,
    continent: 'South America',
    country:'Colombia',
    language: 'Spanish',
    coastal: true,
    coasts: ['Pacific', 'Atlantic'],
    mainField: 'arts',
    plasticArts: false,
    performing: false,
    music: false,
    literature: true,
    dance: false,
    fields: ['writer', 'novelist','sreenwriter', 'journalist'],
    akas: ['Gabriel Garcia Marquez', 'Garcia Marquez', 'Gabo'],
  },
  {
    name: 'Mario Moreno',
    fictional: false,
    born: 1911,
    died: 1993,
    centuries: [20],
    sex: 'male',
    land: 'America',
    latinAmerica: true,
    continent: 'North America',
    country:'Mexico',
    language: 'Spanish',
    coastal: true,
    coasts: ['Pacific', 'Atlantic'],
    mainField: 'arts',
    plasticArts: false,
    performing: true,
    music: false,
    literature: false,
    dance: false,
    fields: ['actor', 'comedian','sreenwriter', 'producer'],
    akas: ['Mario Moreno', 'Cantinflas'],
  },
  {
    name: 'Jose Marti',
    fictional: false,
    born: 1853,
    died: 1895,
    centuries: [19],
    sex: 'male',
    land: 'America',
    latinAmerica: true,
    continent: 'Central America and the Caribbean',
    island: true,
    country:'Cuba',
    language: 'Spanish',
    coastal: true,
    coasts: ['Atlantic'],
    island: true, // not really is an archipelago
    mainField: ['arts', 'politics'], // usually a string, here an array. Use Array.isArray();
    plasticArts: false,
    performing: false,
    music: false,
    literature: true,
    dance: false,
    fields: ['writer', 'poet','assyist', 'journalist', 'translator', 'philosopher', 'theorist'],
    akas: ['Jose Marti', 'Marti', 'El apostol', 'The apostle'],
  },
  {
    name: 'Miguel de Cervantes y Saavedra',
    fictional: false,
    born: 1547,
    died: 1616,
    centuries: [16, 17],
    sex: 'male',
    land: 'Eurasia',
    continent: 'Europe',
    country:'Spain',
    language: 'Spanish',
    coastal: true,
    peninsular: true,
    coasts: ['Mediterranean'],
    mainField: 'arts',
    plasticArts: false,
    performing: false,
    music: false,
    literature: true,
    dance: false,
    fields: ['writer', 'novelist'],
    akas: ['Miguel de Cervantes y Saavedra', 'Miguel de Cervantes', 'Miguel Cervantes', 'Cervantes', 'El manco de Lepanto'],
  },
  {
    name: 'Luciano Pavarotti',
    fictional: false,
    born: 1935,
    died: 2007,
    centuries: [20, 21],
    sex: 'male',
    land: 'Eurasia',
    continent: 'Europe',
    country:'Italy',
    language: 'Italian',
    coastal: true,
    peninsular: true,
    coasts: ['Mediterranean', 'Adriatic'],
    mainField: 'arts',
    plasticArts: false,
    performing: true,
    music: true,
    literature: false,
    dance: false,
    fields: ['singer', 'tenor'],
    akas: ['Luciano Pavarotti', 'Pavarotti'],
  },
  {
    name: 'Marie Curie',
    fictional: false,
    born: 1867,
    died: 1934,
    centuries: [19, 20],
    sex: 'female',
    land: 'Eurasia',
    continent: 'Europe',
    country:'France',
    language: 'French',
    coastal: true,
    peninsular: false,
    coasts: ['Mediterranean'],
    mainField: 'science',
    fields: ['physicist', 'chemist'],
    akas: ['Marie Sklodowska Curie', 'Maria Salomea Sklodowska', 'Marie Curie', 'Maria Curie'],
  },
  // {
  //   name: 'Nelson Mandela',
  //   fictional: false,
  //   born: 1918,
  //   died: 2013,
  //   centuries: [20, 21],
  //   sex: 'male',
  //   land: 'Africa',
  //   continent: 'Africa',
  //   subSaharan: true,
  //   country:'South Africa',
  //   language: 'English',
  //   coasts: true,
  //   peninsular: true,
  //   oceans: ['Atlatic', 'Indian'],
  //   mainField: 'politics',
  //   fields: ['political leader', 'president', 'philanthropist'],
  //   akas: ['Nelson Mandela', 'Mandela'],
  // },
]

// Countries Lists
// Europe
const europeCountries = [
  {
    name: 'Spain',
    laguage: 'Spanish',
    landmass: 'Eurasia',
    continent: 'Europe',
    coastal: true,
    peninsular: true,
    coasts: ['Mediterranean', 'Atlantic'],
  },
  {
    name: 'Portugal',
    laguage: 'Portuguese',
    landmass: 'Eurasia',
    continent: 'Europe',
    coastal: true,
    peninsular: true,
    coasts: ['Atlantic'],
  },
  {
    name: 'France',
    laguage: 'French',
    landmass: 'Eurasia',
    continent: 'Europe',
    coastal: true,
    peninsular: false,
    coasts: ['Mediterranean', 'Atlantic'],
  },
  {
    name: 'Italy',
    laguage: 'Italian',
    landmass: 'Eurasia',
    continent: 'Europe',
    coastal: true,
    peninsular: true,
    coasts: ['Mediterranean', 'Adriatic'],
  },
  {
    name: 'Germany',
    laguage: 'German',
    landmass: 'Eurasia',
    continent: 'Europe',
    coastal: true,
    peninsular: false,
    coasts: ['North', 'Baltic'],
  },
  {
    name: 'Netherlands',
    laguage: 'Dutch',
    landmass: 'Eurasia',
    continent: 'Europe',
    coastal: true,
    peninsular: false,
    coasts: ['North'],
  },
  {
    name: 'Belgium',
    laguage: 'Dutch', // majority
    landmass: 'Eurasia',
    continent: 'Europe',
    coastal: true,
    peninsular: false,
    coasts: ['North'],
  },
  {
    name: 'Switzerland',
    laguage: 'German', // majority
    landmass: 'Eurasia',
    continent: 'Europe',
    coastal: false,
    peninsular: false,
    coasts: [],
  },
  {
    name: 'Austria',
    laguage: 'German', // majority
    landmass: 'Eurasia',
    continent: 'Europe',
    coastal: false,
    peninsular: false,
    coasts: [],
  },
  {
    name: 'Poland',
    laguage: 'Polish',
    landmass: 'Eurasia',
    continent: 'Europe',
    coastal: true,
    peninsular: false,
    coasts: ['Baltic'],
  },
  {
    name: 'Bulgaria',
    laguage: 'Bulgarian',
    landmass: 'Eurasia',
    continent: 'Europe',
    coastal: true,
    peninsular: false,
    coasts: ['Black'],
  },
  {
    name: 'Romania',
    laguage: 'Romanian',
    landmass: 'Eurasia',
    continent: 'Europe',
    coastal: true,
    peninsular: false,
    coasts: ['Black'],
  },
  {
    name: 'Hungary',
    laguage: 'Hungarian',
    landmass: 'Eurasia',
    continent: 'Europe',
    coastal: false,
    peninsular: false,
    coasts: [],
  },
  {
    name: 'Serbia',
    laguage: 'Serbian',
    landmass: 'Eurasia',
    continent: 'Europe',
    coastal: false,
    peninsular: false,
    coasts: [],
  },
  {
    name: 'Greece',
    laguage: 'Greek',
    landmass: 'Eurasia',
    continent: 'Europe',
    coastal: true,
    peninsular: true,
    coasts: ['Mediterranean', 'Aegean'],
  },
  {
    name: 'Turkey',
    laguage: 'Turkish',
    landmass: 'Eurasia',
    continent: 'Europe',
    coastal: true,
    peninsular: true,
    coasts: ['Mediterranean', 'Aegean', 'Black'],
  },
  {
    name: 'Ukraine',
    laguage: 'Ukranian',
    landmass: 'Eurasia',
    continent: 'Europe',
    coastal: true,
    peninsular: true,
    coasts: ['Black'],
  },
  {
    name: 'Russia',
    laguage: 'Russian',
    landmass: 'Eurasia',
    continent: 'Europe',
    coastal: true,
    peninsular: true,
    coasts: ['Black', 'Barents', 'Baltic', 'Caspian'],
  },
  {
    name: 'Norway',
    laguage: 'Norwegian',
    landmass: 'Eurasia',
    continent: 'Europe',
    coastal: true,
    peninsular: true,
    coasts: ['North', 'Norwegian'],
  },
  {
    name: 'England',
    laguage: 'English',
    landmass: 'Eurasia',
    continent: 'Europe',
    coastal: true,
    peninsular: false,
    coasts: ['North', 'Celtic'],
  },
]

const centralAmericanCountries = [
  {
    name: 'Belize',
    language: 'English',
    landmass: 'America',
    continent: 'Central America',
    latinAmerica: false,
    isle: false,
    isthmus: true,
    coasts: ['Caribbean'],
  },
  {
    name: 'Costa Rica',
    language: 'Spanish',
    landmass: 'America',
    continent: 'Central America',
    latinAmerica: true,
    isle: false,
    isthmus: true,
    coasts: ['Caribbean', 'Pacific'],
  },
  {
    name: 'El Salvador',
    language: 'Spanish',
    landmass: 'America',
    continent: 'Central America',
    latinAmerica: true,
    isle: false,
    isthmus: true,
    coasts: ['Pacific'],
  },
  {
    name: 'Guatemala',
    language: 'Spanish',
    landmass: 'America',
    continent: 'Central America',
    latinAmerica: true,
    isle: false,
    isthmus: true,
    coasts: ['Caribbean', 'Pacific'],
  },
  {
    name: 'Honduras',
    language: 'Spanish',
    landmass: 'America',
    continent: 'Central America',
    latinAmerica: true,
    isle: false,
    isthmus: true,
    coasts: ['Caribbean', 'Pacific'],
  },
  {
    name: 'Nicaragua',
    language: 'Spanish',
    landmass: 'America',
    continent: 'Central America',
    latinAmerica: true,
    isle: false,
    isthmus: true,
    coasts: ['Caribbean', 'Pacific'],
  },
  {
    name: 'Panama',
    language: 'Spanish',
    landmass: 'America',
    continent: 'Central America',
    latinAmerica: true,
    isle: false,
    isthmus: true,
    coasts: ['Caribbean', 'Pacific'],
  },
  {
    name: 'Cuba',
    language: 'Spanish',
    landmass: 'America',
    continent: 'Central America',
    latinAmerica: true,
    isle: true,
    isthmus: false,
    coasts: ['Caribbean'],
  },
  {
    name: 'Dominican Republic',
    language: 'Spanish',
    landmass: 'America',
    continent: 'Central America',
    latinAmerica: true,
    isle: true,
    isthmus: false,
    coasts: ['Caribbean'],
  },
  {
    name: 'Haiti',
    language: 'Creole',
    landmass: 'America',
    continent: 'Central America',
    latinAmerica: false,
    isle: true,
    isthmus: false,
    coasts: ['Caribbean'],
  },
  {
    name: 'Jamaica',
    language: 'English',
    landmass: 'America',
    continent: 'Central America',
    latinAmerica: false,
    isle: true,
    isthmus: false,
    coasts: ['Caribbean'],
  },
]

const southAmericanCountries = [
  {
    name: 'Colombia',
    language: 'Spanish',
    landmass: 'America',
    continent: 'South America',
    latinAmerica: true,
    coastal: true,
    coasts: ['Pacific', 'Atlantic'],
  },
  {
    name: 'Venezuela',
    language: 'Spanish',
    landmass: 'America',
    continent: 'South America',
    latinAmerica: true,
    coastal: true,
    coasts: ['Atlantic'],
  },
  {
    name: 'Brazil',
    language: 'Portuguese',
    landmass: 'America',
    continent: 'South America',
    latinAmerica: true,
    coastal: true,
    coasts: ['Atlantic'],
  },
  {
    name: 'Ecuador',
    language: 'Spanish',
    landmass: 'America',
    continent: 'South America',
    latinAmerica: true,
    coastal: true,
    coasts: ['Pacific'],
  },
  {
    name: 'Peru',
    language: 'Spanish',
    landmass: 'America',
    continent: 'South America',
    latinAmerica: true,
    coastal: true,
    coasts: ['Pacific'],
  },
  {
    name: 'Bolivia',
    language: 'Spanish',
    landmass: 'America',
    continent: 'South America',
    latinAmerica: true,
    coastal: false,
    coasts: [],
  },
  {
    name: 'Paraguay',
    language: 'Spanish',
    landmass: 'America',
    continent: 'South America',
    latinAmerica: true,
    coastal: false,
    coasts: [],
  },
  {
    name: 'Chile',
    language: 'Spanish',
    landmass: 'America',
    continent: 'South America',
    latinAmerica: true,
    coastal: true,
    coasts: ['Pacific'],
  },
  {
    name: 'Argentina',
    language: 'Spanish',
    landmass: 'America',
    continent: 'South America',
    latinAmerica: true,
    coastal: true,
    coasts: ['Atlantic'],
  },
  {
    name: 'Uruguay',
    language: 'Spanish',
    landmass: 'America',
    continent: 'South America',
    latinAmerica: true,
    coastal: true,
    coasts: ['Atlantic'],
  },
  {
    name: 'Guyana',
    language: 'English',
    landmass: 'America',
    continent: 'South America',
    latinAmerica: false,
    coastal: true,
    coasts: ['Atlantic'],
  },
  {
    name: 'Suriname',
    language: 'Dutch',
    landmass: 'America',
    continent: 'South America',
    latinAmerica: false,
    coastal: true,
    coasts: ['Atlantic'],
  },
]

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
      answer.centuries.push(16);
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
      answer.centuries.push(17);
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
      answer.centuries.push(18);
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
      answer.centuries.push(19);
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
      answer.centuries.push(20);
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
      answer.centuries.push(21);
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
  let res = false;
  if (cel.land === 'Eurasia') {
    answer.landmass = 'Eurasia';
    res = true;
  }

  return res;
}

// Check if celebrity is from America
function isFromAmerica(cel) {
  let res = false;
  if (cel.land === 'America') {
    answer.landmass = 'America';
    res = true;
  }

  return res;
}

// Check if celebrity is different from Eurasia or America
function isFromOtherLand(cel) {
  let res = false;
  if (cel.land !== 'Eurasia' && cel.land !== 'America') {
    answer.landmass = 'Other';
    res = true;
  }

  return res;
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

// document.getElementById("start-game").onclick = startGame;
// document.getElementById("start-game").onclick = function () { alert('hello!'); };

// const el = document.getElementById("start-game");
// if (el.addEventListener) {
//   el.addEventListener("click", startGame, false);
// } else if (el.attachEvent) {
//   el.attachEvent('onclick', startGame);
// }

// Timeline Phase 1
const timelineQuest = {
  'after Middle Ages?': isAfterMiddleAges,
  '16th Century': is16Cent,
  '17th Century': is17Cent,
  '18th Century': is18Cent,
  'after French Revolution?': isAfterFrenchRev,
  '19th Century': is19Cent,
  '20th Century': is20Cent,
  '21st Century': is21Cent,
}

// Landmass Phase 2
const landmassQuest = {
  'Eurasia': isFromEurasia,
  'America': isFromAmerica,
  'Other landmass': isFromOtherLand,
}

// Continent Phase 3
const continentQuest = {
  'Europe': isEuropean,
  'Asia': isAsian,
  'North America': isNorthAmerican,
  'Central America': isCentralAmerican,
  'South America': isSouthAmerican,
  'Africa': isAfrican,
  'Oceania': isOceanian,
}

// Continental cases Phase 4
const europeQuest = {
  'Coastal': isCoastal,
  'Peninsular': isPeninsular,
  'Mediterranean': isMediterranean,
  'North': isNorth,
  'Baltic': isBaltic,
  'Black': isBlack,
  'Adriatic': isAdriatic,
  'Celtic': isCeltic,
  'Atlantic': hasAtlantic(riddle, europeCountries),
}

const centralAmeQuest = {
  'Isthmus': isAnIsthmus,
  'Atlantic': hasAtlantic(riddle, centralAmericanCountries),
  'Pacific': hasPacific(riddle, centralAmericanCountries),
  'Insular': isAnIsland,
  'Latinamerica': isLatinAmerican,
}

const southAmeQuest = {
  'Coastal': isCoastal,
  'Atlantic': hasAtlantic(riddle, southAmericanCountries),
  'Pacific': hasPacific(riddle, southAmericanCountries),
  'Spanish': speakSpanish,
}

// Game States
// S1 Initial State, Timeline
let s1Questions = Object.keys(timelineQuest);
let counter = 9;
const answer = { // initial guessed celecrity
  name: '',
  centuries: [],
  landmass: '',
};

// Update counter
function updateCounter() {
  // return $('div.sub-title').replaceWith('<h4>Remaining No\'s ' + counter + '</h4>') && counter;
  return counter;
}

// Check if WIN
function checkWin() {
  let res = false;
  riddle.akas.forEach(aka => {
    if (answer.name === aka) {
      res = true;
    }
  })

  return res;
}

// Check if Game Over
function checkLose() { if (counter === 0) { return true; } }

// Handle click on timeline buttons
function handleClickTimeline(question) {
  if (question in timelineQuest) {
    console.log(timelineQuest[question](riddle), answer.centuries, counter);
    if (!timelineQuest[question](riddle)) {
      counter--;
    } else {
      s1(); // pros: after...questions don't exit state. cons: pushes century twice
    }
  } else {
    console.log('err');
  }
}

// Render timeline questions
function renderTimeline() {
  console.log(riddle.name);
  $('div.title').replaceWith('<h2>Timeline questions</h2>');
  $('div.sub-title').replaceWith('<h4>Remaining No\'s ' + counter + '</h4>');
  $('.start-button').on('click', () => {
    s1Questions.forEach(elem => {
      const btn = document.createElement("input");
      btn.classList.add("timeline");
      btn.type = "button";
      btn.value = elem;
      btn.onclick = () => handleClickTimeline(elem);
      $('.jumbotron').append(btn);
    });
    $('.start-button').hide();
  });
}

// Check if S1 exit condition
function s1() {
  if (answer.centuries.length > 0) {
    s2();
  }
}

// S2, Landmass
let s2Questions = Object.keys(landmassQuest);

// Handle click on landmass buttons
function handleClickLandmass(question) {
  if (question in landmassQuest) {
    console.log(landmassQuest[question](riddle), answer.landmass, counter);
    if (!landmassQuest[question](riddle)) {
      counter--;
    } else {
      s3();
    }
  } else {
    console.log('err');
  }
}

//  Landmass
function s2() {
  console.log('ready to s2', counter, answer);
  $('h2').replaceWith('<h2>Landmass questions</h2>');
  $('h4').replaceWith('<h4>Remaining No\'s ' + counter + '</h4>');
  $('.timeline').hide();
  s2Questions.forEach(elem => {
    const btn = document.createElement("input");
    btn.classList.add("landmass");
    btn.type = "button";
    btn.value = elem;
    btn.onclick = () => handleClickLandmass(elem);
    $('.jumbotron').append(btn);
  });
  // exit state condition
  if (answer.landmass) {
    s3();
  }
}

// // S3, Continent
let s3Questions = Object.keys(continentQuest);

function s3() {
  console.log('ready to s3', counter, answer);
}

// // S4, Continent Cases
// function s4() {

// }

// function s5() {
//   console.log('Ready to start Phase 5');
// }

