let getRandomSevenCards = function (deck) {
    let sevenCards = [
        { suit: 'Diamonds', rank: 5 },
  { suit: 'Clubs', rank: 5 },
  { suit: 'Spades', rank: 5 },
  { suit: 'Hearts', rank: 5 },
  { suit: 'Diamonds', rank: 8 },
  { suit: 'Diamonds', rank: 4 },
  { suit: 'Spades', rank: 4 }
    ];
    // for (let i = 0; i < 7; i++) {
    //     let index = Math.floor(Math.random() * deck.length);
    //     sevenCards = [...sevenCards, deck[index]];
    //     deck.splice(index, 1);
    // };
    
    return sevenCards;
};

module.exports = getRandomSevenCards;