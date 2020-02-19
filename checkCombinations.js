const { getSuits, getRanks } = require('./utilities');
let flush = function (fiveCards) {
  let suits = getSuits(fiveCards);
  return (suits.every((item, i, list) => item === list[0]));
};

let straight = function (fiveCards) {
  let a = [];
  let ranks = getRanks(fiveCards);
  for (let i = 0; i < ranks.length - 1; i++) {
    a.push((ranks[i + 1] - ranks[i]));
  }
  if (a[0] === 1) {
    return (a.every((item, i, list) => item === list[0]));
  }
  return false;
};

// let flushRoyal = function (straightFlush, flush, straight) {
//   let ranks = getRanks(fiveCards);

//   if (straightFlush(flush, straight) && ranks[0] === 10) {
//     console.log("Флеш Рояль");
//   }
//   else if (straightFlush(flush, straight) && ranks[0] !== 10) {
//     console.log("Стрит Флэш");
//   }
//   else if (straight(fiveCards) && !flush(fiveCards)) {
//     console.log("Стрит");
//   }
//   else if (flush(fiveCards) && !straight(fiveCards)) {
//     console.log("Флэш");
//   }

// };

let repeat = function (fiveCards) {
  let ranks = getRanks(fiveCards);
  repeats = ranks.filter((elem, index) => {
    return index !== ranks.indexOf(elem) || index !== ranks.lastIndexOf(elem);
  });
};
// function checks(repeat) {
//   if (repeats.length === 2) {
//     console.log("Пара");
//   }
//   else if (repeats.length === 3) {
//     console.log("Тройка");
//   }
//   else if ((repeats.every((item, i, list) => item == list[0])) && repeats.length === 4) {
//     console.log("Каре");
//   }
//   else if (repeats.length === 4) {
//     console.log("Две пары");
//   }
//   else if (repeats.length === 5) {
//     console.log("Фулл Хаус");
//   }
// }

module.exports = {
  flush,
  straight,
  repeat
}


// flush(fiveCards);
// straight(fiveCards);
// // straightFlush(flush, straight);
// repeat(fiveCards);
// // flushRoyal(straightFlush, flush, straight);
// checks(flush, straight, repeat);