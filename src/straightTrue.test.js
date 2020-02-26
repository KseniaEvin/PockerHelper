let fiveCards =   [ { suit: 'Clubs', rank: 4 },
                    { suit: 'Hearts', rank: 6 },
                    { suit: 'Hearts', rank: 8 },
                    { suit: 'Hearts', rank: 7 },
                    { suit: 'Hearts', rank: 5 }];
const { straight } = require('./combinations');
let isStraight = straight(fiveCards);
test('case, when straight should return true', () => {
    expect(isStraight).toBeTruthy();
});