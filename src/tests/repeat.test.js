describe ('Repeat is equal to 0', () => {
    let sevenCards =   [ { suit: 'Hearts', rank: 10 },
                    { suit: 'Hearts', rank: 12 },
                    { suit: 'Hearts', rank: 11 },
                    { suit: 'Hearts', rank: 14 },
                    { suit: 'Hearts', rank: 13 },
                    { suit: 'Clubs', rank: 8 },
                    { suit: 'Diamonds', rank: 6 }];
const { repeat } = require('../combinations');
let isRepeat = repeat(sevenCards);
test('case, when repeat should have length is equal 0', () => {
    expect(isRepeat).toHaveLength(0);
})
});
describe ('Repeat is equal to 2', () => {
let sevenCards =   [ { suit: 'Hearts', rank: 10 },
                    { suit: 'Hearts', rank: 12 },
                    { suit: 'Hearts', rank: 11 },
                    { suit: 'Hearts', rank: 14 },
                    { suit: 'Hearts', rank: 13 },
                    { suit: 'Clubs', rank: 12 },
                    { suit: 'Diamonds', rank: 6 }];
const { repeat } = require('../combinations');
let isRepeat = repeat(sevenCards);
test('case, when repeat should have length is equal 2, that is mean it is a Pair', () => {
    expect(isRepeat).toHaveLength(2);
})
});
describe ('Repeat is equal to 5', () => {
let sevenCards =   [ { suit: 'Clubs', rank: 5 },
                    { suit: 'Hearts', rank: 6 },
                    { suit: 'Hearts', rank: 5 },
                    { suit: 'Spades', rank: 6 },
                    { suit: 'Hearts', rank: 8 },
                    { suit: 'Diamonds', rank: 5 },
                    { suit: 'Hearts', rank: 9 }];
const { repeat } = require('../combinations');
let isRepeat = repeat(sevenCards);
test('case, when repeat should have length is equal 5, that is mean Full House', () => {
    expect(isRepeat).toHaveLength(5);
})
});
describe ('Repeat is equal to 6 or to 4', () => {
describe('first case, when we receive Two Pairs', () => {
    let sevenCards =   [ { suit: 'Clubs', rank: 5 },
                        { suit: 'Hearts', rank: 6 },
                        { suit: 'Hearts', rank: 5 },
                        { suit: 'Spades', rank: 6 },
                        { suit: 'Hearts', rank: 8 },
                        { suit: 'Diamonds', rank: 8 },
                        { suit: 'Hearts', rank: 9 }];
    const { repeat } = require('../combinations');
    let isRepeat = repeat(sevenCards);
    test('case, when repeat should have length is equal 4, that is mean two pairs ', () => {
        expect(isRepeat).toHaveLength(6);
    })
    });
    
describe('first case, when we receive Two Pairs', () => {
    let sevenCards =   [ { suit: 'Clubs', rank: 5 },
                        { suit: 'Hearts', rank: 6 },
                        { suit: 'Hearts', rank: 5 },
                        { suit: 'Spades', rank: 6 },
                        { suit: 'Hearts', rank: 7 },
                        { suit: 'Diamonds', rank: 8 },
                        { suit: 'Hearts', rank: 9 }];
    const { repeat } = require('../combinations');
    let isRepeat = repeat(sevenCards);
    test('case, when repeat should have length is equal 4, that is mean two pairs ', () => {
        expect(isRepeat).toHaveLength(4);
    })
    })
});