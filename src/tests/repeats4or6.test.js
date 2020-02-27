describe('first case, when we receive Two Pairs', () => {
let sevenCards =   [ { suit: 'Clubs', rank: 5 },
                    { suit: 'Hearts', rank: 6 },
                    { suit: 'Hearts', rank: 5 },
                    { suit: 'Spades', rank: 6 },
                    { suit: 'Hearts', rank: 8 },
                    { suit: 'Diamonds', rank: 8 },
                    { suit: 'Hearts', rank: 9 }];
const { repeat } = require('../combinations');
let isRepeat = repeat(sevenCards);
test('case, when repeat should have length is equal 4, that is mean two pairs ', () => {
    expect(isRepeat).toHaveLength(6);
})
});

describe('first case, when we receive Two Pairs', () => {
let sevenCards =   [ { suit: 'Clubs', rank: 5 },
                    { suit: 'Hearts', rank: 6 },
                    { suit: 'Hearts', rank: 5 },
                    { suit: 'Spades', rank: 6 },
                    { suit: 'Hearts', rank: 7 },
                    { suit: 'Diamonds', rank: 8 },
                    { suit: 'Hearts', rank: 9 }];
const { repeat } = require('../combinations');
let isRepeat = repeat(sevenCards);
test('case, when repeat should have length is equal 4, that is mean two pairs ', () => {
    expect(isRepeat).toHaveLength(4);
})
});