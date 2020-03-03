function flushRoyalAssertDataSetup(doesFlashRoyalNeeded) {
    const sevenCardsWithoutFlushRoyal = [ { suit: 'Hearts', rank: 10 },
    { suit: 'Hearts', rank: 12 },
    { suit: 'Clubs', rank: 11 },
    { suit: 'Hearts', rank: 14 },
    { suit: 'Hearts', rank: 13 },
    { suit: 'Clubs', rank: 14 },
    { suit: 'Diamonds', rank: 13 }];

    const sevenCardsWithFlushRoyal = [ { suit: 'Hearts', rank: 10 },
    { suit: 'Hearts', rank: 12 },
    { suit: 'Hearts', rank: 11 },
    { suit: 'Hearts', rank: 14 },
    { suit: 'Hearts', rank: 13 },
    { suit: 'Clubs', rank: 14 },
    { suit: 'Diamonds', rank: 13 }];

    return doesFlashRoyalNeeded ? sevenCardsWithFlushRoyal : sevenCardsWithoutFlushRoyal;
}

module.exports = flushRoyalAssertDataSetup;
