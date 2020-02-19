const getSuits = function (fiveCards) {
    let suits = fiveCards.map(card => card.suit);
    return suits;
    };
const getRanks = function (fiveCards) {
    let ranks = fiveCards.map(card => card.rank).sort((a, b) => a - b);
    return ranks;
    };
module.exports = {
    getSuits, getRanks
};


