const { straight } = require('../combinations');
const straightAssertDataSetup = require('./straight.test-setup');

describe('Straight combination works correctly: ', () => {
    let combination;

    describe ('1) when combination is not Straight: ', () => {
        combination = straightAssertDataSetup(false);
        const isStraight = straight(combination);
        
        test('case, when straight should return false', () => {
            expect(isStraight).toBeFalsy();
        });
    });
        
    describe ('2) when combination is Straight: ', () => {
        combination = straightAssertDataSetup(true);
        const isStraight = straight(combination);

        test('case, when straight should return true', () => {
            expect(isStraight).toBeTruthy();
        })
    });
});