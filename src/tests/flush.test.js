const { flush } = require('../combinations');
const flashAssertDataSetup = require('./flash.test-setup');

describe('Flash combination works correctly: ', () => {
    let combination;

    describe('1) when combination is not Flash:', () => {
        combination = flashAssertDataSetup(false);
        const isFlush = flush(combination);

        test('case, when flush should return false', () => {
            expect(isFlush).toBeFalsy();
        });
    });

    describe('2) when combination is Flash:', () => {
        combination = flashAssertDataSetup(true);
        const isFlush = flush(combination);

        test('case, when flush should return true', () => {
            expect(isFlush).toBeTruthy();
        });
    });
});
