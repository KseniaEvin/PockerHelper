let fiveCards =   [ { suit: 'Hearts', rank: 10 },
                    { suit: 'Hearts', rank: 12 },
                    { suit: 'Hearts', rank: 11 },
                    { suit: 'Hearts', rank: 14 },
                    { suit: 'Hearts', rank: 13 }];
const flushRoyal = require('./flushRoyal');
let isFlushRoyal = flushRoyal(fiveCards);
test('case, when flushRoyal should return true', () => {
    expect(isFlushRoyal).toBeTruthy();
});
