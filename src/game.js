const getRandomSevenCards = require('./getRandomSevenCards');
const getDeck = require('./getDeck');
const checks = require('./checks');

function game() {
   // possible system output from BE to FE
   let deck = getDeck(); 
   // possible user input
   let sevenCards = getRandomSevenCards(deck);
   // all independent pure logic
   let toCheck = checks(sevenCards);

   console.log(sevenCards);
   console.log(toCheck);
};

module.exports = game;
