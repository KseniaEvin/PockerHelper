let sevenCards =   [ { suit: 'Clubs', rank: 5 },
                    { suit: 'Hearts', rank: 6 },
                    { suit: 'Hearts', rank: 5 },
                    { suit: 'Spades', rank: 6 },
                    { suit: 'Hearts', rank: 8 },
                    { suit: 'Diamonds', rank: 5 },
                    { suit: 'Hearts', rank: 9 }];
const { repeat } = require('../combinations');
let isRepeat = repeat(sevenCards);
test('case, when repeat should have length is equal 5, that is mean Full House', () => {
    expect(isRepeat).toHaveLength(5);
});