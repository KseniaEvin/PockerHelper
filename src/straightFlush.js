const { flush, straight } = require('./combinations');
const straightFlush = function (sevenCards) {
    const isFlush = flush(sevenCards);
    const isStraight = straight(sevenCards);
    return isFlush && isStraight;
}; 

module.exports = straightFlush;