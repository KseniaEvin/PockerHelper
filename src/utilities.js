const getSuits = function (sevenCards) {
    let suits = sevenCards.map(card => card.suit);
    return suits;
    };
const getRanks = function (sevenCards) {
    let ranks = sevenCards.map(card => card.rank).sort((a, b) => a - b);
    return ranks;
    };
const cardDifference = function (ranks, step) {
    let counter = 0;
    for (let i = 0; i < ranks.length; i++) {
        diff = ranks[i + 1] - ranks[i];
        if (diff === step) {
            counter++;
        }
        else {
            break;
        }
    }
    return counter;
};
module.exports = {
    getSuits, getRanks, cardDifference
};


