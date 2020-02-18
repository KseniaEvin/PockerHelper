const prepareCardsBeforeGame = require('./setup');
const { flush, straight } = require('./checkCombinations');

function game() {
  const { deck, fiveCards } = prepareCardsBeforeGame(); // create function in separate module, move all setup logic there
   let isflush = flush(fiveCards);
   let isStraight = straight(fiveCards);

   let isStraightFlush = isflush && isStraight;
}

module.exports = game;
