let sevenCards =   [ { suit: 'Hearts', rank: 10 },
                    { suit: 'Hearts', rank: 12 },
                    { suit: 'Hearts', rank: 11 },
                    { suit: 'Hearts', rank: 14 },
                    { suit: 'Hearts', rank: 13 },
                    { suit: 'Clubs', rank: 12 },
                    { suit: 'Diamonds', rank: 6 }];
const { repeat } = require('../combinations');
let isRepeat = repeat(sevenCards);
test('case, when repeat should have length is equal 2, that is mean it is a Pair', () => {
    expect(isRepeat).toHaveLength(2);
});