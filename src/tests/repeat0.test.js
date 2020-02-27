let sevenCards =   [ { suit: 'Hearts', rank: 10 },
                    { suit: 'Hearts', rank: 12 },
                    { suit: 'Hearts', rank: 11 },
                    { suit: 'Hearts', rank: 14 },
                    { suit: 'Hearts', rank: 13 },
                    { suit: 'Clubs', rank: 8 },
                    { suit: 'Diamonds', rank: 6 }];
const { repeat } = require('../combinations');
let isRepeat = repeat(sevenCards);
test('case, when repeat should have length is equal 0', () => {
    expect(isRepeat).toHaveLength(0);
});