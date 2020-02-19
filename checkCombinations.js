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

let repeat = function (fiveCards) {
  let ranks = getRanks(fiveCards);
  repeats = ranks.filter((elem, index) => {
    return index !== ranks.indexOf(elem) || index !== ranks.lastIndexOf(elem);
  });
};

module.exports = {
  flush,
  straight,
  repeat
}
