const getRandomFiveCards = require('./getRandomFiveCards');
const getDeck = require('./getDeck');
const checks = require('./checks');

function game() {
   // possible system output from BE to FE
   let deck = getDeck(); 
   // possible user input
   let fiveCards = getRandomFiveCards(deck);
   // all independent pure logic
   let toCheck = checks(fiveCards);

   console.log(fiveCards);
   console.log(toCheck);
};

module.exports = game;
