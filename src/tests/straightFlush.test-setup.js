function straightFlushAssertDataSetup(doesStraightFlushNeeded) {
    const sevenCardsWithoutStraightFlush = [ { suit: 'Hearts', rank: 10 },
    { suit: 'Hearts', rank: 12 },
    { suit: 'Clubs', rank: 11 },
    { suit: 'Hearts', rank: 14 },
    { suit: 'Hearts', rank: 13 },
    { suit: 'Clubs', rank: 14 },
    { suit: 'Diamonds', rank: 13 }];

    const sevenCardsWithStraightFlush =  [ { suit: 'Hearts', rank: 10 },
    { suit: 'Hearts', rank: 12 },
    { suit: 'Hearts', rank: 11 },
    { suit: 'Hearts', rank: 14 },
    { suit: 'Hearts', rank: 13 },
    { suit: 'Clubs', rank: 14 },
    { suit: 'Diamonds', rank: 13 }];

    return doesStraightFlushNeeded ? sevenCardsWithStraightFlush : sevenCardsWithoutStraightFlush;
}

module.exports = straightFlushAssertDataSetup;
