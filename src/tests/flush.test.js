const { flush } = require('../combinations');
describe ('Not a Flush', () => {
let sevenCards =   [ { suit: 'Hearts', rank: 10 },
                    { suit: 'Hearts', rank: 12 },
                    { suit: 'Clubs', rank: 11 },
                    { suit: 'Hearts', rank: 14 },
                    { suit: 'Hearts', rank: 13 },
                    { suit: 'Clubs', rank: 14 },
                    { suit: 'Diamonds', rank: 13 }];
let isFlush = flush(sevenCards);
test('case, when flush should return false', () => {
    expect(isFlush).toBeFalsy();
})
});

describe ('A Flush', () => {
    let sevenCards =   [ { suit: 'Hearts', rank: 10 },
        { suit: 'Hearts', rank: 12 },
        { suit: 'Clubs', rank: 11 },
        { suit: 'Hearts', rank: 14 },
        { suit: 'Hearts', rank: 13 },
        { suit: 'Hearts', rank: 14 },
        { suit: 'Diamonds', rank: 13 }];
    let isFlush = flush(sevenCards);
    test('case, when flush should return true', () => {
    expect(isFlush).toBeTruthy();
    });
});