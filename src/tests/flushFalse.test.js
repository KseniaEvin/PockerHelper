let fiveCards =   [ { suit: 'Hearts', rank: 10 },
                    { suit: 'Hearts', rank: 12 },
                    { suit: 'Clubs', rank: 11 },
                    { suit: 'Hearts', rank: 14 },
                    { suit: 'Hearts', rank: 13 }];
const { flush } = require('../combinations');
let isFlush = flush(fiveCards);
test('case, when flush should return false', () => {
    expect(isFlush).toBeFalsy();
});