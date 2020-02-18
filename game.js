const getRandomFiveCards = require('./getRandomFiveCards');
const getDeck = require('./getDeck');
const { flush, straight } = require('./checkCombinations');

function game() {
   let deck = getDeck();
   let fiveCards = getRandomFiveCards(deck);
   let isFlush = flush(fiveCards);
   let isStraight = straight(fiveCards);

   let isStraightFlush = isFlush && isStraight;
   console.log(deck);
   console.log(isStraight);
  //  console.log(flush);
}
game();

module.exports = game;
