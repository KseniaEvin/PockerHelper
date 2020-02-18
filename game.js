const getRandomFiveCards = require('./getRandomFiveCards');
const getDeck = require('./getDeck');
const { flush, straight } = require('./checkCombinations');
const { getSuits, getRanks } = require('./utilities');

function game() {
   let deck = getDeck();
   let fiveCards = getRandomFiveCards(deck);
   let suits = getSuits(fiveCards);
   let ranks = getRanks(fiveCards);
   let isFlush = flush(fiveCards);
   let isStraight = straight(fiveCards);
   let isStraightFlush = isFlush && isStraight;
   let isflushRoyal = isStraightFlush && ranks[0] === 10;
   console.log(deck);
   console.log(fiveCards);
}

module.exports = game;
