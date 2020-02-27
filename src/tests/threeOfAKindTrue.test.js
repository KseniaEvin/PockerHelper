let sevenCards =   [ { suit: 'Clubs', rank: 5 },
                    { suit: 'Hearts', rank: 6 },
                    { suit: 'Hearts', rank: 5 },
                    { suit: 'Spades', rank: 5 },
                    { suit: 'Hearts', rank: 8 },
                    { suit: 'Spades', rank: 3 },
                    { suit: 'Hearts', rank: 9 }];
const { threeOfAKind } = require('../combinations');
let isThreeOfAKind = threeOfAKind(sevenCards);
test('case, when isThreeOfAKind should return true', () => {
    expect(isThreeOfAKind).toBeTruthy();
});