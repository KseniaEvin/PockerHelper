const straightFlush = require('./straightFlush');
const flushRoyal = require('./flushRoyal');
const { flush, straight, repeat } = require('./checkCombinations');
function checks(fiveCards) {
    const isFlushRoyal = flushRoyal(fiveCards);
    const isStraightFlush = straightFlush(fiveCards);
    console.log(isStraightFlush);
    let isFlush = flush(fiveCards);
    console.log(isFlush);
    let isStraight = straight(fiveCards);
    console.log(isStraight);
    if (repeats.length === 2) {
        console.log("Пара");
    }
    else if (repeats.length === 3) {
        console.log("Тройка");
    }
    else if ((repeats.every((item, i, list) => item == list[0])) && repeats.length === 4) {
        console.log("Каре");
    }
    else if (repeats.length === 4) {
        console.log("Две пары");
    }
    else if (repeats.length === 5) {
        console.log("Фулл Хаус");
    } 
    else if (isFlushRoyal) {
        console.log("Флеш Рояль");
    }
    else if (isStraightFlush) {
        console.log("Стрит Флэш");
    }
    else if (isStraight && !isFlush) {
        console.log("Стрит");
    }
    else if (isFlush && !isStraight) {
        console.log("Флэш");
    } 
} 

  module.exports = checks;