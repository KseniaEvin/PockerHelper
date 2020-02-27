let sevenCards =   [ { suit: 'Clubs', rank: 5 },
                    { suit: 'Hearts', rank: 6 },
                    { suit: 'Hearts', rank: 7 },
                    { suit: 'Spades', rank: 5 },
                    { suit: 'Hearts', rank: 8 },
                    { suit: 'Diamonds', rank: 10 },
                    { suit: 'Hearts', rank: 9 }];
const { threeOfAKind } = require('../combinations');
let isThreeOfAKind = threeOfAKind(sevenCards);
test('case, when isThreeOfAKind should return false', () => {
    expect(isThreeOfAKind).toBeFalsy();
});