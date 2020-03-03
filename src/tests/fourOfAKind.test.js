const { fourOfAKind } = require('../combinations');
const fourOfAKindAssertDataSetup = require('./fourOfAKind.test-setup');

describe('Four of A Kind combination works correctly', () => {
    let combination;

    describe ('1) when combination is not Four Of A Kind', () => {
        combination = fourOfAKindAssertDataSetup(false);
        let isFourOfAKind = fourOfAKind(combination);
        
        test('case, when isFourOfAKind should return false', () => {
            expect(isFourOfAKind).toBeFalsy();
        })
    });
        
    describe ('2) when combination is Four Of AKind', () => {
        combination = fourOfAKindAssertDataSetup(true);
        let isFourOfAKind = fourOfAKind(combination);

        test('case, when isFourOfAKind should return true', () => {
            expect(isFourOfAKind).toBeTruthy();
        })
    });
})
