const { threeOfAKind } = require('../combinations');
const threeOfKindAssertDataSetup = require('./threeOfAKind.test-setup');

describe ('Three Of A Kind combination works correctly: ', () => {
let combination;

describe ('1) when combination is not Three of A Kind', () => {
    combination = threeOfKindAssertDataSetup(false);
    let isThreeOfAKind = threeOfAKind(combination);
    
    test('case, when isThreeOfAKind should return false', () => {
        expect(isThreeOfAKind).toBeFalsy();
    })
    });
    
describe ('1) when combination is Three of A Kind' , () => {
        combination = threeOfKindAssertDataSetup(true);
        let isThreeOfAKind = threeOfAKind(combination);

        test('case, when isThreeOfAKind should return true', () => {
        expect(isThreeOfAKind).toBeTruthy();
        })
    });
})
