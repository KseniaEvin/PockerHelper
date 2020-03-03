const { flush } = require('../combinations');
const flushAssertDataSetup = require('./flush.test-setup');

describe('Flush combination works correctly: ', () => {
    let combination;

    describe('1) when combination is not Flush:', () => {
        combination = flushAssertDataSetup(false);
        const isFlush = flush(combination);

        test('case, when flush should return false', () => {
            expect(isFlush).toBeFalsy();
        });
    });

    describe('2) when combination is Flush:', () => {
        combination = flushAssertDataSetup(true);
        const isFlush = flush(combination);

        test('case, when flush should return true', () => {
            expect(isFlush).toBeTruthy();
        });
    });
});
