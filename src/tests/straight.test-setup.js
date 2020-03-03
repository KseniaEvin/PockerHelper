function straightAssertDataSetup(doesStraightNeeded) {
    const sevenCardsWithoutStraight = [{ suit: 'Hearts', rank: 10 },
    { suit: 'Hearts', rank: 12 },
    { suit: 'Clubs', rank: 8 },
    { suit: 'Hearts', rank: 14 },
    { suit: 'Hearts', rank: 13 },
    { suit: 'Hearts', rank: 14 },
    { suit: 'Diamonds', rank: 13 }];

    const sevenCardsWithStraight = [{ suit: 'Hearts', rank: 10 },
    { suit: 'Hearts', rank: 12 },
    { suit: 'Clubs', rank: 11 },
    { suit: 'Hearts', rank: 14 },
    { suit: 'Hearts', rank: 13 },
    { suit: 'Hearts', rank: 14 },
    { suit: 'Diamonds', rank: 13 }];

    return doesStraightNeeded ? sevenCardsWithStraight : sevenCardsWithoutStraight;
}

module.exports = straightAssertDataSetup;