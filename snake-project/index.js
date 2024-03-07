const snakeNames = require('snake-names');
let namePicked = snakeNames.random();
console.log('You should name this snake:', namePicked);

let femaleNames = snakeNames.female;
let randomIndex = Math.floor(Math.random() * femaleNames.length);
console.log('A great female name is:', femaleNames[randomIndex]);