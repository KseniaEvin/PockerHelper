const getRandomFiveCards = require('./getRandomFiveCards');
const getDeck = require('./getDeck');
let deck = getDeck();
let fiveCards = getRandomFiveCards(deck);
test('', () => {
    expect(fiveCards.length).toBe(5);
});