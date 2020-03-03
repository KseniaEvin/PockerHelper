function fourOfAKindAssertDataSetup(doesFourOfAKindNeeded) {
    const sevenCardsWithoutFourOfAKind = [ { suit: 'Clubs', rank: 5 },
    { suit: 'Hearts', rank: 6 },
    { suit: 'Hearts', rank: 5 },
    { suit: 'Spades', rank: 6 },
    { suit: 'Hearts', rank: 8 },
    { suit: 'Diamonds', rank: 5 },
    { suit: 'Hearts', rank: 9 }];

    const sevenCardsWithFourOfAKind =  [ { suit: 'Clubs', rank: 5 },
    { suit: 'Hearts', rank: 6 },
    { suit: 'Hearts', rank: 5 },
    { suit: 'Spades', rank: 5 },
    { suit: 'Hearts', rank: 8 },
    { suit: 'Diamonds', rank: 5 },
    { suit: 'Hearts', rank: 9 }];

    return doesFourOfAKindNeeded ? sevenCardsWithFourOfAKind : sevenCardsWithoutFourOfAKind;
}

module.exports = fourOfAKindAssertDataSetup;
