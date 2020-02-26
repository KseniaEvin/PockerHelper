let fiveCards =   [ { suit: 'Clubs', rank: 4 },
                    { suit: 'Hearts', rank: 6 },
                    { suit: 'Hearts', rank: 5 },
                    { suit: 'Hearts', rank: 7 },
                    { suit: 'Hearts', rank: 8 }];
const { repeat } = require('../combinations');
let isRepeat = repeat(fiveCards);
test('case, when repeat should have length is equal 0', () => {
    expect(isRepeat).toHaveLength(0);
});