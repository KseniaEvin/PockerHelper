const straightFlush = require('./straightFlush');
const flushRoyal = require('./flushRoyal');
const { flush, straight, repeat } = require('./combinations');
function checks(fiveCards) {
    let isFlushRoyal = flushRoyal(fiveCards);
    if (isFlushRoyal) {
        return "Флеш Рояль";
    }
    let isStraightFlush = straightFlush(fiveCards);
    if (isStraightFlush) {
        return "Стрит Флэш";
    }
    if ((repeats.every((item, i, list) => item == list[0])) && repeats.length === 4) {
        return "Каре";
    }
    if (repeats.length === 5) {
        return "Фулл Хаус";
    } 
    let isFlush = flush(fiveCards);
    if (isFlush && !isStraight) {
        return "Флэш";
    } 
    let isStraight = straight(fiveCards);
    if (isStraight && !isFlush) {
        return "Стрит";
    }
    if (repeats.length === 3) {
        return "Тройка";
    }
    if (repeats.length === 4) {
        return "Две пары";
    }
    if (repeats.length === 2) {
        return "Пара";
    }
} 

  module.exports = checks;