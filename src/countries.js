// export countries
module.exports = {
  exportEuroCont: () => {
    return europeCountries;
  },
  exportCentAmerCont: () => {
    return centralAmercianCountries;
  },
  exportSouthAmerCont: () => {
    return southAmericanCountries;
  }
};


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

const centralAmercianCountries = [
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
