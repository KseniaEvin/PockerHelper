let fiveCards =   [ { suit: 'Clubs', rank: 5 },
                    { suit: 'Hearts', rank: 6 },
                    { suit: 'Hearts', rank: 5 },
                    { suit: 'Spades', rank: 5 },
                    { suit: 'Diamonds', rank: 5 }];
const { repeat } = require('../combinations');
let isRepeat = repeat(fiveCards);
test('case, when repeat should have length is equal 4 and every item is the same, that is mean Square', () => {
    let result =  isRepeat.every((item, i, list) => item == list[0]);
    expect(result).toBeTruthy();
    expect(isRepeat).toHaveLength(4);
});