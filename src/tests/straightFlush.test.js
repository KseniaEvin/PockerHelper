const straightFlush = require('../straightFlush');
const straightFlushAssertDataSetup = require('./straightFlush.test-setup');

describe('Straight Flush combination works correctly: ', () => {
    let combination;

    describe ('1) when combinations is not Straight Flush', () => {
        combination = straightFlushAssertDataSetup(false);
        let isStraightFlush = straightFlush(combination);

        test('case, when straightFlush should return false', () => {
            expect(isStraightFlush).toBeFalsy();
        })
    });
    describe ('2) when combinations is Straight Flush', () => {
        combination = straightFlushAssertDataSetup(true);
        let isStraightFlush = straightFlush(combination);
        
        test('case, when straightFlush should return true', () => {
            expect(isStraightFlush).toBeTruthy();
        })
    });
})
