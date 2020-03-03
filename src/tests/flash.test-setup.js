
function flashAssertDataSetup(doesFlashNeeded) {
    const sevenCardsWithoutFlash = [{ suit: 'Hearts', rank: 10 },
    { suit: 'Hearts', rank: 12 },
    { suit: 'Clubs', rank: 11 },
    { suit: 'Hearts', rank: 14 },
    { suit: 'Hearts', rank: 13 },
    { suit: 'Clubs', rank: 14 },
    { suit: 'Diamonds', rank: 13 }];

    const sevenCardsWithFlash = [{ suit: 'Hearts', rank: 10 },
    { suit: 'Hearts', rank: 12 },
    { suit: 'Clubs', rank: 11 },
    { suit: 'Hearts', rank: 14 },
    { suit: 'Hearts', rank: 13 },
    { suit: 'Hearts', rank: 14 },
    { suit: 'Diamonds', rank: 13 }];

    return doesFlashNeeded ? sevenCardsWithFlash : sevenCardsWithoutFlash;
}

module.exports = flashAssertDataSetup;
