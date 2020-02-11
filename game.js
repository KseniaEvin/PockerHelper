const prepareCardsBeforeGame = require('./setup');

function game() {
  const { deck, fiveCards } = prepareCardsBeforeGame(); // create function in separate module, move all setup logic there
  console.log(deck);
  console.log(fiveCards);
}

module.exports = game;
