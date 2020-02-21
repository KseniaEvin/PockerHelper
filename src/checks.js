const straightFlush = require('./straightFlush');
const flushRoyal = require('./flushRoyal');
const { flush, straight, repeat } = require('./combinations');

function checks(fiveCards) {
    let isFlushRoyal = flushRoyal(fiveCards);
    if (isFlushRoyal) {
        return "Flush Royal";
    }
    let isStraightFlush = straightFlush(fiveCards);
    if (isStraightFlush) {
        return "Straight Flush";
    }
    let isRepeat = repeat(fiveCards);
    if ((repeats.every((item, i, list) => item == list[0])) && repeats.length === 4) {
        return "Square";
    }
    if (repeats.length === 5) {
        return "Full House";
    } 
    let isFlush = flush(fiveCards);
    if (isFlush && !isStraight) {
        return "Flush";
    } 
    let isStraight = straight(fiveCards);
    if (isStraight && !isFlush) {
        return "Straight";
    }
    if (repeats.length === 3) {
        return "Three";
    }
    if (repeats.length === 4) {
        return "Two Pairs";
    }
    if (repeats.length === 2) {
        return "Pair";
    }
} 

  module.exports = checks;