let getRandomSevenCards = function (deck) {
    let sevenCards = [{ suit: 'Hearts', rank: 2 },
    { suit: 'Hearts', rank: 3 },
    { suit: 'Clubs', rank: 12 },
    { suit: 'Spades', rank: 5 },
    { suit: 'Hearts', rank: 13 },
    { suit: 'Diamonds', rank: 2 },
    { suit: 'Hearts', rank: 12 }];
    // for (let i = 0; i < 7; i++) {
    //     let index = Math.floor(Math.random() * deck.length);
    //     sevenCards = [...sevenCards, deck[index]];
    //     deck.splice(index, 1);
    // };
    
    return sevenCards;
};

module.exports = getRandomSevenCards;