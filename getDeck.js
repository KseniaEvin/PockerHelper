function getDeck () {
    let deck = [];

    const suits = ["Spades", "Hearts", "Clubs", "Diamonds"];
  
    const ranks = [2, 3, 4, 5, 6, 7, 8,
      9, 10, 11, 12, 13, 14];
  
    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < ranks.length; j++) {
        let card = { suit: suits[i], rank: ranks[j] };
        deck = [...deck, card];
      };
    };
    return deck;
}

module.exports = getDeck;