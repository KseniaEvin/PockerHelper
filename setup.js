function prepareCardsBeforeGame() {
    let deck = [];

    const suits = ["Spades", "Hearts", "Clubs", "Diamonds"]
  
    const ranks = [2, 3, 4, 5, 6, 7, 8,
      9, 10, 11, 12, 13, 14]
  
    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < ranks.length; j++) {
        let card = { suit: suits[i], rank: ranks[j] };
        deck = [...deck, card];
      }
    }
  
    let fiveCards = [];
  
    function getRandomCard(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
  
  
    while (fiveCards.length !== 5) {
      let index = getRandomCard(deck.length);
      fiveCards.push(deck[index]);
      fiveCards = fiveCards.filter((value, index, fiveCards) => fiveCards.indexOf(value) === index);
    }

    return { deck, fiveCards };
  
};

module.exports = {prepareCardsBeforeGame};
