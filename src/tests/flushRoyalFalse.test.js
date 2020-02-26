let fiveCards =   [ { suit: 'Hearts', rank: 9 },
                    { suit: 'Hearts', rank: 12 },
                    { suit: 'Hearts', rank: 11 },
                    { suit: 'Clubs', rank: 14 },
                    { suit: 'Hearts', rank: 13 }];
const flushRoyal = require('../flushRoyal');
let isFlushRoyal = flushRoyal(fiveCards);
test('case, when flushRoyal should return false', () => {
    expect(isFlushRoyal).toBeFalsy();
})