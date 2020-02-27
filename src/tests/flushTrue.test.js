let sevenCards =   [ { suit: 'Hearts', rank: 10 },
                    { suit: 'Hearts', rank: 12 },
                    { suit: 'Clubs', rank: 11 },
                    { suit: 'Hearts', rank: 14 },
                    { suit: 'Hearts', rank: 13 },
                    { suit: 'Hearts', rank: 14 },
                    { suit: 'Diamonds', rank: 13 }];
const { flush } = require('../combinations');
let isFlush = flush(sevenCards);
test('case, when flush should return true', () => {
    expect(isFlush).toBeTruthy();
});