const straightFlush = require('./straightFlush');
const { getRanks } = require('./utilities');

function flushRoyal(fiveCards) {
    const isStraightFlush = straightFlush(fiveCards);
    const ranks = getRanks(fiveCards);

    return isStraightFlush && ranks[0] === 10;
};

module.exports = flushRoyal;