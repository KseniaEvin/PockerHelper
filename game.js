const getRandomFiveCards = require('./getRandomFiveCards');
const getDeck = require('./getDeck');
const prepareToCheck = require('./utilities')
const { flush, straight } = require('./checkCombinations');

function game() {
   let deck = getDeck();
   let fiveCards = getRandomFiveCards(deck);
   let utilities = prepareToCheck(fiveCards);
   let isFlush = flush(fiveCards);
   let isStraight = straight(fiveCards);

   let isStraightFlush = isFlush && isStraight;
   console.log(deck);
  //  console.log(isStraight);
  //  console.log(isStraightFlush);
   console.log (utilities);
}

module.exports = game;
