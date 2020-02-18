// const getRandomFiveCards = require('./getRandomFiveCards');
// let fiveCards = getRandomFiveCards(deck);
let prepareToCheck = function (fiveCards) {
let suits = fiveCards.map((card) => card.suit);
let ranks = fiveCards.map((card) => card.rank).sort((a, b) => a - b);
return ({suits,ranks});
}

module.exports = prepareToCheck;