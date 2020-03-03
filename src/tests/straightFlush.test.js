const straightFlush = require('../straightFlush');
describe ('Not a Straight Flush', () => {
let sevenCards =   [ { suit: 'Hearts', rank: 10 },
                    { suit: 'Hearts', rank: 12 },
                    { suit: 'Clubs', rank: 11 },
                    { suit: 'Hearts', rank: 14 },
                    { suit: 'Hearts', rank: 13 },
                    { suit: 'Clubs', rank: 14 },
                    { suit: 'Diamonds', rank: 13 }];
let isStraightFlush = straightFlush(sevenCards);
test('case, when straightFlush should return false', () => {
    expect(isStraightFlush).toBeFalsy();
})
});
describe ('A Straight Flush', () => {
let sevenCards =   [ { suit: 'Hearts', rank: 10 },
                    { suit: 'Hearts', rank: 12 },
                    { suit: 'Hearts', rank: 11 },
                    { suit: 'Hearts', rank: 14 },
                    { suit: 'Hearts', rank: 13 },
                    { suit: 'Clubs', rank: 14 },
                    { suit: 'Diamonds', rank: 13 }];
let isStraightFlush = straightFlush(sevenCards);
test('case, when straightFlush should return true', () => {
    expect(isStraightFlush).toBeTruthy();
})
});