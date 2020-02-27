describe ('Falsy case of FourOfAKind', () => {
let sevenCards =   [ { suit: 'Clubs', rank: 5 },
                    { suit: 'Hearts', rank: 6 },
                    { suit: 'Hearts', rank: 5 },
                    { suit: 'Spades', rank: 6 },
                    { suit: 'Hearts', rank: 8 },
                    { suit: 'Diamonds', rank: 5 },
                    { suit: 'Hearts', rank: 9 }];
const { fourOfAKind } = require('../combinations');
let isFourOfAKind = fourOfAKind(sevenCards);
test('case, when isFourOfAKind should return false', () => {
    expect(isFourOfAKind).toBeFalsy();
})
});

describe ('Truthy case of FourOfAKind', () => {
    let sevenCards =   [ { suit: 'Clubs', rank: 5 },
                        { suit: 'Hearts', rank: 6 },
                        { suit: 'Hearts', rank: 5 },
                        { suit: 'Spades', rank: 5 },
                        { suit: 'Hearts', rank: 8 },
                        { suit: 'Diamonds', rank: 5 },
                        { suit: 'Hearts', rank: 9 }];
    const { fourOfAKind } = require('../combinations');
    let isFourOfAKind = fourOfAKind(sevenCards);
    test('case, when isFourOfAKind should return true', () => {
        expect(isFourOfAKind).toBeTruthy();
    })
    });