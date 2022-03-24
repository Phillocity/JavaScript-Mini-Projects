const inventors = [{
    first: 'Albert',
    last: 'Einstein',
    year: 1879,
    passed: 1955
  },
  {
    first: 'Isaac',
    last: 'Newton',
    year: 1643,
    passed: 1727
  },
  {
    first: 'Galileo',
    last: 'Galilei',
    year: 1564,
    passed: 1642
  },
  {
    first: 'Marie',
    last: 'Curie',
    year: 1867,
    passed: 1934
  },
  {
    first: 'Johannes',
    last: 'Kepler',
    year: 1571,
    passed: 1630
  },
  {
    first: 'Nicolaus',
    last: 'Copernicus',
    year: 1473,
    passed: 1543
  },
  {
    first: 'Max',
    last: 'Planck',
    year: 1858,
    passed: 1947
  },
  {
    first: 'Katherine',
    last: 'Blodgett',
    year: 1898,
    passed: 1979
  },
  {
    first: 'Ada',
    last: 'Lovelace',
    year: 1815,
    passed: 1852
  },
  {
    first: 'Sarah E.',
    last: 'Goode',
    year: 1855,
    passed: 1905
  },
  {
    first: 'Lise',
    last: 'Meitner',
    year: 1878,
    passed: 1968
  },
  {
    first: 'Hanna',
    last: 'Hammarström',
    year: 1829,
    passed: 1909
  }
];

const people = [
  'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
  'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
  'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
  'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
  'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];


const champions = ['Aatrox the Darkin Blade',
  'Ahri the Nine-Tailed Fox',
  'Akali the Rogue Assassin',
  'Akshan the Rogue Sentinel',
  'Alistar the Minotaur',
  'Amumu the Sad Mummy',
  'Anivia the Cryophoenix',
  'Annie the Dark Child',
  'Aphelios the Weapon of the Faithful',
  'Ashe the Frost Archer',
  'Aurelion Sol The Star Forger',
  'Azir the Emperor of the Sands',
  'Bard the Wandering Caretaker',
  'Blitzcrank the Great Steam Golem',
  'Brand the Burning Vengeance',
  'Braum the Heart of the Freljord',
  'Caitlyn the Sheriff of Piltover',
  'Camille the Steel Shadow',
  "Cassiopeia the Serpent's Embrace",
  "Cho'Gath the Terror of the Void",
  'Corki the Daring Bombardier',
  'Darius the Hand of Noxus',
  'Diana Scorn of the Moon',
  'Dr. Mundo the Madman of Zaun',
  'Draven the Glorious Executioner',
  'Ekko the Boy Who Shattered Time',
  'Elise the Spider Queen',
  "Evelynn Agony's Embrace",
  'Ezreal the Prodigal Explorer',
  'Fiddlesticks the Ancient Fear',
  'Fiora the Grand Duelist',
  'Fizz the Tidal Trickster',
  'Galio the Colossus',
  'Gangplank the Saltwater Scourge',
  'Garen The Might of Demacia',
  'Gnar the Missing Link',
  'Gragas the Rabble Rouser',
  'Graves the Outlaw',
  'Gwen The Hallowed Seamstress',
  'Hecarim the Shadow of War',
  'Heimerdinger the Revered Inventor',
  'Illaoi the Kraken Priestess',
  'Irelia the Blade Dancer',
  'Ivern the Green Father',
  "Janna the Storm's Fury",
  'Jarvan IV the Exemplar of Demacia',
  'Jax Grandmaster at Arms',
  'Jayce the Defender of Tomorrow',
  'Jhin the Virtuoso',
  'Jinx the Loose Cannon',
  "Kai'Sa Daughter of the Void",
  'Kalista the Spear of Vengeance',
  'Karma the Enlightened One',
  'Karthus the Deathsinger',
  'Kassadin the Void Walker',
  'Katarina the Sinister Blade',
  'Kayle the Righteous',
  'Kayn the Shadow Reaper',
  'Kennen the Heart of the Tempest',
  "Kha'Zix the Voidreaver",
  'Kindred The Eternal Hunters',
  'Kled the Cantankerous Cavalier',
  "Kog'Maw the Mouth of the Abyss",
  'LeBlanc the Deceiver',
  'Lee Sin the Blind Monk',
  'Leona the Radiant Dawn',
  'Lillia the Bashful Bloom',
  'Lissandra the Ice Witch',
  'Lucian the Purifier',
  'Lulu the Fae Sorceress',
  'Lux the Lady of Luminosity',
  'Malphite Shard of the Monolith',
  'Malzahar the Prophet of the Void',
  'Maokai the Twisted Treant',
  'Master Yi the Wuju Bladesman',
  'Miss Fortune the Bounty Hunter',
  'Mordekaiser the Iron Revenant',
  'Morgana the Fallen',
  'Nami the Tidecaller',
  'Nasus the Curator of the Sands',
  'Nautilus the Titan of the Depths',
  'Neeko the Curious Chameleon',
  'Nidalee the Bestial Huntress',
  'Nocturne the Eternal Nightmare',
  'Nunu & Willump the Boy and His Yeti',
  'Olaf the Berserker',
  'Orianna the Lady of Clockwork',
  'Ornn The Fire Below the Mountain',
  'Pantheon the Unbreakable Spear',
  'Poppy Keeper of the Hammer',
  'Pyke the Bloodharbor Ripper',
  'Qiyana Empress of the Elements',
  "Quinn Demacia's Wings",
  'Rakan The Charmer',
  'Rammus the Armordillo',
  "Rek'Sai the Void Burrower",
  'Rell the Iron Maiden',
  'Renata Glasc the Chem-Baroness',
  'Renekton the Butcher of the Sands',
  'Rengar the Pridestalker',
  'Riven the Exile',
  'Rumble the Mechanized Menace',
  'Ryze the Rune Mage',
  'Samira the Desert Rose',
  'Sejuani Fury of the North',
  'Senna the Redeemer',
  'Seraphine the Starry-Eyed Songstress',
  'Sett the Boss',
  'Shaco the Demon Jester',
  'Shen the Eye of Twilight',
  'Shyvana the Half-Dragon',
  'Singed the Mad Chemist',
  'Sion The Undead Juggernaut',
  'Sivir the Battle Mistress',
  'Skarner the Crystal Vanguard',
  'Sona Maven of the Strings',
  'Soraka the Starchild',
  'Swain the Noxian Grand General',
  'Sylas the Unshackled',
  'Syndra the Dark Sovereign',
  'Tahm Kench The River King',
  'Taliyah the Stoneweaver',
  "Talon the Blade's Shadow",
  'Taric the Shield of Valoran',
  'Teemo the Swift Scout',
  'Thresh the Chain Warden',
  'Tristana the Yordle Gunner',
  'Trundle the Troll King',
  'Tryndamere the Barbarian King',
  'Twisted Fate the Card Master',
  'Twitch the Plague Rat',
  'Udyr the Spirit Walker',
  'Urgot the Dreadnought',
  'Varus the Arrow of Retribution',
  'Vayne the Night Hunter',
  'Veigar the Tiny Master of Evil',
  "Vel'Koz the Eye of the Void",
  'Vex the Gloomist',
  'Vi the Piltover Enforcer',
  'Viego The Ruined King',
  'Viktor the Machine Herald',
  'Vladimir the Crimson Reaper',
  'Volibear the Relentless Storm',
  'Warwick the Uncaged Wrath of Zaun',
  'Wukong the Monkey King',
  'Xayah the Rebel',
  'Xerath the Magus Ascendant',
  'Xin Zhao the Seneschal of Demacia',
  'Yasuo the Unforgiven',
  'Yone the Unforgotten',
  'Yorick Shepherd of Souls',
  'Yuumi the Magical Cat',
  'Zac the Secret Weapon',
  'Zed the Master of Shadows',
  'Zeri The Spark of Zaun',
  'Ziggs the Hexplosives Expert',
  'Zilean the Chronokeeper',
  'Zoe the Aspect of Twilight',
  'Zyra Rise of the Thorns'
]

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
console.log("---------Only_1500_Births---------")
const before1500 = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600)
before1500.forEach(item => console.log(`${item.first} ${item.last} was born on ${item.year}`))

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
console.log("---------First_and_Last_Name---------")
const firstLastNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`)
firstLastNames.forEach(inventor => console.log(inventor))

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
console.log("---------Birthday---------")
const birthdaySort = inventors.sort((a, b) => {
  return b.year - a.year
})
birthdaySort.forEach(inventor => console.log(inventor.year))


// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
console.log("---------Combined_Alive_Years---------")
const sum = 0
const reduce = inventors.reduce((total, inventor) => total + (inventor.passed - inventor.year), 0)
console.log(reduce)

// 5. Sort the inventors by years lived
console.log("---------Years_Lived---------")
const yearsLived = inventors.sort((a, b) => (a.passed - a.year) - (b.passed - b.year))
yearsLived.reverse().forEach(inventor => console.log(`${inventor.first} ${inventor.last} has lived for ${(inventor.passed - inventor.year)}`))

// 6. List of League Champions
// https://leagueoflegends.fandom.com/wiki/List_of_champions
const champs = Array.from(document.querySelectorAll(".inline-image.label-only.champion-icon.tooltips-init-complete"))
const champName = champs.map(champ => champ.innerText.replace(/\n/, " "))
const sChamps = champName.filter(champ => champ[0].toLowerCase() == 's')
const champtable = document.querySelector(".champ-table")
console.table(sChamps)

// 7. sort Exercise
// Sort the people alphabetically by last name
const peopleArray = people.map(person => person.split(", "))
const peopleSorted = peopleArray.sort((a, b) => a[1] < b[1] ? -1 : 1)
console.table(peopleSorted)

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];
console.log(new Set(data))

const searcher = document.querySelector("#searcher")
searcher.addEventListener('keyup', () => searching(searcher.value))

champtable.insertAdjacentHTML("beforeend", "<tr><th>League Champions</th></tr>")
  champions.slice(0,10).forEach((champ) => {
    champtable.insertAdjacentHTML("beforeend", `<tr><td>${champ}</td></tr>`)
  })

function searching(query) {
  const filtered = champions.filter(champ => champ.toLowerCase().includes(query.toLowerCase()))
  while (champtable.hasChildNodes()) {
    champtable.removeChild(champtable.firstChild);
  }
  champtable.insertAdjacentHTML("beforeend", "<tr><th>League Champions</th></tr>")
  filtered.slice(0,10).forEach((champ) => {
    champtable.insertAdjacentHTML("beforeend", `<tr><td>${champ}</td></tr>`)
  });
}
