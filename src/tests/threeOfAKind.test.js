const { threeOfAKind } = require('../combinations');
describe ('Not a Three of A Kind', () => {
    let sevenCards =   [ { suit: 'Clubs', rank: 5 },
                    { suit: 'Hearts', rank: 6 },
                    { suit: 'Hearts', rank: 7 },
                    { suit: 'Spades', rank: 5 },
                    { suit: 'Hearts', rank: 8 },
                    { suit: 'Diamonds', rank: 10 },
                    { suit: 'Hearts', rank: 9 }];
let isThreeOfAKind = threeOfAKind(sevenCards);
test('case, when isThreeOfAKind should return false', () => {
    expect(isThreeOfAKind).toBeFalsy();
})
});

describe ('A Three of A Kind', () => {
    let sevenCards =   [ { suit: 'Clubs', rank: 5 },
                    { suit: 'Hearts', rank: 6 },
                    { suit: 'Hearts', rank: 5 },
                    { suit: 'Spades', rank: 5 },
                    { suit: 'Hearts', rank: 8 },
                    { suit: 'Spades', rank: 3 },
                    { suit: 'Hearts', rank: 9 }];
let isThreeOfAKind = threeOfAKind(sevenCards);
test('case, when isThreeOfAKind should return true', () => {
expect(isThreeOfAKind).toBeTruthy();
})
});