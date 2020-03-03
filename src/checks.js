const straightFlush = require('./straightFlush');
const flushRoyal = require('./flushRoyal');
const { flush, straight, fourOfAKind, threeOfAKind, repeat } = require('./combinations');

function checks(sevenCards) {
    const isFlushRoyal = flushRoyal(sevenCards);
    if (isFlushRoyal) {
        return "Flush Royal";
    }
    const isFlush = flush(sevenCards);
    const isStraight = straight(sevenCards);
    if (isFlush && !isStraight) {
        return "Flush";
    }
    const isStraightFlush = straightFlush(sevenCards);
    if (isStraightFlush) {
        return "Straight Flush";
    }
    
    if (isStraight && !isFlush) {
        return "Straight";
    }

    const repeats = repeat(sevenCards);
    const isFourOfAKind = fourOfAKind(sevenCards);
    const isThreeOfAKind = threeOfAKind(sevenCards);
    if (isFourOfAKind) {
        return "Four Of A Kind";
    }
    if (repeats.length === 5) {
        return "Full House";
    }
    if (isThreeOfAKind) {
        return "Three";
    }
    if (repeats.length === 4 || repeats.length === 6) {
        return "Two Pairs";
    }
    if (repeats.length === 2) {
        return "Pair";
    }
} 

  module.exports = checks;