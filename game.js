const getRandomFiveCards = require('./getRandomFiveCards');
const getDeck = require('./getDeck');
const { flush, straight, repeat } = require('./combinations');
const checks = require('./checks');
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
   let isRepeat = repeat(fiveCards);
   let toCheck = checks(fiveCards);
   let isFlushRoyal = flushRoyal(fiveCards);
   let isStraightFlush = straightFlush(fiveCards);
   console.log(fiveCards);
   console.log(toCheck);
};

module.exports = game;
