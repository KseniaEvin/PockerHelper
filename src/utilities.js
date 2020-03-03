const getSuits = function (sevenCards) {
    let suits = sevenCards.map(card => card.suit);
    return suits;
    };
const getRanks = function (sevenCards) {
    let ranks = sevenCards.map(card => card.rank).sort((a, b) => a - b);
    return ranks;
    };
module.exports = {
    getSuits, getRanks
};


