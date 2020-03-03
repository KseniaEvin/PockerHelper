const flushRoyal = require('../flushRoyal');
const flushRoyalAssertDataSetup = require('./flushRoyal.test-setup');

describe('Flush Royal combination works correctly: ', () => {
    let combination;

    describe ('1) when combination is not Flush Royal', () => {
        combination = flushRoyalAssertDataSetup(false);
        let isFlushRoyal = flushRoyal(combination);

        test('case, when flushRoyal should return false', () => {
            expect(isFlushRoyal).toBeFalsy();
        })
    });
        
    describe ('2) when combination is Flush Royal', () => {
        combination = flushRoyalAssertDataSetup(true);  
        let isFlushRoyal = flushRoyal(combination);

        test('case, when flushRoyal should return true', () => {
            expect(isFlushRoyal).toBeTruthy();
        })
    });
})
