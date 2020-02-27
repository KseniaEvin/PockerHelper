const { flush, straight } = require('./combinations');
let straightFlush = function (sevenCards) {
    let isFlush = flush(sevenCards);
    let isStraight = straight(sevenCards);
    return isFlush && isStraight;
}; 

module.exports = straightFlush;