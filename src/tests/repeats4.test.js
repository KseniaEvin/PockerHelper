let fiveCards =   [ { suit: 'Clubs', rank: 5 },
                    { suit: 'Hearts', rank: 6 },
                    { suit: 'Hearts', rank: 5 },
                    { suit: 'Spades', rank: 6 },
                    { suit: 'Hearts', rank: 8 }];
const { repeat } = require('../combinations');
let isRepeat = repeat(fiveCards);
test('case, when repeat should have length is equal 4, that is mean two pairs ', () => {
    expect(isRepeat).toHaveLength(4);
});