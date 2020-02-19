const straightFlush = require('./straightFlush');
const flushRoyal = require('./flushRoyal');
const { flush, straight, repeat } = require('./checkCombinations');
function checks(fiveCards) {
    let isFlushRoyal = flushRoyal(fiveCards);
    if (isFlushRoyal) {
        console.log("Флеш Рояль");
        return true;
    }
    let isStraightFlush = straightFlush(fiveCards);
    if (isStraightFlush) {
        console.log("Стрит Флэш");
        return true;
    }
    if ((repeats.every((item, i, list) => item == list[0])) && repeats.length === 4) {
        console.log("Каре");
        return true;
    }
    if (repeats.length === 5) {
        console.log("Фулл Хаус");
        return true;
    } 
    let isFlush = flush(fiveCards);
    if (isFlush && !isStraight) {
        console.log("Флэш");
        return true;
    } 
    let isStraight = straight(fiveCards);
    if (isStraight && !isFlush) {
        console.log("Стрит");
        return true;
    }
    if (repeats.length === 3) {
        console.log("Тройка");
        return true;
    }
    if (repeats.length === 4) {
        console.log("Две пары");
        return true;
    }
    
    if (repeats.length === 2) {
        console.log("Пара");
        return true;
    }
} 

  module.exports = checks;