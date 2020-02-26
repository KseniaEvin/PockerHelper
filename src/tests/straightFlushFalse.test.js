let fiveCards =   [ { suit: 'Hearts', rank: 10 },
                    { suit: 'Hearts', rank: 12 },
                    { suit: 'Hearts', rank: 11 },
                    { suit: 'Clubs', rank: 9 },
                    { suit: 'Hearts', rank: 13 }];
const straightFlush = require('../straightFlush');
let isStraightFlush = straightFlush(fiveCards);
test('case, when straightFlush should return true', () => {
    expect(isStraightFlush).toBeFalsy();
});