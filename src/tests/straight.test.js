describe ('Not a Straight', () => {
let sevenCards =   [ { suit: 'Hearts', rank: 10 },
                    { suit: 'Hearts', rank: 12 },
                    { suit: 'Clubs', rank: 8 },
                    { suit: 'Hearts', rank: 14 },
                    { suit: 'Hearts', rank: 13 },
                    { suit: 'Hearts', rank: 14 },
                    { suit: 'Diamonds', rank: 13 }];
const { straight } = require('../combinations');
let isStraight = straight(sevenCards);
test('case, when straight should return false', () => {
    expect(isStraight).toBeFalsy();
})
});

describe ('A Straight', () => {
let sevenCards =   [ { suit: 'Hearts', rank: 10 },
                { suit: 'Hearts', rank: 12 },
                { suit: 'Clubs', rank: 11 },
                { suit: 'Hearts', rank: 14 },
                { suit: 'Hearts', rank: 13 },
                { suit: 'Hearts', rank: 14 },
                { suit: 'Diamonds', rank: 13 }];
const { straight } = require('../combinations');
let isStraight = straight(sevenCards);
test('case, when straight should return true', () => {
    expect(isStraight).toBeTruthy();
})
});