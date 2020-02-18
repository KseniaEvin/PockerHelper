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

console.log(deck);


let fiveCards = [];
let getRandom = function (deck) {
for(let i = 0; i < 5; i++) {
    let index = Math.floor(Math.random() * deck.length);
    fiveCards = [...fiveCards, deck[index]];
    deck.splice(index, 1);
}
};

getRandom(deck);
console.log(fiveCards);
console.log(deck);