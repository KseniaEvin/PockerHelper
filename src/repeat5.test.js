let fiveCards =   [ { suit: 'Clubs', rank: 5 },
                    { suit: 'Hearts', rank: 6 },
                    { suit: 'Diamonds', rank: 5 },
                    { suit: 'Spades', rank: 6 },
                    { suit: 'Hearts', rank: 5 }];
const { repeat } = require('./combinations');
let isRepeat = repeat(fiveCards);
test('case, when repeat should have length is equal 5, that is mean full house', () => {
    expect(isRepeat).toHaveLength(5);
});