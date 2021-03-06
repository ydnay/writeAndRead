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
    tip: 'The Father of Classical Mechanics',
    fields: ['mathematician', 'astronomer', 'theologian', 'author', 'physicist'],
    akas: ['Isaac Newton', 'Newton'],
    synopsis: 'Sir Isaac Newton (25 December 1642 – 20 March 1726/27) was an English mathematician, astronomer, theologian, author and physicist (described in his own day as a "natural philosopher") who is widely recognized as one of the most influential scientists of all time, and a key figure in the scientific revolution. His book Philosophiæ Naturalis Principia Mathematica ("Mathematical Principles of Natural Philosophy"), first published in 1687, laid the foundations of classical mechanics. Newton also made pathbreaking contributions to optics, and he shares credit with Gottfried Wilhelm Leibniz for developing the infinitesimal calculus.',
    // gif: './pic/newton',
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
    tip: 'Protagonist of The Gettysburg Address.',
    fields: ['lawyer', 'politician'],
    akas: ['Abraham Lincoln', 'Lincoln'],
    synopsis: 'Abraham Lincoln (February 12, 1809 – April 15, 1865) was an American statesman and lawyer who served as the 16th President of the United States from March 1861 until his assassination in April 1865. Lincoln led the United States through its Civil War—its bloodiest war and perhaps its greatest moral, constitutional, and political crisis.[2][3] In doing so, he preserved the Union, abolished slavery, strengthened the federal government, and modernized the economy.',
  },
  // {
  //   name: 'Mario Benedetti',
  //   fictional: false,
  //   born: 1920,
  //   died: 2009,
  //   centuries: [20, 21],
  //   sex: 'male',
  //   land: 'America',
  //   latinAmerica: true,
  //   continent: 'South America',
  //   country:'Uruguay',
  //   language: 'Spanish',
  //   coastal: true,
  //   coasts: ['Atlantic'],
  //   mainField: 'arts',
  //   plasticArts: false,
  //   performing: false,
  //   music: false,
  //   literature: true,
  //   dance: false,
  //   fields: ['journalist', 'novelist', 'poet', 'writer'],
  //   akas: ['Mario Benedetti', 'Benedetti'],
  // },
  // {
  //   name: 'Mercedes Sosa',
  //   fictional: false,
  //   born: 1935,
  //   died: 2009,
  //   centuries: [20, 21],
  //   sex: 'female',
  //   land: 'America',
  //   latinAmerica: true,
  //   continent: 'South America',
  //   country:'Argentina',
  //   language: 'Spanish',
  //   coastal: true,
  //   coasts: ['Atlantic'],
  //   mainField: 'arts',
  //   plasticArts: false,
  //   performing: false,
  //   music: true,
  //   literature: false,
  //   dance: false,
  //   fields: ['singer', 'musician'],
  //   akas: ['Mercedes Sosa', 'La Negra'],
  // },
  // {
  //   name: 'Gabriel Garcia Marquez',
  //   fictional: false,
  //   born: 1927,
  //   died: 2014,
  //   centuries: [20, 21],
  //   sex: 'male',
  //   land: 'America',
  //   latinAmerica: true,
  //   continent: 'South America',
  //   country:'Colombia',
  //   language: 'Spanish',
  //   coastal: true,
  //   coasts: ['Pacific', 'Atlantic'],
  //   mainField: 'arts',
  //   plasticArts: false,
  //   performing: false,
  //   music: false,
  //   literature: true,
  //   dance: false,
  //   fields: ['writer', 'novelist','sreenwriter', 'journalist'],
  //   akas: ['Gabriel Garcia Marquez', 'Garcia Marquez', 'Gabo'],
  // },
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
    tip: 'The Mexican Charles Chaplin',
    fields: ['actor', 'comedian','sreenwriter', 'producer'],
    akas: ['Mario Moreno', 'Cantinflas'],
    synopsis: 'Mario Fortino Alfonso Moreno Reyes, known casually as Mario Moreno, and known professionally as Cantinflas (August 12, 1911 – April 20, 1993), was a Mexican comic film actor, producer, and screenwriter and an iconic figure in Mexico and Latin America. He often portrayed impoverished farmers or peasants. The character came to be associated with the national identity of Mexico, and allowed Cantinflas to establish a long, successful film career that included a foray into Hollywood.',
  },
  // {
  //   name: 'Jose Marti',
  //   fictional: false,
  //   born: 1853,
  //   died: 1895,
  //   centuries: [19],
  //   sex: 'male',
  //   land: 'America',
  //   latinAmerica: true,
  //   continent: 'Central America',
  //   island: true,
  //   country:'Cuba',
  //   language: 'Spanish',
  //   coastal: true,
  //   coasts: ['Atlantic'],
  //   island: true, // not really is an archipelago
  //   mainField: ['arts', 'politics'], // usually a string, here an array. Use Array.isArray();
  //   plasticArts: false,
  //   performing: false,
  //   music: false,
  //   literature: true,
  //   dance: false,
  //   fields: ['writer', 'poet','assyist', 'journalist', 'translator', 'philosopher', 'theorist'],
  //   akas: ['Jose Marti', 'Marti', 'El apostol', 'The apostle'],
  // },
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
    tip: 'The greatest writer in the Spanish language and one of the world\'s most prominent novelists.',
    fields: ['writer', 'novelist'],
    akas: ['Miguel de Cervantes y Saavedra', 'Miguel de Cervantes', 'Miguel Cervantes', 'Cervantes', 'El manco de Lepanto'],
    synopsis: 'Don Miguel de Cervantes y Saavedra (29 September 1547 (assumed) – 23 April 1616 N.S.) was a Spanish writer who is widely regarded as the greatest writer in the Spanish language and one of the world\'s most prominent novelists. His masterpiece Don Quixote has been translated into more languages than any other book except the Bible.',
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
    tip: 'One of The Three Tenors',
    fields: ['singer', 'tenor'],
    akas: ['Luciano Pavarotti', 'Pavarotti'],
    synopsis: 'Luciano Pavarotti, Cavaliere di Gran Croce (12 October 1935 – 6 September 2007) was an Italian operatic tenor who also crossed over into popular music, eventually becoming one of the most commercially successful tenors of all time. He made numerous recordings of complete operas and individual arias, gaining worldwide fame for the quality of his tone, and eventually established himself as one of the finest tenors of the 20th century.',
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
    tip: 'She discovered two chemical elements, polonium and radium',
    fields: ['physicist', 'chemist'],
    akas: ['Marie Sklodowska Curie', 'Maria Salomea Sklodowska', 'Marie Curie', 'Maria Curie', 'Curie'],
    synopsis: 'Marie Curie, born Maria Salomea Skłodowska (7 November 1867 – 4 July 1934) was a Polish and naturalized-French physicist and chemist who conducted pioneering research on radioactivity. She was the first woman to win a Nobel Prize, the first person and only woman to win twice, the only person to win a Nobel Prize in two different sciences, and was part of the Curie family legacy of five Nobel Prizes. She was also the first woman to become a professor at the University of Paris, and in 1995 became the first woman to be entombed on her own merits in the Panthéon in Paris.',
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

const northAmericanCountries = [
  'Canada', 'United States', 'Mexico'
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
  let res = false;
  if (cel.continent === 'Europe') {
    answer.continent = 'Europe';
    res = true;
  }

  return res;
}

function isNorthAmerican(cel) {
  let res = false;
  if (cel.continent === 'North America') {
    answer.continent = 'North America';
    res = true;
  }

  return res;
}

function isSouthAmerican(cel) {
  let res = false;
  if (cel.continent === 'South America') {
    answer.continent = 'South America';
    res = true;
  }

  return res;
}

function isCentralAmerican(cel) {
  let res = false;
  if (cel.continent === 'Central America') {
    answer.continent = 'Central America';
    res = true;
  }

  return res;
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
  let res = false;
  if (cel.coastal) {
    answer.coasts = cel.coasts;
    res = true; // filter posible country list
  }

  return res;
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

// Guess Field
// Artist
function isArtist (cel) {
  return cel.mainField === 'arts';
}

// Scientist
function isScientist (cel) {
  return cel.mainField === 'science';
}

// Politician
function isPolitician (cel) {
  return cel.mainField === 'politics';
}

// Sound Constructor
function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
      this.sound.play();
  };
  this.stop = function(){
      this.sound.pause();
  };
}

// End of helper functions ***************************

// Game Phases

const riddle = getCelebrity();

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
  // 'Coastal': isCoastal,
  // 'Peninsular': isPeninsular,
  'Mediterranean': isMediterranean,
  'North': isNorth,
  'Baltic': isBaltic,
  'Black': isBlack,
  'Adriatic': isAdriatic,
  'Celtic': isCeltic,
  'Atlantic': hasAtlantic, //two parameters
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

// Celebrity Field Phase 5
const fieldOfCel = {
  artist: isArtist,
  scientist: isScientist,
  politician: isPolitician,
}

// Game States
// S1 Initial State, Timeline
const s1Questions = Object.keys(timelineQuest);
let counter = 9;
const answer = { // initial guessed celecrity
  name: '',
  centuries: [],
  landmass: '',
  continent: '',
  coasts: [],
  country: '',
  mainField: '',
};

const intro = new sound("./audio/intro.mp3");
const wrongAnswer = new sound("./audio/wrongAnswer.mp3");
const rightAnswer = new sound("./audio/rightAnswer.mp3");

// function playIntro() {
//   return intro.play();
// }
// $(document).ready(playIntro);

// Update counter
function updateCounter() {
  checkLose()
  return $('h5').replaceWith('<h5>Remaining No\'s ' + counter + '</h5>');
}

// Check if Game Over
function checkLose() { if (counter === 0) { return s8(); } }

// Handle click on timeline buttons
function handleClickTimeline(question) {
  intro.stop();
  if (question in timelineQuest) {
    if (!timelineQuest[question](riddle)) {
      counter--;
      wrongAnswer.play();
      updateCounter();
    } else {
      rightAnswer.play();
      if (answer.centuries.length > 0) {
        $('.jumbotron').append("<h6>What we know so far:</h6>");
        $('.jumbotron').append("<h6><i>Century: " + answer.centuries[0] + "</i></h6>");  
      }
      s1(); // pros: after...questions don't exit state. cons: pushes century twice
    }
  } else {
    console.log('err');
  }
}

// Render timeline questions
function renderTimeline() {
  $('div.title').replaceWith('<h2>Timeline questions</h2>');
  updateCounter();
  $('.start-button').on('click', () => {
    intro.play();
    s1Questions.forEach(elem => {
      const btn = document.createElement("input");
      btn.classList.add("timeline");
      btn.type = "button";
      btn.value = elem;
      btn.onclick = () => handleClickTimeline(elem);
      $('.jumbotron').append(btn);
    });
    $('.start-button').hide();
    $('.jumbotron').append('<p>Let\'s find out the century our celebrity lived in!</p>');
    $('.jumbotron').append('<p>Keep in mind:</p>');
    $('.jumbotron').append('<p>Middle Ages: Aproximatelly from 5th to 15th Century</p>');
    $('.jumbotron').append('<p>French Revolution: Late 18th Century</p>')
  });
}

// Check if S1 exit condition
function s1() {
  if (answer.centuries.length > 0) {
    s2();
  }
}

// S2, Landmass
const s2Questions = Object.keys(landmassQuest);

// Handle click on landmass buttons
function handleClickLandmass(question) {
  if (question in landmassQuest) {
    if (!landmassQuest[question](riddle)) {
      counter--;
      wrongAnswer.play();
      updateCounter();
    } else { // exit state condition
      rightAnswer.play();
      s3();
    }
  } else {
    console.log('err');
  }
}

//  Landmass
function s2() {
  $('h2').replaceWith('<h2>Landmass questions</h2>');
  $('.timeline, p').hide();
  s2Questions.forEach(elem => {
    const btn = document.createElement("input");
    btn.classList.add("landmass");
    btn.type = "button";
    btn.value = elem;
    btn.onclick = () => handleClickLandmass(elem);
    $('.jumbotron').append(btn);
  });
}

// // S3, Continent
const s3Questions = Object.keys(continentQuest);

// Handle click on continent buttons
function handleClickContinent(question) {
  if (question in continentQuest) {
    if (!continentQuest[question](riddle)) {
      counter--;
      wrongAnswer.play();
      updateCounter();
    } else {
      rightAnswer.play();
      $('i').replaceWith("<h6><i>Century: " + answer.centuries[0] + " Continent: " + answer.continent + "</i></h6>");
      if (answer.continent === 'Europe') {
        s4Europe();
      } else if (answer.continent === 'North America') {
        s4NorthAmerica();
      } else if (answer.continent === 'Central America') {
        console.log('Central America');
      } else if (answer.continent === 'South America') {
        console.log('South America');
      }
    }
  } else {
    console.log('err');
  }
}

function s3() {
  $('h2').replaceWith('<h2>Continent questions</h2>');
  $('.landmass').hide();
  let countIndex = 0
  s3Questions.forEach(elem => {
    const btn = document.createElement("input");
    btn.classList.add("continent");
    btn.classList.add(countIndex);
    btn.type = "button";
    btn.value = elem;
    btn.onclick = () => handleClickContinent(elem);
    $('.jumbotron').append(btn);
    countIndex++;
  });
  // hidding not need buttons. Bad practice!!!!
  if (answer.landmass === 'Eurasia') {
    $('.2, .3, .4, .5, .6').hide();
  } else if (answer.landmass === 'America') {
    $('.0, .1, .5, .6').hide();
  } else if (answer.landmass === 'Other') {
    $('.0, .1, .2, .3, .4').hide();
  }
}

// S4, Continent Cases
// Europe
function handleClickCoastal(cel) {
  const guessCountry = document.createElement("input"); guessCountry.classList.add("guess-country"); guessCountry.type = "text"; guessCountry.placeholder = "Country Case Sensitive";
  const submitCountry = document.createElement("input"); submitCountry.type = "button"; submitCountry.value = "check";
  const euroForm = document.createElement("form"); euroForm.appendChild(guessCountry); euroForm.appendChild(submitCountry);
  submitCountry.onclick = () => { checkCountry(guessCountry.value); }
  $('.coastal').replaceWith(euroForm);

  if (cel) {
    if (!isCoastal(cel)) {
      $('i').replaceWith("<h6><i>Century: " + answer.centuries[0] + " Continent: " + answer.continent + " Coasts: No coasts</i></h6>");
      counter--;
    } else {
      $('i').replaceWith("<h6><i>Century: " + answer.centuries[0] + " Continent: " + answer.continent + " Coasts: " + answer.coasts + " </i></h6>");
    } 
  } else {
    console.log('err handleClickCoastal()');
  }
}

function checkCountry(country) {
  let res = false;
  if (country === riddle.country) {
    answer.country = country;
    res = true;
    rightAnswer.play();
    s5();
  } else {
    counter--;
    wrongAnswer.play();
    updateCounter();
  }
}

function s4Europe() {
  $('h2').replaceWith('<h2>Europe questions</h2>');
  $('.continent').hide();
  const coastal = document.createElement("input");
  coastal.classList.add("coastal");
  coastal.type = "button";
  coastal.value = "Is it a country with coasts?";
  coastal.onclick = () => handleClickCoastal(riddle);
  $('.jumbotron').append(coastal);
}

// North America
function handleClickNorthAmerica(country) {
  if (country) {
    if (country !== riddle.country) {
      counter--;
      wrongAnswer.play();
      updateCounter();
    } else {
      answer.country = country;
      rightAnswer.play();
      s5();
    }
  } else {
    console.log('err handleClickNorthAmerica()');
  }
}

function s4NorthAmerica() {
  $('h2').replaceWith('<h2>North America questions</h2>');
  $('.continent').hide();
  northAmericanCountries.forEach(elem => {
    const btn = document.createElement("input");
    btn.classList.add("north-america");
    btn.type = "button";
    btn.value = elem;
    btn.onclick = () => handleClickNorthAmerica(elem);
    $('.jumbotron').append(btn);
  });
}
// S5, Field of Celebrity
const s5Questions = Object.keys(fieldOfCel);

// Handle click field buttons
function handleClickField(field) {
  if (field in fieldOfCel) {
    if (!fieldOfCel[field](riddle)) {
      counter--;
      wrongAnswer.play();
      updateCounter();
    } else {
      answer.mainField = field;
      rightAnswer.play();
      s6();
    }
  } else {
    console.log('err handleClickField()');
  }
}

function s5() {
  $('i').replaceWith("<h6><i>Century: " + answer.centuries[0] + " Country: " + answer.country + "</i></h6>");
  $('h2').replaceWith('<h2>Field of Celebrity Questions</h2>');
  $('form, input').hide();
  s5Questions.forEach(elem => {
    const btn = document.createElement("input");
    btn.classList.add("field");
    btn.type = "button";
    btn.value = elem;
    btn.onclick = () => handleClickField(elem);
    $('.jumbotron').append(btn);
  })
}

// S6, Guess Celebrity
// Handle celebrity form
function handleClickCelebrityForm(celebrity) {
  if (celebrity) {
    if (!searchAka(celebrity)) {
      counter--;
      wrongAnswer.play();
      updateCounter();
    } else {
      rightAnswer.play();
      s7();
    }
  } else {
    console.log('err, handleCLickCelebrityForm');
  }
}

// Search answer in akas
function searchAka(name) {
  let res = false;
  riddle.akas.forEach(aka => {
    if (name === aka) {
      res = true;
    }
  })

  return res;
}

function s6() {
  $('input').hide();
  $('i').replaceWith("<h6><i>Century: " + answer.centuries[0] + ", Country: " + answer.country + "</i></h6>");
  $('.jumbotron').append("<h6><i>a notorious " + answer.mainField + ", " + riddle.sex + "</i></h6>");
  $('.jumbotron').append("<h6><i>" + riddle.tip + "</i></h6>");
  const guessCelebrity = document.createElement("input"); guessCelebrity.classList.add("guess-celebrity"); guessCelebrity.type = "text"; guessCelebrity.placeholder = "Name Case Sensitive";
  const submitCelebrity = document.createElement("input"); submitCelebrity.type = "button"; submitCelebrity.value = "check";
  const celebrityForm = document.createElement("form"); celebrityForm.appendChild(guessCelebrity); celebrityForm.appendChild(submitCelebrity);
  submitCelebrity.onclick = () => { handleClickCelebrityForm(guessCelebrity.value); }
  $('.jumbotron').append(celebrityForm);
}

// S7, Win game
function s7() {
  intro.play();
  const win = document.createElement("h3");
  win.classList.add("jumbotron", "text-center");
  win.innerHTML = "CONGRATS!";
  $('.jumbotron').replaceWith(win);
  $('.jumbotron').append("<br><br><h6>" + riddle.synopsis + "</h6>");
  let source;
  switch(riddle.name) {
    case "Isaac Newton":
      source = "newton.jpg";
      break;
    case "Abraham Lincoln":
      source = "lincoln.jpg";
      break;
    case "Mario Moreno":
      source = "cantinflas.jpg";
      break;
    case "Miguel de Cervantes y Saavedra":
      source = "cervantes.jpg";
      break;
    case "Luciano Pavarotti":
      source = "pavarotti.jpg";
      break;
    case "Marie Curie":
      source = "curie.jpg";
      break; 
  }
  $('.jumbotron').append("<br><img src=./pics/" + source + ">");
  setTimeout(() => { location.reload(); }, 30000);
}

// Garbage Collection
function s8() {
  setTimeout(() => { intro.play(); }, 3000);
  const loose = document.createElement("h3");
  loose.classList.add("jumbotron", "text-center");
  loose.innerHTML = "Sorry, you lost! Better luck next time";
  $('.jumbotron').replaceWith(loose);
  $('.jumbotron').append("<br><br><h4>The celebrity was: </h4><br><h2>" + riddle.name + "</h2>");
  setTimeout(() => { location.reload(); }, 10000);
}

