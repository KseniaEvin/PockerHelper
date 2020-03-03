function threeOfAKindAssertDataSetup(doesThreeOfAKindNeeded) {
    const sevenCardsWithoutThreeOfAKind = [ { suit: 'Clubs', rank: 5 },
    { suit: 'Hearts', rank: 6 },
    { suit: 'Hearts', rank: 7 },
    { suit: 'Spades', rank: 5 },
    { suit: 'Hearts', rank: 8 },
    { suit: 'Diamonds', rank: 10 },
    { suit: 'Hearts', rank: 9 }];

    const sevenCardsWithThreeOfAKind =  [ { suit: 'Clubs', rank: 5 },
    { suit: 'Hearts', rank: 6 },
    { suit: 'Hearts', rank: 5 },
    { suit: 'Spades', rank: 5 },
    { suit: 'Hearts', rank: 8 },
    { suit: 'Spades', rank: 3 },
    { suit: 'Hearts', rank: 9 }];

    return doesThreeOfAKindNeeded ? sevenCardsWithThreeOfAKind : sevenCardsWithoutThreeOfAKind;
}

module.exports = threeOfAKindAssertDataSetup;
