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

function startGame() {
  $('div.title').replaceWith('<h2>Timeline questions</h2>');
  $('div.sub-title').replaceWith('<h2></h2>');
  $('.start-button').on('click', function() {
    s1Questions.forEach( elem => {
      let r = $('<input class="new-button" type="button" value=' + elem + '/>');
    $('.jumbotron').append(r);
    });
    $('.start-button').hide();
  });
  s1();
  console.log(riddle.name);
}


