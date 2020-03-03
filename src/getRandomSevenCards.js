let getRandomSevenCards = function (deck) {
    let sevenCards = [];
    for (let i = 0; i < 7; i++) {
        let index = Math.floor(Math.random() * deck.length);
        sevenCards = [...sevenCards, deck[index]];
        deck.splice(index, 1);
    };
    
    return sevenCards;
};

module.exports = getRandomSevenCards;