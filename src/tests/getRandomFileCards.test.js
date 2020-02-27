const getRandomSevenCards = require('../getRandomSevenCards');
const getDeck = require('../getDeck');
let deck = getDeck();
let sevenCards = getRandomSevenCards(deck);
test('', () => {
    expect(sevenCards.length).toBe(7);
});