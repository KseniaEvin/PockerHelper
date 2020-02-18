const getRandomFiveCards = require('./getRandomFiveCards');
const getDeck = require('./getDeck');
const { flush, straight } = require('./checkCombinations');
const { getSuits, getRanks } = require('./utilities');
const straightFlush = require('./straightFlush');
const flushRoyal = require('./flushRoyal');

function game() {
   let deck = getDeck();
   let fiveCards = getRandomFiveCards(deck);
   let suits = getSuits(fiveCards);
   let ranks = getRanks(fiveCards);
   let isFlush = flush(fiveCards);
   let isStraight = straight(fiveCards);
   let isFlushRoyal = flushRoyal(fiveCards);
   let isStraightFlush = straightFlush(fiveCards);
   console.log(deck);
   console.log(fiveCards);
   console.log(suits);
   console.log(ranks);
   console.log (isFlushRoyal);
   console.log (isStraightFlush);
}

module.exports = game;
