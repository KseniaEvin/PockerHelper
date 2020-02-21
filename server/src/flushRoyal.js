const straightFlush = require('./straightFlush');
const { getSuits, getRanks } = require('./utilities');
let flushRoyal = function (fiveCards) {
    const isStraightFlush = straightFlush(fiveCards);
    let ranks = getRanks(fiveCards);
    return isStraightFlush && ranks[0] === 10;
};
module.exports = flushRoyal;