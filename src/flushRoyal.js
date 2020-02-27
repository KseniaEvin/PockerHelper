const straightFlush = require('./straightFlush');
const { getRanks } = require('./utilities');

function flushRoyal(sevenCards) {
    const isStraightFlush = straightFlush(sevenCards);
    const ranks = getRanks(sevenCards);

    return isStraightFlush && ranks[6] === 14;
};

module.exports = flushRoyal;