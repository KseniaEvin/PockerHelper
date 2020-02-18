// const getDeck = require('./getDeck');
// let deck = getDeck();

let getRandomFiveCards = function (deck) {
    let fiveCards = [];
    for (let i = 0; i < 5; i++) {
        let index = Math.floor(Math.random() * deck.length);
        fiveCards = [...fiveCards, deck[index]];
        deck.splice(index, 1);
    };
    return fiveCards;
};

module.exports = getRandomFiveCards;