let fiveCards =   [ { suit: 'Clubs', rank: 7 },
                    { suit: 'Hearts', rank: 6 },
                    { suit: 'Hearts', rank: 5 },
                    { suit: 'Spades', rank: 6 },
                    { suit: 'Diamonds', rank: 5 }];
const { repeat } = require('../combinations');
let isRepeat = repeat(fiveCards);
test('case, when repeat should have length is equal 4, but every item isn`t the same, that is mean it is not Square', () => {
    let result =  isRepeat.every((item, i, list) => item == list[0]);
    expect(result).toBeFalsy();
    expect(isRepeat).toHaveLength(4);
});