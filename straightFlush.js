const { flush, straight } = require('./checkCombinations');
let straightFlush = function (fiveCards) {
    let isFlush = flush(fiveCards);
    let isStraight = straight(fiveCards);
    return isFlush && isStraight;
};

module.exports = straightFlush;