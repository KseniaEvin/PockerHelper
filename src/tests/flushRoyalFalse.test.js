let sevenCards =   [ { suit: 'Hearts', rank: 10 },
                    { suit: 'Hearts', rank: 12 },
                    { suit: 'Clubs', rank: 11 },
                    { suit: 'Hearts', rank: 14 },
                    { suit: 'Hearts', rank: 13 },
                    { suit: 'Clubs', rank: 14 },
                    { suit: 'Diamonds', rank: 13 }];
const flushRoyal = require('../flushRoyal');
let isFlushRoyal = flushRoyal(sevenCards);
test('case, when flushRoyal should return false', () => {
    expect(isFlushRoyal).toBeFalsy();
})